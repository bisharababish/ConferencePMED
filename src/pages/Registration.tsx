import { useState } from 'react';
import { Mail, User, Phone, Upload, Loader2 } from 'lucide-react';
import toast from 'react-hot-toast';
import { supabase, RegistrationData } from '../lib/supabase';

// Get Supabase URL for debugging
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || 'https://nzjjemfrfgpnmjpxrmsx.supabase.co';
import { uploadFile } from '../lib/storage';
import { generateId } from '../lib/utils';
import { validateRegistrationData, sanitizeInput, checkRateLimit } from '../lib/security';

const Registration = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    gender: '',
    email: '',
    phone: '',
    city: '',
    idUpload: null as File | null,
    jobTitle: '',
    specialty: '',
    institution: '',
    studentCardUpload: null as File | null,
    registrationType: '',
    abstractSubmitted: '',
  });
  const [loading, setLoading] = useState(false);
  const [genderError, setGenderError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Rate limiting check (client-side)
    const userIdentifier = formData.email || 'anonymous';
    if (!checkRateLimit(userIdentifier, 3, 60000)) {
      toast.error('Too many requests. Please wait a minute before submitting again.');
      return;
    }

    // Validate gender before submission - only accept exactly "male", "Male", "female", or "Female"
    const trimmedGender = formData.gender.trim();
    const validGenders = ['male', 'Male', 'female', 'Female'];
    if (!validGenders.includes(trimmedGender)) {
      setGenderError('Please enter exactly "Male" or "Female" (or "male" or "female")');
      toast.error('Please enter a valid gender: Male, male, Female, or female');
      return;
    }

    // Validate all registration data
    const validation = validateRegistrationData({
      firstName: formData.firstName,
      lastName: formData.lastName,
      email: formData.email,
      phone: formData.phone,
      city: formData.city,
      jobTitle: formData.jobTitle,
      specialty: formData.specialty,
      institution: formData.institution,
      registrationType: formData.registrationType,
      abstractSubmitted: formData.abstractSubmitted,
    });

    if (!validation.isValid) {
      toast.error(validation.errors[0] || 'Please check your input and try again.');
      return;
    }

    setLoading(true);

    try {
      // Upload files first
      let idUploadUrl: string | null = null;
      let studentCardUploadUrl: string | null = null;

      if (formData.idUpload) {
        toast.loading('Uploading ID document...', { id: 'id-upload' });
        idUploadUrl = await uploadFile(
          formData.idUpload,
          'documents',
          'registrations',
          `id_${formData.firstName}_${formData.lastName}`
        );
        if (!idUploadUrl) {
          throw new Error('Failed to upload ID document');
        }
        toast.dismiss('id-upload');
      }

      if (formData.studentCardUpload) {
        toast.loading('Uploading student card...', { id: 'student-upload' });
        studentCardUploadUrl = await uploadFile(
          formData.studentCardUpload,
          'documents',
          'registrations',
          `student_card_${formData.firstName}_${formData.lastName}`
        );
        toast.dismiss('student-upload');
      }

      // Prepare registration data with sanitization
      // Normalize gender to proper case
      const normalizedGender = formData.gender.trim().toLowerCase();
      const genderValue = normalizedGender === 'male' ? 'Male' : 'Female';

      const registrationData: RegistrationData = {
        id: generateId(),
        first_name: sanitizeInput(formData.firstName, 100),
        last_name: sanitizeInput(formData.lastName, 100),
        gender: genderValue,
        email: formData.email.trim().toLowerCase().substring(0, 255),
        phone: formData.phone ? sanitizeInput(formData.phone, 20) : undefined,
        city: formData.city ? sanitizeInput(formData.city, 100) : undefined,
        job_title: formData.jobTitle ? sanitizeInput(formData.jobTitle, 100) : undefined,
        specialty: formData.specialty ? sanitizeInput(formData.specialty, 100) : undefined,
        institution: formData.institution ? sanitizeInput(formData.institution, 200) : undefined,
        registration_type: formData.registrationType,
        abstract_submitted: formData.abstractSubmitted,
        id_upload_url: idUploadUrl || undefined,
        student_card_upload_url: studentCardUploadUrl || undefined,
      };

      // Insert into database
      toast.loading('Submitting registration...', { id: 'register' });
      
      // Log for debugging (only in development)
      if (import.meta.env.DEV) {
        console.log('Submitting registration data:', registrationData);
        console.log('Supabase URL:', supabaseUrl);
        console.log('Environment check:', {
          hasUrl: !!import.meta.env.VITE_SUPABASE_URL,
          hasKey: !!import.meta.env.VITE_SUPABASE_ANON_KEY
        });
      }
      
      try {
        const { data, error: dbError } = await supabase
          .from('registrations')
          .insert([registrationData])
          .select();

        if (dbError) {
          console.error('❌ Database error:', dbError);
          console.error('Error details:', {
            message: dbError.message,
            details: dbError.details,
            hint: dbError.hint,
            code: dbError.code
          });
          
          // Provide more user-friendly error messages
          let errorMessage = 'Failed to submit registration. ';
          if (dbError.code === '23505') {
            errorMessage += 'This email may already be registered.';
          } else if (dbError.code === 'PGRST116') {
            errorMessage += 'Database connection issue. Please try again.';
          } else if (dbError.code === '42501') {
            errorMessage += 'Permission denied. Please contact support.';
          } else if (dbError.code === '42P01') {
            errorMessage += 'Database table not found. Please contact support.';
          } else if (dbError.message) {
            errorMessage += dbError.message;
          } else {
            errorMessage += 'Please check your connection and try again.';
          }
          
          throw new Error(errorMessage);
        }

        if (import.meta.env.DEV) {
          console.log('✅ Registration successful:', data);
        }
      } catch (networkError: any) {
        console.error('❌ Network/Database error:', networkError);
        
        // Check if it's a network error
        if (networkError.name === 'TypeError' && networkError.message.includes('fetch')) {
          throw new Error('Network error. Please check your internet connection and try again.');
        }
        
        if (networkError.message && !networkError.message.includes('Failed to submit')) {
          throw new Error('Network error. Please check your internet connection and try again.');
        }
        throw networkError;
      }

      toast.dismiss('register');
      toast.success('Registration Completed! Your registration has been submitted successfully. We will contact you shortly with event details.');

      // Reset form
      setFormData({
        firstName: '',
        lastName: '',
        gender: '',
        email: '',
        phone: '',
        city: '',
        idUpload: null,
        jobTitle: '',
        specialty: '',
        institution: '',
        studentCardUpload: null,
        registrationType: '',
        abstractSubmitted: '',
      });
    } catch (err: any) {
      console.error('Registration error:', err);
      toast.dismiss('id-upload');
      toast.dismiss('student-upload');
      toast.dismiss('register');
      toast.error(err.message || 'Failed to submit registration. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;

    // Validate gender field - only accept exactly "male", "Male", "female", or "Female"
    if (name === 'gender') {
      const trimmedValue = value.trim();
      const validValues = ['male', 'Male', 'female', 'Female'];
      if (trimmedValue && !validValues.includes(trimmedValue)) {
        setGenderError('Please enter exactly "Male" or "Female" (or "male" or "female")');
      } else {
        setGenderError('');
      }
    }

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name } = e.target;
    const file = e.target.files?.[0] || null;
    setFormData({
      ...formData,
      [name]: file,
    });
  };


  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Header Section */}
      <div className="relative bg-gradient-to-r py-16 px-4 overflow-hidden" style={{ background: 'linear-gradient(to right, #1e3a8a, #1e40af)' }}>
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden opacity-10">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute rounded-full animate-float"
              style={{
                width: `${Math.random() * 12 + 4}px`,
                height: `${Math.random() * 12 + 4}px`,
                backgroundColor: 'white',
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${Math.random() * 15 + 10}s`,
              }}
            />
          ))}
        </div>

        <div className="max-w-7xl mx-auto text-center relative z-10">
          <div className="flex items-center justify-center gap-4 mb-6">
            <svg width="48" height="48" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg" className="drop-shadow-lg">
              <rect x="2" y="2" width="14" height="14" fill="white" rx="1.5" />
              <rect x="26" y="2" width="14" height="14" fill="white" rx="1.5" />
              <rect x="2" y="26" width="14" height="14" fill="white" rx="1.5" />
              <rect x="26" y="26" width="14" height="14" fill="white" rx="1.5" />
              <line x1="16" y1="9" x2="26" y2="9" stroke="white" strokeWidth="2.5" strokeLinecap="round" />
              <line x1="16" y1="33" x2="26" y2="33" stroke="white" strokeWidth="2.5" strokeLinecap="round" />
              <line x1="21" y1="2" x2="21" y2="16" stroke="white" strokeWidth="2.5" strokeLinecap="round" />
              <line x1="21" y1="26" x2="21" y2="40" stroke="white" strokeWidth="2.5" strokeLinecap="round" />
            </svg>
            <div className="flex flex-col">
              <span className="text-3xl md:text-4xl font-bold text-white leading-tight drop-shadow-md">ANNUAL JERUSALEM</span>
              <span className="text-base md:text-lg text-white leading-tight drop-shadow-md">MEDICAL & RESEARCH CONFERENCE</span>
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 drop-shadow-md">Registration</h1>
          <div className="text-white/90 text-lg md:text-xl max-w-3xl mx-auto space-y-2">
            <p>Registration and abstract submission will be available between:</p>
            <p className="font-semibold">Opens: December 25 | Closes: January 14</p>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-20">

        <div className="bg-white p-10 rounded-2xl shadow-xl border border-gray-200">
          <h2 className="text-3xl font-bold mb-6 text-gray-900 text-center">
            Registration Form
          </h2>
          <p className="text-gray-600 mb-8 text-center">
            Please fill out all required fields to complete your registration.
          </p>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Personal Information */}
            <div className="border-b border-gray-200 pb-6">
              <h3 className="text-xl font-bold mb-4" style={{ color: '#1e3a8a' }}>Personal Information</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-bold mb-2 text-gray-700">
                    <div className="flex items-center mb-2">
                      <User className="mr-2" size={20} style={{ color: '#1e3a8a' }} />
                      First Name <span className="text-red-500">*</span>
                    </div>
                  </label>
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-blue-600 focus:outline-none transition-colors text-black"
                    placeholder="Enter your first name"
                  />
                </div>

                <div>
                  <label className="block text-sm font-bold mb-2 text-gray-700">
                    <div className="flex items-center mb-2">
                      <User className="mr-2" size={20} style={{ color: '#1e3a8a' }} />
                      Last Name <span className="text-red-500">*</span>
                    </div>
                  </label>
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-blue-600 focus:outline-none transition-colors text-black"
                    placeholder="Enter your last name"
                  />
                </div>

                <div>
                  <label className="block text-sm font-bold mb-2 text-gray-700">
                    Gender <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="gender"
                    value={formData.gender}
                    onChange={handleChange}
                    required
                    className={`w-full px-4 py-3 border-2 rounded-lg focus:outline-none transition-colors text-black ${genderError ? 'border-red-500' : 'border-gray-300 focus:border-blue-600'
                      }`}
                    placeholder="Enter Male or Female"
                  />
                  {genderError && (
                    <p className="text-red-500 text-sm mt-1">{genderError}</p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-bold mb-2 text-gray-700">
                    <div className="flex items-center mb-2">
                      <Mail className="mr-2" size={20} style={{ color: '#1e3a8a' }} />
                      Email Address <span className="text-red-500">*</span>
                    </div>
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-blue-600 focus:outline-none transition-colors text-black"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-bold mb-2 text-gray-700">
                    <div className="flex items-center mb-2">
                      <Phone className="mr-2" size={20} style={{ color: '#1e3a8a' }} />
                      Phone Number
                    </div>
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-blue-600 focus:outline-none transition-colors text-black"
                    placeholder="+970 5XX XXX XXX"
                  />
                </div>

                <div>
                  <label className="block text-sm font-bold mb-2 text-gray-700">
                    City
                  </label>
                  <input
                    type="text"
                    name="city"
                    value={formData.city}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-blue-600 focus:outline-none transition-colors text-black"
                    placeholder="Enter your city"
                  />
                </div>
              </div>
            </div>

            {/* Professional Information */}
            <div className="border-b border-gray-200 pb-6">
              <h3 className="text-xl font-bold mb-4" style={{ color: '#1e3a8a' }}>Professional Information</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-bold mb-2 text-gray-700">
                    Job Title / Academic Level
                  </label>
                  <input
                    type="text"
                    name="jobTitle"
                    value={formData.jobTitle}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-blue-600 focus:outline-none transition-colors text-black"
                    placeholder="e.g., Medical Student, Resident, Specialist"
                  />
                </div>

                <div>
                  <label className="block text-sm font-bold mb-2 text-gray-700">
                    Specialty
                  </label>
                  <input
                    type="text"
                    name="specialty"
                    value={formData.specialty}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-blue-600 focus:outline-none transition-colors text-black"
                    placeholder="Enter your specialty"
                  />
                </div>

                <div className="md:col-span-2">
                  <label className="block text-sm font-bold mb-2 text-gray-700">
                    Institution
                  </label>
                  <input
                    type="text"
                    name="institution"
                    value={formData.institution}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-blue-600 focus:outline-none transition-colors text-black"
                    placeholder="Enter your institution"
                  />
                </div>
              </div>
            </div>

            {/* Document Uploads */}
            <div className="border-b border-gray-200 pb-6">
              <h3 className="text-xl font-bold mb-4" style={{ color: '#1e3a8a' }}>Document Uploads</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-bold mb-2 text-gray-700">
                    <div className="flex items-center mb-2">
                      <Upload className="mr-2" size={20} style={{ color: '#1e3a8a' }} />
                      ID or Passport Upload <span className="text-red-500">*</span>
                    </div>
                  </label>
                  <input
                    type="file"
                    name="idUpload"
                    onChange={handleFileChange}
                    accept=".jpg,.jpeg,.png,.gif"
                    required
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-blue-600 focus:outline-none transition-colors"
                  />
                  <p className="text-xs text-gray-500 mt-1">Accepted formats: JPG, JPEG, PNG, GIF</p>
                </div>

                <div>
                  <label className="block text-sm font-bold mb-2 text-gray-700">
                    <div className="flex items-center mb-2">
                      <Upload className="mr-2" size={20} style={{ color: '#1e3a8a' }} />
                      Student Card Upload (if student)
                    </div>
                  </label>
                  <input
                    type="file"
                    name="studentCardUpload"
                    onChange={handleFileChange}
                    accept=".jpg,.jpeg,.png,.gif"
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-blue-600 focus:outline-none transition-colors"
                  />
                  <p className="text-xs text-gray-500 mt-1">Accepted formats: JPG, JPEG, PNG, GIF</p>
                </div>
              </div>
            </div>

            {/* Registration Type */}
            <div className="border-b border-gray-200 pb-6">
              <h3 className="text-xl font-bold mb-4" style={{ color: '#1e3a8a' }}>Registration Details</h3>
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-bold mb-2 text-gray-700">
                    Type of Registration <span className="text-red-500">*</span>
                  </label>
                  <select
                    name="registrationType"
                    value={formData.registrationType}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-blue-600 focus:outline-none transition-colors text-black"
                  >
                    <option value="">Select registration type</option>
                    <option value="General Delegate">General Delegate</option>
                    <option value="Research Presenter">Research Presenter</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-bold mb-2 text-gray-700">
                    Did you submit an abstract? <span className="text-red-500">*</span>
                  </label>
                  <div className="flex gap-6">
                    <label className="flex items-center">
                      <input
                        type="radio"
                        name="abstractSubmitted"
                        value="Yes"
                        checked={formData.abstractSubmitted === 'Yes'}
                        onChange={handleChange}
                        required
                        className="mr-2"
                      />
                      Yes
                    </label>
                    <label className="flex items-center">
                      <input
                        type="radio"
                        name="abstractSubmitted"
                        value="No"
                        checked={formData.abstractSubmitted === 'No'}
                        onChange={handleChange}
                        required
                        className="mr-2"
                      />
                      No
                    </label>
                    <label className="flex items-center">
                      <input
                        type="radio"
                        name="abstractSubmitted"
                        value="Other"
                        checked={formData.abstractSubmitted === 'Other'}
                        onChange={handleChange}
                        required
                        className="mr-2"
                      />
                      Other
                    </label>
                  </div>
                </div>
              </div>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full text-white font-bold py-4 px-8 rounded-lg text-lg transition-all duration-300 transform hover:scale-105 shadow-lg disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none flex items-center justify-center gap-2"
              style={{ backgroundColor: '#1e3a8a' }}
              onMouseEnter={(e) => !loading && (e.currentTarget.style.backgroundColor = '#1e40af')}
              onMouseLeave={(e) => !loading && (e.currentTarget.style.backgroundColor = '#1e3a8a')}
            >
              {loading ? (
                <>
                  <Loader2 className="animate-spin" size={20} />
                  Submitting...
                </>
              ) : (
                'Submit Registration'
              )}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Registration;

import { useState } from 'react';
import { Mail, User, Building, Phone, CheckCircle } from 'lucide-react';

const Registration = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    organization: '',
    phone: '',
    category: 'academic',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Create email content
    const emailSubject = `Conference 2025 Registration Request - ${formData.name}`;
    const emailBody = `A new registration request has been submitted:\n\n` +
      `Name: ${formData.name}\n` +
      `Email: ${formData.email}\n` +
      `Organization: ${formData.organization}\n` +
      `Phone: ${formData.phone}\n` +
      `Category: ${formData.category}\n\n` +
      `The attendee wants to join the event.`;
    
    // Create mailto link
    const mailtoLink = `mailto:conference@example.com?subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailBody)}`;
    
    // Open email client
    window.location.href = mailtoLink;
    
    // Also log to console for development
    console.log('Registration request:', formData);
    console.log('Email would be sent to: conference@example.com');
    
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        name: '',
        email: '',
        organization: '',
        phone: '',
        category: 'academic',
      });
    }, 5000);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Red Header */}
      <div className="bg-red-600 py-8 px-4" style={{ backgroundColor: '#DC2626' }}>
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex items-center justify-center gap-3">
            <svg width="42" height="42" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
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
              <span className="text-2xl font-bold text-white leading-tight">ANNUAL JERUSALEM</span>
              <span className="text-sm text-white leading-tight">MEDICAL & RESEARCH CONFERENCE</span>
            </div>
          </div>
        </div>
      </div>
      
      <div className="bg-white py-12 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">Registration</h1>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-16">
        {submitted && (
          <div className="bg-green-50 border-2 border-green-500 rounded-lg p-6 mb-8 flex items-center">
            <CheckCircle className="text-green-600 mr-4" size={32} />
            <div>
              <h3 className="text-xl font-bold text-green-800 mb-1">
                Registration Request Sent!
              </h3>
              <p className="text-green-700">
                Your registration request has been sent! An email has been opened with your details. We will contact you shortly.
              </p>
            </div>
          </div>
        )}

        <div className="bg-white p-10 rounded-lg shadow-lg mb-12">
          <h2 className="text-3xl font-bold mb-6 text-black">
            Registration Categories
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="border-2 border-gray-200 p-6 rounded-lg hover:border-red-600 transition-colors">
              <h3 className="text-xl font-bold mb-2 text-black">Academic</h3>
              <p className="text-3xl font-bold text-red-600 mb-4">$300</p>
              <p className="text-gray-600">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            </div>
            <div className="border-2 border-gray-200 p-6 rounded-lg hover:border-red-600 transition-colors">
              <h3 className="text-xl font-bold mb-2 text-black">Industry</h3>
              <p className="text-3xl font-bold text-red-600 mb-4">$500</p>
              <p className="text-gray-600">
                Ut enim ad minim veniam, quis nostrud exercitation ullamco.
              </p>
            </div>
            <div className="border-2 border-gray-200 p-6 rounded-lg hover:border-red-600 transition-colors">
              <h3 className="text-xl font-bold mb-2 text-black">Student</h3>
              <p className="text-3xl font-bold text-red-600 mb-4">$150</p>
              <p className="text-gray-600">
                Duis aute irure dolor in reprehenderit in voluptate velit.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white p-10 rounded-lg shadow-lg">
          <h2 className="text-3xl font-bold mb-6 text-black">
            Register Your Interest
          </h2>
          <p className="text-gray-600 mb-8">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fill out
            the form below and we will send you registration details via email.
          </p>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-bold mb-2 text-gray-700">
                <div className="flex items-center mb-2">
                  <User className="mr-2 text-red-600" size={20} />
                  Full Name
                </div>
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-red-600 focus:outline-none transition-colors text-black"
                placeholder="John Doe"
              />
            </div>

            <div>
              <label className="block text-sm font-bold mb-2 text-gray-700">
                <div className="flex items-center mb-2">
                  <Mail className="mr-2 text-red-600" size={20} />
                  Email Address
                </div>
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-red-600 focus:outline-none transition-colors text-black"
                placeholder="john.doe@example.com"
              />
            </div>

            <div>
              <label className="block text-sm font-bold mb-2 text-gray-700">
                <div className="flex items-center mb-2">
                  <Building className="mr-2 text-red-600" size={20} />
                  Organization
                </div>
              </label>
              <input
                type="text"
                name="organization"
                value={formData.organization}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-red-600 focus:outline-none transition-colors text-black"
                placeholder="Lorem University"
              />
            </div>

            <div>
              <label className="block text-sm font-bold mb-2 text-gray-700">
                <div className="flex items-center mb-2">
                  <Phone className="mr-2 text-red-600" size={20} />
                  Phone Number
                </div>
              </label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-red-600 focus:outline-none transition-colors text-black"
                placeholder="+1 (555) 123-4567"
              />
            </div>

            <div>
              <label className="block text-sm font-bold mb-2 text-gray-700">
                Registration Category
              </label>
              <select
                name="category"
                value={formData.category}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-red-600 focus:outline-none transition-colors text-black bg-white"
              >
                <option value="academic">Academic - $300</option>
                <option value="industry">Industry - $500</option>
                <option value="student">Student - $150</option>
              </select>
            </div>

            <button
              type="submit"
              className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-4 px-8 rounded-lg text-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Submit Registration Request
            </button>
          </form>
        </div>

        <div className="mt-12 bg-red-50 border-2 border-red-200 p-8 rounded-lg">
          <h3 className="text-xl font-bold text-black mb-4">
            What happens next?
          </h3>
          <ul className="space-y-3 text-gray-700">
            <li className="flex items-start">
              <span className="text-red-600 font-bold mr-2">1.</span>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit
            </li>
            <li className="flex items-start">
              <span className="text-red-600 font-bold mr-2">2.</span>
              Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
            </li>
            <li className="flex items-start">
              <span className="text-red-600 font-bold mr-2">3.</span>
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
            </li>
            <li className="flex items-start">
              <span className="text-red-600 font-bold mr-2">4.</span>
              Duis aute irure dolor in reprehenderit in voluptate velit esse
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Registration;

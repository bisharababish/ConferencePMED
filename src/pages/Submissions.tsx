import { useState } from 'react';
import { Upload, Plus, X, Loader2 } from 'lucide-react';
import toast from 'react-hot-toast';
import { supabase, SubmissionData } from '../lib/supabase';
import { uploadFile } from '../lib/storage';
import { generateId } from '../lib/utils';

const Submissions = () => {
  const [formData, setFormData] = useState({
    title: '',
    topics: [] as string[],
    abstractDocument: null as File | null,
    keywords: '',
    authorName: '',
    authorJobTitle: '',
    coauthors: [{ name: '', jobTitle: '' }],
    email: '',
    phone: '',
    isPublished: '',
    publicationLink: '',
    studyDesign: '',
    originalityDeclaration: false,
  });
  const [loading, setLoading] = useState(false);

  const topics = [
    'Internal Medicine',
    'Surgery',
    'Pediatrics',
    'Obstetrics & Gynecology',
    'Emergency & Critical Care',
    'Cardiology',
    'Neurology',
    'Oncology',
    'Infectious Diseases',
    'Public Health',
    'Radiology',
    'Pathology',
    'Medical Education',
    'Mental Health',
    'Digital Health/AI',
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      // Upload abstract document
      let abstractDocumentUrl: string | null = null;
      if (formData.abstractDocument) {
        toast.loading('Uploading document...', { id: 'upload' });
        abstractDocumentUrl = await uploadFile(
          formData.abstractDocument,
          'documents',
          'submissions',
          `abstract_${formData.authorName.replace(/\s+/g, '_')}`
        );
        if (!abstractDocumentUrl) {
          throw new Error('Failed to upload abstract document');
        }
        toast.dismiss('upload');
      }

      // Prepare submission data
      const filteredCoauthors = formData.coauthors
        .filter(c => c.name.trim() !== '')
        .map(c => ({ name: c.name, job_title: c.jobTitle }));

      // Validate originality declaration
      if (!formData.originalityDeclaration) {
        toast.error('Please confirm the Declaration of Originality to proceed.');
        setLoading(false);
        return;
      }

      const submissionData: SubmissionData = {
        id: generateId(),
        title: formData.title,
        topics: formData.topics,
        keywords: formData.keywords || undefined,
        author_name: formData.authorName,
        author_job_title: formData.authorJobTitle,
        coauthors: filteredCoauthors.length > 0 ? filteredCoauthors : undefined,
        email: formData.email,
        phone: formData.phone || undefined,
        abstract_document_url: abstractDocumentUrl || undefined,
        is_published: formData.isPublished || undefined,
        publication_link: formData.isPublished === 'yes' && formData.publicationLink ? formData.publicationLink : undefined,
        study_design: formData.studyDesign || undefined,
        originality_declaration: formData.originalityDeclaration,
      };

      // Insert into database
      toast.loading('Submitting abstract...', { id: 'submit' });
      const { error: dbError } = await supabase
        .from('submissions')
        .insert([submissionData]);

      if (dbError) {
        throw dbError;
      }

      toast.dismiss('submit');
      toast.success('Submission Successful! Your abstract has been submitted successfully. We will review it and contact you shortly.');

      // Reset form
      setFormData({
        title: '',
        topics: [],
        abstractDocument: null,
        keywords: '',
        authorName: '',
        authorJobTitle: '',
        coauthors: [{ name: '', jobTitle: '' }],
        email: '',
        phone: '',
        isPublished: '',
        publicationLink: '',
        studyDesign: '',
        originalityDeclaration: false,
      });
    } catch (err: any) {
      console.error('Submission error:', err);
      toast.dismiss('upload');
      toast.dismiss('submit');
      toast.error(err.message || 'Failed to submit abstract. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    
    // Validate phone number to only accept numbers, +, spaces, dashes, and parentheses
    if (name === 'phone') {
      const phoneRegex = /^[\d\s\+\-\(\)]*$/;
      if (!phoneRegex.test(value)) {
        toast.error('Phone number can only contain numbers and formatting characters (+, -, spaces, parentheses)');
        return;
      }
    }
    
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    
    if (!file) {
      setFormData({
        ...formData,
        abstractDocument: null,
      });
      return;
    }

    // Validate file type - only allow PDF, DOC, DOCX
    const fileName = file.name.toLowerCase();
    const fileExtension = fileName.split('.').pop() || '';
    const allowedExtensions = ['pdf', 'doc', 'docx'];
    const allowedTypes = ['application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'];
    
    if (!allowedExtensions.includes(fileExtension) || !allowedTypes.includes(file.type)) {
      toast.error('Invalid file type. Please upload a document file (PDF, DOC, or DOCX).');
      e.target.value = ''; // Clear the input
      return;
    }
    
    setFormData({
      ...formData,
      abstractDocument: file,
    });
  };

  const handleTopicChange = (topic: string) => {
    if (formData.topics.includes(topic)) {
      setFormData({
        ...formData,
        topics: formData.topics.filter(t => t !== topic),
      });
    } else {
      setFormData({
        ...formData,
        topics: [...formData.topics, topic],
      });
    }
  };

  const addCoauthor = () => {
    setFormData({
      ...formData,
      coauthors: [...formData.coauthors, { name: '', jobTitle: '' }],
    });
  };

  const removeCoauthor = (index: number) => {
    setFormData({
      ...formData,
      coauthors: formData.coauthors.filter((_, i) => i !== index),
    });
  };

  const updateCoauthor = (index: number, field: 'name' | 'jobTitle', value: string) => {
    const updated = [...formData.coauthors];
    updated[index][field] = value;
    setFormData({
      ...formData,
      coauthors: updated,
    });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Red Header */}
      <div className="bg-gradient-to-r py-8 px-4" style={{ background: 'linear-gradient(to right, #1e3a8a, #1e40af)' }}>
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
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">Abstract Submission Application</h1>
          <p className="text-gray-600">Submit your research abstract for the conference</p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-16">

        <div className="bg-white p-10 rounded-lg shadow-lg">
          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Section 1: Abstract Details */}
            <div className="border-b border-gray-200 pb-8">
              <h2 className="text-2xl font-bold mb-6" style={{ color: '#1e3a8a' }}>Section 1: Abstract Details</h2>

              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-bold mb-2 text-gray-700">
                    Title of Abstract <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="title"
                    value={formData.title}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-blue-600 focus:outline-none transition-colors text-black"
                    placeholder="Enter the title of your abstract"
                  />
                </div>

                <div>
                  <label className="block text-sm font-bold mb-2 text-gray-700">
                    Topic of Abstract <span className="text-red-500">*</span>
                  </label>
                  <p className="text-sm text-gray-600 mb-3">Select one or more topics (multiple selection allowed):</p>
                  <div className="grid md:grid-cols-3 gap-3">
                    {topics.map((topic) => (
                      <label key={topic} className="flex items-center p-3 border-2 border-gray-200 rounded-lg hover:border-blue-400 cursor-pointer">
                        <input
                          type="checkbox"
                          checked={formData.topics.includes(topic)}
                          onChange={() => handleTopicChange(topic)}
                          className="mr-2"
                        />
                        <span className="text-gray-700 text-sm">{topic}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-bold mb-2 text-gray-700">
                    <div className="flex items-center mb-2">
                      <Upload className="mr-2" size={20} style={{ color: '#1e3a8a' }} />
                      Abstract Document Upload <span className="text-red-500">*</span>
                    </div>
                  </label>
                  <input
                    type="file"
                    onChange={handleFileChange}
                    accept=".pdf,.doc,.docx"
                    required
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-blue-600 focus:outline-none transition-colors"
                  />
                  <p className="text-xs text-gray-500 mt-1">Accepted formats: PDF, DOC, DOCX</p>
                </div>

                <div>
                  <label className="block text-sm font-bold mb-2 text-gray-700">
                    Abstract Keywords
                  </label>
                  <input
                    type="text"
                    name="keywords"
                    value={formData.keywords}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-blue-600 focus:outline-none transition-colors text-black"
                    placeholder="Enter keywords separated by commas"
                  />
                </div>
              </div>
            </div>

            {/* Section 2: Author Details */}
            <div className="border-b border-gray-200 pb-8">
              <h2 className="text-2xl font-bold mb-6" style={{ color: '#1e3a8a' }}>Section 2: Author Details</h2>

              <div className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-bold mb-2 text-gray-700">
                      Author Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="authorName"
                      value={formData.authorName}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-blue-600 focus:outline-none transition-colors text-black"
                      placeholder="Enter author name"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-bold mb-2 text-gray-700">
                      Job Title <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="authorJobTitle"
                      value={formData.authorJobTitle}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-blue-600 focus:outline-none transition-colors text-black"
                      placeholder="Enter job title"
                    />
                  </div>
                </div>

                <div>
                  <div className="flex items-center justify-between mb-4">
                    <label className="block text-sm font-bold text-gray-700">
                      Coauthors Names
                    </label>
                    <button
                      type="button"
                      onClick={addCoauthor}
                      className="flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-semibold text-white"
                      style={{ backgroundColor: '#1e3a8a' }}
                    >
                      <Plus size={16} />
                      Add Coauthor
                    </button>
                  </div>

                  {formData.coauthors.map((coauthor, index) => (
                    <div key={index} className="grid md:grid-cols-2 gap-4 mb-4 p-4 bg-gray-50 rounded-lg">
                      <div>
                        <label className="block text-xs font-bold mb-2 text-gray-700">
                          Coauthor Name
                        </label>
                        <input
                          type="text"
                          value={coauthor.name}
                          onChange={(e) => updateCoauthor(index, 'name', e.target.value)}
                          className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:border-blue-600 focus:outline-none transition-colors text-black"
                          placeholder="Enter coauthor name"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-bold mb-2 text-gray-700">
                          Coauthor Job Title
                        </label>
                        <div className="flex gap-2">
                          <input
                            type="text"
                            value={coauthor.jobTitle}
                            onChange={(e) => updateCoauthor(index, 'jobTitle', e.target.value)}
                            className="flex-1 px-4 py-2 border-2 border-gray-300 rounded-lg focus:border-blue-600 focus:outline-none transition-colors text-black"
                            placeholder="Enter job title"
                          />
                          {formData.coauthors.length > 1 && (
                            <button
                              type="button"
                              onClick={() => removeCoauthor(index)}
                              className="px-3 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors"
                            >
                              <X size={16} />
                            </button>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Section 3: Contact Information */}
            <div className="border-b border-gray-200 pb-8">
              <h2 className="text-2xl font-bold mb-6" style={{ color: '#1e3a8a' }}>Section 3: Contact Information</h2>

              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-bold mb-2 text-gray-700">
                    Email Address <span className="text-red-500">*</span>
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
                    Phone Number
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
              </div>
            </div>

            {/* Section 4: Published or Not */}
            <div className="border-b border-gray-200 pb-8">
              <h2 className="text-2xl font-bold mb-6" style={{ color: '#1e3a8a' }}>Section 4: Published or Not</h2>

              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-bold mb-3 text-gray-700">
                    Has this work been published? <span className="text-red-500">*</span>
                  </label>
                  <div className="flex gap-6">
                    <label className="flex items-center cursor-pointer">
                      <input
                        type="radio"
                        name="isPublished"
                        value="yes"
                        checked={formData.isPublished === 'yes'}
                        onChange={handleChange}
                        required
                        className="mr-2 w-4 h-4"
                      />
                      <span className="text-gray-700">Yes</span>
                    </label>
                    <label className="flex items-center cursor-pointer">
                      <input
                        type="radio"
                        name="isPublished"
                        value="no"
                        checked={formData.isPublished === 'no'}
                        onChange={handleChange}
                        required
                        className="mr-2 w-4 h-4"
                      />
                      <span className="text-gray-700">No</span>
                    </label>
                  </div>
                </div>

                {formData.isPublished === 'yes' && (
                  <div>
                    <label className="block text-sm font-bold mb-2 text-gray-700">
                      Publication Link <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="url"
                      name="publicationLink"
                      value={formData.publicationLink}
                      onChange={handleChange}
                      required={formData.isPublished === 'yes'}
                      className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-blue-600 focus:outline-none transition-colors text-black"
                      placeholder="https://example.com/publication"
                    />
                    <p className="text-xs text-gray-500 mt-1">Please provide the URL link to the publication</p>
                  </div>
                )}
              </div>
            </div>

            {/* Section 5: Study Design */}
            <div className="border-b border-gray-200 pb-8">
              <h2 className="text-2xl font-bold mb-6" style={{ color: '#1e3a8a' }}>Section 5: Study Design</h2>

              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-bold mb-2 text-gray-700">
                    Study Design
                  </label>
                  <textarea
                    name="studyDesign"
                    value={formData.studyDesign}
                    onChange={handleChange}
                    rows={6}
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-blue-600 focus:outline-none transition-colors resize-none text-black"
                    placeholder="Enter the study design details..."
                  />
                </div>
              </div>
            </div>

            {/* Section 6: Declaration of Originality */}
            <div>
              <h2 className="text-2xl font-bold mb-6" style={{ color: '#1e3a8a' }}>Section 6: Declaration of Originality</h2>

              <div className="space-y-6">
                <div className="flex items-start">
                  <input
                    type="checkbox"
                    name="originalityDeclaration"
                    checked={formData.originalityDeclaration}
                    onChange={(e) => setFormData({ ...formData, originalityDeclaration: e.target.checked })}
                    required
                    className="mt-1 mr-3 w-5 h-5 cursor-pointer"
                  />
                  <label className="text-gray-700 cursor-pointer">
                    I confirm that this work is original, has not been plagiarized, and has not been presented at another conference. <span className="text-red-500">*</span>
                  </label>
                </div>
              </div>
            </div>

            <div className="pt-6">
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
                  'Submit Abstract'
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Submissions;

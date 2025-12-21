import { useState } from 'react';
import { Loader2 } from 'lucide-react';
import toast from 'react-hot-toast';
import { supabase, ContactData } from '../lib/supabase';
import { generateId } from '../lib/utils';

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    query: '',
    subject: '',
  });
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const contactData: ContactData = {
        id: generateId(),
        first_name: formData.firstName,
        last_name: formData.lastName,
        email: formData.email,
        phone: formData.phone || undefined,
        subject: formData.subject || undefined,
        message: formData.query,
      };

      toast.loading('Sending message...', { id: 'contact' });
      const { error: dbError } = await supabase
        .from('contacts')
        .insert([contactData]);

      if (dbError) {
        throw dbError;
      }

      toast.dismiss('contact');
      toast.success('Message Sent Successfully! Thank you for contacting us. We will get back to you soon.');
      
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        query: '',
        subject: '',
      });
    } catch (err: any) {
      console.error('Contact form error:', err);
      toast.dismiss('contact');
      toast.error(err.message || 'Failed to send message. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
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

      {/* Main Content Area */}
      <div className="max-w-4xl mx-auto px-4 py-16">

        {/* Contact Us Form Card */}
        <div className="bg-white rounded-xl p-8 md:p-12 shadow-xl border border-gray-200">
          <h1 className="text-3xl md:text-4xl font-bold mb-4 text-center text-gray-900">
            Contact Us
          </h1>
          <p className="text-gray-600 text-center mb-8">
            Send us a message. Reach out with feedback and questions.
          </p>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-xs font-bold mb-2 text-gray-700 uppercase tracking-wide">
                  First Name
                </label>
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none transition-colors text-black bg-white"
                  placeholder="Please enter first name..."
                  onFocus={(e) => e.currentTarget.style.borderColor = '#1e3a8a'}
                  onBlur={(e) => e.currentTarget.style.borderColor = '#D1D5DB'}
                />
              </div>

              <div>
                <label className="block text-xs font-bold mb-2 text-gray-700 uppercase tracking-wide">
                  Last Name
                </label>
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none transition-colors text-black bg-white"
                  placeholder="Please enter last name..."
                  onFocus={(e) => e.currentTarget.style.borderColor = '#1e3a8a'}
                  onBlur={(e) => e.currentTarget.style.borderColor = '#D1D5DB'}
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-xs font-bold mb-2 text-gray-700 uppercase tracking-wide">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none transition-colors text-black bg-white"
                  placeholder="Please enter email..."
                  onFocus={(e) => e.currentTarget.style.borderColor = '#1e3a8a'}
                  onBlur={(e) => e.currentTarget.style.borderColor = '#D1D5DB'}
                />
              </div>

              <div>
                <label className="block text-xs font-bold mb-2 text-gray-700 uppercase tracking-wide">
                  Phone Number
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none transition-colors text-black bg-white"
                  placeholder="Please enter phone number..."
                  onFocus={(e) => e.currentTarget.style.borderColor = '#1e3a8a'}
                  onBlur={(e) => e.currentTarget.style.borderColor = '#D1D5DB'}
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold mb-2 text-gray-700 uppercase tracking-wide">
                Subject
              </label>
              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none transition-colors text-black bg-white"
                placeholder="Please enter subject..."
                onFocus={(e) => e.currentTarget.style.borderColor = '#1e3a8a'}
                onBlur={(e) => e.currentTarget.style.borderColor = '#D1D5DB'}
              />
            </div>

            <div>
              <label className="block text-xs font-bold mb-2 text-gray-700 uppercase tracking-wide">
                Message
              </label>
              <textarea
                name="query"
                value={formData.query}
                onChange={handleChange}
                required
                rows={6}
                className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none transition-colors resize-none text-black bg-white"
                placeholder="Please enter query..."
                onFocus={(e) => e.currentTarget.style.borderColor = '#DC2626'}
                onBlur={(e) => e.currentTarget.style.borderColor = '#D1D5DB'}
              />
            </div>

            <div className="text-center pt-4">
              <button
                type="submit"
                disabled={loading}
                className="text-white font-bold py-4 px-12 rounded-lg text-lg transition-all duration-300 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 mx-auto"
                style={{ backgroundColor: '#1e3a8a' }}
                onMouseEnter={(e) => !loading && (e.currentTarget.style.backgroundColor = '#1e40af')}
                onMouseLeave={(e) => !loading && (e.currentTarget.style.backgroundColor = '#1e3a8a')}
              >
                {loading ? (
                  <>
                    <Loader2 className="animate-spin" size={20} />
                    Sending...
                  </>
                ) : (
                  'Submit'
                )}
              </button>
            </div>
          </form>
        </div>

        {/* Next Steps & Contact Section */}
        <div className="mt-12 bg-gray-100 rounded-xl p-8 md:p-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-center" style={{ color: '#1e3a8a' }}>
            Our Contact Information
          </h2>
          <div className="space-y-4 text-center mb-8">
            <p className="text-gray-700">
              <strong>Email:</strong> [Email address to be added]
            </p>
            <p className="text-gray-700">
              <strong>Instagram:</strong> [Instagram handle to be added]
            </p>
            <p className="text-gray-700">
              <strong>Location:</strong> [Location to be added]
            </p>
            <p className="text-gray-700">
              <strong>Contact us:</strong> [Contact information to be added]
            </p>
          </div>
          <p className="text-gray-700 text-center mb-8 max-w-3xl mx-auto">
            Send us a message. Reach out with feedback and questions.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Contact;

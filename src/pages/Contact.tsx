import { useState } from 'react';
import { CheckCircle } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    query: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Contact form submission:', formData);
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        query: '',
      });
    }, 3000);
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

      {/* Main Content Area */}
      <div className="max-w-4xl mx-auto px-4 py-16">
        {submitted && (
          <div className="bg-green-50 border-2 border-green-500 rounded-lg p-6 mb-8 flex items-center">
            <CheckCircle className="text-green-600 mr-4" size={32} />
            <div>
              <h3 className="text-xl font-bold text-green-800 mb-1">
                Message Sent Successfully!
              </h3>
              <p className="text-green-700">
                Thank you for contacting us. We will get back to you soon.
              </p>
            </div>
          </div>
        )}

        {/* Contact Us Form Card */}
        <div className="bg-white rounded-xl p-8 md:p-12 shadow-xl border border-gray-200">
          <h1 className="text-3xl md:text-4xl font-bold mb-4 text-center text-gray-900">
            Contact Us
          </h1>
          <p className="text-gray-600 text-center mb-8">
            Submit our Employer Needs Form, schedule a discovery call, or reach out directly. We look forward to partnering with European companies and connecting talented professionals with exciting opportunities.
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
                  onFocus={(e) => e.currentTarget.style.borderColor = '#DC2626'}
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
                  onFocus={(e) => e.currentTarget.style.borderColor = '#DC2626'}
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
                  onFocus={(e) => e.currentTarget.style.borderColor = '#DC2626'}
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
                  onFocus={(e) => e.currentTarget.style.borderColor = '#DC2626'}
                  onBlur={(e) => e.currentTarget.style.borderColor = '#D1D5DB'}
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold mb-2 text-gray-700 uppercase tracking-wide">
                What do you have in mind
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
                className="text-white font-bold py-4 px-12 rounded-lg text-lg transition-all duration-300 shadow-lg hover:shadow-xl"
                style={{ backgroundColor: '#DC2626' }}
                onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#B91C1C'}
                onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#DC2626'}
              >
                Submit
              </button>
            </div>
          </form>
        </div>

        {/* Next Steps & Contact Section */}
        <div className="mt-12 bg-gray-100 rounded-xl p-8 md:p-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-center" style={{ color: '#DC2626' }}>
            Next Steps & Contact
          </h2>
          <p className="text-gray-700 text-center mb-8 max-w-3xl mx-auto">
            Submit our Employer Needs Form, schedule a discovery call, or reach out directly. We look forward to partnering with European companies and connecting talented professionals with exciting opportunities.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              className="text-white font-bold py-3 px-8 rounded-lg transition-all duration-300 shadow-md hover:shadow-lg"
              style={{ backgroundColor: '#DC2626' }}
              onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#B91C1C'}
              onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#DC2626'}
            >
              Employer Needs Form
            </button>
            <button
              className="bg-white border-2 font-bold py-3 px-8 rounded-lg transition-all duration-300 hover:bg-gray-50"
              style={{ borderColor: '#DC2626', color: '#DC2626' }}
            >
              Schedule Discovery Call
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;

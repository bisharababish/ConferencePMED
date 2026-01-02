import { useState } from 'react';
import { Loader2, Mail, Phone, MapPin, Instagram, Send, MessageSquare } from 'lucide-react';
import toast from 'react-hot-toast';
import { supabase, ContactData } from '../lib/supabase';
import { generateId } from '../lib/utils';
import { sanitizeInput, isValidEmail, checkRateLimit } from '../lib/security';

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

    // Rate limiting check
    const userIdentifier = formData.email || 'anonymous';
    if (!checkRateLimit(userIdentifier, 3, 60000)) {
      toast.error('Too many requests. Please wait a minute before submitting again.');
      return;
    }

    // Validate email
    if (!isValidEmail(formData.email)) {
      toast.error('Please enter a valid email address.');
      return;
    }

    // Validate message length
    if (!formData.query || formData.query.trim().length === 0) {
      toast.error('Please enter a message.');
      return;
    }

    if (formData.query.length > 5000) {
      toast.error('Message must be 5000 characters or less.');
      return;
    }

    setLoading(true);

    try {
      const contactData: ContactData = {
        id: generateId(),
        first_name: sanitizeInput(formData.firstName, 100),
        last_name: sanitizeInput(formData.lastName, 100),
        email: formData.email.trim().toLowerCase().substring(0, 255),
        phone: formData.phone ? sanitizeInput(formData.phone, 20) : undefined,
        subject: formData.subject ? sanitizeInput(formData.subject, 200) : undefined,
        message: sanitizeInput(formData.query, 5000),
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
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full opacity-10 animate-float"
            style={{
              width: `${Math.random() * 100 + 50}px`,
              height: `${Math.random() * 100 + 50}px`,
              backgroundColor: '#1e3a8a',
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${Math.random() * 20 + 15}s`,
            }}
          />
        ))}
      </div>

      {/* Header */}
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
              <span className="text-3xl md:text-4xl font-bold text-white leading-tight drop-shadow-md">JERUSALEM</span>
              <span className="text-base md:text-lg text-white leading-tight drop-shadow-md">MEDICAL & RESEARCH CONFERENCE</span>
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 drop-shadow-md">Contact Us</h1>
          <p className="text-white/90 text-lg md:text-xl max-w-3xl mx-auto">Get in Touch with Us</p>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="relative max-w-6xl mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Contact Information Sidebar */}
          <div className="lg:col-span-1 space-y-6">
            <div className="bg-gradient-to-br from-white to-blue-50 rounded-2xl p-6 shadow-xl border-2 border-gray-200 hover:shadow-2xl hover:border-blue-300 transition-all duration-300 transform hover:-translate-y-1">
              <div className="flex items-start gap-4">
                <div className="p-4 rounded-xl shadow-lg" style={{ backgroundColor: '#1e3a8a', color: 'white' }}>
                  <Mail size={28} />
                </div>
                <div className="flex-1">
                  <h3 className="font-bold text-lg text-gray-900 mb-1">Email</h3>
                  <a href="mailto:support@jmrc.live" className="text-sm text-gray-600 mb-2 hover:text-blue-600 transition-colors block">
                    support@jmrc.live
                  </a>
                  <a href="mailto:support@jmrc.live" className="text-sm font-medium" style={{ color: '#1e3a8a' }}>
                    Send Email →
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-white to-blue-50 rounded-2xl p-6 shadow-xl border-2 border-gray-200 hover:shadow-2xl hover:border-blue-300 transition-all duration-300 transform hover:-translate-y-1">
              <div className="flex items-start gap-4">
                <div className="p-4 rounded-xl shadow-lg" style={{ backgroundColor: '#1e3a8a', color: 'white' }}>
                  <Phone size={28} />
                </div>
                <div className="flex-1">
                  <h3 className="font-bold text-lg text-gray-900 mb-1">Phone</h3>
                  <p className="text-sm text-gray-600 mb-2">+970 2 XXX XXXX</p>
                  <a href="tel:+9702XXXXXXX" className="text-sm font-medium" style={{ color: '#1e3a8a' }}>
                    Call Now →
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-white to-blue-50 rounded-2xl p-6 shadow-xl border-2 border-gray-200 hover:shadow-2xl hover:border-blue-300 transition-all duration-300 transform hover:-translate-y-1">
              <div className="flex items-start gap-4">
                <div className="p-4 rounded-xl shadow-lg" style={{ backgroundColor: '#1e3a8a', color: 'white' }}>
                  <MapPin size={28} />
                </div>
                <div className="flex-1">
                  <h3 className="font-bold text-lg text-gray-900 mb-1">Location</h3>
                  <p className="text-sm text-gray-600 mb-2">Millennium Hotel, Ramallah</p>
                  <a href="https://maps.google.com/?q=Millennium+Hotel+Ramallah" target="_blank" rel="noopener noreferrer" className="text-sm font-medium" style={{ color: '#1e3a8a' }}>
                    View Map →
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-white to-blue-50 rounded-2xl p-6 shadow-xl border-2 border-gray-200 hover:shadow-2xl hover:border-blue-300 transition-all duration-300 transform hover:-translate-y-1">
              <div className="flex items-start gap-4">
                <div className="p-4 rounded-xl shadow-lg" style={{ backgroundColor: '#1e3a8a', color: 'white' }}>
                  <Instagram size={28} />
                </div>
                <div className="flex-1">
                  <h3 className="font-bold text-lg text-gray-900 mb-1">Instagram</h3>
                  <p className="text-sm text-gray-600 mb-2">@jmrc_palestine</p>
                  <a
                    href="https://www.instagram.com/jmrc_palestine/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-medium inline-flex items-center gap-1 hover:gap-2 transition-all"
                    style={{ color: '#1e3a8a' }}
                  >
                    Visit Profile →
                  </a>
                </div>
              </div>
            </div>

            {/* Social Media Quick Links */}
            <div className="bg-gradient-to-br from-white to-blue-50 rounded-2xl p-6 shadow-xl border-2 border-gray-200 hover:shadow-2xl hover:border-blue-300 transition-all duration-300 transform hover:-translate-y-1">
              <div className="flex items-start gap-4 mb-4">
                <div className="p-4 rounded-xl shadow-lg" style={{ backgroundColor: '#1e3a8a', color: 'white' }}>
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <div className="flex-1">
                  <h3 className="font-bold text-lg text-gray-900 mb-1">Connect With Us</h3>
                  <p className="text-sm text-gray-600 mb-4">Follow us on social media for updates</p>
                  <div className="flex gap-3">
                    <a
                      href="https://www.facebook.com/people/%D9%85%D9%88%D8%AA%D9%85%D8%B1-%D8%A7%D9%84%D9%82%D8%AF%D8%B3-%D8%A7%D9%84%D8%B7%D8%A8%D9%8A-%D9%88%D8%A7%D9%84%D8%A8%D8%AD%D8%AB%D9%8A-%D8%A7%D9%84%D8%A7%D9%88%D9%84/61584929072289/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-110 border border-gray-200 hover:border-blue-300"
                      aria-label="Facebook"
                    >
                      <svg className="w-6 h-6" fill="#1e3a8a" viewBox="0 0 24 24">
                        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                      </svg>
                    </a>
                    <a
                      href="https://www.instagram.com/jmrc_palestine/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-110 border border-gray-200 hover:border-blue-300"
                      aria-label="Instagram"
                    >
                      <Instagram size={24} style={{ color: '#1e3a8a' }} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Us Form Card */}
          <div className="lg:col-span-2">
            <div className="bg-gradient-to-br from-white via-blue-50/30 to-white rounded-2xl p-8 md:p-12 shadow-2xl border-2 border-gray-200 hover:shadow-3xl transition-all duration-300 relative overflow-hidden">
              {/* Decorative Background Elements */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-blue-100 rounded-full blur-3xl opacity-20 -mr-32 -mt-32"></div>
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-blue-200 rounded-full blur-3xl opacity-20 -ml-24 -mb-24"></div>

              <div className="relative text-center mb-8">
                <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl mb-4 shadow-lg transform hover:scale-110 transition-transform duration-300" style={{ backgroundColor: '#1e3a8a' }}>
                  <Send className="text-white" size={36} />
                </div>
                <h1 className="text-3xl md:text-4xl font-bold mb-3 text-gray-900">
                  Send Us a Message
                </h1>
                <p className="text-gray-600 text-lg">
                  Reach out with feedback and questions. We'd love to hear from you!
                </p>
                <div className="mt-4 flex items-center justify-center gap-2">
                  <div className="h-1 w-12 rounded-full" style={{ backgroundColor: '#1e3a8a' }}></div>
                  <div className="h-1 w-1 rounded-full bg-gray-300"></div>
                  <div className="h-1 w-1 rounded-full bg-gray-300"></div>
                </div>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="group">
                    <label className="flex text-sm font-semibold mb-2 text-gray-700 items-center gap-2">
                      <span className="w-1 h-5 rounded-full" style={{ backgroundColor: '#1e3a8a' }}></span>
                      First Name
                    </label>
                    <div className="relative">
                      <input
                        type="text"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3.5 border-2 border-gray-300 rounded-xl focus:outline-none transition-all duration-300 text-black bg-white/80 backdrop-blur-sm focus:border-blue-500 focus:ring-4 focus:ring-blue-100 hover:border-blue-300 hover:bg-white"
                        placeholder="Please enter first name..."
                      />
                    </div>
                  </div>

                  <div className="group">
                    <label className="flex text-sm font-semibold mb-2 text-gray-700 items-center gap-2">
                      <span className="w-1 h-5 rounded-full" style={{ backgroundColor: '#1e3a8a' }}></span>
                      Last Name
                    </label>
                    <div className="relative">
                      <input
                        type="text"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3.5 border-2 border-gray-300 rounded-xl focus:outline-none transition-all duration-300 text-black bg-white/80 backdrop-blur-sm focus:border-blue-500 focus:ring-4 focus:ring-blue-100 hover:border-blue-300 hover:bg-white"
                        placeholder="Please enter last name..."
                      />
                    </div>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="group">
                    <label className="flex text-sm font-semibold mb-2 text-gray-700 items-center gap-2">
                      <Mail size={16} className="text-gray-600" />
                      Email
                    </label>
                    <div className="relative">
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3.5 border-2 border-gray-300 rounded-xl focus:outline-none transition-all duration-300 text-black bg-white/80 backdrop-blur-sm focus:border-blue-500 focus:ring-4 focus:ring-blue-100 hover:border-blue-300 hover:bg-white"
                        placeholder="Please enter email..."
                      />
                    </div>
                  </div>

                  <div className="group">
                    <label className="flex text-sm font-semibold mb-2 text-gray-700 items-center gap-2">
                      <Phone size={16} className="text-gray-600" />
                      Phone Number
                    </label>
                    <div className="relative">
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3.5 border-2 border-gray-300 rounded-xl focus:outline-none transition-all duration-300 text-black bg-white/80 backdrop-blur-sm focus:border-blue-500 focus:ring-4 focus:ring-blue-100 hover:border-blue-300 hover:bg-white"
                        placeholder="Please enter phone number..."
                      />
                    </div>
                  </div>
                </div>

                <div className="group">
                  <label className="flex text-sm font-semibold mb-2 text-gray-700 items-center gap-2">
                    <span className="w-1 h-5 rounded-full" style={{ backgroundColor: '#1e3a8a' }}></span>
                    Subject
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full px-4 py-3.5 border-2 border-gray-300 rounded-xl focus:outline-none transition-all duration-300 text-black bg-white/80 backdrop-blur-sm focus:border-blue-500 focus:ring-4 focus:ring-blue-100 hover:border-blue-300 hover:bg-white"
                      placeholder="Please enter subject..."
                    />
                  </div>
                </div>

                <div className="group">
                  <label className="flex text-sm font-semibold mb-2 text-gray-700 items-center gap-2">
                    <MessageSquare size={16} className="text-gray-600" />
                    Message
                  </label>
                  <div className="relative">
                    <textarea
                      name="query"
                      value={formData.query}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3.5 border-2 border-gray-300 rounded-xl focus:outline-none transition-all duration-300 resize-none text-black bg-white/80 backdrop-blur-sm focus:border-blue-500 focus:ring-4 focus:ring-blue-100 hover:border-blue-300 hover:bg-white"
                      placeholder="Please enter query..."
                    />
                  </div>
                </div>

                <div className="text-center pt-6">
                  <button
                    type="submit"
                    disabled={loading}
                    className="group relative text-white font-bold py-4 px-12 rounded-xl text-lg transition-all duration-300 shadow-lg hover:shadow-2xl disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 mx-auto overflow-hidden"
                    style={{ backgroundColor: '#1e3a8a' }}
                    onMouseEnter={(e) => {
                      if (!loading) {
                        e.currentTarget.style.backgroundColor = '#1e40af';
                        e.currentTarget.style.transform = 'translateY(-2px)';
                      }
                    }}
                    onMouseLeave={(e) => {
                      if (!loading) {
                        e.currentTarget.style.backgroundColor = '#1e3a8a';
                        e.currentTarget.style.transform = 'translateY(0)';
                      }
                    }}
                  >
                    <span className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                    {loading ? (
                      <>
                        <Loader2 className="animate-spin relative z-10" size={20} />
                        <span className="relative z-10">Sending...</span>
                      </>
                    ) : (
                      <>
                        <Send className="relative z-10" size={20} />
                        <span className="relative z-10">Send Message</span>
                      </>
                    )}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;

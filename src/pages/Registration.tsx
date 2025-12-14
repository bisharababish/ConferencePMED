import { useState } from 'react';
import { Mail, User, Phone, CheckCircle } from 'lucide-react';

const Registration = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Create email content
    const emailSubject = `Conference Registration - ${formData.name}`;
    const emailBody = `New registration for the event:\n\n` +
      `Name: ${formData.name}\n` +
      `Email: ${formData.email}\n` +
      `Phone: ${formData.phone}\n\n` +
      `The attendee wants to join the event.`;
    
    // Create mailto link
    const mailtoLink = `mailto:conference@example.com?subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailBody)}`;
    
    // Open email client
    window.location.href = mailtoLink;
    
    // Also log to console for development
    console.log('Registration request:', formData);
    
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
      });
    }, 5000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Header Section */}
      <div className="relative bg-gradient-to-r from-red-600 to-red-700 py-16 px-4 overflow-hidden" style={{ backgroundColor: '#DC2626' }}>
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
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 drop-shadow-md">Register for the Event</h1>
          <p className="text-white/90 text-lg md:text-xl max-w-3xl mx-auto">
            Join us for an unforgettable conference experience
          </p>
        </div>
      </div>

      <div className="max-w-2xl mx-auto px-4 py-20">
        {submitted && (
          <div className="bg-green-50 border-2 border-green-500 rounded-xl p-6 mb-8 flex items-center shadow-lg">
            <CheckCircle className="text-green-600 mr-4 flex-shrink-0" size={32} />
            <div>
              <h3 className="text-xl font-bold text-green-800 mb-1">
                Registration Sent!
              </h3>
              <p className="text-green-700">
                Your registration has been sent! We will contact you shortly with event details.
              </p>
            </div>
          </div>
        )}

        <div className="bg-white p-10 rounded-2xl shadow-xl border border-gray-200">
          <h2 className="text-3xl font-bold mb-6 text-gray-900 text-center">
            Register Your Information
          </h2>
          <p className="text-gray-600 mb-8 text-center">
            Fill out the form below to register for the event. We'll send you all the details you need.
          </p>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-bold mb-2 text-gray-700">
                <div className="flex items-center mb-2">
                  <User className="mr-2" size={20} style={{ color: '#DC2626' }} />
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
                placeholder="Enter your full name"
              />
            </div>

            <div>
              <label className="block text-sm font-bold mb-2 text-gray-700">
                <div className="flex items-center mb-2">
                  <Mail className="mr-2" size={20} style={{ color: '#DC2626' }} />
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
                placeholder="your.email@example.com"
              />
            </div>

            <div>
              <label className="block text-sm font-bold mb-2 text-gray-700">
                <div className="flex items-center mb-2">
                  <Phone className="mr-2" size={20} style={{ color: '#DC2626' }} />
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

            <button
              type="submit"
              className="w-full text-white font-bold py-4 px-8 rounded-lg text-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
              style={{ backgroundColor: '#DC2626' }}
              onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#B91C1C'}
              onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#DC2626'}
            >
              Register for Event
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Registration;

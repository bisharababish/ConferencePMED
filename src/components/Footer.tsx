import { MapPin, Phone, Mail, Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-white py-12 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Left Column - Contact Information */}
          <div>
            <h3 className="text-2xl font-bold mb-6 text-gray-900">Our Contact Information</h3>
            <div className="space-y-4">
              <div className="flex items-start">
                <Mail className="text-gray-600 mr-3 mt-1 flex-shrink-0" size={20} />
                <p className="text-gray-700 text-sm">
                  <strong>Email:</strong> [Email address to be added]
                </p>
              </div>
              <div className="flex items-start">
                <Instagram className="text-gray-600 mr-3 mt-1 flex-shrink-0" size={20} />
                <p className="text-gray-700 text-sm">
                  <strong>Instagram:</strong> [Instagram handle to be added]
                </p>
              </div>
              <div className="flex items-start">
                <MapPin className="text-gray-600 mr-3 mt-1 flex-shrink-0" size={20} />
                <p className="text-gray-700 text-sm">
                  <strong>Location:</strong> [Location to be added]
                </p>
              </div>
              <div className="flex items-start">
                <Phone className="text-gray-600 mr-3 mt-1 flex-shrink-0" size={20} />
                <p className="text-gray-700 text-sm">
                  <strong>Contact us:</strong> [Contact information to be added]
                </p>
              </div>
            </div>
          </div>

          {/* Middle Column - Conference Logo */}
          <div className="flex flex-col items-center justify-start">
            <div className="mb-6">
              {/* Conference Logo */}
              <div className="flex items-center gap-3 mb-4">
                <svg width="40" height="40" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="2" y="2" width="14" height="14" fill="#1e3a8a" rx="1.5" />
                  <rect x="26" y="2" width="14" height="14" fill="#1e3a8a" rx="1.5" />
                  <rect x="2" y="26" width="14" height="14" fill="#1e3a8a" rx="1.5" />
                  <rect x="26" y="26" width="14" height="14" fill="#1e3a8a" rx="1.5" />
                  <line x1="16" y1="9" x2="26" y2="9" stroke="#1e3a8a" strokeWidth="2.5" strokeLinecap="round" />
                  <line x1="16" y1="33" x2="26" y2="33" stroke="#1e3a8a" strokeWidth="2.5" strokeLinecap="round" />
                  <line x1="21" y1="2" x2="21" y2="16" stroke="#1e3a8a" strokeWidth="2.5" strokeLinecap="round" />
                  <line x1="21" y1="26" x2="21" y2="40" stroke="#1e3a8a" strokeWidth="2.5" strokeLinecap="round" />
                </svg>
                <div>
                  <div className="text-lg font-bold text-gray-900">THE FIRST ANNUAL</div>
                  <div className="text-lg font-bold text-gray-900">JERUSALEM MEDICAL</div>
                  <div className="text-lg font-bold text-gray-900">CONFERENCE 2026</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Organized By & Social Media */}
          <div>
            {/* Organized By */}
            <div className="mb-6">
              <h3 className="text-xl font-bold mb-4 text-gray-900">Organized By</h3>
              <div className="space-y-3">
                <div>
                  <h4 className="text-lg font-semibold mb-1 text-gray-800">Medical Association – Jerusalem Center</h4>
                  <p className="text-sm text-gray-600">With the support of</p>
                  <p className="text-lg font-semibold text-gray-800">Palestine Medical Club (PMED Club)</p>
                </div>
              </div>
            </div>

            {/* Social Media Icons */}
            <div className="flex gap-4">
              <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors" aria-label="Facebook">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors" aria-label="Twitter">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
              <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors" aria-label="Instagram">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors" aria-label="LinkedIn">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9.75h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9.75h2.564v10.702zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Right - Scroll Button */}
        <div className="flex justify-end mt-8">
          <button 
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="flex items-center gap-2 px-4 py-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors text-sm text-gray-600"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
            </svg>
            <span>Back to Top</span>
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

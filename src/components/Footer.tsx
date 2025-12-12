import { MapPin, Phone, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-white py-12 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Left Column - Contact Information */}
          <div>
            <h3 className="text-2xl font-bold mb-6 text-gray-900">Contact Us</h3>
            <div className="space-y-4">
              <div className="flex items-start">
                <MapPin className="text-gray-600 mr-3 mt-1 flex-shrink-0" size={20} />
                <p className="text-gray-700 text-sm">
                  Adel Masri Building, 8 Parliament Square, 4th Floor, Ramallah
                </p>
              </div>
              <div className="flex items-start">
                <Phone className="text-gray-600 mr-3 mt-1 flex-shrink-0" size={20} />
                <p className="text-gray-700 text-sm">+1 (513) 615-0649</p>
              </div>
              <div className="flex items-start">
                <Mail className="text-gray-600 mr-3 mt-1 flex-shrink-0" size={20} />
                <p className="text-gray-700 text-sm">palswisstechhubs@alnayzak.org</p>
              </div>
            </div>
          </div>

          {/* Middle Column - Conference Logo */}
          <div className="flex flex-col items-center justify-start">
            <div className="mb-6">
              {/* Conference Logo */}
              <div className="flex items-center gap-3 mb-4">
                <svg width="40" height="40" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="2" y="2" width="14" height="14" fill="#DC2626" rx="1.5" />
                  <rect x="26" y="2" width="14" height="14" fill="#DC2626" rx="1.5" />
                  <rect x="2" y="26" width="14" height="14" fill="#DC2626" rx="1.5" />
                  <rect x="26" y="26" width="14" height="14" fill="#DC2626" rx="1.5" />
                  <line x1="16" y1="9" x2="26" y2="9" stroke="#DC2626" strokeWidth="2.5" strokeLinecap="round" />
                  <line x1="16" y1="33" x2="26" y2="33" stroke="#DC2626" strokeWidth="2.5" strokeLinecap="round" />
                  <line x1="21" y1="2" x2="21" y2="16" stroke="#DC2626" strokeWidth="2.5" strokeLinecap="round" />
                  <line x1="21" y1="26" x2="21" y2="40" stroke="#DC2626" strokeWidth="2.5" strokeLinecap="round" />
                </svg>
                <div>
                  <div className="text-lg font-bold text-gray-900">ANNUAL JERUSALEM</div>
                  <div className="text-xs text-gray-700">MEDICAL & RESEARCH CONFERENCE</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Swiss Confederation & Social Media */}
          <div>
            {/* Swiss Confederation */}
            <div className="flex items-start mb-6">
              <div className="w-8 h-8 bg-red-600 flex items-center justify-center mr-3 flex-shrink-0">
                <div className="w-4 h-4 relative">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-0.5 h-3 bg-white"></div>
                  </div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-3 h-0.5 bg-white"></div>
                  </div>
                </div>
              </div>
              <div className="text-xs text-gray-600">
                <div>Schweizerische Eidgenossenschaft</div>
                <div>Confédération suisse</div>
                <div>Confederazione Svizzera</div>
                <div>Confederaziun svizra</div>
              </div>
            </div>

            {/* Social Media Icons */}
            <div className="flex gap-4 mb-4">
              <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
              <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </a>
              <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">
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

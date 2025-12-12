interface HomeProps {
  onNavigate?: (tab: string) => void;
}

const Home = ({ onNavigate }: HomeProps) => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-white py-20 px-4 overflow-hidden">
        {/* Animated particles background - full section */}
        <div className="absolute inset-0 overflow-hidden" style={{ zIndex: 0 }}>
          <div className="relative w-full h-full">
            {/* Animated particles - many more */}
            {[...Array(50)].map((_, i) => (
              <div
                key={i}
                className="absolute rounded-full animate-float"
                style={{
                  width: `${Math.random() * 8 + 2}px`,
                  height: `${Math.random() * 8 + 2}px`,
                  backgroundColor: '#DC2626',
                  opacity: Math.random() * 0.6 + 0.2,
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 5}s`,
                  animationDuration: `${Math.random() * 15 + 10}s`,
                }}
              />
            ))}
            {/* Connecting lines animation */}
            <svg className="absolute inset-0 w-full h-full" style={{ opacity: 0.15 }}>
              {[...Array(30)].map((_, i) => (
                <line
                  key={i}
                  x1={`${Math.random() * 100}%`}
                  y1={`${Math.random() * 100}%`}
                  x2={`${Math.random() * 100}%`}
                  y2={`${Math.random() * 100}%`}
                  stroke="#DC2626"
                  strokeWidth="1"
                  className="animate-pulse"
                  style={{
                    animationDelay: `${Math.random() * 2}s`,
                  }}
                />
              ))}
            </svg>
          </div>
        </div>
        <div className="max-w-7xl mx-auto relative z-10 px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Left Side - Text Content */}
            <div className="space-y-6">
              {/* Tagline */}
              <div className="inline-block">
                <span className="px-4 py-1.5 rounded-full text-sm font-medium" style={{ backgroundColor: '#FEE2E2', color: '#DC2626' }}>
                  Join Us for an Unforgettable Experience
                </span>
              </div>

              {/* Headline */}
              <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight">
                <span className="text-black">Annual Jerusalem</span>{' '}
                <span style={{ color: '#DC2626' }}>Medical & Research</span>{' '}
                <span style={{ color: '#DC2626' }}>Conference</span>
              </h1>

              {/* Body paragraph */}
              <p className="text-lg md:text-xl text-gray-700 leading-relaxed max-w-2xl">
                Join leading experts, researchers, and professionals for an inspiring conference featuring cutting-edge presentations, networking opportunities, and collaborative workshops.
              </p>

              {/* Call-to-Action Buttons */}
              <div className="flex flex-wrap gap-4 pt-2">
                <button 
                  onClick={() => {
                    if (onNavigate) {
                      onNavigate('registration');
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }
                  }}
                  className="text-white font-semibold py-3 px-8 rounded-lg text-base transition-all duration-300 shadow-md hover:shadow-lg"
                  style={{ backgroundColor: '#DC2626' }}
                  onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#B91C1C'}
                  onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#DC2626'}
                >
                  Register Now
                </button>
                <button 
                  onClick={() => {
                    if (onNavigate) {
                      onNavigate('conference');
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }
                  }}
                  className="bg-white border-2 font-semibold py-3 px-8 rounded-lg text-base transition-all duration-300 hover:bg-gray-50"
                  style={{ borderColor: '#DC2626', color: '#DC2626' }}
                >
                  Learn More
                </button>
              </div>
            </div>

            {/* Right Side - Image Placeholder */}
            <div className="relative">
              <div className="rounded-xl overflow-hidden relative" style={{ zIndex: 10 }}>
                <div className="bg-gray-200 aspect-[4/3] flex items-center justify-center">
                  <div className="text-center p-8">
                    <svg className="w-32 h-32 mx-auto text-gray-400 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    <p className="text-gray-500 text-sm">Conference 2025</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trusted By Section */}
      <section className="py-16 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-center mb-12" style={{ color: '#DC2626' }}>Trusted By</h2>
          {/* Scrolling logos container */}
          <div className="relative w-full overflow-hidden mb-12">
            <div className="flex animate-scroll gap-6 items-center">
              {/* First set of logos */}
              {[
                { name: 'Logo', id: 1 },
                { name: 'Circular DESIGN', id: 2 },
                { name: 'Jerusalem Innovation Park', id: 3 },
                { name: 'Swiss Agency', id: 4 },
                { name: 'YOUMNA', id: 5 },
                { name: 'ALNAYZAK', id: 6 },
                { name: 'HATA FOUNDATION', id: 7 },
              ].map((logo) => (
                <div
                  key={logo.id}
                  className="bg-white rounded-lg p-4 min-w-[150px] h-[150px] flex items-center justify-center shadow-sm border border-gray-200 hover:shadow-md transition-shadow flex-shrink-0"
                >
                  <div className="text-gray-400 text-xs text-center">{logo.name}</div>
                </div>
              ))}
              {/* Duplicate set for seamless loop */}
              {[
                { name: 'Logo', id: 8 },
                { name: 'Circular DESIGN', id: 9 },
                { name: 'Jerusalem Innovation Park', id: 10 },
                { name: 'Swiss Agency', id: 11 },
                { name: 'YOUMNA', id: 12 },
                { name: 'ALNAYZAK', id: 13 },
                { name: 'HATA FOUNDATION', id: 14 },
              ].map((logo) => (
                <div
                  key={logo.id}
                  className="bg-white rounded-lg p-4 min-w-[150px] h-[150px] flex items-center justify-center shadow-sm border border-gray-200 hover:shadow-md transition-shadow flex-shrink-0"
                >
                  <div className="text-gray-400 text-xs text-center">{logo.name}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Informational Cards Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div 
              className="bg-white rounded-lg p-6 shadow-sm border border-gray-200 hover:shadow-lg transition-shadow relative overflow-hidden cursor-pointer"
              onClick={() => {
                if (onNavigate) {
                  onNavigate('sponsorship');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }
              }}
            >
              <div className="absolute inset-0 animate-red-border" style={{ borderRadius: '0.5rem', pointerEvents: 'none' }}>
                <svg className="w-full h-full" preserveAspectRatio="none">
                  <rect
                    x="0"
                    y="0"
                    width="100%"
                    height="100%"
                    fill="none"
                    stroke="#DC2626"
                    strokeWidth="3"
                    strokeDasharray="150"
                    className="animate-border-dash"
                    rx="0.5rem"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-bold mb-2 text-gray-800">For Companies</h3>
              <p className="text-gray-600 text-sm">Hire vetted devs w/compliance.</p>
            </div>
            <div 
              className="bg-white rounded-lg p-6 shadow-sm border border-gray-200 hover:shadow-lg transition-shadow relative overflow-hidden cursor-pointer"
              onClick={() => {
                if (onNavigate) {
                  onNavigate('registration');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }
              }}
            >
              <div className="absolute inset-0 animate-red-border" style={{ borderRadius: '0.5rem', pointerEvents: 'none' }}>
                <svg className="w-full h-full" preserveAspectRatio="none">
                  <rect
                    x="0"
                    y="0"
                    width="100%"
                    height="100%"
                    fill="none"
                    stroke="#DC2626"
                    strokeWidth="3"
                    strokeDasharray="150"
                    className="animate-border-dash"
                    rx="0.5rem"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-bold mb-2 text-gray-800">For Talent</h3>
              <p className="text-gray-600 text-sm">Apply once, get EU matches.</p>
            </div>
            <div 
              className="bg-white rounded-lg p-6 shadow-sm border border-gray-200 hover:shadow-lg transition-shadow relative overflow-hidden cursor-pointer"
              onClick={() => {
                if (onNavigate) {
                  onNavigate('conference');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }
              }}
            >
              <div className="absolute inset-0 animate-red-border" style={{ borderRadius: '0.5rem', pointerEvents: 'none' }}>
                <svg className="w-full h-full" preserveAspectRatio="none">
                  <rect
                    x="0"
                    y="0"
                    width="100%"
                    height="100%"
                    fill="none"
                    stroke="#DC2626"
                    strokeWidth="3"
                    strokeDasharray="150"
                    className="animate-border-dash"
                    rx="0.5rem"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-bold mb-2 text-gray-800">Our Work</h3>
              <p className="text-gray-600 text-sm">Jenan serves all Palestine & region.</p>
            </div>
            <div 
              className="bg-white rounded-lg p-6 shadow-sm border border-gray-200 hover:shadow-lg transition-shadow relative overflow-hidden cursor-pointer"
            >
              <div className="absolute inset-0 animate-red-border" style={{ borderRadius: '0.5rem', pointerEvents: 'none' }}>
                <svg className="w-full h-full" preserveAspectRatio="none">
                  <rect
                    x="0"
                    y="0"
                    width="100%"
                    height="100%"
                    fill="none"
                    stroke="#DC2626"
                    strokeWidth="3"
                    strokeDasharray="150"
                    className="animate-border-dash"
                    rx="0.5rem"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-bold mb-2 text-gray-800">Testimonials</h3>
              <p className="text-gray-600 text-sm">From employees & talent.</p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-white relative overflow-hidden">
        {/* Subtle light pink gradient from top right */}
        <div className="absolute top-0 right-0 w-1/3 h-1/3 opacity-20" style={{ background: 'radial-gradient(circle at top right, #FCE7F3, transparent)' }}></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center" style={{ color: '#DC2626' }}>
            ABOUT THE CONFERENCE
          </h2>
          
          <div className="bg-white rounded-2xl p-8 md:p-12 shadow-xl max-w-5xl mx-auto">
            <p className="text-base md:text-lg text-gray-700 leading-relaxed mb-6">
              Pal-Swiss Tech Hub is an initiative by <strong style={{ color: '#DC2626' }}>AlNayzak</strong> in partnership with the <strong style={{ color: '#DC2626' }}>Swiss Agency for Development and Cooperation (SDC)</strong>.
            </p>
            
            <p className="text-base md:text-lg text-gray-700 leading-relaxed mb-8">
              We connect skilled Palestinian developers, QA engineers, and DevOps specialists with European companies—removing barriers of contracting, payroll, and compliance.
            </p>

            {/* Three feature boxes with red left border */}
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="bg-white rounded-xl p-6 border-l-4 shadow-md" style={{ borderLeftColor: '#DC2626', borderLeftWidth: '4px' }}>
                <div className="text-4xl mb-3">🌐</div>
                <h3 className="text-lg font-semibold text-gray-800">Global Connections</h3>
              </div>
              <div className="bg-white rounded-xl p-6 border-l-4 shadow-md" style={{ borderLeftColor: '#DC2626', borderLeftWidth: '4px' }}>
                <div className="text-4xl mb-3">🛡️</div>
                <h3 className="text-lg font-semibold text-gray-800">EU Compliance</h3>
              </div>
              <div className="bg-white rounded-xl p-6 border-l-4 shadow-md" style={{ borderLeftColor: '#DC2626', borderLeftWidth: '4px' }}>
                <div className="text-4xl mb-3">⚡</div>
                <h3 className="text-lg font-semibold text-gray-800">Rapid Deployment</h3>
              </div>
            </div>

            <p className="text-base md:text-lg text-gray-700 leading-relaxed">
              With legal entities in <strong style={{ color: '#DC2626' }}>Switzerland</strong> and the <strong style={{ color: '#DC2626' }}>U.S.</strong>, plus a co-working facility in <strong style={{ color: '#DC2626' }}>Ramallah</strong> (and a planned <strong style={{ color: '#DC2626' }}>Gaza hub</strong>), we ensure every remote hire meets European standards and operates in a secure, well-supported environment.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;

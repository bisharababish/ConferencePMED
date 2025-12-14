import { Building2, Heart, Globe } from 'lucide-react';

const Sponsorship = () => {
  // All sponsors - no tiers, just people supporting us
  const sponsors = [
    { name: 'AlNayzak', description: 'Leading organization supporting innovation and education in Palestine' },
    { name: 'Swiss Agency for Development and Cooperation', description: 'SDC supports sustainable development initiatives worldwide' },
    { name: 'Jerusalem Innovation Park', description: 'Fostering innovation and entrepreneurship in Jerusalem' },
    { name: 'Circular DESIGN', description: 'Design and technology solutions for the future' },
    { name: 'YOUMNA', description: 'Supporting youth development and education' },
    { name: 'HATA FOUNDATION', description: 'Dedicated to advancing healthcare and technology' },
  ];

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
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 drop-shadow-md">Our Sponsors & Partners</h1>
          <p className="text-white/90 text-lg md:text-xl max-w-3xl mx-auto">
            We are grateful to our sponsors and partners who make this conference possible
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-20">
        {/* All Sponsors */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-8">
            <div className="h-1 w-16 rounded-full" style={{ backgroundColor: '#DC2626' }}></div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Our Sponsors</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {sponsors.map((sponsor, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl shadow-lg border border-gray-200 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
                <div className="flex items-start gap-6">
                  <div className="bg-red-100 p-4 rounded-xl flex-shrink-0" style={{ backgroundColor: '#FEE2E2' }}>
                    <Building2 className="text-red-600" size={32} style={{ color: '#DC2626' }} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{sponsor.name}</h3>
                    <p className="text-gray-700 leading-relaxed text-sm">{sponsor.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Thank You Section */}
        <div className="bg-gradient-to-r from-red-600 to-red-700 rounded-2xl p-12 text-center shadow-2xl">
          <Heart className="text-white mx-auto mb-6" size={48} />
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Thank You to Our Sponsors</h2>
          <p className="text-white/90 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
            We extend our deepest gratitude to all our sponsors and partners who have made this conference possible. 
            Your support enables us to bring together the medical and research community to advance healthcare and innovation.
          </p>
        </div>

        {/* Become a Sponsor CTA */}
        <div className="mt-16 bg-white rounded-2xl p-10 shadow-xl border border-gray-200 text-center">
          <Globe className="text-red-600 mx-auto mb-6" size={48} />
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Interested in Becoming a Sponsor?</h2>
          <p className="text-gray-700 text-lg mb-8 max-w-2xl mx-auto">
            Join our community of forward-thinking organizations supporting medical research and innovation. 
            Contact us to learn more about sponsorship opportunities.
          </p>
          <button 
            className="bg-red-600 hover:bg-red-700 text-white font-bold py-4 px-8 rounded-lg text-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
            style={{ backgroundColor: '#DC2626' }}
            onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#B91C1C'}
            onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#DC2626'}
          >
            Contact Us
          </button>
        </div>
      </div>
    </div>
  );
};

export default Sponsorship;

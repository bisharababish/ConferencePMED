import { Award, Star, Trophy, Zap } from 'lucide-react';

const Sponsorship = () => {
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
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">Sponsorship</h1>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-16">
        <div className="bg-white p-10 rounded-lg shadow-lg mb-12">
          <h2 className="text-3xl font-bold mb-6 text-black">Why Sponsor?</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
            cupidatat non proident, sunt in culpa qui officia deserunt mollit
            anim id est laborum.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          <div className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-xl transition-shadow duration-300">
            <div className="bg-red-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Award className="text-white" size={28} />
            </div>
            <h3 className="text-xl font-bold mb-3 text-black">Brand Visibility</h3>
            <p className="text-gray-600">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-xl transition-shadow duration-300">
            <div className="bg-red-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Star className="text-white" size={28} />
            </div>
            <h3 className="text-xl font-bold mb-3 text-black">Networking</h3>
            <p className="text-gray-600">
              Ut enim ad minim veniam, quis nostrud exercitation ullamco.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-xl transition-shadow duration-300">
            <div className="bg-red-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Trophy className="text-white" size={28} />
            </div>
            <h3 className="text-xl font-bold mb-3 text-black">Recognition</h3>
            <p className="text-gray-600">
              Duis aute irure dolor in reprehenderit in voluptate velit.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-xl transition-shadow duration-300">
            <div className="bg-red-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Zap className="text-white" size={28} />
            </div>
            <h3 className="text-xl font-bold mb-3 text-black">Impact</h3>
            <p className="text-gray-600">
              Excepteur sint occaecat cupidatat non proident sunt in.
            </p>
          </div>
        </div>

        <div className="space-y-8">
          <div className="bg-gradient-to-r from-yellow-400 to-yellow-600 p-10 rounded-lg shadow-xl">
            <div className="flex items-center justify-between flex-wrap gap-4 mb-4">
              <h3 className="text-3xl font-bold text-black">Platinum Package</h3>
              <span className="text-4xl font-bold text-black">$15,000</span>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              <ul className="space-y-2 text-black">
                <li className="flex items-center">
                  <span className="text-black mr-2">✓</span>
                  Lorem ipsum dolor sit amet
                </li>
                <li className="flex items-center">
                  <span className="text-black mr-2">✓</span>
                  Consectetur adipiscing elit
                </li>
                <li className="flex items-center">
                  <span className="text-black mr-2">✓</span>
                  Sed do eiusmod tempor
                </li>
                <li className="flex items-center">
                  <span className="text-black mr-2">✓</span>
                  Incididunt ut labore
                </li>
              </ul>
              <ul className="space-y-2 text-black">
                <li className="flex items-center">
                  <span className="text-black mr-2">✓</span>
                  Et dolore magna aliqua
                </li>
                <li className="flex items-center">
                  <span className="text-black mr-2">✓</span>
                  Ut enim ad minim veniam
                </li>
                <li className="flex items-center">
                  <span className="text-black mr-2">✓</span>
                  Quis nostrud exercitation
                </li>
                <li className="flex items-center">
                  <span className="text-black mr-2">✓</span>
                  Ullamco laboris nisi
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-gradient-to-r from-gray-300 to-gray-400 p-10 rounded-lg shadow-xl">
            <div className="flex items-center justify-between flex-wrap gap-4 mb-4">
              <h3 className="text-3xl font-bold text-black">Gold Package</h3>
              <span className="text-4xl font-bold text-black">$10,000</span>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              <ul className="space-y-2 text-black">
                <li className="flex items-center">
                  <span className="text-black mr-2">✓</span>
                  Lorem ipsum dolor sit amet
                </li>
                <li className="flex items-center">
                  <span className="text-black mr-2">✓</span>
                  Consectetur adipiscing elit
                </li>
                <li className="flex items-center">
                  <span className="text-black mr-2">✓</span>
                  Sed do eiusmod tempor
                </li>
              </ul>
              <ul className="space-y-2 text-black">
                <li className="flex items-center">
                  <span className="text-black mr-2">✓</span>
                  Incididunt ut labore
                </li>
                <li className="flex items-center">
                  <span className="text-black mr-2">✓</span>
                  Et dolore magna aliqua
                </li>
                <li className="flex items-center">
                  <span className="text-black mr-2">✓</span>
                  Ut enim ad minim veniam
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-gradient-to-r from-orange-400 to-orange-600 p-10 rounded-lg shadow-xl">
            <div className="flex items-center justify-between flex-wrap gap-4 mb-4">
              <h3 className="text-3xl font-bold text-white">Silver Package</h3>
              <span className="text-4xl font-bold text-white">$5,000</span>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              <ul className="space-y-2 text-white">
                <li className="flex items-center">
                  <span className="text-white mr-2">✓</span>
                  Lorem ipsum dolor sit amet
                </li>
                <li className="flex items-center">
                  <span className="text-white mr-2">✓</span>
                  Consectetur adipiscing elit
                </li>
              </ul>
              <ul className="space-y-2 text-white">
                <li className="flex items-center">
                  <span className="text-white mr-2">✓</span>
                  Sed do eiusmod tempor
                </li>
                <li className="flex items-center">
                  <span className="text-white mr-2">✓</span>
                  Incididunt ut labore
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-gradient-to-r from-red-600 to-red-800 p-10 rounded-lg shadow-xl">
            <div className="flex items-center justify-between flex-wrap gap-4 mb-4">
              <h3 className="text-3xl font-bold text-white">Bronze Package</h3>
              <span className="text-4xl font-bold text-white">$2,500</span>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              <ul className="space-y-2 text-white">
                <li className="flex items-center">
                  <span className="text-white mr-2">✓</span>
                  Lorem ipsum dolor sit amet
                </li>
                <li className="flex items-center">
                  <span className="text-white mr-2">✓</span>
                  Consectetur adipiscing elit
                </li>
              </ul>
              <ul className="space-y-2 text-white">
                <li className="flex items-center">
                  <span className="text-white mr-2">✓</span>
                  Sed do eiusmod tempor
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-12 bg-black text-white p-10 rounded-lg shadow-lg text-center">
          <h2 className="text-3xl font-bold mb-4">Interested in Sponsoring?</h2>
          <p className="text-xl text-gray-300 mb-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Contact us
            to learn more about our sponsorship opportunities.
          </p>
          <button className="bg-red-600 hover:bg-red-700 text-white font-bold py-4 px-8 rounded-full text-lg transition-all duration-300 transform hover:scale-105 shadow-lg">
            Contact Us
          </button>
        </div>
      </div>
    </div>
  );
};

export default Sponsorship;

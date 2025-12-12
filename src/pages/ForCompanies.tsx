interface ForCompaniesProps {
  onNavigate?: (tab: string) => void;
}

const ForCompanies = ({ onNavigate }: ForCompaniesProps) => {
  return (
    <div className="min-h-screen bg-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
            For Companies
          </h1>
          <p className="text-xl text-gray-700 mb-8">
            Hire vetted developers with full compliance
          </p>

          <div className="space-y-8">
            <div className="bg-gray-50 p-8 rounded-lg">
              <h2 className="text-2xl font-semibold mb-4 text-gray-800">Why Pal-Swiss Tech Hubs?</h2>
              <ul className="space-y-4 text-gray-700">
                <li className="flex items-start">
                  <span className="text-blue-600 mr-3">✓</span>
                  <span><strong>Vetted Talent:</strong> Pre-screened Palestinian developers, QA engineers, and DevOps specialists ready to join your team</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-3">✓</span>
                  <span><strong>EU Compliance:</strong> Full legal compliance with European standards for contracts, payroll, and employment</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-3">✓</span>
                  <span><strong>Rapid Deployment:</strong> Get your team up and running quickly with our streamlined onboarding process</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-3">✓</span>
                  <span><strong>Secure Infrastructure:</strong> Co-working facility in Ramallah with reliable connectivity and support</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-3">✓</span>
                  <span><strong>Legal Entities:</strong> Established legal entities in Switzerland and the U.S. for seamless operations</span>
                </li>
              </ul>
            </div>

            <div className="bg-blue-50 p-8 rounded-lg">
              <h2 className="text-2xl font-semibold mb-4 text-gray-800">What We Handle</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-semibold mb-2 text-gray-800">Recruiting</h3>
                  <p className="text-gray-700 text-sm">We find and vet the best Palestinian tech talent for your needs</p>
                </div>
                <div>
                  <h3 className="font-semibold mb-2 text-gray-800">Contracts</h3>
                  <p className="text-gray-700 text-sm">EU-compliant contracts that protect both parties</p>
                </div>
                <div>
                  <h3 className="font-semibold mb-2 text-gray-800">Payroll</h3>
                  <p className="text-gray-700 text-sm">Seamless payroll management meeting European standards</p>
                </div>
                <div>
                  <h3 className="font-semibold mb-2 text-gray-800">Compliance</h3>
                  <p className="text-gray-700 text-sm">Full compliance with European employment and tax regulations</p>
                </div>
              </div>
            </div>

            <div className="text-center pt-8">
              <button 
                onClick={() => {
                  if (onNavigate) {
                    onNavigate('contact');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }
                }}
                className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg text-base transition-all duration-300 shadow-md hover:shadow-lg"
              >
                Get Started
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForCompanies;


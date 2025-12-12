interface ForTalentProps {
  onNavigate?: (tab: string) => void;
}

const ForTalent = ({ onNavigate }: ForTalentProps) => {
  return (
    <div className="min-h-screen bg-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
            For Talent
          </h1>
          <p className="text-xl text-gray-700 mb-8">
            Apply once, get matched with European companies
          </p>

          <div className="space-y-8">
            <div className="bg-gray-50 p-8 rounded-lg">
              <h2 className="text-2xl font-semibold mb-4 text-gray-800">Why Join Pal-Swiss Tech Hubs?</h2>
              <ul className="space-y-4 text-gray-700">
                <li className="flex items-start">
                  <span className="text-blue-600 mr-3">✓</span>
                  <span><strong>One Application:</strong> Submit your CV once and get matched with multiple European opportunities</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-3">✓</span>
                  <span><strong>European Standards:</strong> Work with companies that meet EU compliance and quality standards</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-3">✓</span>
                  <span><strong>Professional Growth:</strong> Access to cutting-edge projects and technologies</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-3">✓</span>
                  <span><strong>Secure Environment:</strong> Work from our Ramallah hub with reliable infrastructure and support</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-3">✓</span>
                  <span><strong>Community:</strong> Join a network of skilled Palestinian developers making an impact</span>
                </li>
              </ul>
            </div>

            <div className="bg-blue-50 p-8 rounded-lg">
              <h2 className="text-2xl font-semibold mb-4 text-gray-800">Who We're Looking For</h2>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center p-4 bg-white rounded-lg">
                  <div className="text-3xl mb-3">💻</div>
                  <h3 className="font-semibold mb-2 text-gray-800">Developers</h3>
                  <p className="text-gray-700 text-sm">Software developers across all stacks</p>
                </div>
                <div className="text-center p-4 bg-white rounded-lg">
                  <div className="text-3xl mb-3">🔍</div>
                  <h3 className="font-semibold mb-2 text-gray-800">QA Engineers</h3>
                  <p className="text-gray-700 text-sm">Quality assurance specialists</p>
                </div>
                <div className="text-center p-4 bg-white rounded-lg">
                  <div className="text-3xl mb-3">⚙️</div>
                  <h3 className="font-semibold mb-2 text-gray-800">DevOps</h3>
                  <p className="text-gray-700 text-sm">DevOps and infrastructure specialists</p>
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
                Submit CV
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForTalent;


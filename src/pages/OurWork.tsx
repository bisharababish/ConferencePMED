const OurWork = () => {
  return (
    <div className="min-h-screen bg-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
            Our Work & Team
          </h1>
          <p className="text-xl text-gray-700 mb-8">
            Building bridges between Palestinian talent and European innovation
          </p>

          <div className="space-y-12">
            <div className="bg-gray-50 p-8 rounded-lg">
              <h2 className="text-2xl font-semibold mb-4 text-gray-800">Our Mission</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Pal-Swiss Tech Hub is an initiative by AlNayzak in partnership with the Swiss Agency for Development and Cooperation (SDC). We're dedicated to connecting skilled Palestinian developers, QA engineers, and DevOps specialists with European companies.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Our goal is to remove barriers of contracting, payroll, and compliance, making it easy for European companies to work with Palestinian tech talent while ensuring every remote hire meets European standards.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white border border-gray-200 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-3 text-gray-800">Jenan Project</h3>
                <p className="text-gray-700">
                  Jenan serves all Palestine & region, providing comprehensive tech solutions and support to the local tech community.
                </p>
              </div>

              <div className="bg-white border border-gray-200 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-3 text-gray-800">Global Reach</h3>
                <p className="text-gray-700">
                  With legal entities in Switzerland and the U.S., plus facilities in Ramallah (and a planned Gaza hub), we ensure secure, well-supported operations.
                </p>
              </div>
            </div>

            <div className="bg-blue-50 p-8 rounded-lg">
              <h2 className="text-2xl font-semibold mb-6 text-gray-800">Our Partners</h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                <div className="text-center">
                  <div className="bg-white rounded-lg p-4 mb-2">
                    <p className="text-sm text-gray-600">AlNayzak</p>
                  </div>
                </div>
                <div className="text-center">
                  <div className="bg-white rounded-lg p-4 mb-2">
                    <p className="text-sm text-gray-600">Swiss Agency for Development and Cooperation (SDC)</p>
                  </div>
                </div>
                <div className="text-center">
                  <div className="bg-white rounded-lg p-4 mb-2">
                    <p className="text-sm text-gray-600">HATA FOUNDATION</p>
                  </div>
                </div>
                <div className="text-center">
                  <div className="bg-white rounded-lg p-4 mb-2">
                    <p className="text-sm text-gray-600">Circular Design</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 p-8 rounded-lg">
              <h2 className="text-2xl font-semibold mb-4 text-gray-800">Our Impact</h2>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-4xl font-bold text-blue-600 mb-2">100+</div>
                  <p className="text-gray-700">Talented Developers</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-blue-600 mb-2">50+</div>
                  <p className="text-gray-700">European Companies</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-blue-600 mb-2">3</div>
                  <p className="text-gray-700">Global Locations</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurWork;



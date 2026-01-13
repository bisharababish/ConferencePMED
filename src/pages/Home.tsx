import { Calendar, MapPin, Users, Award } from 'lucide-react';

interface HomeProps {
  onNavigate?: (tab: string) => void;
}

const Home = (_props: HomeProps) => {
  return (
    <div className="min-h-screen">
      <section className="relative bg-gradient-to-br from-black via-gray-900 to-red-900 text-white py-32 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
            International Conference 2025
              </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-300">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit
          </p>
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <div className="flex items-center gap-2 bg-black/50 px-6 py-3 rounded-full">
              <Calendar className="text-red-500" size={20} />
              <span>June 15-17, 2025</span>
            </div>
            <div className="flex items-center gap-2 bg-black/50 px-6 py-3 rounded-full">
              <MapPin className="text-red-500" size={20} />
              <span>Lorem City Convention Center</span>
            </div>
          </div>
          <button className="bg-red-600 hover:bg-red-700 text-white font-bold py-4 px-8 rounded-full text-lg transition-all duration-300 transform hover:scale-105 shadow-lg">
            Register Now
          </button>
        </div>
      </section>

      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-black">
            Why Attend?
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-8 rounded-lg hover:shadow-xl transition-shadow duration-300 border-2 border-gray-100">
              <div className="bg-red-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="text-white" size={32} />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-black">Networking</h3>
              <p className="text-gray-600">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
            <div className="text-center p-8 rounded-lg hover:shadow-xl transition-shadow duration-300 border-2 border-gray-100">
              <div className="bg-red-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Award className="text-white" size={32} />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-black">Excellence</h3>
              <p className="text-gray-600">
                Ut enim ad minim veniam, quis nostrud exercitation ullamco
                laboris nisi ut aliquip ex ea commodo consequat.
              </p>
            </div>
            <div className="text-center p-8 rounded-lg hover:shadow-xl transition-shadow duration-300 border-2 border-gray-100">
              <div className="bg-red-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Calendar className="text-white" size={32} />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-black">Innovation</h3>
              <p className="text-gray-600">
                Duis aute irure dolor in reprehenderit in voluptate velit esse
                cillum dolore eu fugiat nulla pariatur.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-black">
            Conference Highlights
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-2xl font-bold mb-4 text-red-600">
                Keynote Speakers
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-2xl font-bold mb-4 text-red-600">
                Workshop Sessions
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Duis aute irure dolor in reprehenderit in voluptate velit esse
                cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                cupidatat non proident, sunt in culpa qui officia deserunt
                mollit anim id est laborum.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-2xl font-bold mb-4 text-red-600">
                Panel Discussions
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                quae ab illo inventore veritatis et quasi architecto beatae
                vitae dicta sunt explicabo.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-2xl font-bold mb-4 text-red-600">
                Networking Events
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit
                aut fugit, sed quia consequuntur magni dolores eos qui ratione
                voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem
                ipsum quia dolor sit amet.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-black text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Join Us in 2025
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <button className="bg-red-600 hover:bg-red-700 text-white font-bold py-4 px-8 rounded-full text-lg transition-all duration-300 transform hover:scale-105 shadow-lg">
            Learn More
          </button>
        </div>
      </section>
    </div>
  );
};

export default Home;

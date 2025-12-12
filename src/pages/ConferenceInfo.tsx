import { Calendar, MapPin, Clock, Users } from 'lucide-react';

const ConferenceInfo = () => {
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
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
            Conference Information
          </h1>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <div className="flex items-center mb-4">
              <div className="bg-red-600 p-3 rounded-full mr-4">
                <Calendar className="text-white" size={24} />
              </div>
              <h3 className="text-2xl font-bold text-black">Dates</h3>
            </div>
            <p className="text-gray-700 text-lg">June 15-17, 2025</p>
            <p className="text-gray-600 mt-2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-lg">
            <div className="flex items-center mb-4">
              <div className="bg-red-600 p-3 rounded-full mr-4">
                <MapPin className="text-white" size={24} />
              </div>
              <h3 className="text-2xl font-bold text-black">Venue</h3>
            </div>
            <p className="text-gray-700 text-lg">Lorem City Convention Center</p>
            <p className="text-gray-600 mt-2">
              123 Lorem Street, Lorem City, LC 12345. Ut enim ad minim veniam,
              quis nostrud exercitation ullamco laboris.
            </p>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-lg">
            <div className="flex items-center mb-4">
              <div className="bg-red-600 p-3 rounded-full mr-4">
                <Clock className="text-white" size={24} />
              </div>
              <h3 className="text-2xl font-bold text-black">Schedule</h3>
            </div>
            <p className="text-gray-700 text-lg">9:00 AM - 6:00 PM Daily</p>
            <p className="text-gray-600 mt-2">
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur.
            </p>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-lg">
            <div className="flex items-center mb-4">
              <div className="bg-red-600 p-3 rounded-full mr-4">
                <Users className="text-white" size={24} />
              </div>
              <h3 className="text-2xl font-bold text-black">Attendees</h3>
            </div>
            <p className="text-gray-700 text-lg">500+ Expected Participants</p>
            <p className="text-gray-600 mt-2">
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
              officia deserunt mollit anim.
            </p>
          </div>
        </div>

        <div className="bg-white p-10 rounded-lg shadow-lg mb-16">
          <h2 className="text-3xl font-bold mb-6 text-black">About the Conference</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae
            ab illo inventore veritatis et quasi architecto beatae vitae dicta
            sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
            aspernatur aut odit aut fugit.
          </p>
          <p className="text-gray-700 leading-relaxed">
            At vero eos et accusamus et iusto odio dignissimos ducimus qui
            blanditiis praesentium voluptatum deleniti atque corrupti quos
            dolores et quas molestias excepturi sint occaecati cupiditate non
            provident, similique sunt in culpa qui officia deserunt mollitia
            animi, id est laborum et dolorum fuga.
          </p>
        </div>

        <div className="bg-white p-10 rounded-lg shadow-lg">
          <h2 className="text-3xl font-bold mb-6 text-black">Daily Schedule</h2>
          <div className="space-y-6">
            <div className="border-l-4 border-red-600 pl-6">
              <h3 className="text-xl font-bold text-black mb-2">Day 1 - June 15, 2025</h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex"><span className="font-semibold w-32">9:00 AM</span> Registration & Welcome Coffee</li>
                <li className="flex"><span className="font-semibold w-32">10:00 AM</span> Opening Ceremony</li>
                <li className="flex"><span className="font-semibold w-32">11:00 AM</span> Keynote Speech</li>
                <li className="flex"><span className="font-semibold w-32">12:30 PM</span> Lunch Break</li>
                <li className="flex"><span className="font-semibold w-32">2:00 PM</span> Panel Discussion</li>
                <li className="flex"><span className="font-semibold w-32">4:00 PM</span> Workshop Sessions</li>
                <li className="flex"><span className="font-semibold w-32">6:00 PM</span> Networking Reception</li>
              </ul>
            </div>
            <div className="border-l-4 border-red-600 pl-6">
              <h3 className="text-xl font-bold text-black mb-2">Day 2 - June 16, 2025</h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex"><span className="font-semibold w-32">9:00 AM</span> Morning Sessions</li>
                <li className="flex"><span className="font-semibold w-32">10:30 AM</span> Technical Presentations</li>
                <li className="flex"><span className="font-semibold w-32">12:30 PM</span> Lunch Break</li>
                <li className="flex"><span className="font-semibold w-32">2:00 PM</span> Parallel Workshops</li>
                <li className="flex"><span className="font-semibold w-32">4:00 PM</span> Poster Sessions</li>
                <li className="flex"><span className="font-semibold w-32">6:00 PM</span> Evening Social Event</li>
              </ul>
            </div>
            <div className="border-l-4 border-red-600 pl-6">
              <h3 className="text-xl font-bold text-black mb-2">Day 3 - June 17, 2025</h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex"><span className="font-semibold w-32">9:00 AM</span> Final Sessions</li>
                <li className="flex"><span className="font-semibold w-32">11:00 AM</span> Closing Keynote</li>
                <li className="flex"><span className="font-semibold w-32">12:30 PM</span> Lunch & Farewell</li>
                <li className="flex"><span className="font-semibold w-32">2:00 PM</span> Certificate Distribution</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConferenceInfo;

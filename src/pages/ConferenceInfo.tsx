import { Calendar, MapPin, Clock, Award, Mic, BookOpen, Network, Presentation, UserCircle, ChevronDown, ChevronUp, Users, Building } from 'lucide-react';
import { useState } from 'react';

const ConferenceInfo = () => {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  const toggleDropdown = (dropdown: string) => {
    setOpenDropdown(openDropdown === dropdown ? null : dropdown);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Header Section */}
      <div className="relative bg-gradient-to-r py-16 px-4 overflow-hidden" style={{ background: 'linear-gradient(to right, #1e3a8a, #1e40af)' }}>
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
              <span className="text-3xl md:text-4xl font-bold text-white leading-tight drop-shadow-md">JERUSALEM</span>
              <span className="text-base md:text-lg text-white leading-tight drop-shadow-md">MEDICAL & RESEARCH CONFERENCE</span>
            </div>
          </div>
          <p className="text-white/90 text-lg md:text-xl max-w-3xl mx-auto mt-4">
            Join leading medical professionals, researchers, and innovators for a day of groundbreaking discoveries and collaborative learning
          </p>
        </div>
      </div>

      {/* Quick Info Cards */}
      <div className="max-w-7xl mx-auto px-4 -mt-8 relative z-20">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100">
            <div className="flex items-center mb-4">
              <div className="bg-gradient-to-br p-3 rounded-xl mr-4 shadow-lg" style={{ background: 'linear-gradient(to bottom right, #1e3a8a, #1e40af)' }}>
                <Calendar className="text-white" size={28} />
              </div>
              <h3 className="text-xl font-bold text-gray-900">Dates</h3>
            </div>
            <p className="text-2xl font-bold text-gray-900 mb-2">30 January 2026</p>
            <p className="text-gray-600 text-sm">
              A flagship scientific event
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100">
            <div className="flex items-center mb-4">
              <div className="bg-gradient-to-br p-3 rounded-xl mr-4 shadow-lg" style={{ background: 'linear-gradient(to bottom right, #1e3a8a, #1e40af)' }}>
                <MapPin className="text-white" size={28} />
              </div>
              <h3 className="text-xl font-bold text-gray-900">Venue</h3>
            </div>
            <p className="text-xl font-bold text-gray-900 mb-2">Millennium Hotel, Ramallah</p>
            <p className="text-gray-600 text-sm">
              Located in Al-Masyoun, Ramallah
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100">
            <div className="flex items-center mb-4">
              <div className="bg-gradient-to-br p-3 rounded-xl mr-4 shadow-lg" style={{ background: 'linear-gradient(to bottom right, #1e3a8a, #1e40af)' }}>
                <Clock className="text-white" size={28} />
              </div>
              <h3 className="text-xl font-bold text-gray-900">Schedule</h3>
            </div>
            <p className="text-xl font-bold text-gray-900 mb-2">Full Day Event</p>
            <p className="text-gray-600 text-sm">
              Scientific sessions and networking
            </p>
          </div>

        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-20">
        {/* About Section */}
        <div className="bg-white rounded-2xl p-10 md:p-12 shadow-xl mb-16 border border-gray-100">
          <div className="flex items-center gap-3 mb-8">
            <div className="h-1 w-16 rounded-full" style={{ backgroundColor: '#1e3a8a' }}></div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">About the Conference</h2>
          </div>
          <div className="space-y-6">
            <p className="text-lg text-gray-700 leading-relaxed">
              The First Jerusalem Medical and Research Conference is a multidisciplinary medical and scientific conference organized by the Medical Association – Jerusalem Center, with the support of the Palestine Medical Club (PMED Club).
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              This conference marks the launch of a national platform dedicated to continuous medical education, scientific exchange, leadership development, and healthcare innovation in Palestine.
            </p>
            <div className="grid md:grid-cols-3 gap-6 mt-8">
              <div className="bg-gradient-to-br from-blue-50 to-white p-6 rounded-xl border-l-4" style={{ borderLeftColor: '#1e3a8a' }}>
                <Award className="mb-3" size={32} style={{ color: '#1e3a8a' }} />
                <h3 className="text-lg font-bold text-gray-900 mb-2">Excellence in Research</h3>
                <p className="text-gray-600 text-sm">Recognizing outstanding contributions to medical science</p>
              </div>
              <div className="bg-gradient-to-br from-blue-50 to-white p-6 rounded-xl border-l-4" style={{ borderLeftColor: '#1e3a8a' }}>
                <Network className="mb-3" size={32} style={{ color: '#1e3a8a' }} />
                <h3 className="text-lg font-bold text-gray-900 mb-2">Global Networking</h3>
                <p className="text-gray-600 text-sm">Connect with peers and leaders in the medical field</p>
              </div>
              <div className="bg-gradient-to-br from-blue-50 to-white p-6 rounded-xl border-l-4" style={{ borderLeftColor: '#1e3a8a' }}>
                <BookOpen className="mb-3" size={32} style={{ color: '#1e3a8a' }} />
                <h3 className="text-lg font-bold text-gray-900 mb-2">Continuing Education</h3>
                <p className="text-gray-600 text-sm">Earn CME credits and expand your knowledge base</p>
              </div>
            </div>
          </div>
        </div>

        {/* Conference Highlights */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-8">
            <div className="h-1 w-16 rounded-full" style={{ backgroundColor: '#1e3a8a' }}></div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Conference Highlights</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow border border-gray-100">
              <Mic className="mb-4" size={32} style={{ color: '#1e3a8a' }} />
              <h3 className="text-xl font-bold text-gray-900 mb-2">Keynote Speakers</h3>
              <p className="text-gray-600">World-renowned experts sharing insights on the latest medical breakthroughs</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow border border-gray-100">
              <Presentation className="mb-4" size={32} style={{ color: '#1e3a8a' }} />
              <h3 className="text-xl font-bold text-gray-900 mb-2">Research Presentations</h3>
              <p className="text-gray-600">Oral and poster presentations showcasing cutting-edge research findings</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow border border-gray-100">
              <UserCircle className="mb-4" size={32} style={{ color: '#1e3a8a' }} />
              <h3 className="text-xl font-bold text-gray-900 mb-2">Interactive Workshops</h3>
              <p className="text-gray-600">Hands-on sessions covering practical skills and new techniques</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow border border-gray-100">
              <Network className="mb-4" size={32} style={{ color: '#1e3a8a' }} />
              <h3 className="text-xl font-bold text-gray-900 mb-2">Networking Events</h3>
              <p className="text-gray-600">Evening receptions and social gatherings to build professional connections</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow border border-gray-100">
              <Award className="mb-4" size={32} style={{ color: '#1e3a8a' }} />
              <h3 className="text-xl font-bold text-gray-900 mb-2">Awards Ceremony</h3>
              <p className="text-gray-600">Recognizing outstanding contributions to medical research and practice</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow border border-gray-100">
              <BookOpen className="mb-4" size={32} style={{ color: '#1e3a8a' }} />
              <h3 className="text-xl font-bold text-gray-900 mb-2">CME Credits</h3>
              <p className="text-gray-600">Earn continuing medical education credits for professional development</p>
            </div>
          </div>
        </div>

        {/* Dropdown Sections */}
        <div className="space-y-4 mb-16">
          {/* Organizing Team Dropdown */}
          <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
            <button
              onClick={() => toggleDropdown('organizing')}
              className="w-full flex items-center justify-between p-6 text-left hover:bg-gray-50 transition-colors cursor-pointer"
              style={{ zIndex: 1 }}
            >
              <div className="flex items-center gap-4">
                <div className="bg-gradient-to-br p-3 rounded-xl shadow-lg" style={{ background: 'linear-gradient(to bottom right, #1e3a8a, #1e40af)' }}>
                  <Users className="text-white" size={24} />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Organizing Team</h3>
              </div>
              {openDropdown === 'organizing' ? (
                <ChevronUp size={24} style={{ color: '#1e3a8a' }} />
              ) : (
                <ChevronDown size={24} style={{ color: '#1e3a8a' }} />
              )}
            </button>
            {openDropdown === 'organizing' && (
              <div className="px-6 pb-6 border-t border-gray-200">
                <div className="pt-6 space-y-4">
                  <div>
                    <h4 className="text-xl font-bold mb-3 text-gray-900">Medical Association – Jerusalem Center</h4>
                    <p className="text-gray-700 mb-4">With the support of Palestine Medical Club (PMED Club)</p>
                  </div>
                  <div className="bg-gradient-to-br from-blue-50 to-white rounded-lg p-6 border-l-4" style={{ borderLeftColor: '#1e3a8a' }}>
                    <h5 className="font-bold mb-3 text-gray-900">Organizing Committee</h5>
                    <p className="text-gray-700 text-sm">Details about the organizing committee will be available soon.</p>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Conference Hall Dropdown */}
          <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
            <button
              onClick={() => toggleDropdown('hall')}
              className="w-full flex items-center justify-between p-6 text-left hover:bg-gray-50 transition-colors cursor-pointer"
              style={{ zIndex: 1 }}
            >
              <div className="flex items-center gap-4">
                <div className="bg-gradient-to-br p-3 rounded-xl shadow-lg" style={{ background: 'linear-gradient(to bottom right, #1e3a8a, #1e40af)' }}>
                  <Building className="text-white" size={24} />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Conference Hall</h3>
              </div>
              {openDropdown === 'hall' ? (
                <ChevronUp size={24} style={{ color: '#1e3a8a' }} />
              ) : (
                <ChevronDown size={24} style={{ color: '#1e3a8a' }} />
              )}
            </button>
            {openDropdown === 'hall' && (
              <div className="px-6 pb-6 border-t border-gray-200">
                <div className="pt-6 space-y-4">
                  <div>
                    <h4 className="text-xl font-bold mb-3 text-gray-900">Millennium Hotel Ramallah</h4>
                    <p className="text-gray-700 mb-4">Located in Al-Masyoun, Ramallah</p>
                  </div>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="bg-gradient-to-br from-blue-50 to-white rounded-lg p-4 border-l-4" style={{ borderLeftColor: '#1e3a8a' }}>
                      <h5 className="font-bold mb-2 text-gray-900">Grand Hall</h5>
                      <p className="text-gray-700 text-sm">Main conference hall for opening ceremonies and keynote sessions</p>
                    </div>
                    <div className="bg-gradient-to-br from-blue-50 to-white rounded-lg p-4 border-l-4" style={{ borderLeftColor: '#1e3a8a' }}>
                      <h5 className="font-bold mb-2 text-gray-900">Conference Rooms</h5>
                      <p className="text-gray-700 text-sm">Multiple rooms for parallel sessions and workshops</p>
                    </div>
                    <div className="bg-gradient-to-br from-blue-50 to-white rounded-lg p-4 border-l-4" style={{ borderLeftColor: '#1e3a8a' }}>
                      <h5 className="font-bold mb-2 text-gray-900">Exhibition Hall</h5>
                      <p className="text-gray-700 text-sm">Space for poster presentations and exhibitions</p>
                    </div>
                    <div className="bg-gradient-to-br from-blue-50 to-white rounded-lg p-4 border-l-4" style={{ borderLeftColor: '#1e3a8a' }}>
                      <h5 className="font-bold mb-2 text-gray-900">Workshop Rooms</h5>
                      <p className="text-gray-700 text-sm">Dedicated spaces for hands-on training sessions</p>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Schedule Dropdown */}
          <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
            <button
              onClick={() => toggleDropdown('schedule')}
              className="w-full flex items-center justify-between p-6 text-left hover:bg-gray-50 transition-colors cursor-pointer"
              style={{ zIndex: 1 }}
            >
              <div className="flex items-center gap-4">
                <div className="bg-gradient-to-br p-3 rounded-xl shadow-lg" style={{ background: 'linear-gradient(to bottom right, #1e3a8a, #1e40af)' }}>
                  <Clock className="text-white" size={24} />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Schedule</h3>
              </div>
              {openDropdown === 'schedule' ? (
                <ChevronUp size={24} style={{ color: '#1e3a8a' }} />
              ) : (
                <ChevronDown size={24} style={{ color: '#1e3a8a' }} />
              )}
            </button>
            {openDropdown === 'schedule' && (
              <div className="px-6 pb-6 border-t border-gray-200">
                <div className="pt-6">
                  <div className="space-y-10">
                    {/* Opening & Keynote Sessions */}
                    <div className="relative">
                      <div className="absolute left-0 top-0 bottom-0 w-1 rounded-full" style={{ background: 'linear-gradient(to bottom, #1e3a8a, #1e40af)' }}></div>
                      <div className="ml-8">
                        <div className="mb-6">
                          <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">Opening & Keynote Sessions</h3>
                          <p className="text-gray-600">Welcome ceremony and featured presentations</p>
                        </div>
                        <div className="bg-gray-50 rounded-xl p-6 space-y-4">
                          <div className="flex items-start gap-4">
                            <div className="px-3 py-1 rounded-lg font-bold text-sm min-w-[80px] text-center" style={{ backgroundColor: '#DBEAFE', color: '#1e3a8a' }}>9:00 AM</div>
                            <div>
                              <p className="font-semibold text-gray-900">Registration & Welcome Coffee</p>
                              <p className="text-sm text-gray-600">Main Lobby</p>
                            </div>
                          </div>
                          <div className="flex items-start gap-4">
                            <div className="bg-red-100 text-red-700 px-3 py-1 rounded-lg font-bold text-sm min-w-[80px] text-center">10:00 AM</div>
                            <div>
                              <p className="font-semibold text-gray-900">Opening Ceremony</p>
                              <p className="text-sm text-gray-600">Grand Hall</p>
                            </div>
                          </div>
                          <div className="flex items-start gap-4">
                            <div className="bg-red-100 text-red-700 px-3 py-1 rounded-lg font-bold text-sm min-w-[80px] text-center">11:00 AM</div>
                            <div>
                              <p className="font-semibold text-gray-900">Keynote Address: Future of Medical Research</p>
                              <p className="text-sm text-gray-600">Grand Hall</p>
                            </div>
                          </div>
                          <div className="flex items-start gap-4">
                            <div className="bg-red-100 text-red-700 px-3 py-1 rounded-lg font-bold text-sm min-w-[80px] text-center">12:30 PM</div>
                            <div>
                              <p className="font-semibold text-gray-900">Lunch Break</p>
                              <p className="text-sm text-gray-600">Dining Hall</p>
                            </div>
                          </div>
                          <div className="flex items-start gap-4">
                            <div className="bg-red-100 text-red-700 px-3 py-1 rounded-lg font-bold text-sm min-w-[80px] text-center">2:00 PM</div>
                            <div>
                              <p className="font-semibold text-gray-900">Panel Discussion: Emerging Technologies</p>
                              <p className="text-sm text-gray-600">Conference Room A</p>
                            </div>
                          </div>
                          <div className="flex items-start gap-4">
                            <div className="bg-red-100 text-red-700 px-3 py-1 rounded-lg font-bold text-sm min-w-[80px] text-center">4:00 PM</div>
                            <div>
                              <p className="font-semibold text-gray-900">Workshop Sessions (Parallel Tracks)</p>
                              <p className="text-sm text-gray-600">Multiple Rooms</p>
                            </div>
                          </div>
                          <div className="flex items-start gap-4">
                            <div className="bg-red-100 text-red-700 px-3 py-1 rounded-lg font-bold text-sm min-w-[80px] text-center">6:00 PM</div>
                            <div>
                              <p className="font-semibold text-gray-900">Welcome Reception & Networking</p>
                              <p className="text-sm text-gray-600">Rooftop Terrace</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Scientific Sessions */}
                    <div className="relative">
                      <div className="absolute left-0 top-0 bottom-0 w-1 rounded-full" style={{ background: 'linear-gradient(to bottom, #1e3a8a, #1e40af)' }}></div>
                      <div className="ml-8">
                        <div className="mb-6">
                          <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">Scientific Sessions</h3>
                          <p className="text-gray-600">Research presentations and technical discussions</p>
                        </div>
                        <div className="bg-gray-50 rounded-xl p-6 space-y-4">
                          <div className="flex items-start gap-4">
                            <div className="px-3 py-1 rounded-lg font-bold text-sm min-w-[80px] text-center" style={{ backgroundColor: '#DBEAFE', color: '#1e3a8a' }}>9:00 AM</div>
                            <div>
                              <p className="font-semibold text-gray-900">Morning Research Sessions</p>
                              <p className="text-sm text-gray-600">Multiple Tracks</p>
                            </div>
                          </div>
                          <div className="flex items-start gap-4">
                            <div className="bg-red-100 text-red-700 px-3 py-1 rounded-lg font-bold text-sm min-w-[80px] text-center">10:30 AM</div>
                            <div>
                              <p className="font-semibold text-gray-900">Technical Presentations</p>
                              <p className="text-sm text-gray-600">Conference Rooms A & B</p>
                            </div>
                          </div>
                          <div className="flex items-start gap-4">
                            <div className="bg-red-100 text-red-700 px-3 py-1 rounded-lg font-bold text-sm min-w-[80px] text-center">12:30 PM</div>
                            <div>
                              <p className="font-semibold text-gray-900">Lunch Break</p>
                              <p className="text-sm text-gray-600">Dining Hall</p>
                            </div>
                          </div>
                          <div className="flex items-start gap-4">
                            <div className="bg-red-100 text-red-700 px-3 py-1 rounded-lg font-bold text-sm min-w-[80px] text-center">2:00 PM</div>
                            <div>
                              <p className="font-semibold text-gray-900">Parallel Workshop Sessions</p>
                              <p className="text-sm text-gray-600">Workshop Rooms 1-4</p>
                            </div>
                          </div>
                          <div className="flex items-start gap-4">
                            <div className="bg-red-100 text-red-700 px-3 py-1 rounded-lg font-bold text-sm min-w-[80px] text-center">4:00 PM</div>
                            <div>
                              <p className="font-semibold text-gray-900">Poster Sessions & Exhibition</p>
                              <p className="text-sm text-gray-600">Exhibition Hall</p>
                            </div>
                          </div>
                          <div className="flex items-start gap-4">
                            <div className="bg-red-100 text-red-700 px-3 py-1 rounded-lg font-bold text-sm min-w-[80px] text-center">6:00 PM</div>
                            <div>
                              <p className="font-semibold text-gray-900">Evening Social Event</p>
                              <p className="text-sm text-gray-600">Cultural Center</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Workshops & Closing */}
                    <div className="relative">
                      <div className="absolute left-0 top-0 bottom-0 w-1 rounded-full" style={{ background: 'linear-gradient(to bottom, #1e3a8a, #1e40af)' }}></div>
                      <div className="ml-8">
                        <div className="mb-6">
                          <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">Workshops & Closing</h3>
                          <p className="text-gray-600">Interactive workshops, awards ceremony, and closing events</p>
                        </div>
                        <div className="bg-gray-50 rounded-xl p-6 space-y-4">
                          <div className="flex items-start gap-4">
                            <div className="px-3 py-1 rounded-lg font-bold text-sm min-w-[80px] text-center" style={{ backgroundColor: '#DBEAFE', color: '#1e3a8a' }}>9:00 AM</div>
                            <div>
                              <p className="font-semibold text-gray-900">Final Research Sessions</p>
                              <p className="text-sm text-gray-600">Multiple Tracks</p>
                            </div>
                          </div>
                          <div className="flex items-start gap-4">
                            <div className="bg-red-100 text-red-700 px-3 py-1 rounded-lg font-bold text-sm min-w-[80px] text-center">11:00 AM</div>
                            <div>
                              <p className="font-semibold text-gray-900">Closing Keynote: Looking Forward</p>
                              <p className="text-sm text-gray-600">Grand Hall</p>
                            </div>
                          </div>
                          <div className="flex items-start gap-4">
                            <div className="bg-red-100 text-red-700 px-3 py-1 rounded-lg font-bold text-sm min-w-[80px] text-center">12:30 PM</div>
                            <div>
                              <p className="font-semibold text-gray-900">Farewell Lunch & Awards Ceremony</p>
                              <p className="text-sm text-gray-600">Grand Hall</p>
                            </div>
                          </div>
                          <div className="flex items-start gap-4">
                            <div className="bg-red-100 text-red-700 px-3 py-1 rounded-lg font-bold text-sm min-w-[80px] text-center">2:00 PM</div>
                            <div>
                              <p className="font-semibold text-gray-900">Certificate Distribution & Closing Remarks</p>
                              <p className="text-sm text-gray-600">Main Lobby</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConferenceInfo;

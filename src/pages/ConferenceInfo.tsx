import { Calendar, MapPin, Clock, Award, Mic, BookOpen, Network, Presentation, UserCircle, ChevronDown, ChevronUp, Users, Building } from 'lucide-react';
import { useState } from 'react';

interface ConferenceInfoProps {
  section?: 'about' | 'team' | 'hall';
}

const ConferenceInfo = ({ section = 'about' }: ConferenceInfoProps) => {

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
        {section === 'about' && (
          <>
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
          </>
        )}

        {section === 'team' && (
          <div className="bg-white rounded-2xl p-10 md:p-12 shadow-xl mb-16 border border-gray-100">
            {/* Centered Title */}
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-12">
              Conference Organizing Committee
            </h2>

            {/* Featured Member Card (Single, Centered) */}
            <div className="flex justify-center mb-12">
              <div className="w-64 bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                <div className="aspect-square bg-gradient-to-br from-blue-50 to-white flex items-center justify-center">
                  <img 
                    src="/Sameer Mtour.jpeg" 
                    alt="Sameer Mtour" 
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      (e.target as HTMLImageElement).style.display = 'none';
                      (e.target as HTMLImageElement).nextElementSibling?.classList.remove('hidden');
                    }}
                  />
                  <div className="hidden w-full h-full bg-gradient-to-br from-blue-100 to-blue-50 flex items-center justify-center">
                    <Users size={64} style={{ color: '#1e3a8a', opacity: 0.5 }} />
                  </div>
                </div>
                <div className="p-4 text-center">
                  <h3 className="font-bold text-lg text-gray-900">Sameer Mtour</h3>
                  <p className="text-sm text-gray-600 mt-1">Conference Chair</p>
                </div>
              </div>
            </div>

            {/* Team Members Row */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
              {/* Vice Chair */}
              <div 
                className="bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
              >
                <div className="aspect-square bg-gradient-to-br from-blue-50 to-white flex items-center justify-center">
                  <img 
                    src="/Tasneem Badwan.jpeg" 
                    alt="Tasneem Badwan" 
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      (e.target as HTMLImageElement).style.display = 'none';
                      (e.target as HTMLImageElement).nextElementSibling?.classList.remove('hidden');
                    }}
                  />
                  <div className="hidden w-full h-full bg-gradient-to-br from-blue-100 to-blue-50 flex items-center justify-center">
                    <Users size={48} style={{ color: '#1e3a8a', opacity: 0.5 }} />
                  </div>
                </div>
                <div className="p-3 text-center">
                  <h3 className="font-semibold text-sm text-gray-900">Tasneem Badwan</h3>
                  <p className="text-xs text-gray-600 mt-1">Vice Chair</p>
                </div>
              </div>

              {/* Raid Obeid - Scientific committee */}
              <div 
                className="bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
              >
                <div className="aspect-square bg-gradient-to-br from-blue-50 to-white flex items-center justify-center">
                  <img 
                    src="/Raid Obeid.jpeg" 
                    alt="Raid Obeid" 
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      (e.target as HTMLImageElement).style.display = 'none';
                      (e.target as HTMLImageElement).nextElementSibling?.classList.remove('hidden');
                    }}
                  />
                  <div className="hidden w-full h-full bg-gradient-to-br from-blue-100 to-blue-50 flex items-center justify-center">
                    <Users size={48} style={{ color: '#1e3a8a', opacity: 0.5 }} />
                  </div>
                </div>
                <div className="p-3 text-center">
                  <h3 className="font-semibold text-sm text-gray-900">Raid Obeid</h3>
                  <p className="text-xs text-gray-600 mt-1">Scientific Committee</p>
                </div>
              </div>

              {/* Ahmad Abu Khalil - External relation and partnership Committee */}
              <div 
                className="bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
              >
                <div className="aspect-square bg-gradient-to-br from-blue-50 to-white flex items-center justify-center">
                  <img 
                    src="/Ahmad Abu Khalil.jpeg" 
                    alt="Ahmad Abu Khalil" 
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      (e.target as HTMLImageElement).style.display = 'none';
                      (e.target as HTMLImageElement).nextElementSibling?.classList.remove('hidden');
                    }}
                  />
                  <div className="hidden w-full h-full bg-gradient-to-br from-blue-100 to-blue-50 flex items-center justify-center">
                    <Users size={48} style={{ color: '#1e3a8a', opacity: 0.5 }} />
                  </div>
                </div>
                <div className="p-3 text-center">
                  <h3 className="font-semibold text-sm text-gray-900">Ahmad Abu Khalil</h3>
                  <p className="text-xs text-gray-600 mt-1">External Relation and Partnership Committee</p>
                </div>
              </div>

              {/* Ahmad Romana - Education Committee */}
              <div 
                className="bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
              >
                <div className="aspect-square bg-gradient-to-br from-blue-50 to-white flex items-center justify-center">
                  <img 
                    src="/Ahmad Romana.jpeg" 
                    alt="Ahmad Romana" 
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      (e.target as HTMLImageElement).style.display = 'none';
                      (e.target as HTMLImageElement).nextElementSibling?.classList.remove('hidden');
                    }}
                  />
                  <div className="hidden w-full h-full bg-gradient-to-br from-blue-100 to-blue-50 flex items-center justify-center">
                    <Users size={48} style={{ color: '#1e3a8a', opacity: 0.5 }} />
                  </div>
                </div>
                <div className="p-3 text-center">
                  <h3 className="font-semibold text-sm text-gray-900">Ahmad Romana</h3>
                  <p className="text-xs text-gray-600 mt-1">Education Committee</p>
                </div>
              </div>

              {/* Mohammad Majd - Treasurer */}
              <div 
                className="bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
              >
                <div className="aspect-square bg-gradient-to-br from-blue-50 to-white flex items-center justify-center">
                  <img 
                    src="/Mohammad Majd.jpeg" 
                    alt="Mohammad Majd" 
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      (e.target as HTMLImageElement).style.display = 'none';
                      (e.target as HTMLImageElement).nextElementSibling?.classList.remove('hidden');
                    }}
                  />
                  <div className="hidden w-full h-full bg-gradient-to-br from-blue-100 to-blue-50 flex items-center justify-center">
                    <Users size={48} style={{ color: '#1e3a8a', opacity: 0.5 }} />
                  </div>
                </div>
                <div className="p-3 text-center">
                  <h3 className="font-semibold text-sm text-gray-900">Mohammad Majd</h3>
                  <p className="text-xs text-gray-600 mt-1">Treasurer</p>
                </div>
              </div>

              {/* Salahaldeen deeb - Scientific committee */}
              <div 
                className="bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
              >
                <div className="aspect-square bg-gradient-to-br from-blue-50 to-white flex items-center justify-center relative">
                  <img 
                    src="/Salahaldeen deeb.jpeg" 
                    alt="Salahaldeen deeb" 
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.style.display = 'none';
                      const placeholder = target.nextElementSibling as HTMLElement;
                      if (placeholder) placeholder.classList.remove('hidden');
                    }}
                  />
                  <div className="hidden absolute inset-0 w-full h-full bg-gradient-to-br from-blue-100 to-blue-50 flex items-center justify-center">
                    <Users size={48} style={{ color: '#1e3a8a', opacity: 0.5 }} />
                  </div>
                </div>
                <div className="p-3 text-center">
                  <h3 className="font-semibold text-sm text-gray-900">Salahaldeen deeb</h3>
                  <p className="text-xs text-gray-600 mt-1">Scientific Committee</p>
                </div>
              </div>

              {/* Ruaa Ghaben - organising and operations Committee team */}
              <div 
                className="bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
              >
                <div className="aspect-square bg-gradient-to-br from-blue-50 to-white flex items-center justify-center relative">
                  <img 
                    src="/Ruaa Ghaben.jpeg" 
                    alt="Ruaa Ghaben" 
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.style.display = 'none';
                      const placeholder = target.nextElementSibling as HTMLElement;
                      if (placeholder) placeholder.classList.remove('hidden');
                    }}
                  />
                  <div className="hidden absolute inset-0 w-full h-full bg-gradient-to-br from-blue-100 to-blue-50 flex items-center justify-center">
                    <Users size={48} style={{ color: '#1e3a8a', opacity: 0.5 }} />
                  </div>
                </div>
                <div className="p-3 text-center">
                  <h3 className="font-semibold text-sm text-gray-900">Ruaa Ghaben</h3>
                  <p className="text-xs text-gray-600 mt-1">Organising and Operations Committee</p>
                </div>
              </div>

              {/* Dania Manasra - organising and operations Committee team */}
              <div 
                className="bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
              >
                <div className="aspect-square bg-gradient-to-br from-blue-50 to-white flex items-center justify-center">
                  <img 
                    src="/Dania Manasra.jpeg" 
                    alt="Dania Manasra" 
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      (e.target as HTMLImageElement).style.display = 'none';
                      (e.target as HTMLImageElement).nextElementSibling?.classList.remove('hidden');
                    }}
                  />
                  <div className="hidden w-full h-full bg-gradient-to-br from-blue-100 to-blue-50 flex items-center justify-center">
                    <Users size={48} style={{ color: '#1e3a8a', opacity: 0.5 }} />
                  </div>
                </div>
                <div className="p-3 text-center">
                  <h3 className="font-semibold text-sm text-gray-900">Dania Manasra</h3>
                  <p className="text-xs text-gray-600 mt-1">Organising and Operations Committee</p>
                </div>
              </div>

              {/* Nagham Noman - organising and operations Committee team */}
              <div 
                className="bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
              >
                <div className="aspect-square bg-gradient-to-br from-blue-50 to-white flex items-center justify-center">
                  <img 
                    src="/Nagham Noman .jpeg" 
                    alt="Nagham Noman" 
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      (e.target as HTMLImageElement).style.display = 'none';
                      (e.target as HTMLImageElement).nextElementSibling?.classList.remove('hidden');
                    }}
                  />
                  <div className="hidden w-full h-full bg-gradient-to-br from-blue-100 to-blue-50 flex items-center justify-center">
                    <Users size={48} style={{ color: '#1e3a8a', opacity: 0.5 }} />
                  </div>
                </div>
                <div className="p-3 text-center">
                  <h3 className="font-semibold text-sm text-gray-900">Nagham Noman</h3>
                  <p className="text-xs text-gray-600 mt-1">Organising and Operations Committee</p>
                </div>
              </div>

              {/* Shaima Khateeb - Education Committee */}
              <div 
                className="bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
              >
                <div className="aspect-square bg-gradient-to-br from-blue-50 to-white flex items-center justify-center">
                  <img 
                    src="/Shaima Khateeb.jpeg" 
                    alt="Shaima Khateeb" 
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      (e.target as HTMLImageElement).style.display = 'none';
                      (e.target as HTMLImageElement).nextElementSibling?.classList.remove('hidden');
                    }}
                  />
                  <div className="hidden w-full h-full bg-gradient-to-br from-blue-100 to-blue-50 flex items-center justify-center">
                    <Users size={48} style={{ color: '#1e3a8a', opacity: 0.5 }} />
                  </div>
                </div>
                <div className="p-3 text-center">
                  <h3 className="font-semibold text-sm text-gray-900">Shaima Khateeb</h3>
                  <p className="text-xs text-gray-600 mt-1">Education Committee</p>
                </div>
              </div>

              {/* Alhareth M. Amro - Scientific Committee */}
              <div 
                className="bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
              >
                <div className="aspect-square bg-gradient-to-br from-blue-50 to-white flex items-center justify-center">
                  <img 
                    src="/Alhareth M. Amro .jpeg" 
                    alt="Alhareth M. Amro" 
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      (e.target as HTMLImageElement).style.display = 'none';
                      (e.target as HTMLImageElement).nextElementSibling?.classList.remove('hidden');
                    }}
                  />
                  <div className="hidden w-full h-full bg-gradient-to-br from-blue-100 to-blue-50 flex items-center justify-center">
                    <Users size={48} style={{ color: '#1e3a8a', opacity: 0.5 }} />
                  </div>
                </div>
                <div className="p-3 text-center">
                  <h3 className="font-semibold text-sm text-gray-900">Alhareth M. Amro</h3>
                  <p className="text-xs text-gray-600 mt-1">Scientific Committee</p>
                </div>
              </div>

              {/* Olga Ramahi - Scientific and educational committee */}
              <div 
                className="bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
              >
                <div className="aspect-square bg-gradient-to-br from-blue-50 to-white flex items-center justify-center">
                  <img 
                    src="/Olga Ramah.jpeg" 
                    alt="Olga Ramahi" 
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      (e.target as HTMLImageElement).style.display = 'none';
                      (e.target as HTMLImageElement).nextElementSibling?.classList.remove('hidden');
                    }}
                  />
                  <div className="hidden w-full h-full bg-gradient-to-br from-blue-100 to-blue-50 flex items-center justify-center">
                    <Users size={48} style={{ color: '#1e3a8a', opacity: 0.5 }} />
                  </div>
                </div>
                <div className="p-3 text-center">
                  <h3 className="font-semibold text-sm text-gray-900">Olga Ramahi</h3>
                  <p className="text-xs text-gray-600 mt-1">Scientific and Educational Committee</p>
                </div>
              </div>

              {/* Lujain Bdeir - Social media team Media committee */}
              <div 
                className="bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
              >
                <div className="aspect-square bg-gradient-to-br from-blue-50 to-white flex items-center justify-center">
                  <img 
                    src="/Lujain Bdeir.jpeg" 
                    alt="Lujain Bdeir" 
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      (e.target as HTMLImageElement).style.display = 'none';
                      (e.target as HTMLImageElement).nextElementSibling?.classList.remove('hidden');
                    }}
                  />
                  <div className="hidden w-full h-full bg-gradient-to-br from-blue-100 to-blue-50 flex items-center justify-center">
                    <Users size={48} style={{ color: '#1e3a8a', opacity: 0.5 }} />
                  </div>
                </div>
                <div className="p-3 text-center">
                  <h3 className="font-semibold text-sm text-gray-900">Lujain Bdeir</h3>
                  <p className="text-xs text-gray-600 mt-1">Social Media Team - Media Committee</p>
                </div>
              </div>

              {/* Aya N.Allouzi - organising and operations Committee team */}
              <div 
                className="bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
              >
                <div className="aspect-square bg-gradient-to-br from-blue-50 to-white flex items-center justify-center">
                  <img 
                    src="/Aya N.Allouzi.jpeg" 
                    alt="Aya N.Allouzi" 
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      (e.target as HTMLImageElement).style.display = 'none';
                      (e.target as HTMLImageElement).nextElementSibling?.classList.remove('hidden');
                    }}
                  />
                  <div className="hidden w-full h-full bg-gradient-to-br from-blue-100 to-blue-50 flex items-center justify-center">
                    <Users size={48} style={{ color: '#1e3a8a', opacity: 0.5 }} />
                  </div>
                </div>
                <div className="p-3 text-center">
                  <h3 className="font-semibold text-sm text-gray-900">Aya N.Allouzi</h3>
                  <p className="text-xs text-gray-600 mt-1">Organising and Operations Committee</p>
                </div>
              </div>

              {/* Tala Ikhzamia - organising and operations Committee team */}
              <div 
                className="bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
              >
                <div className="aspect-square bg-gradient-to-br from-blue-50 to-white flex items-center justify-center">
                  <img 
                    src="/Tala Ikhzamia.jpeg" 
                    alt="Tala Ikhzamia" 
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      (e.target as HTMLImageElement).style.display = 'none';
                      (e.target as HTMLImageElement).nextElementSibling?.classList.remove('hidden');
                    }}
                  />
                  <div className="hidden w-full h-full bg-gradient-to-br from-blue-100 to-blue-50 flex items-center justify-center">
                    <Users size={48} style={{ color: '#1e3a8a', opacity: 0.5 }} />
                  </div>
                </div>
                <div className="p-3 text-center">
                  <h3 className="font-semibold text-sm text-gray-900">Tala Ikhzamia</h3>
                  <p className="text-xs text-gray-600 mt-1">Organising and Operations Committee</p>
                </div>
              </div>

              {/* Hala Manasra - organising and operations Committee team */}
              <div 
                className="bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
              >
                <div className="aspect-square bg-gradient-to-br from-blue-50 to-white flex items-center justify-center">
                  <img 
                    src="/Hala Manasra.jpeg" 
                    alt="Hala Manasra" 
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      (e.target as HTMLImageElement).style.display = 'none';
                      (e.target as HTMLImageElement).nextElementSibling?.classList.remove('hidden');
                    }}
                  />
                  <div className="hidden w-full h-full bg-gradient-to-br from-blue-100 to-blue-50 flex items-center justify-center">
                    <Users size={48} style={{ color: '#1e3a8a', opacity: 0.5 }} />
                  </div>
                </div>
                <div className="p-3 text-center">
                  <h3 className="font-semibold text-sm text-gray-900">Hala Manasra</h3>
                  <p className="text-xs text-gray-600 mt-1">Organising and Operations Committee</p>
                </div>
              </div>

              {/* Mohammad omar - organising and operations Committee team */}
              <div 
                className="bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
              >
                <div className="aspect-square bg-gradient-to-br from-blue-50 to-white flex items-center justify-center">
                  <img 
                    src="/Mohammad omar.jpeg" 
                    alt="Mohammad omar" 
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      (e.target as HTMLImageElement).style.display = 'none';
                      (e.target as HTMLImageElement).nextElementSibling?.classList.remove('hidden');
                    }}
                  />
                  <div className="hidden w-full h-full bg-gradient-to-br from-blue-100 to-blue-50 flex items-center justify-center">
                    <Users size={48} style={{ color: '#1e3a8a', opacity: 0.5 }} />
                  </div>
                </div>
                <div className="p-3 text-center">
                  <h3 className="font-semibold text-sm text-gray-900">Mohammad omar</h3>
                  <p className="text-xs text-gray-600 mt-1">Organising and Operations Committee</p>
                </div>
              </div>

              {/* Abdallah salah aldeen - organising and operations Committee team */}
              <div 
                className="bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
              >
                <div className="aspect-square bg-gradient-to-br from-blue-50 to-white flex items-center justify-center">
                  <img 
                    src="/Abdallah salah .jpeg" 
                    alt="Abdallah salah aldeen" 
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      (e.target as HTMLImageElement).style.display = 'none';
                      (e.target as HTMLImageElement).nextElementSibling?.classList.remove('hidden');
                    }}
                  />
                  <div className="hidden w-full h-full bg-gradient-to-br from-blue-100 to-blue-50 flex items-center justify-center">
                    <Users size={48} style={{ color: '#1e3a8a', opacity: 0.5 }} />
                  </div>
                </div>
                <div className="p-3 text-center">
                  <h3 className="font-semibold text-sm text-gray-900">Abdallah salah aldeen</h3>
                  <p className="text-xs text-gray-600 mt-1">Organising and Operations Committee</p>
                </div>
              </div>

              {/* Ashwaq Khalayfeh - organising and operations Committee team */}
              <div 
                className="bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
              >
                <div className="aspect-square bg-gradient-to-br from-blue-50 to-white flex items-center justify-center">
                  <img 
                    src="/Ashwaq Khalayfeh.jpeg" 
                    alt="Ashwaq Khalayfeh" 
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      (e.target as HTMLImageElement).style.display = 'none';
                      (e.target as HTMLImageElement).nextElementSibling?.classList.remove('hidden');
                    }}
                  />
                  <div className="hidden w-full h-full bg-gradient-to-br from-blue-100 to-blue-50 flex items-center justify-center">
                    <Users size={48} style={{ color: '#1e3a8a', opacity: 0.5 }} />
                  </div>
                </div>
                <div className="p-3 text-center">
                  <h3 className="font-semibold text-sm text-gray-900">Ashwaq Khalayfeh</h3>
                  <p className="text-xs text-gray-600 mt-1">Organising and Operations Committee</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {section === 'hall' && (
          <div className="bg-white rounded-2xl p-10 md:p-12 shadow-xl mb-16 border border-gray-100">
            <div className="flex items-center gap-3 mb-8">
              <div className="h-1 w-16 rounded-full" style={{ backgroundColor: '#1e3a8a' }}></div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Conference Hall</h2>
            </div>
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">Millennium Hotel Ramallah</h3>
                <p className="text-gray-700 mb-4">Located in Al-Masyoun, Ramallah</p>
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-gradient-to-br from-blue-50 to-white rounded-lg p-4 border-l-4" style={{ borderLeftColor: '#1e3a8a' }}>
                  <h4 className="font-bold mb-2 text-gray-900">Grand Hall</h4>
                  <p className="text-gray-700 text-sm">Main conference hall for opening ceremonies and keynote sessions</p>
                </div>
                <div className="bg-gradient-to-br from-blue-50 to-white rounded-lg p-4 border-l-4" style={{ borderLeftColor: '#1e3a8a' }}>
                  <h4 className="font-bold mb-2 text-gray-900">Conference Rooms</h4>
                  <p className="text-gray-700 text-sm">Multiple rooms for parallel sessions and workshops</p>
                </div>
                <div className="bg-gradient-to-br from-blue-50 to-white rounded-lg p-4 border-l-4" style={{ borderLeftColor: '#1e3a8a' }}>
                  <h4 className="font-bold mb-2 text-gray-900">Exhibition Hall</h4>
                  <p className="text-gray-700 text-sm">Space for poster presentations and exhibitions</p>
                </div>
                <div className="bg-gradient-to-br from-blue-50 to-white rounded-lg p-4 border-l-4" style={{ borderLeftColor: '#1e3a8a' }}>
                  <h4 className="font-bold mb-2 text-gray-900">Workshop Rooms</h4>
                  <p className="text-gray-700 text-sm">Dedicated spaces for hands-on training sessions</p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ConferenceInfo;

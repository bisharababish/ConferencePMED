import { useState, useEffect, useMemo } from 'react';

interface HomeProps {
  onNavigate?: (tab: string) => void;
}

const Home = ({ onNavigate }: HomeProps) => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    // FIXED target date - January 30, 2026 at midnight
    // This date never changes, so the countdown is consistent across page refreshes
    const targetDate = new Date('2026-01-30T00:00:00');
    const targetTime = targetDate.getTime();

    // Log target date for verification (only in development)
    if (import.meta.env.DEV) {
      console.log('Countdown target date:', targetDate.toLocaleString());
      console.log('Current date:', new Date().toLocaleString());
    }

    const updateCountdown = () => {
      // Get current real-time from browser clock
      const now = new Date().getTime();
      const difference = targetTime - now;

      if (difference > 0) {
        // Calculate time components from real-time difference
        const totalSeconds = Math.floor(difference / 1000);
        const days = Math.floor(totalSeconds / 86400); // 60 * 60 * 24
        const hours = Math.floor((totalSeconds % 86400) / 3600); // 60 * 60
        const minutes = Math.floor((totalSeconds % 3600) / 60);
        const seconds = totalSeconds % 60;

        // Log days for verification (only in development, first time)
        if (import.meta.env.DEV && days > 0) {
          console.log(`Days remaining: ${days}, Hours: ${hours}, Minutes: ${minutes}, Seconds: ${seconds}`);
        }

        setTimeLeft({
          days,
          hours,
          minutes,
          seconds,
        });
      } else {
        // Countdown finished
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };

    // Update immediately on mount with real-time calculation
    updateCountdown();

    // Update every 100ms (10 times per second) for fast, smooth countdown
    const interval = setInterval(updateCountdown, 1000);

    return () => clearInterval(interval);
  }, []);

  // Generate fixed line positions that don't change on re-render
  const fixedLines = useMemo(() => {
    // Use a seeded random function for consistent positions
    let seed = 12345;
    const seededRandom = () => {
      seed = (seed * 9301 + 49297) % 233280;
      return seed / 233280;
    };

    return Array.from({ length: 30 }, (_, i) => ({
      x1: `${seededRandom() * 100}%`,
      y1: `${seededRandom() * 100}%`,
      x2: `${seededRandom() * 100}%`,
      y2: `${seededRandom() * 100}%`,
    }));
  }, []);

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
                  backgroundColor: '#1e3a8a',
                  opacity: Math.random() * 0.6 + 0.2,
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 5}s`,
                  animationDuration: `${Math.random() * 15 + 10}s`,
                }}
              />
            ))}
            {/* Connecting lines - static with fixed positions */}
            <svg className="absolute inset-0 w-full h-full" style={{ opacity: 0.15 }}>
              {fixedLines.map((line, i) => (
                <line
                  key={i}
                  x1={line.x1}
                  y1={line.y1}
                  x2={line.x2}
                  y2={line.y2}
                  stroke="#DC2626"
                  strokeWidth="1"
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
                <span className="px-4 py-1.5 rounded-full text-sm font-medium" style={{ backgroundColor: '#FEF3C7', color: '#92400E' }}>
                  Innovation, Leadership, and Lifelong Learning in Healthcare
                </span>
              </div>

              {/* Headline */}
              <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight">
                <span className="text-black">The First</span>{' '}
                <span style={{ color: '#1e3a8a' }}>Jerusalem Medical and Research</span>{' '}
                <span style={{ color: '#1e3a8a' }}>Conference</span>
              </h1>

              {/* Date and Venue Info */}
              <div className="space-y-2">
                <div className="flex items-center gap-3 text-lg text-gray-700">
                  <svg className="w-5 h-5" style={{ color: '#1e3a8a' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  <span className="font-semibold">30 January 2026</span>
                </div>
                <div className="flex items-center gap-3 text-lg text-gray-700">
                  <svg className="w-5 h-5" style={{ color: '#1e3a8a' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span className="font-semibold">Millennium Hotel, Ramallah</span>
                </div>
              </div>

              {/* Body paragraph */}
              <p className="text-lg md:text-xl text-gray-700 leading-relaxed max-w-2xl">
                A flagship scientific event bringing together the Palestinian medical community to advance healthcare through education, research, innovation, and collaboration.
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
                  style={{ backgroundColor: '#1e3a8a' }}
                  onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#1e40af'}
                  onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#1e3a8a'}
                >
                  Register Now
                </button>
                <button
                  onClick={() => {
                    if (onNavigate) {
                      onNavigate('submissions');
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }
                  }}
                  className="bg-white border-2 font-semibold py-3 px-8 rounded-lg text-base transition-all duration-300 hover:bg-gray-50"
                  style={{ borderColor: '#1e3a8a', color: '#1e3a8a' }}
                >
                  Submit an Abstract
                </button>
                <button
                  onClick={() => {
                    if (onNavigate) {
                      onNavigate('conference');
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }
                  }}
                  className="bg-white border-2 font-semibold py-3 px-8 rounded-lg text-base transition-all duration-300 hover:bg-gray-50"
                  style={{ borderColor: '#1e3a8a', color: '#1e3a8a' }}
                >
                  View Program
                </button>
              </div>
            </div>

            {/* Right Side - Image */}
            <div className="relative space-y-6">
              <div className="rounded-xl overflow-hidden relative shadow-2xl transform hover:scale-[1.02] transition-transform duration-300" style={{ zIndex: 10 }}>
                <img
                  src="/image.jpeg"
                  alt="Jerusalem Medical Conference 2026"
                  className="w-full h-full object-cover aspect-[4/3] block"
                  style={{ minHeight: '300px' }}
                />
                {/* Decorative corner elements */}
                <div className="absolute top-0 left-0 w-20 h-20 border-t-4 border-l-4 rounded-tl-xl" style={{ borderColor: '#1e3a8a', opacity: 0.3 }}></div>
                <div className="absolute bottom-0 right-0 w-20 h-20 border-b-4 border-r-4 rounded-br-xl" style={{ borderColor: '#1e3a8a', opacity: 0.3 }}></div>
              </div>

              {/* Countdown Timer */}
              <div className="bg-gradient-to-br from-blue-50 to-white rounded-xl p-6 shadow-lg border-2" style={{ borderColor: '#1e3a8a' }}>
                <h3 className="text-xl font-bold text-center mb-4" style={{ color: '#1e3a8a' }}>
                  Conference Starts In
                </h3>
                <div className="grid grid-cols-4 gap-3">
                  <div className="text-center">
                    <div className="bg-white rounded-lg p-4 shadow-md border-2" style={{ borderColor: '#1e3a8a' }}>
                      <div className="text-3xl font-bold" style={{ color: '#1e3a8a' }}>
                        {timeLeft.days}
                      </div>
                      <div className="text-xs font-medium text-gray-600 mt-1">Days</div>
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="bg-white rounded-lg p-4 shadow-md border-2" style={{ borderColor: '#1e3a8a' }}>
                      <div className="text-3xl font-bold" style={{ color: '#1e3a8a' }}>
                        {timeLeft.hours}
                      </div>
                      <div className="text-xs font-medium text-gray-600 mt-1">Hours</div>
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="bg-white rounded-lg p-4 shadow-md border-2" style={{ borderColor: '#1e3a8a' }}>
                      <div className="text-3xl font-bold" style={{ color: '#1e3a8a' }}>
                        {timeLeft.minutes}
                      </div>
                      <div className="text-xs font-medium text-gray-600 mt-1">Minutes</div>
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="bg-white rounded-lg p-4 shadow-md border-2" style={{ borderColor: '#1e3a8a' }}>
                      <div className="text-3xl font-bold" style={{ color: '#1e3a8a' }}>
                        {timeLeft.seconds}
                      </div>
                      <div className="text-xs font-medium text-gray-600 mt-1">Seconds</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trusted By Section */}
      <section className="py-8 sm:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-xl sm:text-2xl font-bold text-center mb-6 sm:mb-12" style={{ color: '#1e3a8a' }}>Trusted By</h2>
          
          {/* Mobile: Static Grid Layout */}
          <div className="block md:hidden w-full">
            <div className="grid grid-cols-2 gap-3 sm:gap-4 mb-8 w-full">
              {[
                { name: 'بنك العربي', nameEn: 'Arab Bank', image: '/arab bank.jpg', id: 1 },
                { name: 'وزارة الصحة', nameEn: 'Ministry of Health', image: '/ministry of health.jpeg', id: 2 },
                { name: 'نقابة الاطباء', nameEn: 'Doctors Union', image: '/doctor union.jpeg', id: 3 },
                { name: 'PMED', nameEn: 'Palestine Medical Club', image: '/pmed.jpeg', id: 4 },
              ].map((logo) => (
                <div
                  key={logo.id}
                  className="bg-white rounded-lg p-3 sm:p-4 h-[140px] sm:h-[160px] w-full flex flex-col items-center justify-center shadow-md border-2 border-gray-200 hover:shadow-lg transition-shadow"
                  style={{ minHeight: '140px' }}
                >
                  <img
                    src={logo.image}
                    alt={logo.nameEn}
                    className="w-auto h-auto max-w-[90%] max-h-[90%] object-contain"
                    style={{ display: 'block' }}
                    loading="lazy"
                    onError={() => {
                      console.error('Image failed to load:', logo.image);
                    }}
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Desktop: Scrolling Animation */}
          <div className="hidden md:block relative w-full overflow-hidden mb-8 sm:mb-12" style={{ minHeight: '150px' }}>
            <div className="flex animate-scroll gap-6 items-center" style={{ width: 'max-content' }}>
              {/* First set of logos */}
              {[
                { name: 'بنك العربي', nameEn: 'Arab Bank', image: '/arab bank.jpg', id: 1 },
                { name: 'وزارة الصحة', nameEn: 'Ministry of Health', image: '/ministry of health.jpeg', id: 2 },
                { name: 'نقابة الاطباء', nameEn: 'Doctors Union', image: '/doctor union.jpeg', id: 3 },
                { name: 'PMED', nameEn: 'Palestine Medical Club', image: '/pmed.jpeg', id: 4 },
              ].map((logo) => (
                <div
                  key={logo.id}
                  className="bg-white rounded-lg p-4 min-w-[180px] md:min-w-[200px] h-[120px] md:h-[150px] flex flex-col items-center justify-center shadow-sm border border-gray-200 hover:shadow-md transition-shadow flex-shrink-0"
                >
                  <img
                    src={logo.image}
                    alt={logo.nameEn}
                    className="w-full h-full object-contain max-w-full max-h-full"
                    style={{ display: 'block' }}
                  />
                </div>
              ))}
              {/* Duplicate set for seamless loop */}
              {[
                { name: 'بنك العربي', nameEn: 'Arab Bank', image: '/arab bank.jpg', id: 5 },
                { name: 'وزارة الصحة', nameEn: 'Ministry of Health', image: '/ministry of health.jpeg', id: 6 },
                { name: 'نقابة الاطباء', nameEn: 'Doctors Union', image: '/doctor union.jpeg', id: 7 },
                { name: 'PMED', nameEn: 'Palestine Medical Club', image: '/pmed.jpeg', id: 8 },
              ].map((logo) => (
                <div
                  key={logo.id}
                  className="bg-white rounded-lg p-4 min-w-[180px] md:min-w-[200px] h-[120px] md:h-[150px] flex flex-col items-center justify-center shadow-sm border border-gray-200 hover:shadow-md transition-shadow flex-shrink-0"
                >
                  <img
                    src={logo.image}
                    alt={logo.nameEn}
                    className="w-full h-full object-contain max-w-full max-h-full"
                    style={{ display: 'block' }}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>


      {/* About Section */}
      <section className="py-20 bg-white relative overflow-hidden">
        {/* Subtle light pink gradient from top right */}
        <div className="absolute top-0 right-0 w-1/3 h-1/3 opacity-20" style={{ background: 'radial-gradient(circle at top right, #FCE7F3, transparent)' }}></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center" style={{ color: '#1e3a8a' }}>
            ABOUT THE CONFERENCE
          </h2>

          <div className="bg-white rounded-2xl p-8 md:p-12 shadow-xl max-w-5xl mx-auto mb-12">
            <h3 className="text-2xl font-bold mb-6 text-center" style={{ color: '#1e3a8a' }}>About the Conference</h3>
            <p className="text-base md:text-lg text-gray-700 leading-relaxed mb-6 text-center">
              The First Jerusalem Medical and Research Conference is a multidisciplinary medical and scientific conference organized by the <strong style={{ color: '#1e3a8a' }}>Medical Association – Jerusalem Division</strong>, with the support of the <strong style={{ color: '#1e3a8a' }}>Palestine Medical Club (PMED Club)</strong>.
            </p>
            <p className="text-base md:text-lg text-gray-700 leading-relaxed text-center">
              This conference marks the launch of a national platform dedicated to continuous medical education, scientific exchange, leadership development, and healthcare innovation in Palestine. It brings together medical students, residents, specialists, consultants, researchers, and allied health professionals for a full day of high-level scientific and professional engagement.
            </p>
          </div>

          {/* Vision and Mission */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-gradient-to-br from-blue-50 to-white rounded-2xl p-8 shadow-lg border-l-4" style={{ borderLeftColor: '#1e3a8a', borderLeftWidth: '6px' }}>
              <h3 className="text-2xl font-bold mb-4" style={{ color: '#1e3a8a' }}>Mission</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Promote evidence-based medical practice</li>
                <li>• Support local and regional medical research</li>
                <li>• Encourage interdisciplinary collaboration</li>
                <li>• Empower young physicians and medical students</li>
                <li>• Foster leadership and innovation in healthcare</li>
                <li>• Enhance healthcare quality and patient outcomes in Palestine</li>
              </ul>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-white rounded-2xl p-8 shadow-lg border-l-4" style={{ borderLeftColor: '#1e3a8a', borderLeftWidth: '6px' }}>
              <h3 className="text-2xl font-bold mb-4" style={{ color: '#1e3a8a' }}>Vision</h3>
              <p className="text-gray-700 leading-relaxed">
                To create a sustainable, high-quality medical conference that strengthens healthcare systems in Palestine by empowering healthcare professionals with knowledge, skills, innovation, and collaboration.
              </p>
            </div>
          </div>

          {/* Why This Conference Matters */}
          <div className="bg-white rounded-2xl p-8 md:p-12 shadow-xl mb-12">
            <h3 className="text-2xl font-bold mb-6" style={{ color: '#1e3a8a' }}>Why This Conference Matters</h3>
            <p className="text-base md:text-lg text-gray-700 leading-relaxed mb-6">
              Healthcare professionals in Palestine face unique clinical, educational, and systemic challenges. This conference provides a rare and vital opportunity to:
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="flex items-start gap-3">
                <div className="text-xl" style={{ color: '#1e3a8a' }}>●</div>
                <p className="text-gray-700">Exchange knowledge across specialties</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="text-xl" style={{ color: '#1e3a8a' }}>●</div>
                <p className="text-gray-700">Learn from international and local experts</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="text-xl" style={{ color: '#1e3a8a' }}>●</div>
                <p className="text-gray-700">Present and discuss cutting-edge research</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="text-xl" style={{ color: '#1e3a8a' }}>●</div>
                <p className="text-gray-700">Develop leadership and practical skills</p>
              </div>
            </div>
            <p className="text-base md:text-lg text-gray-700 leading-relaxed mt-6 font-semibold">
              The conference aims to serve as a national hub for medical excellence and leadership development.
            </p>
          </div>


          {/* Scientific Program Overview */}
          <div className="bg-white rounded-2xl p-8 md:p-12 shadow-xl mb-12">
            <h3 className="text-2xl font-bold mb-6" style={{ color: '#1e3a8a' }}>Scientific Program - Conference Tracks</h3>
            <p className="text-base md:text-lg text-gray-700 leading-relaxed mb-8">
              The conference offers a rich, diverse, and interactive scientific program, including:
            </p>

            <div className="space-y-8">
              <div>
                <h4 className="text-xl font-bold mb-4 text-gray-900">Parallel Specialty Scientific Sessions</h4>
                <p className="text-gray-700 mb-4">Tracks may include:</p>
                <div className="grid md:grid-cols-2 gap-3">
                  {['Internal Medicine', 'Surgery & Surgical Innovation', 'Pediatrics', 'Emergency Medicine & Trauma', 'Obstetrics & Gynecology', 'Family Medicine & Community Health', 'Mental Health', 'Infectious Diseases', 'Radiology & Medical Imaging', 'Research & Evidence-Based Medicine'].map((track) => (
                    <div key={track} className="flex items-start gap-3 bg-gray-50 rounded-lg p-4">
                      <div className="text-lg" style={{ color: '#1e3a8a' }}>●</div>
                      <p className="text-gray-700">{track}</p>
                    </div>
                  ))}
                </div>
                <p className="text-gray-600 text-sm mt-4 italic">Each session features oral presentations, expert discussions, and Q&A.</p>
              </div>

              <div>
                <h4 className="text-xl font-bold mb-4 text-gray-900">Clinical & Research Excellence</h4>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-gradient-to-br from-blue-50 to-white rounded-lg p-6 border-l-4" style={{ borderLeftColor: '#1e3a8a' }}>
                    <h5 className="font-bold mb-3 text-gray-900">Clinical Case Presentations</h5>
                    <ul className="space-y-2 text-sm text-gray-700">
                      <li>• Real-world clinical cases from various specialties</li>
                      <li>• Interactive discussion with expert panels</li>
                      <li>• Awards for best case presentation</li>
                    </ul>
                  </div>
                  <div className="bg-gradient-to-br from-blue-50 to-white rounded-lg p-6 border-l-4" style={{ borderLeftColor: '#1e3a8a' }}>
                    <h5 className="font-bold mb-3 text-gray-900">Poster & Research Sessions</h5>
                    <ul className="space-y-2 text-sm text-gray-700">
                      <li>• Research, audits, and quality improvement projects</li>
                      <li>• Direct interaction with judges and peers</li>
                      <li>• Awards for outstanding research and innovation</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="text-xl font-bold mb-4 text-gray-900">Hands-On & Interactive Learning</h4>
                <p className="text-gray-700 mb-4">Participants can join practical workshops, including:</p>
                <div className="grid md:grid-cols-2 gap-3">
                  {['Point-of-Care Ultrasound (POCUS)', 'Basic Life Support (BLS)', 'Airway management', 'ECG & imaging interpretation', 'Suturing and basic surgical skills', 'Research methodology and medical statistics', 'Simulation-based clinical training'].map((workshop) => (
                    <div key={workshop} className="flex items-start gap-3 bg-gray-50 rounded-lg p-4">
                      <div className="text-lg" style={{ color: '#1e3a8a' }}>●</div>
                      <p className="text-gray-700">{workshop}</p>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </div>

          {/* Venue */}
          <div className="bg-gradient-to-br from-blue-50 to-white rounded-2xl p-8 md:p-12 shadow-xl mb-12 overflow-hidden">
            <h3 className="text-2xl font-bold mb-6" style={{ color: '#1e3a8a' }}>Venue</h3>
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h4 className="text-xl font-bold mb-4 text-gray-900">Millennium Hotel Ramallah</h4>
                <p className="text-gray-700">Located in Al-Masyoun, Ramallah…</p>
              </div>
              <div className="rounded-xl overflow-hidden shadow-sm border border-gray-200">
                <img
                  src="/millennuim.jpeg"
                  alt="Millennium Hotel Ramallah"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* Organized By */}
          <div className="bg-white rounded-2xl p-8 md:p-12 shadow-xl mb-12">
            <h3 className="text-2xl font-bold mb-6" style={{ color: '#1e3a8a' }}>Organized By</h3>
            <div className="space-y-4">
              <div>
                <h4 className="text-xl font-bold mb-2 text-gray-900">Medical Association – Jerusalem Division</h4>
                <p className="text-gray-600 mb-4">With the support of Palestine Medical Club (PMED Club)</p>
              </div>
            </div>
          </div>

          {/* Contact Information */}
          <div className="bg-gradient-to-br from-blue-50 to-white rounded-2xl p-8 md:p-12 shadow-xl mb-12">
            <h3 className="text-2xl font-bold mb-6" style={{ color: '#1e3a8a' }}>Contact Information</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg" style={{ backgroundColor: '#1e3a8a', color: 'white' }}>
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-1">Email</h4>
                  <a href="mailto:support@jmrc.live" className="text-gray-700 hover:text-blue-600 transition-colors">
                    support@jmrc.live
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg" style={{ backgroundColor: '#1e3a8a', color: 'white' }}>
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-1">Phone</h4>
                  <a href="tel:+9702XXXXXXX" className="text-gray-700 hover:text-blue-600 transition-colors">
                    +970 2 XXX XXXX
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg" style={{ backgroundColor: '#1e3a8a', color: 'white' }}>
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-1">Location</h4>
                  <p className="text-gray-700">Millennium Hotel, Ramallah</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg" style={{ backgroundColor: '#1e3a8a', color: 'white' }}>
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-1">Instagram</h4>
                  <a
                    href="https://www.instagram.com/jmrc_palestine/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-700 hover:text-blue-600 transition-colors"
                  >
                    @jmrc_palestine
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="bg-gradient-to-r rounded-2xl p-8 md:p-12 shadow-xl text-center text-white" style={{ background: 'linear-gradient(to right, #1e3a8a, #1e40af)' }}>
            <h3 className="text-3xl font-bold mb-4">Join Us in Shaping the Future of Healthcare</h3>
            <p className="text-lg mb-6 text-white/90">
              The First Jerusalem Medical and Research Conference represents a milestone in Palestinian medical education and collaboration.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button
                onClick={() => {
                  if (onNavigate) {
                    onNavigate('registration');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }
                }}
                className="bg-white font-semibold py-3 px-8 rounded-lg text-base transition-all duration-300 shadow-md hover:shadow-lg hover:bg-gray-50"
                style={{ color: '#1e3a8a' }}
              >
                Register Now
              </button>
              <button
                onClick={() => {
                  if (onNavigate) {
                    onNavigate('submissions');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }
                }}
                className="bg-transparent border-2 border-white text-white font-semibold py-3 px-8 rounded-lg text-base transition-all duration-300 hover:bg-white/10"
              >
                Submit an Abstract
              </button>
            </div>
            <div className="mt-8 pt-6 border-t border-white/20">
              <p className="text-xl font-bold mb-2">30 January 2026</p>
              <p className="text-lg">Millennium Hotel Ramallah</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
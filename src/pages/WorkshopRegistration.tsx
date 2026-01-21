import { useState } from 'react';
import { Loader2, Clock, User, FileText, MapPin } from 'lucide-react';
import toast from 'react-hot-toast';
import { supabase, WorkshopRegistrationData, WorkshopRoom } from '../lib/supabase';
import { generateId } from '../lib/utils';

const WorkshopRegistration = () => {
  // Workshop rooms data from the images
  const workshopRooms: WorkshopRoom[] = [
    {
      id: 'bab-al-sahara',
      name_arabic: 'غُرْفَةُ بَابِ السَّهَارَةُ',
      name_english: 'Room of Bab Al-Sahara',
      sessions: [
        {
          time: '10:30—11:20',
          topic: 'Why the Research Matters / Research Scope',
          description: 'Highlights the role of research in improving medical practice.',
        },
        {
          time: '12:30—14:20',
          topic: 'Cardiopulmonary resuscitation - Save a Life',
          speaker: 'Dr. Jamal Al-Wahadneh',
          description: 'Hands-on training in essential CPR techniques for emergency situations.',
        },
        {
          time: '16:00—18:00',
          topic: '(FAST) ultrasound',
          speaker: 'Dr. Ahmad Aloury',
          description: 'Practical training on rapid ultrasound assessment in trauma cases.',
        },
      ],
    },
    {
      id: 'bab-al-maghariba',
      name_arabic: 'غُرْفَةُ بَابِ المَغَارِبة',
      name_english: 'Room Bab Al-Maghariba',
      sessions: [
        {
          time: '10:30—11:20',
          topic: 'Laparoscopic Workshop',
          organizer: 'Nobel Co.',
          description: 'Introduction to core laparoscopic skills and minimally invasive techniques.',
        },
        {
          time: '12:30—14:20',
          topic: 'Virtual Reality training on handling clinical cases',
          organizer: 'Al-Najah National University',
          description: 'Immersive VR simulations for clinical decision-making and case management.',
        },
        {
          time: '16:00—18:00',
          topic: 'Psychology Session',
          organizer: 'Nawar Al-Shams Center',
          description: 'Interactive session on mental health and psychological well-being.',
        },
      ],
    },
  ];

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    jobTitle: '',
    institution: '',
    selectedRoom: '',
    selectedSession: '',
  });
  const [loading, setLoading] = useState(false);

  const selectedRoomData = workshopRooms.find(room => room.id === formData.selectedRoom);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.selectedRoom) {
      toast.error('Please select a workshop room');
      return;
    }

    if (!formData.selectedSession) {
      toast.error('Please select a workshop session');
      return;
    }

    setLoading(true);

    try {
      const room = selectedRoomData!;
      const session = room.sessions.find(s => s.time === formData.selectedSession);

      if (!session) {
        throw new Error('Selected session not found');
      }

      const registrationData: WorkshopRegistrationData = {
        id: generateId(),
        first_name: formData.firstName,
        last_name: formData.lastName,
        email: formData.email,
        phone: formData.phone || undefined,
        job_title: formData.jobTitle || undefined,
        institution: formData.institution || undefined,
        room_id: formData.selectedRoom,
        room_name_arabic: room.name_arabic,
        room_name_english: room.name_english,
        selected_session_time: session.time,
        selected_session_topic: session.topic,
        selected_session_speaker: session.speaker || undefined,
        selected_session_organizer: session.organizer || undefined,
      };

      toast.loading('Registering for workshop...', { id: 'workshop-register' });
      const { error: dbError } = await supabase
        .from('workshop_registrations')
        .insert([registrationData]);

      if (dbError) {
        throw dbError;
      }

      toast.dismiss('workshop-register');
      toast.success('Workshop Registration Successful! You have been registered for the selected workshop session.');

      // Reset form
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        jobTitle: '',
        institution: '',
        selectedRoom: '',
        selectedSession: '',
      });
    } catch (err: any) {
      console.error('Workshop registration error:', err);
      toast.dismiss('workshop-register');
      toast.error(err.message || 'Failed to register for workshop. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
      // Reset session when room changes
      ...(name === 'selectedRoom' && { selectedSession: '' }),
    });
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
              <span className="text-3xl md:text-4xl font-bold text-white leading-tight drop-shadow-md">THE FIRST ANNUAL JERUSALEM</span>
              <span className="text-base md:text-lg text-white leading-tight drop-shadow-md">MEDICAL & RESEARCH CONFERENCE 2026</span>
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 drop-shadow-md">Workshop Registration</h1>
          <p className="text-xl text-white/90 drop-shadow-md">WORKSHOPS PROGRAM</p>
        </div>
      </div>

      {/* Workshop Rooms Overview */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Available Workshop Rooms</h2>
          <p className="text-lg text-gray-600">Select a room and session to register</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {workshopRooms.map((room) => (
            <div key={room.id} className="bg-white rounded-xl shadow-lg border-2 border-gray-200 p-6 hover:shadow-xl transition-shadow">
              <div className="flex items-center gap-3 mb-4">
                <MapPin size={24} style={{ color: '#1e3a8a' }} />
                <div>
                  <h3 className="text-xl font-bold text-gray-900">{room.name_english}</h3>
                  <p className="text-lg text-gray-700 font-medium">{room.name_arabic}</p>
                </div>
              </div>
              
              <div className="space-y-4">
                {room.sessions.map((session, idx) => (
                  <div key={idx} className="border-l-4 pl-4" style={{ borderLeftColor: '#1e3a8a' }}>
                    <div className="flex items-center gap-2 mb-2">
                      <Clock size={16} style={{ color: '#1e3a8a' }} />
                      <span className="font-semibold text-gray-900">{session.time}</span>
                    </div>
                    <h4 className="font-bold text-gray-800 mb-1">{session.topic}</h4>
                    {session.speaker && (
                      <div className="flex items-center gap-2 mb-1">
                        <User size={14} className="text-gray-600" />
                        <span className="text-sm text-gray-700">{session.speaker}</span>
                      </div>
                    )}
                    {session.organizer && (
                      <div className="flex items-center gap-2 mb-1">
                        <FileText size={14} className="text-gray-600" />
                        <span className="text-sm text-gray-700">{session.organizer}</span>
                      </div>
                    )}
                    <p className="text-sm text-gray-600">{session.description}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Registration Form */}
      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="bg-white rounded-2xl p-10 md:p-12 shadow-xl border border-gray-200">
          <h2 className="text-3xl font-bold mb-8 text-center text-gray-900">Register for Workshop</h2>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Personal Information */}
            <div className="border-b border-gray-200 pb-6">
              <h3 className="text-xl font-bold mb-4" style={{ color: '#1e3a8a' }}>Personal Information</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-bold mb-2 text-gray-700">
                    First Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-blue-600 focus:outline-none transition-colors text-black"
                    placeholder="Enter your first name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold mb-2 text-gray-700">
                    Last Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-blue-600 focus:outline-none transition-colors text-black"
                    placeholder="Enter your last name"
                  />
                </div>
              </div>
            </div>

            {/* Contact Information */}
            <div className="border-b border-gray-200 pb-6">
              <h3 className="text-xl font-bold mb-4" style={{ color: '#1e3a8a' }}>Contact Information</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-bold mb-2 text-gray-700">
                    Email Address <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-blue-600 focus:outline-none transition-colors text-black"
                    placeholder="your.email@example.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold mb-2 text-gray-700">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-blue-600 focus:outline-none transition-colors text-black"
                    placeholder="+970 5XX XXX XXX"
                  />
                </div>
              </div>
            </div>

            {/* Professional Information */}
            <div className="border-b border-gray-200 pb-6">
              <h3 className="text-xl font-bold mb-4" style={{ color: '#1e3a8a' }}>Professional Information</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-bold mb-2 text-gray-700">
                    Job Title
                  </label>
                  <input
                    type="text"
                    name="jobTitle"
                    value={formData.jobTitle}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-blue-600 focus:outline-none transition-colors text-black"
                    placeholder="Enter your job title"
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold mb-2 text-gray-700">
                    Institution
                  </label>
                  <input
                    type="text"
                    name="institution"
                    value={formData.institution}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-blue-600 focus:outline-none transition-colors text-black"
                    placeholder="Enter your institution"
                  />
                </div>
              </div>
            </div>

            {/* Workshop Selection */}
            <div className="pb-6">
              <h3 className="text-xl font-bold mb-4" style={{ color: '#1e3a8a' }}>Workshop Selection</h3>
              
              <div className="mb-6">
                <label className="block text-sm font-bold mb-2 text-gray-700">
                  Select Workshop Room <span className="text-red-500">*</span>
                </label>
                <select
                  name="selectedRoom"
                  value={formData.selectedRoom}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-blue-600 focus:outline-none transition-colors text-black"
                >
                  <option value="">-- Select a room --</option>
                  {workshopRooms.map((room) => (
                    <option key={room.id} value={room.id}>
                      {room.name_english} ({room.name_arabic})
                    </option>
                  ))}
                </select>
              </div>

              {selectedRoomData && (
                <div className="mb-6">
                  <label className="block text-sm font-bold mb-2 text-gray-700">
                    Select Workshop Session <span className="text-red-500">*</span>
                  </label>
                  <select
                    name="selectedSession"
                    value={formData.selectedSession}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-blue-600 focus:outline-none transition-colors text-black"
                  >
                    <option value="">-- Select a session --</option>
                    {selectedRoomData.sessions.map((session, idx) => (
                      <option key={idx} value={session.time}>
                        {session.time} - {session.topic}
                        {session.speaker && ` (${session.speaker})`}
                        {session.organizer && ` (${session.organizer})`}
                      </option>
                    ))}
                  </select>
                  
                  {formData.selectedSession && (
                    <div className="mt-4 p-4 bg-blue-50 rounded-lg border-l-4" style={{ borderLeftColor: '#1e3a8a' }}>
                      {selectedRoomData.sessions
                        .find(s => s.time === formData.selectedSession) && (
                        <div>
                          <h4 className="font-bold text-gray-900 mb-2">
                            {selectedRoomData.sessions.find(s => s.time === formData.selectedSession)!.topic}
                          </h4>
                          <p className="text-sm text-gray-700">
                            {selectedRoomData.sessions.find(s => s.time === formData.selectedSession)!.description}
                          </p>
                        </div>
                      )}
                    </div>
                  )}
                </div>
              )}
            </div>

            {/* Submit Button */}
            <div className="pt-6">
              <button
                type="submit"
                disabled={loading}
                className="w-full text-white font-bold py-4 px-8 rounded-lg text-lg transition-all duration-300 transform hover:scale-105 shadow-lg disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none flex items-center justify-center gap-2"
                style={{ backgroundColor: '#1e3a8a' }}
                onMouseEnter={(e) => !loading && (e.currentTarget.style.backgroundColor = '#1e40af')}
                onMouseLeave={(e) => !loading && (e.currentTarget.style.backgroundColor = '#1e3a8a')}
              >
                {loading ? (
                  <>
                    <Loader2 className="animate-spin" size={20} />
                    Registering...
                  </>
                ) : (
                  'Register for Workshop'
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default WorkshopRegistration;

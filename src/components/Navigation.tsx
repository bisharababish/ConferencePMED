import { Menu, X } from 'lucide-react';
import { useState } from 'react';

interface NavigationProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

const Navigation = ({ activeTab, setActiveTab }: NavigationProps) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [conferenceDropdownOpen, setConferenceDropdownOpen] = useState(false);
  const [dropdownTimeout, setDropdownTimeout] = useState<NodeJS.Timeout | null>(null);
  const [mobileConferenceOpen, setMobileConferenceOpen] = useState(false);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'conference', label: 'Conference Information', hasDropdown: true },
    { id: 'submissions', label: 'Abstract Submission' },
    { id: 'registration', label: 'Registration' },
    { id: 'workshop', label: 'Workshop Registration' },
    { id: 'contact', label: 'Contact Us' },
  ];

  const conferenceSubItems = [
    { id: 'conference-about', label: 'About the Conference' },
    // { id: 'conference-team', label: 'Organizing Team' }, // Hidden for now
    { id: 'conference-hall', label: 'Conference Hall' },
  ];

  const handleTabClick = (tabId: string) => {
    setActiveTab(tabId);
    setMobileMenuOpen(false);
    setMobileConferenceOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
    // Update URL using pushState (creates new history entry for back button)
    window.history.pushState({ tab: tabId }, '', `#${tabId}`);
  };

  return (
    <>
      <style>{`
        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
      <nav className="bg-white sticky top-0 z-50 shadow-sm">
        {/* Top bar */}
        <div className="h-1" style={{ backgroundColor: '#1e3a8a' }}></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center gap-3">
              {/* Logo */}
              <button
                onClick={() => handleTabClick('home')}
                className="flex items-center gap-3 hover:opacity-80 transition-opacity"
              >
                <img
                  src="/logo .jpeg"
                  alt="Conference Logo"
                  className="h-16 w-auto object-contain"
                />
                <div className="flex flex-col">
                  <span className="text-lg font-bold text-black leading-tight">JERUSALEM</span>
                  <span className="text-xs text-black leading-tight">MEDICAL & RESEARCH CONFERENCE</span>
                </div>
              </button>
            </div>

            <div className="hidden lg:flex gap-1 items-center">
              {navItems.map((item) => (
                item.hasDropdown ? (
                  <div
                    key={item.id}
                    className="relative"
                    onMouseEnter={() => {
                      if (dropdownTimeout) {
                        clearTimeout(dropdownTimeout);
                        setDropdownTimeout(null);
                      }
                      setConferenceDropdownOpen(true);
                    }}
                    onMouseLeave={() => {
                      const timeout = setTimeout(() => {
                        setConferenceDropdownOpen(false);
                      }, 150);
                      setDropdownTimeout(timeout);
                    }}
                  >
                    <div
                      className={`px-2 py-2 text-sm font-medium transition-all duration-300 cursor-pointer whitespace-nowrap active:scale-95 hover:scale-105 ${activeTab === item.id || activeTab.startsWith('conference-')
                        ? 'border-b-2'
                        : 'text-black hover:opacity-70'
                        }`}
                      style={activeTab === item.id || activeTab.startsWith('conference-') ? { color: '#1e3a8a', borderColor: '#1e3a8a' } : {}}
                    >
                      {item.label.toUpperCase()}
                    </div>
                    {conferenceDropdownOpen && (
                      <>
                        {/* Invisible bridge to prevent gap */}
                        <div
                          className="absolute top-full left-0 right-0 h-2 z-50"
                          style={{ marginTop: '0px' }}
                          onMouseEnter={() => {
                            if (dropdownTimeout) {
                              clearTimeout(dropdownTimeout);
                              setDropdownTimeout(null);
                            }
                            setConferenceDropdownOpen(true);
                          }}
                        />
                        <div
                          className="absolute top-full left-0 w-64 bg-white rounded-lg shadow-xl border border-gray-200 py-2 z-50 transform transition-all duration-200 ease-out"
                          style={{ marginTop: '8px', animation: 'slideDown 0.2s ease-out' }}
                          onMouseEnter={() => {
                            if (dropdownTimeout) {
                              clearTimeout(dropdownTimeout);
                              setDropdownTimeout(null);
                            }
                            setConferenceDropdownOpen(true);
                          }}
                          onMouseLeave={() => {
                            const timeout = setTimeout(() => {
                              setConferenceDropdownOpen(false);
                            }, 150);
                            setDropdownTimeout(timeout);
                          }}
                        >
                          {conferenceSubItems.map((subItem) => (
                            <button
                              key={subItem.id}
                              onClick={() => {
                                handleTabClick(subItem.id);
                                setConferenceDropdownOpen(false);
                              }}
                              className={`w-full text-left px-4 py-3 text-sm font-medium transition-all duration-200 active:scale-95 hover:scale-[1.02] hover:translate-x-1 ${activeTab === subItem.id
                                ? 'bg-blue-50 text-blue-600'
                                : 'text-gray-700 hover:bg-gray-50'
                                }`}
                            >
                              {subItem.label}
                            </button>
                          ))}
                        </div>
                      </>
                    )}
                  </div>
                ) : (
                  <button
                    key={item.id}
                    onClick={() => handleTabClick(item.id)}
                    className={`px-2 py-2 text-sm font-medium transition-all duration-300 whitespace-nowrap active:scale-95 hover:scale-105 ${activeTab === item.id
                      ? 'border-b-2'
                      : 'text-black hover:opacity-70'
                      }`}
                    style={activeTab === item.id ? { color: '#1e3a8a', borderColor: '#1e3a8a' } : {}}
                  >
                    {item.label.toUpperCase()}
                  </button>
                )
              ))}
            </div>

            <div className="lg:hidden">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="text-black hover:opacity-70 transition-all duration-300 relative active:scale-90 p-2 rounded-lg hover:bg-gray-100"
                aria-label="Toggle menu"
              >
                <div className="relative w-7 h-7">
                  <Menu
                    size={28}
                    className={`absolute inset-0 transition-all duration-300 ${mobileMenuOpen ? 'opacity-0 rotate-90 scale-0' : 'opacity-100 rotate-0 scale-100'
                      }`}
                  />
                  <X
                    size={28}
                    className={`absolute inset-0 transition-all duration-300 ${mobileMenuOpen ? 'opacity-100 rotate-0 scale-100' : 'opacity-0 -rotate-90 scale-0'
                      }`}
                  />
                </div>
              </button>
            </div>
          </div>
        </div>

        <div
          className={`lg:hidden bg-white border-t border-gray-200 overflow-hidden transition-all duration-300 ease-in-out ${mobileMenuOpen
            ? 'max-h-[600px] opacity-100'
            : 'max-h-0 opacity-0 pointer-events-none'
            }`}
          style={{ display: mobileMenuOpen ? 'block' : 'none' }}
        >
          <div className={`px-2 pt-2 pb-3 space-y-1 transform transition-all duration-300 ${mobileMenuOpen
            ? 'translate-y-0 opacity-100'
            : '-translate-y-4 opacity-0'
            }`}>
            {navItems.map((item) => (
              <div key={item.id}>
                {item.hasDropdown ? (
                  <>
                    <button
                      onClick={() => setMobileConferenceOpen(!mobileConferenceOpen)}
                      className={`w-full text-left px-3 py-3 rounded-md text-base font-medium transition-all duration-300 active:scale-95 active:bg-gray-200 flex items-center justify-between ${activeTab === item.id || activeTab.startsWith('conference-')
                        ? 'bg-blue-50'
                        : 'text-black hover:bg-gray-50'
                        }`}
                      style={activeTab === item.id || activeTab.startsWith('conference-') ? { color: '#1e3a8a' } : {}}
                    >
                      <span>{item.label}</span>
                      <svg
                        className={`w-5 h-5 transition-transform duration-300 ${mobileConferenceOpen ? 'rotate-180' : ''}`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                    {mobileConferenceOpen && (
                      <div className="pl-6 space-y-1">
                        {conferenceSubItems.map((subItem) => (
                          <button
                            key={subItem.id}
                            onClick={() => {
                              handleTabClick(subItem.id);
                            }}
                            className={`block w-full text-left px-3 py-2 rounded-md text-sm transition-all duration-300 active:scale-95 active:bg-gray-200 hover:translate-x-1 ${activeTab === subItem.id
                              ? 'bg-blue-100 text-blue-700 font-medium'
                              : 'text-gray-600 hover:bg-gray-50'
                              }`}
                          >
                            {subItem.label}
                          </button>
                        ))}
                      </div>
                    )}
                  </>
                ) : (
                  <button
                    onClick={() => handleTabClick(item.id)}
                    className={`block w-full text-left px-3 py-3 rounded-md text-base font-medium transition-all duration-300 active:scale-95 active:bg-gray-200 ${activeTab === item.id
                      ? 'bg-blue-50'
                      : 'text-black hover:bg-gray-50'
                      }`}
                    style={activeTab === item.id ? { color: '#1e3a8a' } : {}}
                  >
                    {item.label}
                  </button>
                )}
              </div>
            ))}
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navigation;

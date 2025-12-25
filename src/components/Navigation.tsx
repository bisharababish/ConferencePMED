import { Menu, X } from 'lucide-react';
import { useState } from 'react';

interface NavigationProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

const Navigation = ({ activeTab, setActiveTab }: NavigationProps) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'conference', label: 'Conference Information' },
    { id: 'submissions', label: 'Abstract Submission' },
    { id: 'registration', label: 'Registration' },
    { id: 'contact', label: 'Contact Us' },
  ];

  const handleTabClick = (tabId: string) => {
    setActiveTab(tabId);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
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

          <div className="hidden lg:flex space-x-6">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleTabClick(item.id)}
                className={`px-2 py-2 text-sm font-medium transition-all duration-300 ${activeTab === item.id
                  ? 'border-b-2'
                  : 'text-black hover:opacity-70'
                  }`}
                style={activeTab === item.id ? { color: '#1e3a8a', borderColor: '#1e3a8a' } : {}}
              >
                {item.label.toUpperCase()}
              </button>
            ))}
          </div>

          <div className="lg:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-black hover:opacity-70 transition-all duration-300 relative"
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
          ? 'max-h-96 opacity-100'
          : 'max-h-0 opacity-0'
          }`}
      >
        <div className={`px-2 pt-2 pb-3 space-y-1 transform transition-all duration-300 ${mobileMenuOpen
          ? 'translate-y-0 opacity-100'
          : '-translate-y-4 opacity-0'
          }`}>
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleTabClick(item.id)}
              className={`block w-full text-left px-3 py-3 rounded-md text-base font-medium transition-all duration-300 ${activeTab === item.id
                ? 'bg-blue-50'
                : 'text-black hover:bg-gray-50'
                }`}
              style={activeTab === item.id ? { color: '#1e3a8a' } : {}}
            >
              {item.label}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navigation;

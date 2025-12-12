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
    { id: 'submissions', label: 'Submissions' },
    { id: 'sponsorship', label: 'Sponsorship' },
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
      {/* Red top bar */}
      <div className="h-1" style={{ backgroundColor: '#DC2626' }}></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center gap-3">
            {/* Network icon logo */}
            <button
              onClick={() => handleTabClick('home')}
              className="flex items-center gap-3 hover:opacity-80 transition-opacity"
            >
              <svg width="42" height="42" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
                {/* Top left square */}
                <rect x="2" y="2" width="14" height="14" fill="#DC2626" rx="1.5" />
                {/* Top right square */}
                <rect x="26" y="2" width="14" height="14" fill="#DC2626" rx="1.5" />
                {/* Bottom left square */}
                <rect x="2" y="26" width="14" height="14" fill="#DC2626" rx="1.5" />
                {/* Bottom right square */}
                <rect x="26" y="26" width="14" height="14" fill="#DC2626" rx="1.5" />
                {/* Horizontal connections */}
                <line x1="16" y1="9" x2="26" y2="9" stroke="#DC2626" strokeWidth="2.5" strokeLinecap="round" />
                <line x1="16" y1="33" x2="26" y2="33" stroke="#DC2626" strokeWidth="2.5" strokeLinecap="round" />
                {/* Vertical connections */}
                <line x1="21" y1="2" x2="21" y2="16" stroke="#DC2626" strokeWidth="2.5" strokeLinecap="round" />
                <line x1="21" y1="26" x2="21" y2="40" stroke="#DC2626" strokeWidth="2.5" strokeLinecap="round" />
              </svg>
              <div className="flex flex-col">
                <span className="text-lg font-bold text-black leading-tight">ANNUAL JERUSALEM</span>
                <span className="text-xs text-black leading-tight">MEDICAL & RESEARCH CONFERENCE</span>
              </div>
            </button>
          </div>

          <div className="hidden lg:flex space-x-6">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleTabClick(item.id)}
                className={`px-2 py-2 text-sm font-medium transition-all duration-300 ${
                  activeTab === item.id
                    ? 'border-b-2'
                    : 'text-black hover:opacity-70'
                }`}
                style={activeTab === item.id ? { color: '#DC2626', borderColor: '#DC2626' } : {}}
              >
                {item.label.toUpperCase()}
              </button>
            ))}
          </div>

          <div className="lg:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-black hover:opacity-70 transition-colors"
            >
              {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-200">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleTabClick(item.id)}
                className={`block w-full text-left px-3 py-3 rounded-md text-base font-medium transition-all duration-300 ${
                  activeTab === item.id
                    ? 'bg-red-50'
                    : 'text-black hover:bg-gray-50'
                }`}
                style={activeTab === item.id ? { color: '#DC2626' } : {}}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;

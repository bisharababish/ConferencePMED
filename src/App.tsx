import { useState, useEffect } from 'react';
import { Toaster } from 'react-hot-toast';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import Home from './pages/Home';
import ConferenceInfo from './pages/ConferenceInfo';
import Submissions from './pages/Submissions';
import Registration from './pages/Registration';
import WorkshopRegistration from './pages/WorkshopRegistration';
import Contact from './pages/Contact';

function App() {
  // Initialize from URL hash or localStorage, default to 'home'
  const getInitialTab = () => {
    // Check URL hash first
    const hash = window.location.hash.slice(1);
    if (hash) {
      return hash;
    }
    // Then check localStorage
    const saved = localStorage.getItem('activeTab');
    if (saved) {
      return saved;
    }
    return 'home';
  };

  const [activeTab, setActiveTab] = useState(getInitialTab);

  // Initialize history on mount
  useEffect(() => {
    // Set initial hash if not present
    if (!window.location.hash) {
      window.history.replaceState({ tab: activeTab }, '', `#${activeTab}`);
    }
  }, []);

  // Update localStorage and browser history when tab changes
  useEffect(() => {
    localStorage.setItem('activeTab', activeTab);
    // Use pushState to add to browser history (creates new history entry)
    const currentHash = window.location.hash.slice(1);
    if (currentHash !== activeTab) {
      window.history.pushState({ tab: activeTab }, '', `#${activeTab}`);
    }
  }, [activeTab]);

  // Listen for browser back/forward navigation
  useEffect(() => {
    const handlePopState = () => {
      const hash = window.location.hash.slice(1);
      if (hash && hash !== activeTab) {
        setActiveTab(hash);
      } else if (!hash && activeTab !== 'home') {
        setActiveTab('home');
      }
    };

    const handleHashChange = () => {
      const hash = window.location.hash.slice(1);
      if (hash && hash !== activeTab) {
        setActiveTab(hash);
      } else if (!hash && activeTab !== 'home') {
        setActiveTab('home');
      }
    };

    window.addEventListener('popstate', handlePopState);
    window.addEventListener('hashchange', handleHashChange);
    return () => {
      window.removeEventListener('popstate', handlePopState);
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, [activeTab]);

  const renderPage = () => {
    switch (activeTab) {
      case 'home':
        return <Home />;
      case 'conference':
      case 'conference-about':
        return <ConferenceInfo section="about" />;
      case 'conference-team':
        return <ConferenceInfo section="team" />;
      case 'conference-hall':
        return <ConferenceInfo section="hall" />;
      case 'submissions':
        return <Submissions />;
      case 'registration':
        return <Registration />;
      case 'workshop':
        return <WorkshopRegistration />;
      case 'contact':
        return <Contact />;
      default:
        return <Home />;
    }
  };

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Toaster
        position="top-right"
        toastOptions={{
          duration: 4000,
          style: {
            background: '#fff',
            color: '#1f2937',
            borderRadius: '12px',
            padding: '16px',
            boxShadow: '0 10px 25px rgba(0, 0, 0, 0.1)',
          },
          success: {
            duration: 4000,
            iconTheme: {
              primary: '#10b981',
              secondary: '#fff',
            },
            style: {
              border: '2px solid #10b981',
            },
          },
          error: {
            duration: 5000,
            iconTheme: {
              primary: '#ef4444',
              secondary: '#fff',
            },
            style: {
              border: '2px solid #ef4444',
            },
          },
        }}
      />
      <Navigation activeTab={activeTab} setActiveTab={setActiveTab} />
      <main className="flex-grow">{renderPage()}</main>
      <Footer />
      {/* Developer Information */}
      <div className="bg-gray-50 py-4 border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-center md:text-left">
              <p className="text-xs text-gray-500 mb-1">
                Developed by <a href="https://codefusion.me" target="_blank" rel="noopener noreferrer" className="font-semibold hover:underline" style={{ color: '#1e3a8a' }}>Codefusion</a>
              </p>
              <div className="flex flex-wrap items-center justify-center md:justify-start gap-3 text-xs text-gray-500">
                <a href="https://instagram.com/codefusionn.ps" target="_blank" rel="noopener noreferrer" className="hover:text-gray-700 transition-colors">
                  @codefusionn.ps
                </a>
                <span className="text-gray-300">|</span>
                <a href="https://codefusion.me" target="_blank" rel="noopener noreferrer" className="hover:text-gray-700 transition-colors">
                  codefusion.me
                </a>
                <span className="text-gray-300">|</span>
                <a href="tel:+972599203857" className="hover:text-gray-700 transition-colors">
                  +972 59 920 3857
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

import { useState } from 'react';
import { Toaster } from 'react-hot-toast';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import Home from './pages/Home';
import ConferenceInfo from './pages/ConferenceInfo';
import Submissions from './pages/Submissions';
import Registration from './pages/Registration';
import Contact from './pages/Contact';

function App() {
  const [activeTab, setActiveTab] = useState('home');

  const renderPage = () => {
    switch (activeTab) {
      case 'home':
        return <Home onNavigate={setActiveTab} />;
      case 'conference':
        return <ConferenceInfo />;
      case 'submissions':
        return <Submissions />;
      case 'registration':
        return <Registration />;
      case 'contact':
        return <Contact />;
      default:
        return <Home onNavigate={setActiveTab} />;
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

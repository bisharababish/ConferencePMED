import { useState } from 'react';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import Home from './pages/Home';
import ConferenceInfo from './pages/ConferenceInfo';
import Submissions from './pages/Submissions';
import Sponsorship from './pages/Sponsorship';
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
      case 'sponsorship':
        return <Sponsorship />;
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
      <Navigation activeTab={activeTab} setActiveTab={setActiveTab} />
      <main className="flex-grow">{renderPage()}</main>
      <Footer />
    </div>
  );
}

export default App;

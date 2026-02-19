
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Marketplace from './pages/Marketplace';
import Insights from './pages/Insights';
import KrishiGuru from './pages/KrishiGuru';

const App: React.FC = () => {
  const [currentPath, setCurrentPath] = useState(window.location.hash || '#/');

  useEffect(() => {
    const handleHashChange = () => {
      setCurrentPath(window.location.hash || '#/');
      window.scrollTo(0, 0);
    };
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const renderPage = () => {
    switch (currentPath) {
      case '#/':
        return <Home />;
      case '#/marketplace':
        return <Marketplace />;
      case '#/insights':
        return <Insights />;
      case '#/guru':
        return <KrishiGuru />;
      default:
        return <Home />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50">
      <Navbar />
      <main className="flex-grow">
        {renderPage()}
      </main>
      <footer className="bg-slate-900 text-slate-400 py-12 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center space-x-2 text-white mb-6">
              <span className="text-2xl">🌾</span>
              <span className="font-bold text-xl tracking-tight">Digital Krishi Bazaar</span>
            </div>
            <p className="text-sm">Empowering Nepal's agriculture through digital connectivity and fair trade.</p>
          </div>
          <div>
            <h4 className="text-white font-bold mb-4 uppercase text-xs tracking-widest">Platform</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#/marketplace" className="hover:text-green-400 transition">Marketplace</a></li>
              <li><a href="#/insights" className="hover:text-green-400 transition">Market Insights</a></li>
              <li><a href="#/guru" className="hover:text-green-400 transition">Krishi Guru AI</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-bold mb-4 uppercase text-xs tracking-widest">Support</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-green-400 transition">Farmer Guide</a></li>
              <li><a href="#" className="hover:text-green-400 transition">Buyer Policy</a></li>
              <li><a href="#" className="hover:text-green-400 transition">Logistics Partner</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-bold mb-4 uppercase text-xs tracking-widest">Contact</h4>
            <ul className="space-y-2 text-sm">
              <li><i className="fas fa-envelope mr-2"></i> info@krishibazaar.com.np</li>
              <li><i className="fas fa-phone mr-2"></i> +977-1-4XXXXXX</li>
              <li><i className="fas fa-map-marker-alt mr-2"></i> Kathmandu, Nepal</li>
            </ul>
          </div>
        </div>
        <div className="max-w-7xl mx-auto mt-12 pt-8 border-t border-slate-800 text-center text-xs">
          &copy; {new Date().getFullYear()} Digital Krishi Bazaar Nepal. All rights reserved.
        </div>
      </footer>
    </div>
  );
};

export default App;

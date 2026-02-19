
import React, { useState } from 'react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-green-700 text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-2">
            <span className="text-2xl">🌾</span>
            <span className="font-bold text-xl tracking-tight">Digital Krishi Bazaar</span>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <a href="#/" className="px-3 py-2 rounded-md text-sm font-medium hover:bg-green-600 transition">Home</a>
              <a href="#/marketplace" className="px-3 py-2 rounded-md text-sm font-medium hover:bg-green-600 transition">Marketplace</a>
              <a href="#/insights" className="px-3 py-2 rounded-md text-sm font-medium hover:bg-green-600 transition">AI Insights</a>
              <a href="#/guru" className="px-3 py-2 rounded-md text-sm font-medium bg-white text-green-700 hover:bg-green-50 transition">Ask Krishi Guru</a>
            </div>
          </div>
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="p-2 rounded-md hover:bg-green-600 focus:outline-none">
              <i className={`fas ${isOpen ? 'fa-times' : 'fa-bars'} text-xl`}></i>
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-green-800 px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <a href="#/" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-green-700">Home</a>
          <a href="#/marketplace" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-green-700">Marketplace</a>
          <a href="#/insights" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-green-700">AI Insights</a>
          <a href="#/guru" className="block px-3 py-2 rounded-md text-base font-medium bg-white text-green-700">Ask Krishi Guru</a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

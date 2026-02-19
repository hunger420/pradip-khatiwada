
import React from 'react';

const Home: React.FC = () => {
  return (
    <div className="animate-in fade-in duration-700">
      {/* Hero Section */}
      <section className="relative bg-green-900 text-white py-20 px-6 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img 
            src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&q=80&w=2000" 
            alt="Farming landscape" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="max-w-7xl mx-auto relative z-10 text-center lg:text-left grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-6">
              Modernizing <span className="text-green-400">Agriculture</span> in Nepal
            </h1>
            <p className="text-xl text-green-50 mb-8 max-w-xl mx-auto lg:mx-0">
              Eliminating middlemen and connecting farmers directly to nationwide buyers. Get fair prices and real-time AI market analysis.
            </p>
            <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4">
              <a href="#/marketplace" className="bg-white text-green-900 px-8 py-4 rounded-xl font-bold text-lg hover:bg-green-50 transition transform hover:scale-105">
                Browse Marketplace
              </a>
              <a href="#/guru" className="bg-green-600 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-green-700 transition border border-green-500">
                AI Krishi Guru
              </a>
            </div>
          </div>
          <div className="hidden lg:block">
            <div className="bg-white/10 backdrop-blur-md p-8 rounded-3xl border border-white/20">
              <h3 className="text-2xl font-bold mb-4">Today's Highlights</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center p-3 bg-white/10 rounded-lg">
                  <span>Tomato (Local)</span>
                  <span className="font-bold text-green-400">Rs. 45/Kg ↑</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-white/10 rounded-lg">
                  <span>Potato (Red)</span>
                  <span className="font-bold text-yellow-400">Rs. 32/Kg →</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-white/10 rounded-lg">
                  <span>Cabbage</span>
                  <span className="font-bold text-red-400">Rs. 18/Kg ↓</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-white px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800">Our Smart Ecosystem</h2>
            <div className="w-20 h-1.5 bg-green-600 mx-auto mt-4 rounded-full"></div>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-8 bg-slate-50 rounded-2xl border border-slate-100 hover:border-green-200 transition">
              <div className="w-14 h-14 bg-green-100 text-green-700 rounded-xl flex items-center justify-center text-2xl mb-6">
                <i className="fas fa-handshake"></i>
              </div>
              <h3 className="text-xl font-bold mb-3">Direct Trade</h3>
              <p className="text-slate-600">Skip the intermediaries. Negotiate directly with buyers and sellers for the best possible margins.</p>
            </div>
            <div className="p-8 bg-slate-50 rounded-2xl border border-slate-100 hover:border-green-200 transition">
              <div className="w-14 h-14 bg-green-100 text-green-700 rounded-xl flex items-center justify-center text-2xl mb-6">
                <i className="fas fa-chart-line"></i>
              </div>
              <h3 className="text-xl font-bold mb-3">AI Market Analysis</h3>
              <p className="text-slate-600">Gemini-powered insights provide real-time price comparisons from Kalimati and other major hubs.</p>
            </div>
            <div className="p-8 bg-slate-50 rounded-2xl border border-slate-100 hover:border-green-200 transition">
              <div className="w-14 h-14 bg-green-100 text-green-700 rounded-xl flex items-center justify-center text-2xl mb-6">
                <i className="fas fa-bug"></i>
              </div>
              <h3 className="text-xl font-bold mb-3">Crop Diagnostics</h3>
              <p className="text-slate-600">Upload a photo of your crop, and our AI will identify pests and recommend organic treatments.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-green-50 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <div className="text-4xl font-bold text-green-800 mb-2">15k+</div>
            <div className="text-slate-600">Active Farmers</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-green-800 mb-2">800+</div>
            <div className="text-slate-600">Verified Buyers</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-green-800 mb-2">75+</div>
            <div className="text-slate-600">Districts Covered</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-green-800 mb-2">Rs. 50M</div>
            <div className="text-slate-600">Monthly Trade</div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;

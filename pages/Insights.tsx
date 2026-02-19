
import React, { useState } from 'react';
import { getMarketInsights } from '../services/gemini';

const Insights: React.FC = () => {
  const [commodity, setCommodity] = useState('');
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<{ text: string, sources: { title: string, uri: string }[] } | null>(null);

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!commodity.trim()) return;

    setLoading(true);
    setResult(null);
    try {
      const data = await getMarketInsights(commodity);
      setResult(data);
    } catch (err) {
      alert("Failed to fetch insights. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      <div className="text-center mb-12">
        <h1 className="text-3xl font-bold text-slate-800">Real-time AI Market Insights</h1>
        <p className="text-slate-600 mt-2">Get up-to-date pricing and supply data from major Nepalese hubs using AI.</p>
      </div>

      <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 mb-8">
        <form onSubmit={handleSearch} className="flex flex-col sm:flex-row gap-4">
          <input 
            type="text" 
            placeholder="e.g. Tomato prices in Kalimati market" 
            className="flex-1 px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-green-500 focus:outline-none"
            value={commodity}
            onChange={(e) => setCommodity(e.target.value)}
            disabled={loading}
          />
          <button 
            type="submit" 
            disabled={loading}
            className="bg-green-700 text-white px-8 py-3 rounded-xl font-bold hover:bg-green-800 transition disabled:opacity-50"
          >
            {loading ? <i className="fas fa-circle-notch animate-spin"></i> : 'Analyze'}
          </button>
        </form>
      </div>

      {loading && (
        <div className="text-center py-12">
          <div className="inline-block w-8 h-8 border-4 border-green-700 border-t-transparent rounded-full animate-spin"></div>
          <p className="mt-4 text-slate-500 italic">Consulting live market data sources...</p>
        </div>
      )}

      {result && (
        <div className="animate-in slide-in-from-bottom duration-500">
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-green-100 mb-6">
            <h3 className="text-xl font-bold text-green-800 mb-4 flex items-center">
              <i className="fas fa-robot mr-2"></i> Market Guru Analysis
            </h3>
            <div className="prose prose-slate max-w-none whitespace-pre-wrap leading-relaxed text-slate-700">
              {result.text}
            </div>
          </div>

          {result.sources.length > 0 && (
            <div className="bg-slate-100 p-6 rounded-2xl">
              <h4 className="font-semibold text-slate-800 mb-3 flex items-center text-sm">
                <i className="fas fa-link mr-2"></i> Verified Sources
              </h4>
              <div className="flex flex-wrap gap-3">
                {result.sources.map((source, i) => (
                  <a 
                    key={i} 
                    href={source.uri} 
                    target="_blank" 
                    rel="noreferrer"
                    className="text-xs bg-white text-green-700 px-3 py-1.5 rounded-lg border border-slate-200 hover:border-green-400 transition"
                  >
                    {source.title}
                  </a>
                ))}
              </div>
            </div>
          )}
        </div>
      )}

      {!result && !loading && (
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-8 opacity-60">
          {['Potatoes', 'Large Cardamom', 'Green Chilies', 'Poultry', 'Onions', 'Dairy'].map(item => (
            <button 
              key={item}
              onClick={() => setCommodity(item)}
              className="p-3 bg-white border border-slate-200 rounded-lg text-sm hover:bg-green-50 transition"
            >
              Check {item} Prices
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default Insights;

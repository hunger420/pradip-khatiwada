
import React, { useState } from 'react';
import ProductCard from '../components/ProductCard';
import { Product } from '../types';

const SAMPLE_PRODUCTS: Product[] = [
  { id: '1', name: 'Organic Red Tomatoes', category: 'Vegetables', price: 65, unit: 'Kg', location: 'Dhading', farmer: 'Ram Bahadur', image: 'https://images.unsplash.com/photo-1546473427-e1ad6d6621b3?auto=format&fit=crop&q=80&w=400', available: true },
  { id: '2', name: 'Golden Ginger', category: 'Spices', price: 180, unit: 'Kg', location: 'Ilam', farmer: 'Sarita Tamang', image: 'https://images.unsplash.com/photo-1615485290382-441e4d0c9cb5?auto=format&fit=crop&q=80&w=400', available: true },
  { id: '3', name: 'Alphonso Type Mangoes', category: 'Fruits', price: 250, unit: 'Doz', location: 'Sarlahi', farmer: 'Hari Prasad', image: 'https://images.unsplash.com/photo-1553279768-865429fa0078?auto=format&fit=crop&q=80&w=400', available: true },
  { id: '4', name: 'Local Cauliflower', category: 'Vegetables', price: 40, unit: 'Kg', location: 'Kavre', farmer: 'Sita Devi', image: 'https://images.unsplash.com/photo-1568584711075-3d021a7c3ec3?auto=format&fit=crop&q=80&w=400', available: true },
  { id: '5', name: 'Buckwheat Flour', category: 'Grains', price: 120, unit: 'Kg', location: 'Mustang', farmer: 'Nima Sherpa', image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&q=80&w=400', available: true },
  { id: '6', name: 'Large Green Cardamom', category: 'Spices', price: 1200, unit: 'Kg', location: 'Taplejung', farmer: 'Mina Rai', image: 'https://images.unsplash.com/photo-1615485290126-17b5cc951f28?auto=format&fit=crop&q=80&w=400', available: true },
];

const Marketplace: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = ['All', 'Vegetables', 'Fruits', 'Grains', 'Spices', 'Dairy'];

  const filteredProducts = SAMPLE_PRODUCTS.filter(p => {
    const matchesSearch = p.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          p.location.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = activeCategory === 'All' || p.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 gap-4">
        <div>
          <h1 className="text-3xl font-bold text-slate-800">Krishi Marketplace</h1>
          <p className="text-slate-600">Fresh produce directly from Nepal's farms</p>
        </div>
        <div className="relative w-full md:w-96">
          <input 
            type="text" 
            placeholder="Search products or locations..." 
            className="w-full pl-10 pr-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-green-500 shadow-sm"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <i className="fas fa-search absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"></i>
        </div>
      </div>

      <div className="flex overflow-x-auto pb-4 gap-2 no-scrollbar mb-8">
        {categories.map(cat => (
          <button 
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-6 py-2 rounded-full whitespace-nowrap transition ${
              activeCategory === cat 
                ? 'bg-green-700 text-white font-medium' 
                : 'bg-white text-slate-600 border border-slate-200 hover:border-green-300'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {filteredProducts.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredProducts.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      ) : (
        <div className="text-center py-20 bg-white rounded-2xl border border-dashed border-slate-300">
          <div className="text-5xl mb-4">🔍</div>
          <h3 className="text-xl font-semibold text-slate-800">No products found</h3>
          <p className="text-slate-500">Try adjusting your search or category filters.</p>
        </div>
      )}
    </div>
  );
};

export default Marketplace;

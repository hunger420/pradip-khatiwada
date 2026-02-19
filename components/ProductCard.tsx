
import React from 'react';
import { Product } from '../types';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow border border-slate-100">
      <div className="relative h-48 w-full">
        <img 
          src={product.image} 
          alt={product.name} 
          className="h-full w-full object-cover"
        />
        <div className="absolute top-2 right-2 bg-green-500 text-white text-xs font-bold px-2 py-1 rounded">
          {product.category}
        </div>
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold text-slate-800">{product.name}</h3>
        <p className="text-green-600 font-bold text-xl mt-1">Rs. {product.price} <span className="text-sm font-normal text-slate-500">/ {product.unit}</span></p>
        
        <div className="mt-4 space-y-2">
          <div className="flex items-center text-sm text-slate-600">
            <i className="fas fa-map-marker-alt w-5"></i>
            <span>{product.location}</span>
          </div>
          <div className="flex items-center text-sm text-slate-600">
            <i className="fas fa-user w-5"></i>
            <span>{product.farmer}</span>
          </div>
        </div>
        
        <button className="w-full mt-4 bg-green-700 text-white py-2 rounded-lg font-medium hover:bg-green-800 transition">
          Contact Seller
        </button>
      </div>
    </div>
  );
};

export default ProductCard;

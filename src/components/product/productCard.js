import React from 'react';

export default function ProductCard({ product }){
  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden">
      <img className="w-full h-64 object-cover object-center" src={product.thumbnailUrl} alt={product.title} />
      <div className="p-4">
        <h2 className="text-lg font-bold">{product.title}</h2>
        <p className="mt-2">${(Math.random() * 100).toFixed(2)}</p>
        <button className="mt-4 bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded">
          Add to Cart
        </button>
      </div>
    </div>
  );
};


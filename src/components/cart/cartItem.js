import React from 'react';

export default function CartItem({ item, removeFromCart}){

  return (
    <div className="flex items-center justify-between border-b border-gray-200 py-4">
      <div className="flex items-center">
        <img src={item.images[0]} alt={item.title} className="w-16 h-16 object-cover mr-4" />
        <div>
          <h3 className="font-medium">{item.title}</h3>
          <p className="text-gray-600">Price: ${item.price.toFixed(2)}</p>
        </div>
      </div>
      <div>
        <button className="text-red-600" onClick={() => removeFromCart(item.id)}>Remove</button>
      </div>
    </div>
  );
};

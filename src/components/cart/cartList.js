import React from 'react';
import CartItem from './cartItem';

export default function CartList({ cartItems, totalPrice, removeFromCart }){
  return (
    <div className="container mx-auto mt-8">
      {cartItems?.length === 0 ? (
        <p className='text-center'>Your cart is empty.</p>
      ) : (
        <div>
          {cartItems?.map(item => (
            <CartItem key={item.id} item={item} removeFromCart={removeFromCart} />
          ))}
          <div className="mt-4 flex items-center justify-between">
            <h3 className="text-lg font-medium">Total Price: Rs. {totalPrice.toFixed(2)}</h3>
            <button className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded">Checkout</button>
          </div>
        </div>
      )}
    </div>
  );
};


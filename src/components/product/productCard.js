import React from "react";
import AddToCartButton from "../button/addToCartButton";

const ProductCard = ({ product, addToCart }) => {
  const { title, description, price, images } = product;

  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden flex flex-col">
      <div className="relative h-64">
        <img
          className="w-full h-full object-cover object-center"
          src={images && images.length > 0 ? images[0] : 'https://via.placeholder.com/600x400'}
          alt={title}
          loading="lazy"
        />
      </div>
      
      <div className="flex-grow p-4 flex flex-col justify-between">
        <div>
          <h2 className="text-lg font-bold">{title}</h2>
          <p className="text-gray-600">{description}</p>
        </div>
        <div className="mt-4 flex items-center justify-between">
          <p className="text-gray-800 font-bold">Rs. {price.toFixed(2)}</p>
          <AddToCartButton onClick={addToCart} />
        </div>
      </div>
    </div>
  );
};

export default ProductCard;

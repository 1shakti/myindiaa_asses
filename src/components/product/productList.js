import React from "react";
import ProductCard from "./productCard";

const ProductList = ({ products, goToCart, addToCart, cartItems }) => {
  return (
    <div className="container mx-auto mt-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {products?.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            addToCart={addToCart}
            goToCart={goToCart}
            cartItems={cartItems}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductList;

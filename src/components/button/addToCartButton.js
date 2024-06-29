import React from "react";

export default function AddToCartButton({ onClick, buttonText }){
  return (
    <button className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded" onClick={onClick}>
      {buttonText}
    </button>
  );
};

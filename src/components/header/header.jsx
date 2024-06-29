import React from "react";
import { BsCart3 } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import { CART_LIST_PATH } from "../../constants/path";

export default function Header() {
  const navigate = useNavigate();
  const cartList = () => {
    navigate(CART_LIST_PATH)
  }

  return (
    <header className="w-full h-[60px] p-3 md:p-5 flex items-center bg-white">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center">
          <img
            src="./assets/logos/company_logo.png"
            alt="My Indiaa Logo"
            className="mix-blend-multiply w-[120px] md:w-[200px] h-auto"
          />
        </div>

        <div className="relative flex items-center justify-end flex-1 gap-2" onClick={cartList}>
          <BsCart3 size={25} />
          <div className="relative">
            <span className="bg-red-500 rounded-full px-1 text-white text-xs absolute -top-5 right-2">
              {1}
            </span>
          </div>
          <p className="font-normal text-lg hidden md:block">Cart</p>
        </div>
      </div>
    </header>
  );
}

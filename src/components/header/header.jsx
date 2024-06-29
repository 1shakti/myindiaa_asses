import React from "react";
import { BsCart3 } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import { CART_LIST_PATH, HOME_PATH } from "../../constants/path";
import { IoMdArrowBack } from "react-icons/io";
import { useSelector } from "react-redux";

export default function Header() {
  const navigate = useNavigate();
  const { cartItems } = useSelector((state) => state.cartReducer);
  const cartList = () => {
    navigate(CART_LIST_PATH);
  };

  const backBtn = () => {
    navigate(HOME_PATH);
  };

  const homeBtn = () => {
    navigate(HOME_PATH);
  };

  const href = window.location;

  return (
    <header className="w-full h-[60px] p-3 md:p-5 flex items-center bg-white">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center">
          {href.pathname !== CART_LIST_PATH ? (
            <img
              src="./assets/logos/company_logo.png"
              alt="My Indiaa Logo"
              className="mix-blend-multiply w-[120px] md:w-[200px] h-auto cursor-pointer"
              onClick={homeBtn}
            />
          ) : (
            <>
              <IoMdArrowBack size="24" onClick={backBtn} className="cursor-pointer" />
              <p>My cart</p>
            </>
          )}
        </div>

        {href.pathname !== CART_LIST_PATH && (
          <div
            className="relative flex items-center justify-end flex-1 gap-2 cursor-pointer"
            onClick={cartList}
          >
            <BsCart3 size={25} />
            <div className="relative">
              {cartItems?.length > 0 && (
                <span className="bg-red-500 rounded-full px-1 text-white text-xs absolute -top-5 right-2">
                  {cartItems.length}
                </span>
              )}
            </div>
            <p className="font-normal text-lg hidden md:block">Cart</p>
          </div>
        )}
      </div>
    </header>
  );
}

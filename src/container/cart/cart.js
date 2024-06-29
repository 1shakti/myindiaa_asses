import React from "react";
import { CartList } from "../../components";
import { useDispatch, useSelector } from "react-redux";
import { removeFromCartRequest } from "../../store/actions/cartAction";

export default function Cart() {
  const cartState = useSelector((state) => state.cartReducer);
  const { cartItems } = cartState;
  const totalPrice = cartItems?.reduce((acc, item) => acc + item.price, 0);
  const dispatch = useDispatch();
  const removeFromCart = (productId) => {
    dispatch(removeFromCartRequest({ productId }));
  };

  return (
    <CartList
      cartItems={cartItems}
      totalPrice={totalPrice}
      removeFromCart={removeFromCart}
    />
  );
}

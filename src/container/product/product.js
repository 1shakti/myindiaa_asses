import React, { useEffect } from "react";
import { InfinitySpinLoader, ProductList } from "../../components";
import { useDispatch, useSelector } from "react-redux";
import { productListRequest } from "../../store/actions/productListAction";
import { useNavigate } from "react-router-dom";
import { CART_LIST_PATH } from "../../constants/path";
import { addToCarRequest } from "../../store/actions/cartAction";

export default function Product() {
  const dispatch = useDispatch();
  const { loading, res } = useSelector((state) => state.productListReducer);
  const navigate = useNavigate();
  const cartState = useSelector((state) => state.cartReducer);
  const { cartItems } = cartState;

  const addToCart = (product) => {
    dispatch(addToCarRequest({ product }));
  };
  const goToCart = () => {
    navigate(CART_LIST_PATH);
  };

  useEffect(() => {
    dispatch(productListRequest());
  }, []);

  return loading ? (
    <InfinitySpinLoader />
  ) : (
    <ProductList
      products={res?.data?.products}
      goToCart={goToCart}
      addToCart={addToCart}
      cartItems={cartItems}
    />
  );
}

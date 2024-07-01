import React, { useEffect, useState } from "react";
import { InfinitySpinLoader, ProductList } from "../../components";
import { useDispatch, useSelector } from "react-redux";
import { productListRequest } from "../../store/actions/productListAction";
import { useNavigate } from "react-router-dom";
import { CART_LIST_PATH } from "../../constants/path";
import { addToCarRequest } from "../../store/actions/cartAction";
import { getDataFromDB } from "../../utils/indexedDB";

export default function Product() {

  const [loading, setLoading] = useState(true);
  const [productsFromDB, setProductsFromDB] = useState([]);

  const dispatch = useDispatch();
  const { loading: productListLoading, res: productListRes } = useSelector(
    (state) => state.productListReducer
  );  const navigate = useNavigate();
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

    // Check network status
    const isOnline = navigator.onLine;

    // Fetch data from IndexedDB if offline
    if (!isOnline) {
      getDataFromDB("products-db", "products-store").then((data) => {
        setProductsFromDB(data);
        setLoading(false); // Set loading to false once data is fetched
      });
    }
  }, [dispatch]);
  const productsToShow = productsFromDB.length > 0 ? productsFromDB : productListRes?.data?.products;

  return (productListLoading || (loading && !navigator.onLine)) ? (
    <InfinitySpinLoader />
  ) : (
    <ProductList
      products={productsToShow}
      goToCart={goToCart}
      addToCart={addToCart}
      cartItems={cartItems}
    />
  );
}

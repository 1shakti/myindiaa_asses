import React, { useEffect } from 'react'
import { InfinitySpinLoader, ProductList } from '../../components'
import { useDispatch, useSelector } from 'react-redux'
import { productListRequest } from '../../store/actions/productListAction';

export default function Product() {

    const dispatch = useDispatch();
    const { loading, res, error } = useSelector(state => state.productListReducer);
  console.log(res)
    useEffect(() => {
        dispatch(productListRequest());
    },[])

  return (
    loading ? <InfinitySpinLoader /> : <ProductList products={res?.data?.products} />
  )
}

import * as types from "../types";

export const addToCarRequest = ({product}) => {
    return{
        type: types.ADD_TO_CART,
        payload: {product}
    }
}

export const removeFromCartRequest = ({productId}) => {
    return{
        type: types.REMOVE_FROM_CART,
        payload: {productId}
    }
}
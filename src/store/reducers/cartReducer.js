import * as types from "../types";

const initialState = {
  cartItems: [],
};

export const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.ADD_TO_CART:
      const newItem = action.payload.product;
      return {
        ...state,
        cartItems: [...state.cartItems, newItem],
      };

    case types.REMOVE_FROM_CART:
      const productId = action.payload.productId;
      return {
        ...state,
        cartItems: state.cartItems.filter((item) => item.id !== productId),
      };

    default:
      return state;
  }
};

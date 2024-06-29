import * as types from "../types";

const initialState = {
  loading: false,
  res: null,
  error: null,
};

const productListReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.FETCH_PRODUCTLIST_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case types.FETCH_PRODUCTLIST_SUCCESS:
      return {
        ...state,
        loading: false,
        res: action.payload.res,
      };

    case types.FETCH_PRODUCTLIST_FAILURE:
      return {
        loading: false,
        res: null,
        error: action.payload.error,
      };

    default:
      return state;
  }
};

export default productListReducer;

import * as types from "../types";

export const productListRequest = () => {
  return {
    type: types.FETCH_PRODUCTLIST_REQUEST,
  };
};

export const productListSuccess = ({ res }) => {
  return {
    type: types.FETCH_PRODUCTLIST_SUCCESS,
    payload: {
      res,
    },
  };
};

export const productListFailure = ({ error }) => {
  return {
    type: types.FETCH_PRODUCTLIST_FAILURE,
    payload: {
      error: error.message,
    },
  };
};

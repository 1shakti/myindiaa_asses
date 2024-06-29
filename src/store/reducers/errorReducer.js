import * as types from "../types";

const initialState = {
  msg: null,
  status: null,
};

const errorReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.GET_ERRORS:
      return {
        msg: action.payload.msg,
        status: action.payload.status,
      };

    case types.CLEAR_ERRORS:
      return {
        msg: null,
        status: null,
      };

    default:
      return state;
  }
};

export default errorReducer;

import * as types from "../types";

export const returnErros = ({ msg, status }) => {
  return {
    type: types.GET_ERRORS,
    payload: {
      msg,
      status,
    },
  };
};

export const clearErrors = () => {
  return {
    type: types.CLEAR_ERRORS,
  };
};

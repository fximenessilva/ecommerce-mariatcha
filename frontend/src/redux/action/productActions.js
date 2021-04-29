/* eslint-disable import/prefer-default-export */

import axios from 'axios';
import actionTypes from './actionTypes';

function requestProductsSuccess(products) {
  return {
    type: actionTypes.PRODUCT_LIST_SUCCESS,
    products,
  };
}

function requestProductsError(error) {
  return {
    type: actionTypes.PRODUCT_LIST_FAIL,
    error:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
  };
}

export function requestProducts() {
  return async (dispatch) => {
    const endpoint = 'http://localhost:8888/api/products';
    try {
      dispatch({ type: actionTypes.PRODUCT_LIST_REQUEST });

      const { data } = await axios.get(endpoint);
      dispatch(requestProductsSuccess(data));
    } catch (error) {
      dispatch(requestProductsError(error));
    }
  };
}

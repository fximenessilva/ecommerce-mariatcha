/* eslint-disable no-debugger */
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

function requestProductDetailSuccess(product) {
  return {
    type: actionTypes.PRODUCT_DETAIL_SUCCESS,
    product,
  };
}

function requestProductDetailError(error) {
  return {
    type: actionTypes.PRODUCT_DETAIL_FAIL,
    error:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
  };
}

export function requestProductDetail(id) {
  return async (dispatch) => {
    const endpoint = `http://localhost:8888/api/products/${id}`;
    try {
      dispatch({ type: actionTypes.PRODUCT_DETAIL_REQUEST });

      const { data } = await axios.get(endpoint);
      dispatch(requestProductDetailSuccess(data));
    } catch (error) {
      dispatch(requestProductDetailError(error));
    }
  };
}

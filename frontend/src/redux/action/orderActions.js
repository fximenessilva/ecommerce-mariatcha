/* eslint-disable import/prefer-default-export */
import axios from 'axios';
import actionTypes from './actionTypes';

function createOrderSuccess(order) {
  return {
    type: actionTypes.ORDER_CREATE_SUCCESS,
    order,
  };
}

function createOrderError(error) {
  return {
    type: actionTypes.ORDER_CREATE_FAIL,
    error:
            error.response && error.response.data.message
              ? error.response.data.message
              : error.message,
  };
}

export function createOrder(order) {
  return async (dispatch, getState) => {
    const endpoint = 'http://localhost:8888/api/orders';
    try {
      dispatch({ type: actionTypes.ORDER_CREATE_REQUEST });

      const { userLoginReducer: { userInfo } } = getState();
      const config = {
        headers: {
          'Content-type': 'application/json',
          Authorization: `Bearer ${userInfo.token}`,
        },
      };

      const { data } = await axios.post(
        endpoint, order, config,
      );

      dispatch(createOrderSuccess(data));
    } catch (error) {
      dispatch(createOrderError(error));
    }
  };
}

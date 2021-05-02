/* eslint-disable import/prefer-default-export */
import actionTypes from '../action/actionTypes';

// eslint-disable-next-line consistent-return
export const orderCreateReducer = (state = {}, action) => {
  switch (action.type) {
    case actionTypes.ORDER_CREATE_REQUEST:
      return { loading: true };

    case actionTypes.ORDER_CREATE_SUCCESS:
      return { loading: false, success: true, order: action.order };

    case actionTypes.ORDER_CREATE_FAIL:
      return { loading: false, error: action.error };

    default:
      return state;
  }
};

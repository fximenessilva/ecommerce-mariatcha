/* eslint-disable no-case-declarations */
/* eslint-disable max-len */
import actionTypes from '../action/actionTypes';

const cartReducer = (state = { cartItems: [], shippingAddress: {} }, action) => {
  switch (action.type) {
    case actionTypes.CART_ADD_ITEM:
      const item = action.payload;

      const existItem = state.cartItems.find((x) => x.product === item.product);

      if (existItem) {
        return { ...state, cartItems: state.cartItems.map((x) => (x.product === existItem.product ? item : x)) };
      }
      return { ...state, cartItems: [...state.cartItems, item] };

    case actionTypes.CART_REMOVE_ITEM:
      return { ...state, cartItems: state.cartItems.filter((x) => x.product !== action.payload) };

    case actionTypes.CART_SAVE_SHIPPING_ADDRESS:
      return { ...state, shippingAddress: state.data };

    default:
      return state;
  }
};

export default cartReducer;

/* eslint-disable no-unused-vars */
/* eslint-disable no-underscore-dangle */
import axios from 'axios';
import actionTypes from './actionTypes';

const addToCart = (id, qty) => async (dispatch, getState) => {
  const { data } = await axios.get(`http://localhost:8888/api/products/${id}`);

  dispatch({
    type: actionTypes.CART_ADD_ITEM,
    payload: {
      product: data._id,
      name: data.name,
      image: data.image,
      price: data.price,
      countInStock: data.countInStock,
      qty,
    },
  });
  const cartItems = JSON.stringify(getState().cartReducer.cartItems);
  localStorage.setItem('cartItems', cartItems);
};

const removeFromCart = (id) => (dispatch, getState) => {
  dispatch({
    type: actionTypes.CART_REMOVE_ITEM,
    payload: id,
  });

  const cartItems = JSON.stringify(getState().cartReducer.cartItems);
  localStorage.setItem('cartItems', cartItems);
};

const saveShippingAddress = (data) => (dispatch) => {
  dispatch({
    type: actionTypes.CART_SAVE_SHIPPING_ADDRESS,
    data,
  });

  const shippingAddress = JSON.stringify(data);
  localStorage.setItem('shippingAddress', shippingAddress);
};

export { addToCart, removeFromCart, saveShippingAddress };

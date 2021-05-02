import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import { productReducer, productDetailReducer } from './reducers/productReducer';
import cartReducer from './reducers/cartReducer';
import {
  userLoginReducer, userRegisterReducer, userDetailReducer, userUserUpdateProfileReducer,
} from './reducers/userReducer';
import { orderCreateReducer } from './reducers/orderReducer';

const reducer = combineReducers({
  productReducer,
  productDetailReducer,
  cartReducer,
  userLoginReducer,
  userRegisterReducer,
  userDetailReducer,
  userUserUpdateProfileReducer,
  orderCreateReducer,
});

const cartItemsFromStorage = localStorage.getItem('cartItems')
  ? JSON.parse(localStorage.getItem('cartItems'))
  : [];

const userInfoFromStorage = localStorage.getItem('userInfo')
  ? JSON.parse(localStorage.getItem('userInfo'))
  : null;

const shippingAddressFromStorage = localStorage.getItem('shippingAddress')
  ? JSON.parse(localStorage.getItem('shippingAddress'))
  : {};

const initialState = {
  cartReducer: {
    cartItems: cartItemsFromStorage,
    shippingAddress: shippingAddressFromStorage,
  },
  userLoginReducer: { userInfo: userInfoFromStorage },
};

const middleware = [thunk];

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware)),

);

export default store;

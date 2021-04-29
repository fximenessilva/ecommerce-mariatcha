import actionTypes from '../action/actionTypes';

const productListReducer = (state = { products: [] }, action) => {
  switch (action.type) {
    case actionTypes.PRODUCT_LIST_REQUEST:
      return { ...state, loading: true, products: [] };

    case actionTypes.PRODUCT_LIST_SUCCESS:
      return { ...state, loading: false, products: action.products };

    case actionTypes.PRODUCT_LIST_FAIL:
      return { ...state, loading: false, error: action.error };

    default:
      return state;
  }
};

export default productListReducer;

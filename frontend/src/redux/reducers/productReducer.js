import actionTypes from '../action/actionTypes';

const productReducer = (state = { products: [] }, action) => {
  switch (action.type) {
    case actionTypes.PRODUCT_LIST_REQUEST:
      return { loading: true, products: [] };

    case actionTypes.PRODUCT_LIST_SUCCESS:
      return { loading: false, products: action.products };

    case actionTypes.PRODUCT_LIST_FAIL:
      return { loading: false, error: action.error };

    default:
      return state;
  }
};

const productDetailReducer = (state = { product: { reviews: [] } }, action) => {
  switch (action.type) {
    case actionTypes.PRODUCT_DETAIL_REQUEST:
      return { ...state, loading: true, product: {} };

    case actionTypes.PRODUCT_DETAIL_SUCCESS:
      return { loading: false, product: action.product };

    case actionTypes.PRODUCT_DETAIL_FAIL:
      return { loading: false, error: action.error };

    default:
      return state;
  }
};

export { productReducer, productDetailReducer };

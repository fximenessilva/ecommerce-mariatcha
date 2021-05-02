import actionTypes from '../action/actionTypes';

const userLoginReducer = (state = {}, action) => {
  switch (action.type) {
    case actionTypes.USER_LOGIN_REQUEST:
      return { loading: true };

    case actionTypes.USER_LOGIN_SUCCESS:
      return { loading: false, userInfo: action.userInfo };

    case actionTypes.USER_LOGIN_FAIL:
      return { loading: false, error: action.error };

    case actionTypes.USER_LOGOUT:
      return { };

    default:
      return state;
  }
};

const userRegisterReducer = (state = {}, action) => {
  switch (action.type) {
    case actionTypes.USER_REGISTER_REQUEST:
      return { loading: true };

    case actionTypes.USER_REGISTER_SUCCESS:
      return { loading: false, userInfo: action.userInfo };

    case actionTypes.USER_REGISTER_FAIL:
      return { loading: false, error: action.error };

    default:
      return state;
  }
};

export { userLoginReducer, userRegisterReducer };

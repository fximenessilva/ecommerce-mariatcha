import axios from 'axios';
import actionTypes from './actionTypes';

function userLoginSuccess(userInfo) {
  return {
    type: actionTypes.USER_LOGIN_SUCCESS,
    userInfo,
  };
}

function userLoginError(error) {
  return {
    type: actionTypes.USER_LOGIN_FAIL,
    error:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
  };
}

export function login(email, password) {
  return async (dispatch) => {
    const endpoint = 'http://localhost:8888/api/users/login';
    try {
      dispatch({ type: actionTypes.USER_LOGIN_REQUEST });

      const config = {
        headers: {
          'Content-type': 'application/json',
        },
      };

      const { data } = await axios.post(
        endpoint,
        { email, password },
        config,
      );

      dispatch(userLoginSuccess(data));

      const userInfo = JSON.stringify(data);
      localStorage.setItem('userInfo', userInfo);
    } catch (error) {
      dispatch(userLoginError(error));
    }
  };
}

export function logout() {
  return (dispatch) => {
    localStorage.removeItem('userInfo');
    dispatch({
      type: actionTypes.USER_LOGOUT,
    });
  };
}

function userRegisterSuccess(userInfo) {
  return {
    type: actionTypes.USER_REGISTER_SUCCESS,
    userInfo,
  };
}

function userRegisterError(error) {
  return {
    type: actionTypes.USER_REGISTER_FAIL,
    error:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
  };
}

export function register(name, email, password) {
  return async (dispatch) => {
    const endpoint = 'http://localhost:8888/api/users';
    try {
      dispatch({ type: actionTypes.USER_REGISTER_REQUEST });

      const config = {
        headers: {
          'Content-type': 'application/json',
        },
      };

      const { data } = await axios.post(
        endpoint,
        { name, email, password },
        config,
      );

      dispatch(userRegisterSuccess(data));
      dispatch(userLoginSuccess(data));

      const userInfo = JSON.stringify(data);
      localStorage.setItem('userInfo', userInfo);
    } catch (error) {
      dispatch(userRegisterError(error));
    }
  };
}

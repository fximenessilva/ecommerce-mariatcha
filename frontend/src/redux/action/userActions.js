/* eslint-disable no-debugger */
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

function getUserDetailSuccess(user) {
  return {
    type: actionTypes.USER_DETAIL_SUCCESS,
    user,
  };
}

function getUserDetailError(error) {
  return {
    type: actionTypes.USER_DETAIL_FAIL,
    error:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
  };
}

export function getUserDetail(id) {
  return async (dispatch, getState) => {
    const endpoint = `http://localhost:8888/api/users/${id}`;
    try {
      dispatch({ type: actionTypes.USER_DETAIL_REQUEST });

      const { userLoginReducer: { userInfo } } = getState();
      const config = {
        headers: {
          // 'Content-type': 'application/json',
          Authorization: `Bearer ${userInfo.token}`,
        },
      };

      const { data } = await axios.get(
        endpoint, config,
      );

      dispatch(getUserDetailSuccess(data));
    } catch (error) {
      dispatch(getUserDetailError(error));
    }
  };
}

function updateUserProfileSuccess(userInfo) {
  return {
    type: actionTypes.USER_UPDATE_PROFILE_SUCCESS,
    userInfo,
  };
}

function updateUserProfileError(error) {
  return {
    type: actionTypes.USER_UPDATE_PROFILE_FAIL,
    error:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
  };
}

export function updateUserProfile(user) {
  return async (dispatch, getState) => {
    const endpoint = 'http://localhost:8888/api/users/profile';
    try {
      dispatch({ type: actionTypes.USER_UPDATE_PROFILE_REQUEST });

      const { userLoginReducer: { userInfo } } = getState();
      const config = {
        headers: {
          // 'Content-type': 'application/json',
          Authorization: `Bearer ${userInfo.token}`,
        },
      };

      const { data } = await axios.put(
        endpoint, user, config,
      );

      dispatch(updateUserProfileSuccess(data));
    } catch (error) {
      dispatch(updateUserProfileError(error));
    }
  };
}

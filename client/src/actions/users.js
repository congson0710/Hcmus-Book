import axios from 'axios';
import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  REGISTER_REQUEST,
  LOGIN_REQUEST,
  LOGIN_FAIL,
  LOGIN_SUCCESS,
  LOGOUT_REQUEST,
  LOGOUT_SUCCESS,
  LOGOUT_FAIL,
  CHANGE_USER_INFO_REQUEST,
  CHANGE_USER_INFO_SUCCESS,
  CHANGE_USER_INFO_FAIL,
  CHANGE_PASSWORD_REQUEST,
  CHANGE_PASSWORD_SUCCESS,
  CHANGE_PASSWORD_FAIL,
} from './actions.type';

export const register = registerInfo => async dispatch => {
  dispatch({
    type: REGISTER_REQUEST,
  });

  try {
    const response = await axios.post('/api/register', registerInfo);
    dispatch({
      type: REGISTER_SUCCESS,
      payload: response.data,
    });
  } catch (error) {
    dispatch({
      type: REGISTER_FAIL,
      payload: error.response.data,
    });
  }
};

export const login = loginInfo => async dispatch => {
  dispatch({
    type: LOGIN_REQUEST,
  });

  try {
    const response = await axios.post('/api/login', loginInfo);
    dispatch({
      type: LOGIN_SUCCESS,
      payload: response.data,
    });
  } catch (error) {
    dispatch({
      type: LOGIN_FAIL,
      payload: error.response.data,
    });
  }
};

export const logout = () => async dispatch => {
  dispatch({
    type: LOGOUT_REQUEST,
  });

  try {
    const response = await axios.get('/api/logout');

    dispatch({
      type: LOGOUT_SUCCESS,
      payload: response.data,
    });
  } catch (error) {
    dispatch({
      type: LOGOUT_FAIL,
      payload: error.response.data,
    });
  }
};

export const changeInfo = infoInput => async dispatch => {
  dispatch({
    type: CHANGE_USER_INFO_REQUEST,
  });

  const infoChange = {
    userName: infoInput.userName,
    userAddress: infoInput.userAddress,
    gender: infoInput.gender,
    phone: infoInput.phone,
  };

  try {
    const response = await axios.post('/api/change-user-info', infoChange);

    dispatch({
      type: CHANGE_USER_INFO_SUCCESS,
      payload: response.data,
    });
  } catch (error) {
    dispatch({
      type: CHANGE_USER_INFO_FAIL,
      payload: error.response.data,
    });
  }
};

export const changePassword = newPassword => async dispatch => {
  dispatch({
    type: CHANGE_PASSWORD_REQUEST,
  });

  const userNewPassword = {
    newPassword,
  };

  try {
    const response = await axios.post(
      '/api/change-user-password',
      userNewPassword
    );

    dispatch({
      type: CHANGE_PASSWORD_SUCCESS,
      payload: response.data,
    });
  } catch (error) {
    dispatch({
      type: CHANGE_PASSWORD_FAIL,
      payload: error.response.data,
    });
  }
};

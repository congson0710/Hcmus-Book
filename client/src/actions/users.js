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

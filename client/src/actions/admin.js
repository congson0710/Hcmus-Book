import axios from 'axios';
import {
  GET_ALL_POST_FAIL,
  GET_ALL_POST_SUCCESS,
  GET_ALL_POST_REQUEST,
  GET_HOME_ORDER_REQUEST,
  GET_HOME_ORDER_SUCCESS,
  GET_HOME_ORDER_FAIL,
  APPROVE_REQUEST,
  APPROVE_SUCCESS,
  APPROVE_FAIL,
  APPROVE_ORDER_REQUEST,
  APPROVE_ORDER_SUCCESS,
  APPROVE_ORDER_FAIL,
} from './actions.type';

export const getAllPosts = () => async dispatch => {
  dispatch({
    type: GET_ALL_POST_REQUEST,
  });

  try {
    const response = await axios.get('/api/admin-management-post');
    dispatch({
      type: GET_ALL_POST_SUCCESS,
      payload: response.data,
    });
  } catch (error) {
    dispatch({
      type: GET_ALL_POST_FAIL,
      payload: error.response.data,
    });
  }
};

export const getAllOrders = () => async dispatch => {
  dispatch({
    type: GET_HOME_ORDER_REQUEST,
  });

  try {
    const response = await axios.get('/api/admin-management-order');
    dispatch({
      type: GET_HOME_ORDER_SUCCESS,
      payload: response.data,
    });
  } catch (error) {
    dispatch({
      type: GET_HOME_ORDER_FAIL,
      payload: error.response.data,
    });
  }
};

export const approvePost = id => async dispatch => {
  dispatch({
    type: APPROVE_REQUEST,
  });

  const post = {
    id,
  };

  try {
    const response = await axios.post('/api/admin/approve/post', post);

    dispatch({
      type: APPROVE_SUCCESS,
      payload: response.data,
    });
  } catch (error) {
    dispatch({
      type: APPROVE_FAIL,
      payload: error.response.data,
    });
  }
};

export const approveOrder = id => async dispatch => {
  dispatch({
    type: APPROVE_ORDER_REQUEST,
  });

  const order = {
    id,
  };

  try {
    const response = axios.post('/api/admin/approve/order', order);

    dispatch({
      type: APPROVE_ORDER_SUCCESS,
      payload: response.data,
    });
  } catch (error) {
    dispatch({
      type: APPROVE_ORDER_FAIL,
      payload: error.response.data,
    });
  }
};

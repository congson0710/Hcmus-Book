import axios from 'axios';

import {
  ORDER_REQUEST,
  ORDER_SUCCESS,
  ORDER_FAIL,
  CONFIRM_ORDER,
  GET_ORDER_DETAIL_REQUEST,
  GET_ORDER_DETAIL_SUCCESS,
  GET_ORDER_DETAIL_FAIL,
} from './actions.type';

export const orderBook = orderInfo => async dispatch => {
  dispatch({
    type: ORDER_REQUEST,
  });

  try {
    orderInfo.currentUser = JSON.parse(sessionStorage.getItem('appUser'));

    const response = await axios.post('/api/order-book', orderInfo);
    dispatch({
      type: ORDER_SUCCESS,
      payload: response.data,
    });
  } catch (error) {
    dispatch({
      type: ORDER_FAIL,
      payload: error.response.data,
    });
  }
};

export const getOrderDetail = id => async dispatch => {
  dispatch({
    type: GET_ORDER_DETAIL_REQUEST,
  });

  const order = {
    id,
  };

  try {
    const response = await axios.post('/api/order-detail', order);

    dispatch({
      type: GET_ORDER_DETAIL_SUCCESS,
      payload: response.data,
    });
  } catch (error) {
    dispatch({
      type: GET_ORDER_DETAIL_FAIL,
      payload: error.response.data,
    });
  }
};

export const confirmOrder = orderInfo => async dispatch => {
  dispatch({
    type: CONFIRM_ORDER,
    payload: orderInfo,
  });
};

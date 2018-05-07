import axios from 'axios';
import {
  GET_ALL_POST_FAIL,
  GET_ALL_POST_SUCCESS,
  GET_ALL_POST_REQUEST,
  APPROVE_REQUEST,
  APPROVE_SUCCESS,
  APPROVE_FAIL,
} from './actions.type';

export const getAllPosts = () => async dispatch => {
  dispatch({
    type: GET_ALL_POST_REQUEST,
  });

  try {
    const response = await axios.get('/api/admin-management');
    console.log(response);
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

export const approve = id => async dispatch => {
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

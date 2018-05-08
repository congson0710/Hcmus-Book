import axios from 'axios';
import _ from 'lodash';
import {
  GET_HOME_POST_REQUEST,
  GET_HOME_POST_SUCCESS,
  GET_HOME_POST_FAIL,
  GET_HOME_BOOK_REQUEST,
  GET_HOME_BOOK_SUCCESS,
  GET_HOME_BOOK_FAIL,
} from './actions.type';

export const getHomePost = () => async dispatch => {
  dispatch({
    type: GET_HOME_POST_REQUEST,
  });

  try {
    const response = await axios.get('/api/home/post');
    const chunkListPost = _.chunk(response.data, 4);
    dispatch({
      type: GET_HOME_POST_SUCCESS,
      payload: chunkListPost,
    });
  } catch (error) {
    dispatch({
      type: GET_HOME_POST_FAIL,
      payload: error.response.data,
    });
  }
};

export const getHomeBook = () => async dispatch => {
  dispatch({
    type: GET_HOME_BOOK_REQUEST,
  });

  try {
    const response = await axios.get('/api/home/book');
    const chunkListBook = _.chunk(response.data, 4);
    dispatch({
      type: GET_HOME_BOOK_SUCCESS,
      payload: chunkListBook,
    });
  } catch (error) {
    dispatch({
      type: GET_HOME_BOOK_FAIL,
      payload: error.response.data,
    });
  }
};

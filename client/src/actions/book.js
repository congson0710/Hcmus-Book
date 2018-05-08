import axios from 'axios';
import {
  GET_BOOK_DETAIL_REQUEST,
  GET_BOOK_DETAIL_SUCCESS,
  GET_BOOK_DETAIL_FAIL,
} from './actions.type';

export const getBookDetail = id => async dispatch => {
  dispatch({
    type: GET_BOOK_DETAIL_REQUEST,
  });

  const book = {
    id,
  };

  try {
    const response = await axios.post('/api/book-detail', book);
    dispatch({
      type: GET_BOOK_DETAIL_SUCCESS,
      payload: response.data,
    });
  } catch (error) {
    dispatch({
      type: GET_BOOK_DETAIL_FAIL,
      payload: error.response.data,
    });
  }
};

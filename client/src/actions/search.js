import axios from 'axios';

import { SEARCH_REQUEST, SEARCH_SUCCESS, SEARCH_FAIL } from './actions.type';

export const search = content => async dispatch => {
  dispatch({
    type: SEARCH_REQUEST,
  });

  try {
    const response = axios.get(`/api/search?search=${content}`);

    dispatch({
      type: SEARCH_SUCCESS,
      payload: response.data,
    });
  } catch (error) {
    dispatch({
      type: SEARCH_FAIL,
      payload: error.response.data,
    });
  }
};

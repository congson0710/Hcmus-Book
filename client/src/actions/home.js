import axios from 'axios';
import _ from 'lodash';
import {
  GET_HOME_POST_REQUEST,
  GET_HOME_POST_SUCCESS,
  GET_HOME_POST_FAIL,
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

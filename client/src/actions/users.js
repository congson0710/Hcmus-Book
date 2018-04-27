import axios from 'axios';
import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  REGISTER_REQUEST,
} from './actions.type';

export const register = registerInfo => async dispatch => {
  dispatch({
    type: REGISTER_REQUEST,
  });

  try {
    const response = await axios.post('/api/register', registerInfo);
    console.log('user tra ve:', response);
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

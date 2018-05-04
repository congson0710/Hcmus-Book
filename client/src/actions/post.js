import axios from 'axios';

import { POST_REQUEST, POST_SUCCESS, POST_FAILURE } from './actions.type';

export const upload = infoInput => async dispatch => {
  dispatch({
    type: POST_REQUEST,
  });

  const formData = new FormData();
  formData.append('file', infoInput[0]);
  const config = {
    headers: { 'content-type': 'multipart/form-data' },
  };

  try {
    const response = await axios.post('/api/upload', formData, config);
    console.log(response);
    dispatch({
      type: POST_SUCCESS,
      payload: response.data,
    });
  } catch (error) {
    dispatch({
      type: POST_FAILURE,
      payload: error.response.data,
    });
  }
};

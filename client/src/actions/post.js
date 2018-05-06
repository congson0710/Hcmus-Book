import axios from 'axios';
import draftToHtml from 'draftjs-to-html';
import { convertToRaw } from 'draft-js';

import { POST_REQUEST, POST_SUCCESS, POST_FAILURE } from './actions.type';

export const upload = infoInput => async dispatch => {
  dispatch({
    type: POST_REQUEST,
  });

  const post = {
    title: infoInput.title,
    name: infoInput.name,
    price: infoInput.price,
    cond: infoInput.cond,
    image: infoInput.poster,
    description: draftToHtml(
      convertToRaw(infoInput.description.getCurrentContent())
    ),
  };

  try {
    const response = await axios.post('/api/upload', post);
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
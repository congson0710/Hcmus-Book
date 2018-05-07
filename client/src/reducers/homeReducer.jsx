import {
  GET_HOME_POST_REQUEST,
  GET_HOME_POST_SUCCESS,
  GET_HOME_POST_FAIL,
} from '../actions/actions.type';

const initialState = {
  homePost: {
    posts: [],
    isLoading: false,
    isError: false,
    message: '',
  },
};

const homeReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_HOME_POST_REQUEST: {
      return {
        ...state,
        homePost: {
          ...state.homePost,
          isLoading: true,
        },
      };
    }

    case GET_HOME_POST_SUCCESS: {
      return {
        ...state,
        homePost: {
          ...state.homePost,
          isLoading: false,
          isError: false,
          posts: action.payload,
        },
      };
    }

    case GET_HOME_POST_FAIL: {
      return {
        ...state,
        homePost: {
          ...state.homePost,
          isLoading: false,
          isError: true,
          message: action.payload,
        },
      };
    }

    default:
      return {
        ...state,
      };
  }
};

export default homeReducer;

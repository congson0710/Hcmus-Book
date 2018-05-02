import {
  POST_REQUEST,
  POST_SUCCESS,
  POST_FAILURE,
} from '../actions/actions.type';

const initialState = {
  createPost: {
    post: {},
    isLoading: false,
    isError: false,
    message: '',
  },
};

const postReducer = (state = initialState, action) => {
  switch (action.type) {
    case POST_REQUEST: {
      return {
        ...state,
        createPost: {
          ...state.createPost,
          isLoading: true,
        },
      };
    }
    case POST_SUCCESS: {
      return {
        ...state,
        createPost: {
          ...state.createPost,
          isLoading: false,
          isError: false,
          post: action.payload,
        },
      };
    }
    case POST_FAILURE: {
      return {
        ...state,
        createPost: {
          ...state.createPost,
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

export default postReducer;

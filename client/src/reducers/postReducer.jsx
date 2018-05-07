import {
  POST_REQUEST,
  POST_SUCCESS,
  POST_FAILURE,
  GET_POST_DETAIL_REQUEST,
  GET_POST_DETAIL_SUCCESS,
  GET_POST_DETAIL_FAIL,
} from '../actions/actions.type';

const initialState = {
  createPost: {
    post: {},
    isLoading: false,
    isError: false,
    message: '',
  },

  detailPost: {
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

    case GET_POST_DETAIL_REQUEST: {
      return {
        ...state,
        detailPost: {
          ...state.detailPost,
          isLoading: true,
        },
      };
    }

    case GET_POST_DETAIL_SUCCESS: {
      return {
        ...state,
        detailPost: {
          ...state.detailPost,
          isLoading: false,
          isError: false,
          post: action.payload,
        },
      };
    }

    case GET_POST_DETAIL_FAIL: {
      return {
        ...state,
        detailPost: {
          ...state.detailPost,
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

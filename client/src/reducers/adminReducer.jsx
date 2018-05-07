import {
  GET_ALL_POST_FAIL,
  GET_ALL_POST_SUCCESS,
  GET_ALL_POST_REQUEST,
  APPROVE_REQUEST,
  APPROVE_SUCCESS,
  APPROVE_FAIL,
} from '../actions/actions.type';

const initialState = {
  allPost: {
    posts: [],
    isLoading: false,
    isError: false,
    message: '',
  },

  approvePost: {
    post: {},
    isLoading: false,
    isError: false,
    message: '',
  },
};

const adminReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_POST_REQUEST: {
      return {
        ...state,
        allPost: {
          ...state.allPost,
          isLoading: true,
        },
      };
    }

    case GET_ALL_POST_SUCCESS: {
      return {
        ...state,
        allPost: {
          ...state.allPost,
          isLoading: false,
          isError: false,
          posts: action.payload,
        },
      };
    }

    case GET_ALL_POST_FAIL: {
      return {
        ...state,
        allPost: {
          ...state.allPost,
          isLoading: false,
          isError: true,
          message: action.payload,
        },
      };
    }

    case APPROVE_REQUEST: {
      return {
        ...state,
        approvePost: {
          ...state.approvePost,
          isLoading: true,
        },
      };
    }

    case APPROVE_SUCCESS: {
      return {
        ...state,
        approvePost: {
          ...state.approvePost,
          isLoading: false,
          isError: false,
          post: action.payload,
        },
      };
    }

    case APPROVE_FAIL: {
      return {
        ...state,
        approvePost: {
          ...state.approvePost,
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

export default adminReducer;

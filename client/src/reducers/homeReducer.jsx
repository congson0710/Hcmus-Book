import {
  GET_HOME_POST_REQUEST,
  GET_HOME_POST_SUCCESS,
  GET_HOME_POST_FAIL,
  GET_HOME_BOOK_REQUEST,
  GET_HOME_BOOK_SUCCESS,
  GET_HOME_BOOK_FAIL,
} from '../actions/actions.type';

const initialState = {
  homePost: {
    posts: [],
    isLoading: false,
    isError: false,
    message: '',
  },

  homeBook: {
    books: [],
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

    case GET_HOME_BOOK_REQUEST: {
      return {
        ...state,
        homeBook: {
          ...state.homeBook,
          isLoading: true,
        },
      };
    }

    case GET_HOME_BOOK_SUCCESS: {
      return {
        ...state,
        homeBook: {
          ...state.homeBook,
          isLoading: false,
          isError: false,
          books: action.payload,
        },
      };
    }

    case GET_HOME_BOOK_FAIL: {
      return {
        ...state,
        homeBook: {
          ...state.homeBook,
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

import {
  GET_BOOK_DETAIL_REQUEST,
  GET_BOOK_DETAIL_SUCCESS,
  GET_BOOK_DETAIL_FAIL,
} from '../actions/actions.type';

const initialState = {
  bookDetail: {
    book: {},
    isLoading: false,
    isError: false,
    message: '',
  },
};

const bookReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_BOOK_DETAIL_REQUEST: {
      return {
        ...state,
        bookDetail: {
          ...state.bookDetail,
          isLoading: true,
        },
      };
    }

    case GET_BOOK_DETAIL_SUCCESS: {
      return {
        ...state,
        bookDetail: {
          ...state.bookDetail,
          isLoading: false,
          isError: false,
          book: action.payload,
        },
      };
    }

    case GET_BOOK_DETAIL_FAIL: {
      return {
        ...state,
        bookDetail: {
          ...state.bookDetail,
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

export default bookReducer;

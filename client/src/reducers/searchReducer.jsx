import {
  SEARCH_REQUEST,
  SEARCH_SUCCESS,
  SEARCH_FAIL,
} from '../actions/actions.type';

const initialState = {
  searchResult: {
    list: [],
    isLoading: false,
    isError: false,
    message: '',
  },
};

const searchReducer = (state = initialState, action) => {
  switch (action.type) {
    case SEARCH_REQUEST: {
      return {
        ...state,
        searchResult: {
          ...state.searchResult,
          isLoading: true,
        },
      };
    }

    case SEARCH_SUCCESS: {
      return {
        ...state,
        searchResult: {
          ...state.searchResult,
          isLoading: false,
          isError: false,
          list: action.payload,
        },
      };
    }

    case SEARCH_FAIL: {
      return {
        ...state,
        searchResult: {
          ...state.searchResult,
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

export default searchReducer;

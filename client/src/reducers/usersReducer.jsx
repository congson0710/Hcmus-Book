import {
  REGISTER_FAIL,
  REGISTER_REQUEST,
  REGISTER_SUCCESS,
} from '../actions/actions.type';

const initialState = {
  registerUser: {
    user: {},
    isLoading: false,
    isError: false,
    message: '',
  },
};

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case REGISTER_REQUEST: {
      return {
        ...state,
        registerUser: {
          ...state.registerUser,
          isLoading: true,
        },
      };
    }

    case REGISTER_SUCCESS: {
      return {
        ...state,
        registerUser: {
          ...state.registerUser,
          isLoading: false,
          isError: false,
          user: action.payload,
        },
      };
    }

    case REGISTER_FAIL: {
      return {
        ...state,
        registerUser: {
          ...state.registerUser,
          isLoading: false,
          isError: true,
          message: action.payload,
        },
      };
    }

    default:
      return { ...state };
  }
};

export default usersReducer;

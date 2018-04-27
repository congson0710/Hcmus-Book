import {
  REGISTER_FAIL,
  REGISTER_REQUEST,
  REGISTER_SUCCESS,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
} from '../actions/actions.type';

const initialState = {
  registerUser: {
    user: {},
    isLoading: false,
    isError: false,
    message: '',
  },

  loginUser: {
    authenUser: {},
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

    case LOGIN_REQUEST: {
      return {
        ...state,
        loginUser: {
          ...state.loginUser,
          isLoading: true,
        },
      };
    }

    case LOGIN_SUCCESS: {
      return {
        ...state,
        loginUser: {
          ...state.loginUser,
          isLoading: false,
          isError: false,
          authenUser: action.payload,
        },
      };
    }

    case LOGIN_FAIL: {
      return {
        ...state,
        loginUser: {
          ...state.loginUser,
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

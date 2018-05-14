import {
  REGISTER_FAIL,
  REGISTER_REQUEST,
  REGISTER_SUCCESS,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT_SUCCESS,
  LOGOUT_REQUEST,
  LOGOUT_FAIL,
  LOAD_AUTHENTICATION_DATA,
  CHANGE_USER_INFO_REQUEST,
  CHANGE_USER_INFO_SUCCESS,
  CHANGE_USER_INFO_FAIL,
} from '../actions/actions.type';

const initialState = {
  registerUser: {
    user: {},
    isLoading: false,
    isError: false,
    message: '',
  },

  loginUser: {
    authenUser: undefined,
    isLoggedin: false,
    isLoading: false,
    isError: false,
    message: '',
  },

  changeUserInfo: {
    userInfo: {},
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
      sessionStorage.setItem('appUser', JSON.stringify(action.payload));
      return {
        ...state,
        loginUser: {
          ...state.loginUser,
          isLoggedin: true,
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

    case LOGOUT_REQUEST: {
      return {
        ...state,
        loginUser: {
          ...state.loginUser,
          isLoading: true,
        },
      };
    }

    case LOGOUT_SUCCESS: {
      sessionStorage.removeItem('appUser');
      return {
        ...state,
        loginUser: {
          ...state.loginUser,
          isLoggedin: false,
          isLoading: false,
          isError: false,
          authenUser: undefined,
        },
      };
    }

    case LOGOUT_FAIL: {
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

    case CHANGE_USER_INFO_REQUEST: {
      return {
        ...state,
        changeUserInfo: {
          ...state.changeUserInfo,
          isLoading: true,
        },
      };
    }

    case CHANGE_USER_INFO_SUCCESS: {
      return {
        ...state,
        changeUserInfo: {
          ...state.changeUserInfo,
          isLoading: false,
          isError: false,
          userInfo: action.payload,
        },
      };
    }

    case CHANGE_USER_INFO_FAIL: {
      return {
        ...state,
        changeUserInfo: {
          ...state.changeUserInfo,
          isLoading: false,
          isError: true,
          message: action.payload,
        },
      };
    }

    case LOAD_AUTHENTICATION_DATA: {
      return {
        ...state,
        loginUser: {
          ...state.loginUser,
          authenUser: action.payload,
        },
      };
    }

    default:
      return { ...state };
  }
};

export default usersReducer;

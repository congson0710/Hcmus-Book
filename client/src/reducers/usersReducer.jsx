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
  CHANGE_PASSWORD_REQUEST,
  CHANGE_PASSWORD_SUCCESS,
  CHANGE_PASSWORD_FAIL,
  GET_USER_MANAGEMENT_REQUEST,
  GET_USER_MANAGEMENT_SUCCESS,
  GET_USER_MANAGEMENT_FAIL,
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

  changeUserPassword: {
    userInfo: {},
    isLoading: false,
    isError: false,
    message: '',
  },

  userManagement: {
    posts: [],
    orders: [],
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

    case CHANGE_PASSWORD_REQUEST: {
      return {
        ...state,
        changeUserPassword: {
          ...state.changeUserPassword,
          isLoading: true,
        },
      };
    }

    case CHANGE_PASSWORD_SUCCESS: {
      return {
        ...state,
        changeUserPassword: {
          ...state.changeUserPassword,
          isLoading: false,
          isError: false,
          userInfo: action.payload,
        },
      };
    }

    case CHANGE_PASSWORD_FAIL: {
      return {
        ...state,
        changeUserPassword: {
          ...state.changeUserPassword,
          isLoading: false,
          isError: true,
          message: action.payload,
        },
      };
    }

    case GET_USER_MANAGEMENT_REQUEST: {
      return {
        ...state,
        userManagement: {
          ...state.userManagement,
          isLoading: true,
        },
      };
    }

    case GET_USER_MANAGEMENT_SUCCESS: {
      return {
        ...state,
        userManagement: {
          ...state.userManagement,
          isLoading: false,
          isError: false,
          posts: action.payload.posts,
          orders: action.payload.orders,
        },
      };
    }

    case GET_USER_MANAGEMENT_FAIL: {
      return {
        ...state,
        userManagement: {
          ...state.userManagement,
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

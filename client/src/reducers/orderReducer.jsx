import {
  ORDER_REQUEST,
  ORDER_SUCCESS,
  ORDER_FAIL,
  CONFIRM_ORDER,
  GET_ORDER_DETAIL_REQUEST,
  GET_ORDER_DETAIL_SUCCESS,
  GET_ORDER_DETAIL_FAIL,
} from '../actions/actions.type';

const initialState = {
  orderSuccess: {
    order: {},
    isLoading: false,
    isError: false,
    message: '',
  },

  confirmOrder: {},

  orderDetail: {
    order: {},
    isLoading: false,
    isError: false,
    message: '',
  },
};

const orderReducer = (state = initialState, action) => {
  switch (action.type) {
    case ORDER_REQUEST: {
      return {
        ...state,
        orderSuccess: {
          ...state.orderSuccess,
          isLoading: true,
        },
      };
    }

    case ORDER_SUCCESS: {
      return {
        ...state,
        orderSuccess: {
          ...state.orderSuccess,
          isLoading: false,
          isError: false,
          order: action.payload,
        },
      };
    }

    case ORDER_FAIL: {
      return {
        ...state,
        orderSuccess: {
          ...state.orderSuccess,
          isLoading: false,
          isError: true,
          message: action.payload,
        },
      };
    }

    case GET_ORDER_DETAIL_REQUEST: {
      return {
        ...state,
        orderDetail: {
          ...state.orderDetail,
          isLoading: true,
        },
      };
    }

    case GET_ORDER_DETAIL_SUCCESS: {
      return {
        ...state,
        orderDetail: {
          ...state.orderDetail,
          isLoading: false,
          isError: false,
          order: action.payload,
        },
      };
    }

    case GET_ORDER_DETAIL_FAIL: {
      return {
        ...state,
        orderDetail: {
          ...state.orderDetail,
          isLoading: false,
          isError: true,
          message: action.payload,
        },
      };
    }

    case CONFIRM_ORDER: {
      return {
        ...state,
        confirmOrder: action.payload,
      };
    }

    default:
      return {
        ...state,
      };
  }
};

export default orderReducer;

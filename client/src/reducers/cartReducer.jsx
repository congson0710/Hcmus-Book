import { UPDATE_CART, REMOVE_CART } from '../actions/actions.type';

const initialState = {
  appCart: {
    currentCart: [],
    onCart: false,
  },
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_CART: {
      return {
        ...state,
        appCart: {
          ...state.appCart,
          currentCart: action.payload,
          onCart: true,
        },
      };
    }

    case REMOVE_CART: {
      return {
        ...state,
        appCart: {
          ...state.appCart,
          currentCart: [],
          onCart: false,
        },
      };
    }

    default:
      return {
        ...state,
      };
  }
};

export default cartReducer;

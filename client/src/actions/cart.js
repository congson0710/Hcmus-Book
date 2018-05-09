import { UPDATE_CART, REMOVE_CART } from './actions.type';

export const updateCart = cart => async dispatch => {
  dispatch({ type: UPDATE_CART, payload: cart });
};

export const removeCart = () => dispatch => {
  dispatch({ type: REMOVE_CART });
};

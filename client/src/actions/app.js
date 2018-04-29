import { LOAD_AUTHENTICATION_DATA } from './actions.type';

export const loadAuthedData = () => async dispatch => {
  const appUser = JSON.parse(sessionStorage.getItem('appUser'));
  dispatch({
    type: LOAD_AUTHENTICATION_DATA,
    payload: appUser,
  });
};

import { combineReducers } from 'redux';
import users from './usersReducer';
import post from './postReducer';

export default combineReducers({ users, post });

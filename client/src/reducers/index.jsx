import { combineReducers } from 'redux';
import users from './usersReducer';
import post from './postReducer';
import admin from './adminReducer';

export default combineReducers({ users, post, admin });

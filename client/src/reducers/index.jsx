import { combineReducers } from 'redux';
import users from './usersReducer';
import post from './postReducer';
import admin from './adminReducer';
import home from './homeReducer';

export default combineReducers({ users, post, admin, home });

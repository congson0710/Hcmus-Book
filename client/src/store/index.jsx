import React from 'react';
import { createStore, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';
import { createLogger } from 'redux-logger';

import reducer from '../reducers';

const middleWares = [];

// Thunk Middleware
middleWares.push(reduxThunk);

const logger = createLogger({
  level: 'info',
  collapsed: true,
});

middleWares.push(logger);

const store = createStore(reducer, applyMiddleware(...middleWares));

export default store;

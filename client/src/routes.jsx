import React from 'react';
import { Route, BrowserRouter } from 'react-router-dom';

import App from './App';
import Home from './App/Home';

const Routes = () => (
  <BrowserRouter>
    <div>
      <Route path="/" component={App} />
    </div>
  </BrowserRouter>
);

export default Routes;

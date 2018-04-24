import React from 'react';
import { BrowserRouter as Router, Switch } from 'react-router-dom';

import App from './App';
import Header from './App/Header';
import Footer from './App/Footer';

const Routes = () => (
  <Router>
    <div>
      <Header />
      <Switch>
        <App />
      </Switch>
      <Footer />
    </div>
  </Router>
);

export default Routes;

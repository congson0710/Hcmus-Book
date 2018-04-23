import React from 'react';
import { Switch, BrowserRouter as Router, Route } from 'react-router-dom';

import Header from './Header';
import Footer from './Footer';
import Home from './Home';
import Cart from './Cart';

const App = props => (
  <div>
    <Header />
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/cart" component={Cart} />
      </Switch>
    </Router>
    <Footer />
  </div>
);

export default App;

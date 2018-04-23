import React from 'react';
import { Switch, BrowserRouter as Router, Route } from 'react-router-dom';

import Header from './Header';
import Footer from './Footer';
import Home from './Home';
import Cart from './Cart';
import ChangePassword from './ChangePassword';
import Customer from './Customer';
import Register from './Register';

const App = props => (
  <div>
    <Header />
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/cart" component={Cart} />
        <Route exact path="/changepassword" component={ChangePassword} />
        <Route exact path="/customer" component={Customer} />
        <Route exact path="/register" compoenent={Register} />
      </Switch>
    </Router>
    <Footer />
  </div>
);

export default App;

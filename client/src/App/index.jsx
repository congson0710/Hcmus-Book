import React from 'react';
import { Route } from 'react-router-dom';

import Home from './Home';
import Cart from './Cart';
import ChangePassword from './ChangePassword';
import Customer from './Customer';
import Register from './Register';
import Order from './Order';
import OrderHistory from './OrderHistory';
import Login from './Login';
import Category from './Category';
import BookDetail from './BookDetail';
import Post from './Post';
import RequireLogin from '../components/RequireLogin';

const getCurrentUser = () => {
  return JSON.parse(sessionStorage.getItem('appUser'));
};

const App = props => (
  <div className="main-body">
    <Route exact path="/" component={Home} />
    <Route exact path="/register" component={Register} />
    <Route exact path="/book-detail/:productID" component={BookDetail} />
    <Route exact path="/login" component={Login} />
    <Route exact path="/category" component={Category} />

    <RequireLogin
      authedUser={getCurrentUser()}
      exact
      path="/cart"
      component={Cart}
    />
    <RequireLogin
      authedUser={getCurrentUser()}
      exact
      path="/changepassword"
      component={ChangePassword}
    />
    <RequireLogin
      authedUser={getCurrentUser()}
      exact
      path="/customer"
      component={Customer}
    />
    <RequireLogin
      authedUser={getCurrentUser()}
      exact
      path="/order"
      component={Order}
    />
    <RequireLogin
      authedUser={getCurrentUser()}
      exact
      path="/order/history"
      component={OrderHistory}
    />
    <RequireLogin
      authedUser={getCurrentUser()}
      exact
      path="/post"
      component={Post}
    />
  </div>
);

export default App;

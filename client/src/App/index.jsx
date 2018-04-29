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
import RequireLogin from '../components/RequireLogin';

const appUser = JSON.parse(sessionStorage.getItem('appUser'));

console.log(appUser);

const App = props => (
  <div className="main-body">
    <Route exact path="/" component={Home} />
    <Route exact path="/register" component={Register} />
    <Route exact path="/book-detail/:productID" component={BookDetail} />
    <Route exact path="/login" component={Login} />
    <Route exact path="/category" component={Category} />
    <RequireLogin authedUser={appUser} exact path="/cart" component={Cart} />
    <RequireLogin
      authedUser={appUser}
      exact
      path="/changepassword"
      component={ChangePassword}
    />
    <RequireLogin
      authedUser={appUser}
      exact
      path="/customer"
      component={Customer}
    />
    <RequireLogin authedUser={appUser} exact path="/order" component={Order} />
    <RequireLogin
      authedUser={appUser}
      exact
      path="/order/history"
      component={OrderHistory}
    />
  </div>
);

export default App;

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

const App = props => (
  <div>
    <Route exact path="/" component={Home} />
    <Route exact path="/cart" component={Cart} />
    <Route exact path="/changepassword" component={ChangePassword} />
    <Route exact path="/customer" component={Customer} />
    <Route exact path="/register" component={Register} />
    <Route exact path="/order" component={Order} />
    <Route exact path="/order/history" component={OrderHistory} />
    <Route exact path="/book-detail/:productID" component={BookDetail} />
    <Route exact path="/login" component={Login} />
    <Route exact path="/category" component={Category} />
  </div>
);

export default App;

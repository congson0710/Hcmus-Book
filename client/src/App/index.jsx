import React from 'react';
import { Switch, BrowserRouter as Router, Route } from 'react-router-dom';

import Header from './Header';
import Footer from './Footer';
import Home from './Home';
import Cart from './Cart';
import ChangePassword from './ChangePassword';
import Customer from './Customer';
import Register from './Register';
import Order from './Order';
import OrderHistory from './OrderHistory';
import Login from './Login';
import Category from './Category';
import Detail from './Detail';

const App = props => (
  <div>
    <Header />
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/cart" component={Cart} />
        <Route exact path="/changepassword" component={ChangePassword} />
        <Route exact path="/customer" component={Customer} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/order" component={Order} />
        <Route exact path="/order/history" component={OrderHistory} />
        <Route exact path="/detail/:productID" component={Detail} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/category" component={Category} />
      </Switch>
    </Router>
    <Footer />
  </div>
);

export default App;

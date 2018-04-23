import React from 'react';
import { Switch, BrowserRouter as Router, Route } from 'react-router-dom';

import Header from './Header';
import Footer from './Footer';
import Home from './Home';

const App = props => (
  <div>
    <Header />
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
      </Switch>
    </Router>
    <Footer />
  </div>
);

export default App;

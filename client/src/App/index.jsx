import React from 'react';

import Header from './Header';
import Footer from './Footer';

const App = props => (
  <div>
    <Header />
    <div>{props.children}</div>
    <Footer />
  </div>
);

export default App;

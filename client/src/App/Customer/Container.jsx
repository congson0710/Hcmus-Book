import React from 'react';

import View from './View';

class Customer extends React.Component {
  componentWillMount() {
    this.props.loadAuthedData();
  }
  render() {
    return <View {...this.props} {...this.state} />;
  }
}

export default Customer;

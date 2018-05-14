import React from 'react';

import View from './View';

class OrderDetail extends React.Component {
  componentWillMount() {
    this.props.getOrderDetail(this.props.orderID);
  }
  render() {
    return <View {...this.props} {...this.state} />;
  }
}

export default OrderDetail;

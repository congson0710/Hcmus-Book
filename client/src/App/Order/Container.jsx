import React from 'react';

import View from './View';

class Order extends React.Component {
  constructor(props) {
    super(props);

    this.handleOrderBook = this.handleOrderBook.bind(this);
  }
  componentWillMount() {
    this.props.loadAuthedData();
  }

  async handleOrderBook() {
    await this.props.orderBook(this.props.confirmOrder);
    localStorage.removeItem('cart');
    this.props.removeCart();
    alert('Đặt hàng thành công!');
  }

  render() {
    return (
      <View
        {...this.props}
        {...this.state}
        handleOrderBook={this.handleOrderBook}
      />
    );
  }
}

export default Order;

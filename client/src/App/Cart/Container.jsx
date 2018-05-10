import React from 'react';
import _ from 'lodash';

import View from './View';

class Cart extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      area: '',
      tempTotal: 0,
    };

    this.handleRemoveItem = this.handleRemoveItem.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleTempTotal = this.handleTempTotal.bind(this);
    this.handleConfirm = this.handleConfirm.bind(this);
  }

  componentWillMount() {
    const currentCart = JSON.parse(localStorage.getItem('cart'));
    if (currentCart !== null) {
      this.handleTempTotal(currentCart);
      this.props.updateCart(currentCart);
    }
  }

  componentWillReceiveProps(nextProps) {
    const { currentCart } = nextProps.appCart;
    this.handleTempTotal(currentCart);
  }

  handleTempTotal(currentCart) {
    const tempTotal = currentCart
      .map(book => {
        return book.bookPrice * book.quantityOrder;
      })
      .reduce((price, sum) => sum + price, 0);

    if (this.state.area === 'q1' || this.state.area === '') {
      this.setState({ tempTotal });
    } else {
      this.setState({ tempTotal: tempTotal + Number(this.state.area.fee) });
    }
  }

  handleChange(event, { name, value }) {
    this.setState({ [name]: value });
  }

  handleRemoveItem(bookID) {
    const currentCart = JSON.parse(localStorage.getItem('cart'));

    _.remove(currentCart, book => {
      return book.bookID === bookID;
    });

    localStorage.setItem('cart', JSON.stringify(currentCart));
    this.props.updateCart(currentCart);
  }

  handleConfirm() {
    const currentCart = JSON.parse(localStorage.getItem('cart'));

    const confirmInfo = {
      currentCart,
      area: this.state.area,
      totalPayment: this.state.tempTotal,
    };

    this.props.confirmOrder(confirmInfo);
  }

  render() {
    return (
      <View
        {...this.props}
        {...this.state}
        handleRemoveItem={this.handleRemoveItem}
        handleChange={this.handleChange}
        handleConfirm={this.handleConfirm}
      />
    );
  }
}

export default Cart;

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
  }

  componentWillMount() {
    const currentCart = JSON.parse(localStorage.getItem('cart'));
    this.handleTempTotal(currentCart);
    this.props.updateCart(currentCart);
  }

  handleTempTotal(currentCart) {
    const tempTotal = currentCart
      .map(book => {
        return book.bookPrice * book.quantityOrder;
      })
      .reduce((price, sum) => sum + price, 0);

    this.setState({ tempTotal });
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
  render() {
    return (
      <View
        {...this.props}
        {...this.state}
        handleRemoveItem={this.handleRemoveItem}
        handleChange={this.handleChange}
      />
    );
  }
}

export default Cart;

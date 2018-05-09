import React from 'react';
import View from './View';

class BookDetail extends React.Component {
  constructor(props) {
    super(props);

    this.handleAddToCart = this.handleAddToCart.bind(this);
  }
  componentWillMount() {
    this.props.getBookDetail(this.props.match.params.bookID);
  }

  handleAddToCart({ bookID, bookName, bookImage, bookPrice }) {
    const currentCart = JSON.parse(localStorage.getItem('cart'));

    if (currentCart) {
      const existBook = currentCart.filter(book => book.bookID === bookID);
      if (existBook.length === 0) {
        currentCart.push({
          bookID,
          bookName,
          bookImage,
          bookPrice,
          quantityOrder: 1,
        });
      } else {
        currentCart.map(book => {
          return book.bookID === bookID ? (book.quantityOrder += 1) : null;
        });
      }
      localStorage.setItem('cart', JSON.stringify(currentCart));
      this.props.updateCart(currentCart);
    } else {
      const newCart = [];
      newCart.push({
        bookID,
        quantityOrder: 1,
        bookName,
        bookImage,
        bookPrice,
      });
      localStorage.setItem('cart', JSON.stringify(newCart));
      this.props.updateCart(newCart);
    }
    alert('Đã thêm vào giỏ hàng');
  }

  render() {
    return (
      <View
        {...this.props}
        {...this.state}
        handleAddToCart={this.handleAddToCart}
      />
    );
  }
}

export default BookDetail;

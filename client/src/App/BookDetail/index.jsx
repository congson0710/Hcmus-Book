import { connect } from 'react-redux';

import { getBookDetail } from '../../actions/book';
import { updateCart, removeCart } from '../../actions/cart';
import BookDetail from './Container';

const mapStateToProps = ({ book }) => ({
  bookDetail: book.bookDetail,
});

const mapDispatchToProps = dispatch => ({
  getBookDetail: id => dispatch(getBookDetail(id)),
  updateCart: cart => dispatch(updateCart(cart)),
  removeCart: () => dispatch(removeCart()),
});

export default connect(mapStateToProps, mapDispatchToProps)(BookDetail);

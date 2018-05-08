import { connect } from 'react-redux';

import { getBookDetail } from '../../actions/book';
import BookDetail from './Container';

const mapStateToProps = ({ book }) => ({
  bookDetail: book.bookDetail,
});

const mapDispatchToProps = dispatch => ({
  getBookDetail: id => dispatch(getBookDetail(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(BookDetail);

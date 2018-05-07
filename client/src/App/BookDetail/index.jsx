import { connect } from 'react-redux';

import { getDetailPost } from '../../actions/post';
import BookDetail from './Container';

const mapStateToProps = ({ post }) => ({
  detailPost: post.detailPost,
});

const mapDispatchToProps = dispatch => ({
  getDetailPost: id => dispatch(getDetailPost(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(BookDetail);

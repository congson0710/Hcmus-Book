import { connect } from 'react-redux';

import PostDetail from './Container';
import { getDetailPost } from '../../actions/post';

const mapStateToProps = ({ post }) => ({
  detailPost: post.detailPost,
});

const mapDispatchToProps = dispatch => ({
  getDetailPost: id => dispatch(getDetailPost(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(PostDetail);

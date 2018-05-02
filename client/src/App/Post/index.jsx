import { connect } from 'react-redux';

import { upload } from '../../actions/post';
import Post from './Container';

const mapStateToProps = ({ post }) => ({
  createPost: post.createPost,
});

const mapDispatchToProps = dispatch => ({
  upload: infoInput => dispatch(upload(infoInput)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Post);

import { connect } from 'react-redux';
import { getAllPosts, approve } from '../../actions/admin';
import Admin from './Container';

const mapStateToProps = ({ admin }) => ({
  allPost: admin.allPost,
  approvePost: admin.approvePost,
});

const mapDispatchToProps = dispatch => ({
  getAllPosts: () => dispatch(getAllPosts()),
  approve: id => dispatch(approve(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Admin);

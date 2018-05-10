import { connect } from 'react-redux';
import {
  getAllPosts,
  approvePost,
  getAllOrders,
  approveOrder,
} from '../../actions/admin';
import Admin from './Container';

const mapStateToProps = ({ admin }) => ({
  allPost: admin.allPost,
  allOrder: admin.allOrder,
  approvePostSuccess: admin.approvePost,
  approveOrderSuccess: admin.approveOrder,
});

const mapDispatchToProps = dispatch => ({
  getAllPosts: () => dispatch(getAllPosts()),
  getAllOrders: () => dispatch(getAllOrders()),
  approvePost: id => dispatch(approvePost(id)),
  approveOrder: id => dispatch(approveOrder(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Admin);

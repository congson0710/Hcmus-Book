import { connect } from 'react-redux';

import OrderDetail from './Container';
import { getOrderDetail } from '../../actions/order';

const mapStateToProps = ({ order, users }) => ({
  orderDetail: order.orderDetail,
  userManagement: users.userManagement,
});

const mapDispatchToProps = dispatch => ({
  getOrderDetail: id => dispatch(getOrderDetail(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(OrderDetail);

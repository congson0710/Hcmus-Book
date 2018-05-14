import { connect } from 'react-redux';

import OrderDetail from './Container';
import { getOrderDetail } from '../../actions/order';

const mapStateToProps = ({ order }) => ({
  orderDetail: order.orderDetail,
});

const mapDispatchToProps = dispatch => ({
  getOrderDetail: id => dispatch(getOrderDetail(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(OrderDetail);

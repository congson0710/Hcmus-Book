import { connect } from 'react-redux';

import { loadAuthedData } from '../../actions/app';
import { orderBook } from '../../actions/order';
import { removeCart } from '../../actions/cart';
import Order from './Container';

const mapStateToProps = ({ users, order }) => ({
  loginUser: users.loginUser,
  orderSuccess: order.orderSuccess,
  confirmOrder: order.confirmOrder,
});

const mapDispatchToProps = dispatch => ({
  loadAuthedData: () => dispatch(loadAuthedData()),
  orderBook: orderInfo => dispatch(orderBook(orderInfo)),
  removeCart: () => dispatch(removeCart()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Order);

import { connect } from 'react-redux';

import { updateCart } from '../../actions/cart';
import { confirmOrder } from '../../actions/order';
import Cart from './Container';

const mapStateToProps = ({ cart }) => ({
  appCart: cart.appCart,
});

const mapDispatchToProps = dispatch => ({
  updateCart: cart => dispatch(updateCart(cart)),
  confirmOrder: orderInfo => dispatch(confirmOrder(orderInfo)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Cart);

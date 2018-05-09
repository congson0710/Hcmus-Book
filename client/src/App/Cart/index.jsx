import { connect } from 'react-redux';

import { updateCart } from '../../actions/cart';
import Cart from './Container';

const mapStateToProps = ({ cart }) => ({
  appCart: cart.appCart,
});

const mapDispatchToProps = dispatch => ({
  updateCart: cart => dispatch(updateCart(cart)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Cart);

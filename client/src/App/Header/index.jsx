import { connect } from 'react-redux';
import { loadAuthedData } from '../../actions/app';
import { logout } from '../../actions/users';
import { updateCart } from '../../actions/cart';
import { search } from '../../actions/search';

import Header from './Container';

const mapStateToProps = ({ users, cart }) => ({
  loginUser: users.loginUser,
  appCart: cart.appCart,
});

const mapDispatchToProps = dispatch => ({
  loadAuthedData: () => dispatch(loadAuthedData()),
  logout: () => dispatch(logout()),
  updateCart: cart => dispatch(updateCart(cart)),
  search: content => dispatch(search(content)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);

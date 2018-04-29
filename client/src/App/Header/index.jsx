import { connect } from 'react-redux';
import { loadAuthedData } from '../../actions/app';
import { logout } from '../../actions/users';
import Header from './Container';

const mapStateToProps = ({ users }) => ({
  loginUser: users.loginUser,
});

const mapDispatchToProps = dispatch => ({
  loadAuthedData: () => dispatch(loadAuthedData()),
  logout: () => dispatch(logout()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);

import { connect } from 'react-redux';
import { loadAuthedData } from '../../actions/app';
import Header from './Container';

const mapStateToProps = ({ users }) => ({
  loginUser: users.loginUser,
});

const mapDispatchToProps = dispatch => ({
  loadAuthedData: () => dispatch(loadAuthedData()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);

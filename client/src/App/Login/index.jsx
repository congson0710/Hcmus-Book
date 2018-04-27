import { connect } from 'react-redux';
import Login from './Container';
import { login } from '../../actions/users';

const mapStateToProps = ({ users }) => ({
  loginUser: users.loginUser,
});

const mapDispatchToProps = dispatch => ({
  login: loginInfo => dispatch(login(loginInfo)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);

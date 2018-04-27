import { connect } from 'react-redux';
import Register from './Container';
import { register } from '../../actions/users';

const mapStateToProps = ({ users }) => {
  return {
    registerUser: users.registerUser,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    register: registerInfo => dispatch(register(registerInfo)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Register);

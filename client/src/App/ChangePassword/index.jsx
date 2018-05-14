import { connect } from 'react-redux';

import { changePassword } from '../../actions/users';
import ChangePassword from './Container';

const mapStateToProps = ({ users }) => ({
  changeUserPassword: users.changeUserPassword,
  loginUser: users.loginUser,
});

const mapDispatchToProps = dispatch => ({
  changePassword: newPassword => dispatch(changePassword(newPassword)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ChangePassword);

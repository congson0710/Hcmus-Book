import { connect } from 'react-redux';

import { loadAuthedData } from '../../actions/app';
import { changeInfo } from '../../actions/users';
import Customer from './Container';

const mapStateToProps = ({ users }) => ({
  loginUser: users.loginUser,
  changeUserInfo: users.changeUserInfo,
});

const mapDispatchToProps = dispatch => ({
  loadAuthedData: () => dispatch(loadAuthedData()),
  changeInfo: infoInput => dispatch(changeInfo(infoInput)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Customer);

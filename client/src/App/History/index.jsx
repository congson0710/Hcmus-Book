import { connect } from 'react-redux';

import { getUserManagement } from '../../actions/users';
import History from './Container';

const mapStateToProps = ({ users }) => ({
  userManagement: users.userManagement,
});

const mapDispatchToProps = dispatch => ({
  getUserManagement: () => dispatch(getUserManagement()),
});

export default connect(mapStateToProps, mapDispatchToProps)(History);

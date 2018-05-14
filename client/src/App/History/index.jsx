import { connect } from 'react-redux';

import { getUserManagement } from '../../actions/users';
import { getDetailPost } from '../../actions/post';

import History from './Container';

const mapStateToProps = ({ users }) => ({
  userManagement: users.userManagement,
});

const mapDispatchToProps = dispatch => ({
  getUserManagement: () => dispatch(getUserManagement()),
  getPostDetail: id => dispatch(getDetailPost(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(History);

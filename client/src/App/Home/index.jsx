import { connect } from 'react-redux';
import Home from './Container';
import { getHomePost } from '../../actions/home';

const mapStateToProps = ({ home }) => ({
  homePost: home.homePost,
});

const mapDispatchToProps = dispatch => ({
  getHomePost: () => dispatch(getHomePost()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);

import { connect } from 'react-redux';
import Home from './Container';
import { getHomePost, getHomeBook } from '../../actions/home';

const mapStateToProps = ({ home }) => ({
  homePost: home.homePost,
  homeBook: home.homeBook,
});

const mapDispatchToProps = dispatch => ({
  getHomePost: () => dispatch(getHomePost()),
  getHomeBook: () => dispatch(getHomeBook()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);

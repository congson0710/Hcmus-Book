import { connect } from 'react-redux';

import Search from './Container';

const mapStateToProps = ({ search }) => ({
  searchResult: search.searchResult,
});

export default connect(mapStateToProps, null)(Search);

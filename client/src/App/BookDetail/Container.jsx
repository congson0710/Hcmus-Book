import React from 'react';
import View from './View';

class BookDetail extends React.Component {
  componentWillMount() {
    this.props.getBookDetail(this.props.match.params.bookID);
  }

  render() {
    return <View {...this.props} {...this.state} />;
  }
}

export default BookDetail;

import React from 'react';
import View from './View';

class BookDetail extends React.Component {
  componentWillMount() {
    this.props.getDetailPost(this.props.match.params.bookID);
  }

  render() {
    return <View {...this.props} {...this.state} />;
  }
}

export default BookDetail;

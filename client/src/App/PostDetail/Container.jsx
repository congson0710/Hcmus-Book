import React from 'react';

import View from './View';

class PostDetail extends React.Component {
  componentWillMount() {
    console.log(this.props.match.params.postID);
    this.props.getDetailPost(this.props.match.params.postID);
  }

  render() {
    return <View {...this.props} {...this.state} />;
  }
}

export default PostDetail;

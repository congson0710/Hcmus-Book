import React from 'react';

import View from './View';

class PostDetail extends React.Component {
  componentWillMount() {
    if (this.props.id) {
      this.props.getDetailPost(this.props.id);
    } else {
      this.props.getDetailPost(this.props.match.params.postID);
    }
  }

  render() {
    return <View {...this.props} {...this.state} />;
  }
}

export default PostDetail;

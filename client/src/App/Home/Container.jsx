import React from 'react';
import View from './View';

class Home extends React.Component {
  componentWillMount() {
    this.props.getHomePost();
  }

  render() {
    return <View {...this.props} {...this.state} />;
  }
}

export default Home;

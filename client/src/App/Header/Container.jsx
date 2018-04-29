import React from 'react';
import View from './View';

export default class Header extends React.Component {
  componentWillMount() {
    this.props.loadAuthedData();
  }
  render() {
    return <View {...this.props} />;
  }
}

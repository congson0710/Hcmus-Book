import React from 'react';
import View from './View';

export default class Header extends React.Component {
  constructor(props) {
    super(props);

    this.handleLogout = this.handleLogout.bind(this);
  }
  componentWillMount() {
    this.props.loadAuthedData();
  }

  handleLogout() {
    this.props.logout();
  }
  render() {
    return <View {...this.props} handleLogout={this.handleLogout} />;
  }
}

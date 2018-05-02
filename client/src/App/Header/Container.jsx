import React from 'react';
import { withRouter } from 'react-router-dom';
import View from './View';

class Header extends React.Component {
  constructor(props) {
    super(props);

    this.handleLogout = this.handleLogout.bind(this);
  }
  componentWillMount() {
    this.props.loadAuthedData();
  }

  async handleLogout() {
    await this.props.logout();
    this.props.history.push('/');
    alert('Logout Successfully!!');
  }
  render() {
    return <View {...this.props} handleLogout={this.handleLogout} />;
  }
}

export default withRouter(Header);

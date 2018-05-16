import React from 'react';
import { withRouter } from 'react-router-dom';

import View from './View';

class Header extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      search: '',
    };

    this.handleLogout = this.handleLogout.bind(this);
    this.handleOnchange = this.handleOnchange.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
  }
  componentWillMount() {
    const currentCart = JSON.parse(localStorage.getItem('cart'));
    if (currentCart) {
      this.props.updateCart(currentCart);
    }
    this.props.loadAuthedData();
  }

  handleOnchange(event) {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  handleSearch() {
    this.props.search(this.state.search);
  }

  async handleLogout() {
    await this.props.logout();
    this.props.history.push('/');
    alert('Logout Successfully!!');
  }
  render() {
    return (
      <View
        {...this.props}
        handleLogout={this.handleLogout}
        handleOnchange={this.handleOnchange}
        handleSearch={this.handleSearch}
      />
    );
  }
}

export default withRouter(Header);

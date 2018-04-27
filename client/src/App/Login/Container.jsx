import React from 'react';
import View from './View';

export default class Login extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      userAccount: '',
      userPassword: '',
    };

    this.handleLogin = this.handleLogin.bind(this);
  }

  handleOnChange(event) {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  handleLogin() {
    this.props.login(this.state);
  }

  render() {
    return (
      <View {...this.props} {...this.state} handleLogin={this.handleLogin} />
    );
  }
}

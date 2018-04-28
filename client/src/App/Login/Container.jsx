import React from 'react';
import { withRouter } from 'react-router-dom';

import View from './View';

class Login extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      userAccount: '',
      userPassword: '',
    };

    this.handleLogin = this.handleLogin.bind(this);
    this.handleOnChange = this.handleOnChange.bind(this);
  }

  handleOnChange(event) {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  async handleLogin() {
    await this.props.login(this.state);
    this.props.loginUser.isError
      ? alert(this.props.loginUser.massage)
      : alert('Login Succfully!!');
    this.props.history.push('/');
  }

  render() {
    return (
      <View
        {...this.props}
        {...this.state}
        handleLogin={this.handleLogin}
        handleOnChange={this.handleOnChange}
      />
    );
  }
}

export default withRouter(Login);

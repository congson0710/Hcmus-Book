import React from 'react';

import View from './View';

export default class Register extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      userName: '',
      userAccount: '',
      userPassword: '',
      userRePassword: '',
      sexual: '',
      address: '',
    };

    this.handleOnChange = this.handleOnChange.bind(this);
    this.handleRegister = this.handleRegister.bind(this);
  }

  handleOnChange(event) {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  handleRegister() {
    this.props.register({ ...this.state });
  }

  render() {
    return (
      <View
        {...this.props}
        {...this.state}
        handleOnChange={this.handleOnChange}
        handleRegister={this.handleRegister}
      />
    );
  }
}

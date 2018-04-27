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
      gender: '',
      address: '',
      isInvalid: true,
    };

    this.handleOnChange = this.handleOnChange.bind(this);
    this.handleOnSelect = this.handleOnSelect.bind(this);
    this.handleRegister = this.handleRegister.bind(this);
    this.handleValid = this.handleValid.bind(this);
    this.handleInvalid = this.handleInvalid.bind(this);
  }

  handleValid() {
    this.setState({ isInvalid: false });
  }

  handleInvalid() {
    this.setState({ isInvalid: true });
  }

  handleOnChange(event) {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  handleOnSelect(event, { name, value }) {
    this.setState({ [name]: value });
  }

  async handleRegister() {
    await this.props.register({ ...this.state });
    return this.props.registerUser.isError
      ? alert(this.props.registerUser.message)
      : alert('Register Successfully!!');
  }

  render() {
    return (
      <View
        {...this.props}
        {...this.state}
        handleOnChange={this.handleOnChange}
        handleRegister={this.handleRegister}
        handleOnSelect={this.handleOnSelect}
        handleValid={this.handleValid}
        handleInvalid={this.handleInvalid}
      />
    );
  }
}

import React from 'react';

import View from './View';

class ChangePassword extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      oldPassword: '',
      newPassword: '',
      reNewPassword: '',
      invalid: true,
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleOnValid = this.handleOnValid.bind(this);
    this.handleOnInvalid = this.handleOnInvalid.bind(this);
    this.handleChangePassword = this.handleChangePassword.bind(this);
  }

  handleOnValid() {
    this.setState({ invalid: false });
  }

  handleOnInvalid() {
    this.setState({ invalid: true });
  }

  handleChange(event) {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  handleChangePassword() {
    this.props.changePassword(this.state.newPassword);
  }

  render() {
    return (
      <View
        {...this.props}
        {...this.state}
        handleChange={this.handleChange}
        handleOnValid={this.handleOnValid}
        handleOnInvalid={this.handleOnInvalid}
        handleChangePassword={this.handleChangePassword}
      />
    );
  }
}

export default ChangePassword;

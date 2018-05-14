import React from 'react';

import View from './View';

class Customer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      userName: '',
      userAddress: '',
      gender: '',
      phone: '',
    };

    this.handleChangeUserInfo = this.handleChangeUserInfo.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSetUserData = this.handleSetUserData.bind(this);
  }

  async componentWillMount() {
    await this.props.loadAuthedData();
    this.handleSetUserData();
  }

  handleSetUserData() {
    const {
      userName,
      userAddress,
      phone,
      gender,
    } = this.props.loginUser.authenUser;
    this.setState({
      userName,
      userAddress,
      gender,
      phone,
    });
  }

  handleChange(event) {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  async handleChangeUserInfo() {
    await this.props.changeInfo(this.state);
    return !this.props.changeUserInfo.isError
      ? alert('Thay đổi thông tin thành công')
      : alert('Thay đổi thông tin không thành công');
  }

  render() {
    return (
      <View
        {...this.props}
        {...this.state}
        handleChangeUserInfo={this.handleChangeUserInfo}
        handleChange={this.handleChange}
      />
    );
  }
}

export default Customer;

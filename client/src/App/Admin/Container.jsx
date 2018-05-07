import React from 'react';

import View from './View';

class Admin extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      activeItem: 'posts',
      currentMenu: 'posts',
      idApprove: '',
    };

    this.handleItemClick = this.handleItemClick.bind(this);
    this.handleApprove = this.handleApprove.bind(this);
  }

  componentWillMount() {
    this.props.getAllPosts();
  }

  handleItemClick(event, { name }) {
    this.setState({ activeItem: name, currentMenu: name });
  }

  async handleApprove(id) {
    this.setState({ idApprove: id });
    await this.props.approve(id);
    await this.props.getAllPosts();
    alert('Đã phê duyệt!');
  }

  render() {
    return (
      <View
        {...this.state}
        {...this.props}
        handleItemClick={this.handleItemClick}
        handleApprove={this.handleApprove}
      />
    );
  }
}

export default Admin;

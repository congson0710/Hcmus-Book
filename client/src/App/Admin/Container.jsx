import React from 'react';

import View from './View';

class Admin extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      activeItem: 'posts',
      currentMenu: 'posts',
      idPostApprove: '',
      idOrderApprove: '',
    };

    this.handleItemClick = this.handleItemClick.bind(this);
    this.handleApprovePost = this.handleApprovePost.bind(this);
    this.handleApproveOrder = this.handleApproveOrder.bind(this);
  }

  componentWillMount() {
    this.props.getAllPosts();
    this.props.getAllOrders();
  }

  handleItemClick(event, { name }) {
    this.setState({ activeItem: name, currentMenu: name });
  }

  async handleApprovePost(id) {
    this.setState({ idPostApprove: id });
    await this.props.approvePost(id);
    await this.props.getAllPosts();
    alert('Đã phê duyệt!');
  }

  async handleApproveOrder(id) {
    this.setState({ idOrderApprove: id });
    await this.props.approveOrder(id);
    await this.props.getAllOrders();
    alert('Đã phê duyệt!');
  }

  render() {
    return (
      <View
        {...this.state}
        {...this.props}
        handleItemClick={this.handleItemClick}
        handleApprovePost={this.handleApprovePost}
        handleApproveOrder={this.handleApproveOrder}
      />
    );
  }
}

export default Admin;

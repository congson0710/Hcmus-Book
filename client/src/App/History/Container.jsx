import React from 'react';

import View from './View';

export default class OrderHistory extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeItem: 'order',
      currentMenu: 'order',
      isShowDetail: false,
    };
    this.handleShowOrderDetail = this.handleShowOrderDetail.bind(this);
    this.handleItemClick = this.handleItemClick.bind(this);
  }

  handleItemClick(e, { name }) {
    this.setState({ activeItem: name, currentMenu: name });
  }

  handleShowOrderDetail() {
    this.setState({ isShowDetail: !this.state.isShowDetail });
  }

  render() {
    return (
      <View
        {...this.state}
        handleShowOrderDetail={this.handleShowOrderDetail}
        handleItemClick={this.handleItemClick}
      />
    );
  }
}

import React from 'react';

import View from './View';

export default class OrderHistory extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isShowDetail: false,
    };
    this.handleShowOrderDetail = this.handleShowOrderDetail.bind(this);
  }

  handleShowOrderDetail() {
    this.setState({ isShowDetail: !this.state.isShowDetail });
  }

  render() {
    return (
      <View
        {...this.state}
        handleShowOrderDetail={this.handleShowOrderDetail}
      />
    );
  }
}

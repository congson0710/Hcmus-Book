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
    this.handleShowDetail = this.handleShowDetail.bind(this);
    this.handleItemClick = this.handleItemClick.bind(this);
  }

  componentWillMount() {
    this.props.getUserManagement();
  }

  handleItemClick(e, { name }) {
    this.setState({ activeItem: name, currentMenu: name });
  }

  handleShowDetail(id) {
    this.setState({ isShowDetail: id });
  }

  render() {
    return (
      <View
        {...this.state}
        {...this.props}
        handleShowDetail={this.handleShowDetail}
        handleItemClick={this.handleItemClick}
      />
    );
  }
}

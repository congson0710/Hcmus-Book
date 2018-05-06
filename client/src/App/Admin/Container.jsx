import React from 'react';

import View from './View';

class Admin extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      activeItem: 'posts',
      currentMenu: 'posts',
    };

    this.handleItemClick = this.handleItemClick.bind(this);
  }

  handleItemClick(event, { name }) {
    this.setState({ activeItem: name, currentMenu: name });
  }

  render() {
    return (
      <View
        {...this.state}
        {...this.props}
        handleItemClick={this.handleItemClick}
      />
    );
  }
}

export default Admin;

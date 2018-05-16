import React from 'react';

import View from './View';

class Search extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      activeItem: 'book',
      currentMenu: 'book',
    };

    this.handleItemClick = this.handleItemClick.bind(this);
  }

  handleItemClick(event, { name }) {
    this.setState({ activeItem: name, currentMenu: name });
  }
  render() {
    return (
      <View
        {...this.props}
        {...this.state}
        handleItemClick={this.handleItemClick}
      />
    );
  }
}

export default Search;

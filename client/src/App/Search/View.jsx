import React from 'react';
import { Menu } from 'semantic-ui-react';

const Search = props => {
  return (
    <div className="container" style={{ margin: `12px auto` }}>
      <div className="col-lg-10 col-lg-offset-1">
        <div>
          <h2>Kết quả tìm kiếm</h2>
        </div>
        <Menu pointing secondary>
          <Menu.Item
            name="book"
            content="Sách mới"
            active={props.activeItem === 'book'}
            onClick={props.handleItemClick}
          />
          <Menu.Item
            name="post"
            content="Mua/bán sách cũ"
            active={props.activeItem === 'post'}
            onClick={props.handleItemClick}
          />
        </Menu>
      </div>
    </div>
  );
};

export default Search;

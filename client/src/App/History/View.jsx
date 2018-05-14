import React from 'react';
import { Menu } from 'semantic-ui-react';

import Order from './Order';
import Post from './Post';

const OrderHistory = props => {
  return (
    <div className="container" style={{ margin: `60px auto` }}>
      <div className="col-lg-10 col-lg-offset-1">
        <Menu pointing secondary>
          <Menu.Item
            name="order"
            active={props.activeItem === 'order'}
            onClick={props.handleItemClick}
            content="Đơn hàng"
          />
          <Menu.Item
            name="post"
            active={props.activeItem === 'post'}
            onClick={props.handleItemClick}
            content="Bài đăng"
          />
        </Menu>
        {props.currentMenu === 'order' ? (
          <Order {...props} />
        ) : (
          <Post {...props} />
        )}
      </div>
    </div>
  );
};

export default OrderHistory;

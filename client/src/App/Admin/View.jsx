import { Segment, Menu } from 'semantic-ui-react';
import React from 'react';

import Posts from './Posts';
import Orders from './Orders';

const Admin = props => {
  const { activeItem, handleItemClick, currentMenu } = props;
  return (
    <Segment
      loading={
        props.allPost.isLoading ||
        props.approvePostSuccess.isLoading ||
        props.approveOrderSuccess.isLoading
      }
    >
      <Menu attached="top" tabular>
        <Menu.Item
          name="posts"
          active={activeItem === 'posts'}
          onClick={handleItemClick}
        />
        <Menu.Item
          name="orders"
          active={activeItem === 'orders'}
          onClick={handleItemClick}
        />
        <Menu.Item
          name="users"
          active={activeItem === 'users'}
          onClick={handleItemClick}
        />
      </Menu>
      <Segment attached="bottom">
        {currentMenu === 'posts' ? (
          <Posts {...props} />
        ) : currentMenu === 'orders' ? (
          <Orders {...props} />
        ) : (
          <h2>List User</h2>
        )}
      </Segment>
    </Segment>
  );
};

export default Admin;

import React from 'react';
import { Menu, Loader, Grid } from 'semantic-ui-react';
import _ from 'lodash';

import PostCard from '../Home/PostCard';
import BookCard from '../Home/BookCard';

const Search = props => {
  const { listPost, listBook } = props.searchResult.list;
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
        {props.searchResult.isLoading ? (
          <Loader active content="Loading" size="large" />
        ) : props.currentMenu === 'book' ? (
          <Grid columns="4" style={{ marginLeft: `4px` }}>
            {listBook && listBook.length === 0 ? (
              <h3 style={{ marginTop: `12px` }}>Không có kết quả phù hợp</h3>
            ) : (
              _.chunk(listBook, 4).map(row => (
                <Grid.Row key={Math.random()}>
                  {row.map(book => (
                    <Grid.Column key={Math.random()}>
                      <BookCard book={book} />
                    </Grid.Column>
                  ))}
                </Grid.Row>
              ))
            )}
          </Grid>
        ) : (
          <Grid columns="4" style={{ marginLeft: `4px` }}>
            {listPost && listPost.length === 0 ? (
              <h3 style={{ marginTop: `12px` }}>Không có kết quả phù hợp</h3>
            ) : (
              _.chunk(listPost, 4).map(row => (
                <Grid.Row key={Math.random()}>
                  {row.map(post => (
                    <Grid.Column key={Math.random()}>
                      <PostCard post={post} />
                    </Grid.Column>
                  ))}
                </Grid.Row>
              ))
            )}
          </Grid>
        )}
      </div>
    </div>
  );
};

export default Search;

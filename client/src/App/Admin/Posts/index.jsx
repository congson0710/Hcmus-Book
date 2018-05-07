import { Table, Header, Button } from 'semantic-ui-react';
import React from 'react';

const Posts = props => {
  return (
    <Table celled padded>
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell singleLine>STT</Table.HeaderCell>
          <Table.HeaderCell>Tiêu đề</Table.HeaderCell>
          <Table.HeaderCell>Trạng thái</Table.HeaderCell>
          <Table.HeaderCell>Xem chi tiết</Table.HeaderCell>
          <Table.HeaderCell>Phê duyệt</Table.HeaderCell>
        </Table.Row>
      </Table.Header>
      <Table.Body>
        {props.allPost.posts.map(post => {
          return (
            <Table.Row key={Math.random()}>
              <Table.Cell>
                <Header as="h2" textAlign="center">
                  {post.id}
                </Header>
              </Table.Cell>
              <Table.Cell singleLine>{post.title}</Table.Cell>
              <Table.Cell singleLine>{post.status}</Table.Cell>
              <Table.Cell>
                <Button
                  onClick={() => {
                    props.handlePreview(post.id);
                  }}
                >
                  Chi tiết
                </Button>
              </Table.Cell>
              <Table.Cell>
                <Button
                  onClick={() => {
                    props.handleApprove(post.id);
                  }}
                  loading={
                    props.approvePost.isLoading && post.id === props.idApprove
                  }
                >
                  Phê Duyệt
                </Button>
              </Table.Cell>
            </Table.Row>
          );
        })}
      </Table.Body>
    </Table>
  );
};

export default Posts;

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
      {/* <Table.Body>
        {props.eventForApproving.allEvent.content.map(post => {
          return post.published ? (
            <Table.Row key={Math.random()}>
              <Table.Cell>
                <Header as="h2" textAlign="center">
                  {post.id}
                </Header>
              </Table.Cell>
              <Table.Cell singleLine>{post.title}</Table.Cell>
              <Table.Cell singleLine>
                {post.approved ? (
                  <div>Đã phê duyệt</div>
                ) : (
                  <div>Chưa duyệt</div>
                )}
              </Table.Cell>
              <Table.Cell>
                <Button
                  onClick={() => {
                    props.handlePreview(post.id);
                  }}
                >
                  Chi tiết
                </Button>
                {post.id === props.isShowDetail && (
                  <div className="mainModal">
                    <div className="contentModal">
                      <h2>Detail goes here</h2>
                      <div className="btnCancel">
                        <Button onClick={() => props.handlePreview(-1)}>
                          Hủy
                        </Button>
                      </div>
                    </div>
                  </div>
                )}
              </Table.Cell>
              <Table.Cell>
                <Button
                  onClick={() => {
                    props.handleApprove(post);
                  }}
                  loading={
                    props.approveEvent.isLoading && props.idApprove === post.id
                  }
                >
                  Phê Duyệt
                </Button>
              </Table.Cell>
            </Table.Row>
          ) : null;
        })}
      </Table.Body> */}
    </Table>
  );
};

export default Posts;

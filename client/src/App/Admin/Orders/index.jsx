import { Table, Header, Button } from 'semantic-ui-react';
import React from 'react';

const Orders = props => {
  return (
    <Table celled padded>
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell singleLine>STT</Table.HeaderCell>
          <Table.HeaderCell>Người đặt</Table.HeaderCell>
          <Table.HeaderCell>Khu vực</Table.HeaderCell>
          <Table.HeaderCell>Tổng tiền</Table.HeaderCell>
          <Table.HeaderCell>Trạng thái</Table.HeaderCell>
          <Table.HeaderCell>Xem chi tiết</Table.HeaderCell>
          <Table.HeaderCell>Phê duyệt</Table.HeaderCell>
        </Table.Row>
      </Table.Header>
      <Table.Body>
        {props.allOrder.orders.map(order => {
          return (
            <Table.Row key={Math.random()}>
              <Table.Cell>
                <Header as="h2" textAlign="center">
                  {order.orderID}
                </Header>
              </Table.Cell>
              <Table.Cell singleLine>{order.userName}</Table.Cell>
              <Table.Cell singleLine>{order.area}</Table.Cell>
              <Table.Cell singleLine>{order.totalPayment}</Table.Cell>
              <Table.Cell singleLine>{order.status}</Table.Cell>
              <Table.Cell>
                <Button
                  onClick={() => {
                    props.handlePreview(order.orderID);
                  }}
                >
                  Chi tiết
                </Button>
              </Table.Cell>
              <Table.Cell>
                <Button
                  onClick={() => {
                    props.handleApproveOrder(order.orderID);
                  }}
                  loading={
                    props.approveOrderSuccess.isLoading &&
                    order.orderID === props.idOrderApprove
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

export default Orders;

import React from 'react';
import moment from 'moment';
import { Button } from 'semantic-ui-react';

import OrderDetail from '../../OrderDetail';

const Order = props => {
  const { orders } = props.userManagement;
  return (
    <div>
      <h4 style={{ paddingTop: `14px` }}>
        <b>Lịch sử đơn hàng </b>
      </h4>
      <table className="table table-hover table-bordered">
        <thead>
          <tr>
            <th className="col-lg-3 text-center">Mã đơn hàng</th>
            <th className="col-lg-3 text-center">Ngày tạo</th>
            <th className="col-lg-3 text-center">Tình trạng</th>
            <th className="col-lg-3 text-center">Chi tiết đơn hàng</th>
          </tr>
        </thead>
        <tbody>
          {orders.map(order => (
            <tr key={Math.random()}>
              <td className="text-center">
                <h4>{order.orderID}</h4>
              </td>
              <td className="text-center">
                <h4>{moment(order.date).format('DD-MM-YYYY, HH:mm A')}</h4>
              </td>
              <td className="text-center">
                <h4
                  className={
                    order.status === 'PENDING' ? 'text-danger' : 'text-success'
                  }
                >
                  {order.status === 'PENDING'
                    ? 'Chưa giao hàng'
                    : 'Đã giao hàng'}
                </h4>
              </td>
              <td className="text-center">
                <Button
                  onClick={() => props.handleShowOrderDetail(order.orderID)}
                  className="btn btn-info"
                  color="youtube"
                >
                  Chi tiết
                </Button>
              </td>
              {props.isShowDetail === order.orderID && (
                <div className="mainModal">
                  <div className="contentModal">
                    <OrderDetail orderID={order.orderID} />
                    <div className="btnCancel">
                      <button
                        className="btn btn-info"
                        onClick={() => props.handleShowOrderDetail(-1)}
                      >
                        Hủy
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Order;

import React from 'react';

import OrderDetail from '../OrderDetail';

const OrderHistory = props => {
  return (
    <div className="container" style={{ margin: `60px auto` }}>
      <div className="col-lg-10 col-lg-offset-1">
        <h4 style={{ paddingTop: `14px` }}>
          <b>Lịch sử đơn hàng </b>
        </h4>
        <hr />
        <table className="table table-hover table-bordered">
          <thead>
            <tr>
              <th className="col-lg-3 text-center">Mã đơn hàng</th>
              <th className="col-lg-3 text-center">Ngày tạo</th>
              <th className="col-lg-3 text-center">Tình trạng</th>
              <th className="col-lg-3 text-center"> </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="text-center">
                <h4>003</h4>
              </td>
              <td className="text-center">
                <h4>29/11/2018</h4>
              </td>
              <td className="text-center">
                <h4 className="text-success">Đã giao hàng</h4>
              </td>
              <td className="text-center">
                <button
                  onClick={props.handleShowOrderDetail}
                  className="btn btn-info"
                >
                  Chi tiết
                </button>
              </td>
            </tr>
            <tr>
              <td className="text-center">
                <h4>002</h4>
              </td>
              <td className="text-center">
                <h4>28/11/2018</h4>
              </td>
              <td className="text-center">
                <h4 className="text-info">Đang giao hàng</h4>
              </td>
              <td className="text-center">
                <button
                  onClick={props.handleShowOrderDetail}
                  className="btn btn-info"
                >
                  Chi tiết
                </button>
              </td>
            </tr>
            <tr>
              <td className="text-center">
                <h4>001</h4>
              </td>
              <td className="text-center">
                <h4>27/11/2018</h4>
              </td>
              <td className="text-center">
                <h4 className="text-danger">Đã hủy đơn hàng</h4>
              </td>
              <td className="text-center">
                <button
                  onClick={props.handleShowOrderDetail}
                  className="btn btn-info"
                >
                  Chi tiết
                </button>
              </td>
              {props.isShowDetail && (
                <div className="mainModal">
                  <div className="contentModal">
                    <OrderDetail />
                  </div>
                </div>
              )}
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default OrderHistory;

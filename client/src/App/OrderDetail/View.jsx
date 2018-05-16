import React from 'react';

const OrderDetail = props => {
  console.log(props.orderDetail);
  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-10 col-lg-offset-1">
          <h4 style={{ paddingTop: `14px` }}>
            <b>Thông tin giỏ hàng</b>
          </h4>
          <hr />
          <table className="table table-bordered">
            <thead>
              <tr>
                <th>Tên sách</th>
                <th>Số lượng</th>
                <th className="text-center">Đơn giá</th>
                <th className="text-center">Tổng giá</th>
              </tr>
            </thead>
            <tbody>
              {props.orderDetail.order.map(book => {
                return (
                  <tr key={Math.random()}>
                    <td className="col-md-5">
                      <div className="media">
                        <a className="pull-left" href="#">
                          <img
                            className="media-object"
                            src={book.bookImage}
                            style={{ width: `100px`, height: `80px` }}
                            alt="img"
                          />
                        </a>
                        <div className="media-body">
                          <h4 className="media-heading cart-text-padding-top">
                            <p>{book.bookName}</p>
                          </h4>
                        </div>
                      </div>
                    </td>
                    <td className="col-md-1" style={{ textAlign: `center` }}>
                      {book.quantityOrder}
                    </td>
                    <td className="col-md-1 text-center">
                      <p className="cart-text-padding-top">
                        <b>{book.bookPrice}</b>
                      </p>
                    </td>
                    <td className="col-md-2 text-center" id="priceFood">
                      <p className="cart-text-padding-top">
                        <b>{book.quantityOrder * book.bookPrice}</b>
                      </p>
                    </td>
                  </tr>
                );
              })}
              <tr>
                <td colSpan="1">
                  <h4 className="pull-left">
                    <b>Khu vực</b>
                  </h4>
                </td>
                <td colSpan="2">{props.area}</td>
                <td />
              </tr>
              <tr>
                <td colSpan="3">
                  <h4>
                    <b>Phí vận chuyển</b>
                  </h4>
                </td>
                <td className="text-center">
                  <h5>
                    <strong>
                      {props.area === 'Quận 1' ? 'Free' : '30000'}
                    </strong>
                  </h5>
                </td>
              </tr>
              <tr>
                <td colSpan="3">
                  <h4>
                    <b>Thành tiền</b>
                  </h4>
                </td>
                <td className="text-center">
                  <h4>
                    <strong>{props.totalPayment}</strong>
                  </h4>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default OrderDetail;

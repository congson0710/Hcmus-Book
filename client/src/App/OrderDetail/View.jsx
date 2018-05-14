import React from 'react';

const OrderDetail = props => {
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
              <tr>
                <td className="col-md-5">
                  <div className="media">
                    <a className="pull-left" href="#">
                      <img
                        className="media-object"
                        src="http://placehold.it/250x200"
                        style={{ width: `100px`, height: `80px` }}
                        alt="img"
                      />
                    </a>
                    <div className="media-body">
                      <h4 className="media-heading cart-text-padding-top">
                        <a href="#">Tên sách</a>
                      </h4>
                    </div>
                  </div>
                </td>
                <td className="col-md-1" style={{ textAlign: `center` }}>
                  3
                </td>
                <td className="col-md-1 text-center">
                  <p className="cart-text-padding-top">
                    <b>$4.87</b>
                  </p>
                </td>
                <td className="col-md-2 text-center" id="priceFood">
                  <p className="cart-text-padding-top">
                    <b>$14.61</b>
                  </p>
                </td>
              </tr>
              <tr>
                <td className="col-md-5">
                  <div className="media">
                    <a className="pull-left" href="#">
                      <img
                        className="media-object"
                        src="http://placehold.it/250x200"
                        style={{ width: `100px`, height: `80px` }}
                        alt="img"
                      />
                    </a>
                    <div className="media-body">
                      <h4 className="media-heading cart-text-padding-top">
                        Tên sách
                      </h4>
                    </div>
                  </div>
                </td>
                <td className="col-md-1" style={{ textAlign: `center` }}>
                  2
                </td>
                <td className="col-md-1 text-center">
                  <p className="cart-text-padding-top">
                    <b>$4.99</b>
                  </p>
                </td>
                <td className="col-md-2 text-center">
                  <p className="cart-text-padding-top">
                    <b>$9.98</b>
                  </p>
                </td>
              </tr>
              <tr>
                <td colSpan="1">
                  <h4 className="pull-left">
                    <b>Chọn khu vực</b>
                  </h4>
                </td>
                <td colSpan="2">Quận 1</td>
                <td />
              </tr>
              <tr>
                <td colSpan="3">
                  <h4>
                    <b>Tạm tính</b>
                  </h4>
                </td>
                <td className="text-center">
                  <h5>
                    <strong>$24.59</strong>
                  </h5>
                </td>
              </tr>
              <tr>
                <td colSpan="3">
                  <h4>
                    <b>Phí vận chuyển</b>
                  </h4>
                </td>
                <td className="text-center">
                  <h5>
                    <strong>$6.94</strong>
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
                    <strong>$31.53</strong>
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

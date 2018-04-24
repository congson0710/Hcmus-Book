import React from 'react';

export default class Cart extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-lg-10 col-lg-offset-1">
            <h4 style={{ paddingTop: `14px` }}>
              <b>Thông tin giỏ hàng</b>
            </h4>
            <hr />
            <table className="table table-hover table-bordered">
              <thead>
                <tr>
                  <th>Tên sách</th>
                  <th>Số lượng</th>
                  <th className="text-center">Đơn giá</th>
                  <th className="text-center">Tổng giá</th>
                  <th> </th>
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
                    <input
                      type="email"
                      className="form-control"
                      id="amountFood"
                      value="3"
                    />
                  </td>
                  <td className="col-md-1 text-center" id="price">
                    <p className="cart-text-padding-top">
                      <b>$4.87</b>
                    </p>
                  </td>
                  <td className="col-md-2 text-center" id="priceFood">
                    <p className="cart-text-padding-top">
                      <b>$14.61</b>
                    </p>
                  </td>
                  <td className="col-md-1 text-center">
                    <button type="button" className="btn btn-danger">
                      <span className="glyphicon glyphicon-remove" />
                    </button>
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
                          <a href="#">Tên sách</a>
                        </h4>
                      </div>
                    </div>
                  </td>
                  <td className="col-md-1" style={{ textAlign: `center` }}>
                    <input type="email" className="form-control" value="2" />
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
                  <td className="col-md-1 text-center">
                    <button type="button" className="btn btn-danger">
                      <span className="glyphicon glyphicon-remove" />
                    </button>
                  </td>
                </tr>
                <tr>
                  <td colspan="1">
                    <h4 className="pull-left">
                      <b>Chọn khu vực</b>
                    </h4>
                  </td>
                  <td colspan="2">
                    <select
                      className="list-group-item center-block"
                      style={{ width: `180px` }}
                    >
                      <option value="1">Quận 1</option>
                      <option value="2">Quận 2</option>
                      <option value="3">Quận 3</option>
                      <option value="3">Quận 4</option>
                    </select>
                  </td>
                  <td />
                  <td />
                </tr>
                <tr>
                  <td colspan="3">
                    <h4>
                      <b>Tạm tính</b>
                    </h4>
                  </td>
                  <td className="text-center">
                    <h5>
                      <strong>$24.59</strong>
                    </h5>
                  </td>
                  <td />
                </tr>
                <tr>
                  <td colspan="3">
                    <h4>
                      <b>Phí vận chuyển</b>
                    </h4>
                  </td>
                  <td className="text-center">
                    <h5>
                      <strong>$6.94</strong>
                    </h5>
                  </td>
                  <td />
                </tr>
                <tr>
                  <td colspan="3">
                    <h4>
                      <b>Thành tiền</b>
                    </h4>
                  </td>
                  <td className="text-center">
                    <h4>
                      <strong>$31.53</strong>
                    </h4>
                  </td>
                  <td />
                </tr>
              </tbody>
            </table>
            <div className="pull-right" style={{ marginBottom: `20px` }}>
              <button type="button" className="btn btn-success btn-lg">
                Thanh toán
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

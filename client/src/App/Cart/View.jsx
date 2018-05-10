import React from 'react';
import { Link } from 'react-router-dom';
import { Dropdown } from 'semantic-ui-react';

const area = [
  {
    key: 1,
    value: 'Quận 1',
    text: 'Quận 1',
  },
  {
    key: 2,
    value: 'Quận 2',
    text: 'Quận 2',
  },
  {
    key: 3,
    value: 'Quận 3',
    text: 'Quận 3',
  },
  {
    key: 4,
    value: 'Quận 4',
    text: 'Quận 4',
  },
];

const Cart = props => {
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
              {props.appCart.currentCart
                ? props.appCart.currentCart.map(book => {
                    return (
                      <tr key={Math.random()}>
                        <td className="col-md-5">
                          <div className="media">
                            <div className="pull-left">
                              <img
                                className="media-object"
                                src={book.bookImage}
                                style={{ width: `100px`, height: `80px` }}
                                alt="img"
                              />
                            </div>
                            <div className="media-body">
                              <h4 className="media-heading cart-text-padding-top">
                                {book.bookName}
                              </h4>
                            </div>
                          </div>
                        </td>
                        <td
                          className="col-md-1"
                          style={{ textAlign: `center` }}
                        >
                          <p className="cart-text-padding-top">
                            <b>{book.quantityOrder}</b>
                          </p>
                        </td>
                        <td className="col-md-1 text-center" id="price">
                          <p className="cart-text-padding-top">
                            <b>{book.bookPrice}</b>
                          </p>
                        </td>
                        <td className="col-md-2 text-center" id="priceFood">
                          <p className="cart-text-padding-top">
                            <b>{book.bookPrice * book.quantityOrder}</b>
                          </p>
                        </td>
                        <td className="col-md-1 text-center">
                          <button
                            type="button"
                            className="btn btn-danger"
                            onClick={() => props.handleRemoveItem(book.bookID)}
                          >
                            <span className="glyphicon glyphicon-remove" />
                          </button>
                        </td>
                      </tr>
                    );
                  })
                : null}

              <tr>
                <td colSpan="1">
                  <h4 className="pull-left">
                    <b>Chọn khu vực</b>
                  </h4>
                </td>
                <td colSpan="2">
                  <Dropdown
                    name="area"
                    className="list-group-item center-block"
                    options={area}
                    onChange={props.handleChange}
                    selection
                  />
                </td>
                <td />
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
                    <strong>{props.tempTotal}</strong>
                  </h5>
                </td>
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
                      {props.area === ''
                        ? '0'
                        : props.area === 'q1'
                          ? 'Free'
                          : '30000'}
                    </strong>
                  </h5>
                </td>
                <td />
              </tr>
              <tr>
                <td colSpan="3">
                  <h4>
                    <b>Thành tiền</b>
                  </h4>
                </td>
                <td className="text-center">
                  <h4>
                    <strong>
                      {props.area === 'q1' || props.area === ''
                        ? props.tempTotal
                        : props.tempTotal + 30000}
                    </strong>
                  </h4>
                </td>
                <td />
              </tr>
            </tbody>
          </table>
          <div className="pull-right" style={{ marginBottom: `20px` }}>
            <Link to="/order">
              <button
                type="button"
                className="btn btn-success btn-lg"
                onClick={props.handleConfirm}
              >
                Xác nhận
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;

import React from 'react';
import { Segment } from 'semantic-ui-react';

const Order = props => {
  const { authenUser } = props.loginUser;
  return (
    <div className="container">
      <div className="col-lg-10 col-lg-offset-1">
        <Segment
          loading={props.orderSuccess.isLoading}
          style={{ marginTop: `12px` }}
        >
          <h4 style={{ paddingTop: `14px` }}>
            <b>Thông tin người đặt hàng</b>
          </h4>
          <hr />
          <div className="form-horizontal">
            <div className="form-group">
              <label className="col-md-3 control-label" for="phoneNumber2">
                Số điện thoại
              </label>
              <div className="col-md-6">
                <input
                  id="phoneNumber2"
                  name="phoneNumber2"
                  value={authenUser.phone}
                  type="text"
                  placeholder=""
                  className="form-control input-md"
                  required=""
                  disabled
                />
              </div>
            </div>
            <div className="form-group">
              <label className="col-md-3 control-label" for="name2">
                Họ và tên
              </label>
              <div className="col-md-6">
                <input
                  id="name2"
                  name="name2"
                  value={authenUser.userName}
                  type="text"
                  className="form-control input-md"
                  required=""
                  disabled
                />
              </div>
            </div>
            <div className="form-group">
              <label className="col-md-3 control-label" for="location2">
                Địa chỉ
              </label>
              <div className="col-md-6">
                <textarea
                  id="location2"
                  name="location2"
                  className="form-control input-md"
                  required=""
                  disabled
                  defaultValue={authenUser.userAddress}
                />
              </div>
            </div>
            <div className="form-group">
              <div style={{ textAlign: `center` }}>
                <button
                  className="btn btn-info btn-register"
                  onClick={props.handleOrderBook}
                >
                  Đặt hàng
                </button>
              </div>
            </div>
          </div>
        </Segment>
      </div>
    </div>
  );
};

export default Order;

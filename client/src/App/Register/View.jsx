import React from 'react';
import { Dropdown } from 'semantic-ui-react';

const genderOption = [
  {
    value: 'Nam',
    text: 'Nam',
  },
  {
    value: 'Nữ',
    text: 'Nữ',
  },
];

const Register = props => {
  return (
    <div className="container">
      <div className="col-lg-10 col-lg-offset-1">
        <h4 style={{ paddingTop: `14px` }}> Tạo tài khoản khách hàng mới </h4>
        <hr />
        <div className="form-horizontal">
          <div className="form-group">
            <label className="col-md-3 control-label" for="phoneNumber">
              Tài khoản
            </label>
            <div className="col-md-6">
              <input
                name="userAccount"
                type="text"
                placeholder=""
                className="form-control input-md"
                required=""
                onChange={props.handleOnChange}
              />
            </div>
          </div>
          <div className="form-group">
            <label className="col-md-3 control-label" for="password">
              Mật khẩu
            </label>
            <div className="col-md-6">
              <input
                name="userPassword"
                type="password"
                placeholder=""
                className="form-control input-md"
                required=""
                onChange={props.handleOnChange}
              />
            </div>
          </div>
          <div className="form-group">
            <label className="col-md-3 control-label" for="rePassword">
              Nhập lại mật khẩu
            </label>
            <div className="col-md-6">
              <input
                name="userRePassword"
                type="password"
                placeholder=""
                className="form-control input-md"
                required=""
                onChange={props.handleOnChange}
              />
            </div>
          </div>
          <div className="form-group">
            <label className="col-md-3 control-label" for="name">
              Họ và tên
            </label>
            <div className="col-md-6">
              <input
                name="userName"
                type="text"
                className="form-control input-md"
                required=""
                onChange={props.handleOnChange}
              />
            </div>
          </div>
          <div className="form-group">
            <label className="col-md-3 control-label">Giới tính</label>
            <div className="col-md-2">
              <Dropdown
                className="form-control"
                name="gender"
                selection
                options={genderOption}
                onChange={props.handleOnSelect}
              />
            </div>
          </div>
          <div className="form-group">
            <label className="col-md-3 control-label" for="location">
              Địa chỉ
            </label>
            <div className="col-md-6">
              <textarea
                name="address"
                placeholder=""
                className="form-control input-md"
                required=""
                onChange={props.handleOnChange}
              />
            </div>
          </div>
          <div className="form-group">
            <div style={{ textAlign: `center` }}>
              <button
                onClick={props.handleRegister}
                className="btn btn-primary btn-lg btn-register"
              >
                Đăng ký
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;

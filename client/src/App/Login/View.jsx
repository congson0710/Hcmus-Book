import React from 'react';
import { Loader } from 'semantic-ui-react';

const Login = props => {
  return (
    <div class="container">
      <h2 style={{ paddingTop: `14px` }}> Đăng nhập </h2>
      <hr />
      {props.loginUser.isLoading ? (
        <div>
          <Loader active content="Loading" large />
        </div>
      ) : (
        <div
          className="form-login"
          style={{
            padding: `15px`,
            paddingBottom: `10px`,
          }}
        >
          <div
            className="form-horizontal"
            acceptCharset="UTF-8"
            style={{ padding: `24px` }}
          >
            <label>Tài khoản</label>
            <input
              className="form-control form-login"
              type="text"
              name="userAccount"
              placeholder="Tên đăng nhập..."
              onChange={props.handleOnChange}
            />
            <label>Mật khẩu</label>
            <input
              className="form-control form-login"
              type="password"
              name="userPassword"
              placeholder="Mật khẩu..."
              onChange={props.handleOnChange}
            />
            <label className="form-check-label">
              <input
                id="saveLogin"
                name="saveLogin"
                type="checkbox"
                className="form-check-input"
              />
              Ghi nhớ đăng nhập
            </label>
            <button
              className="btn btn-primary pull-right"
              onClick={props.handleLogin}
            >
              Đăng nhập
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Login;

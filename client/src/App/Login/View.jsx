import React from 'react';

export default class Login extends React.Component {
  render() {
    return (
      <div class="container">
        <h2 style={{ paddingTop: `14px` }}> Đăng nhập </h2>
        <hr />
        <div
          className="form-login"
          style={{
            padding: `15px`,
            paddingBottom: `10px`,
          }}
        >
          <form
            className="form-horizontal"
            acceptCharset="UTF-8"
            style={{ padding: `24px` }}
          >
            <label>Tài khoản</label>
            <input
              id="usernameLogin"
              className="form-control form-login"
              type="text"
              name="usernameLogin"
              placeholder="Tên đăng nhập..."
            />
            <label>Mật khẩu</label>
            <input
              id="passwordLogin"
              className="form-control form-login"
              type="password"
              name="passwordLogin"
              placeholder="Mật khẩu..."
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
            <button className="btn btn-primary pull-right" type="submit">
              Đăng nhập
            </button>
          </form>
        </div>
      </div>
    );
  }
}

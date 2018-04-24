import React from 'react';

export default class Login extends React.Component {
  render() {
    return (
      <div
        className="dropdown-menu form-login"
        style={{ padding: `15px`, paddingBottom: `10px` }}
      >
        <form className="form-horizontal" accept-charset="UTF-8">
          <input
            id="usernameLogin"
            className="form-control form-login"
            type="text"
            name="usernameLogin"
            placeholder="Số điện thoại..."
          />
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
    );
  }
}

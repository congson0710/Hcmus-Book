import React from 'react';

export default class Register extends React.Component {
  render() {
    return (
      <div class="container">
        <div class="col-lg-10 col-lg-offset-1">
          <h4 style={{ paddingTop: `14px` }}> Tạo tài khoản khách hàng mới </h4>
          <hr />
          <form class="form-horizontal">
            <div class="form-group">
              <label class="col-md-3 control-label" for="phoneNumber">
                Số điện thoại
              </label>
              <div class="col-md-6">
                <input
                  id="phoneNumber"
                  name="phoneNumber"
                  type="text"
                  placeholder=""
                  class="form-control input-md"
                  required=""
                />
              </div>
            </div>
            <div class="form-group">
              <label class="col-md-3 control-label" for="password">
                Mật khẩu
              </label>
              <div class="col-md-6">
                <input
                  id="password"
                  name="password"
                  type="password"
                  placeholder=""
                  class="form-control input-md"
                  required=""
                />
              </div>
            </div>
            <div class="form-group">
              <label class="col-md-3 control-label" for="rePassword">
                Nhập lại mật khẩu
              </label>
              <div class="col-md-6">
                <input
                  id="rePassword"
                  name="rePassword"
                  type="password"
                  placeholder=""
                  class="form-control input-md"
                  required=""
                />
              </div>
            </div>
            <div class="form-group">
              <label class="col-md-3 control-label" for="name">
                Họ và tên
              </label>
              <div class="col-md-6">
                <input
                  id="name"
                  name="name"
                  type="text"
                  class="form-control input-md"
                  required=""
                />>
              </div>
            </div>
            <div class="form-group">
              <label class="col-md-3 control-label" for="gender">
                Giới tính
              </label>
              <div class="col-md-2">
                <select id="gender" name="gender" class="form-control">
                  <option value="1">Nam</option>
                  <option value="2">Nữ</option>
                </select>
              </div>
            </div>
            <div class="form-group">
              <label class="col-md-3 control-label" for="location">
                Địa chỉ
              </label>
              <div class="col-md-6">
                <textarea
                  id="location"
                  name="location"
                  placeholder=""
                  class="form-control input-md"
                  required=""
                />
              </div>
            </div>
            <div class="form-group">
              <div style={{ textAlign: `center` }}>
                <button
                  id="submit"
                  name="submit"
                  class="btn btn-primary btn-lg btn-register"
                >
                  Đăng ký
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

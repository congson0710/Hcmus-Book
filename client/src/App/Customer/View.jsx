import React from 'react';
import { Link } from 'react-router-dom';
import { Dropdown } from 'semantic-ui-react';

export default class Customer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      genderOption: [
        {
          key: 'nam',
          value: 'nam',
          text: 'Nam',
        },
        {
          key: 'nu',
          value: 'nu',
          text: 'Nữ',
        },
      ],
    };
  }
  render() {
    return (
      <div className="container">
        <div className="col-lg-10 col-lg-offset-1">
          <h4 style={{ paddingTop: `14px` }}> Thông tin khách hàng </h4>
          <hr />
          <form className="form-horizontal">
            <div className="form-group">
              <label className="col-md-3 control-label" for="phoneNumber">
                Số điện thoại
              </label>
              <div className="col-md-6">
                <input
                  name="phoneNumber"
                  value="0908xxxxxx"
                  type="text"
                  placeholder=""
                  className="form-control input-md"
                  required=""
                />
              </div>
            </div>
            <div className="form-group">
              <label className="col-md-3 control-label" for="name">
                Họ và tên
              </label>
              <div className="col-md-6">
                <input
                  name="name"
                  value="Trịnh Công Sơn"
                  type="text"
                  className="form-control input-md"
                  required=""
                />
              </div>
            </div>
            <div className="form-group">
              <label className="col-md-3 control-label" for="gender">
                Giới tính
              </label>
              <Dropdown
                className="col-md-2"
                text="Nam"
                selection
                options={this.state.genderOption}
                style={{ marginLeft: `14px` }}
              />
            </div>
            <div className="form-group">
              <label className="col-md-3 control-label" forHtml="location">
                Địa chỉ
              </label>
              <div className="col-md-6">
                <textarea
                  name="location"
                  className="form-control input-md"
                  required=""
                >
                  Thành phố Hồ Chí Minh
                </textarea>
              </div>
            </div>
            <div className="form-group">
              <div style={{ textAlign: `center` }}>
                <button className="btn btn-info btn-register">
                  Thay đổi thông tin
                </button>
                <Link
                  className="btn btn-warning btn-register"
                  to="/changepassword"
                >
                  Thay đổi mật khẩu
                </Link>
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

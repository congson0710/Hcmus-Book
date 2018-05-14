import React from 'react';
import { Link } from 'react-router-dom';
import { Dropdown, Button } from 'semantic-ui-react';

export default class Customer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      genderOption: [
        {
          key: '1',
          value: 'Nam',
          text: 'Nam',
        },
        {
          key: '2',
          value: 'Nữ',
          text: 'Nữ',
        },
      ],
    };
  }
  render() {
    const { phone, userName, userAddress, gender } = this.props;
    return (
      <div className="container">
        <div className="col-lg-10 col-lg-offset-1">
          <h4 style={{ paddingTop: `14px` }}> Thông tin khách hàng </h4>
          <hr />
          <div className="form-horizontal">
            <div className="form-group">
              <label className="col-md-3 control-label">Số điện thoại</label>
              <div className="col-md-6">
                <input
                  name="phone"
                  value={phone}
                  type="text"
                  placeholder=""
                  className="form-control input-md"
                  required=""
                  onChange={this.props.handleChange}
                />
              </div>
            </div>
            <div className="form-group">
              <label className="col-md-3 control-label">Họ và tên</label>
              <div className="col-md-6">
                <input
                  name="userName"
                  value={userName}
                  type="text"
                  className="form-control input-md"
                  required=""
                  onChange={this.props.handleChange}
                />
              </div>
            </div>
            <div className="form-group">
              <label className="col-md-3 control-label">Giới tính</label>
              <Dropdown
                name="gender"
                className="col-md-2"
                text={gender}
                selection
                options={this.state.genderOption}
                style={{ marginLeft: `14px` }}
                onChange={this.props.handleChange}
              />
            </div>
            <div className="form-group">
              <label className="col-md-3 control-label">Địa chỉ</label>
              <div className="col-md-6">
                <textarea
                  name="userAddress"
                  className="form-control input-md"
                  required=""
                  onChange={this.props.handleChange}
                  value={userAddress}
                />
              </div>
            </div>
            <div className="form-group">
              <div style={{ textAlign: `center` }}>
                <Button
                  className="btn btn-info btn-register"
                  color="green"
                  onClick={this.props.handleChangeUserInfo}
                  loading={this.props.changeUserInfo.isLoading}
                >
                  Thay đổi thông tin
                </Button>
                <Link
                  className="btn btn-warning btn-register"
                  to="/changepassword"
                >
                  Thay đổi mật khẩu
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

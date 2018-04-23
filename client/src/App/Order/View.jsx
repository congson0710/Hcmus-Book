import React from 'react';

export default class Order extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="col-lg-10 col-lg-offset-1">
          <h4 style={{ paddingTop: `14px` }}>
            <b>Thông tin đơn đặt hàng</b>
          </h4>
          <hr />
          <form className="form-horizontal">
            <input type="radio" name="check" value="diff" /> Sử dụng số điện
            thoại và địa chỉ khác
            <br />
            <div className="form-group">
              <label className="col-md-3 control-label" for="phoneNumber1">
                Số điện thoại
              </label>
              <div className="col-md-6">
                <input
                  id="phoneNumber1"
                  name="phoneNumber1"
                  value=""
                  type="text"
                  placeholder=""
                  className="form-control input-md"
                  required=""
                />
              </div>
            </div>
            <div className="form-group">
              <label className="col-md-3 control-label" for="name1">
                Họ và tên
              </label>
              <div className="col-md-6">
                <input
                  id="name1"
                  name="name1"
                  value=""
                  type="text"
                  className="form-control input-md"
                  required=""
                />
              </div>
            </div>
            <div className="form-group">
              <label className="col-md-3 control-label" for="location1">
                Địa chỉ
              </label>
              <div className="col-md-6">
                <textarea
                  id="location1"
                  name="location1"
                  className="form-control input-md"
                  required=""
                />
              </div>
            </div>
            <hr />
            <input type="radio" name="check" value="same" /> Sử dụng thông tin
            bạn đã cung cấp
            <br />
            <div className="form-group">
              <label className="col-md-3 control-label" for="phoneNumber2">
                Số điện thoại
              </label>
              <div className="col-md-6">
                <input
                  id="phoneNumber2"
                  name="phoneNumber2"
                  value="01666xxxxxx"
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
                  value="Phạm Đức Lộc"
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
                >
                  Thành phố Hồ Chí Minh
                </textarea>
              </div>
            </div>
            <div className="form-group">
              <div style={{ textAlign: `center` }}>
                <button className="btn btn-info btn-register" type="submit">
                  Đặt hàng
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

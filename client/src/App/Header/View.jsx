import React from 'react';

export default class Header extends React.Component {
  render() {
    return (
      <div className="header">
        <div className="container">
          <div className="navbar-search">
            <div className="col-lg-2">
              <a href="index.html" style={{ textDecoration: `none` }}>
                <p className="header-logo"> My Food </p>
              </a>
            </div>
            <div className="col-lg-8">
              <form
                className="navbar-form"
                role="search"
                style={{ marginLeft: `28px` }}
              >
                <div className="input-group col-md-12">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Tên món ăn"
                    name="q"
                  />
                  <div className="input-group-btn">
                    <button
                      id="btn-search"
                      className="btn btn-default flat-butt"
                      type="submit"
                    >
                      Tìm kiếm
                    </button>
                  </div>
                </div>
              </form>
            </div>
            <div className="col-lg-2">
              <div className="header-cart">
                <a href="cart.html">
                  <i className="fa fa-shopping-cart" aria-hidden="true" />
                  Giỏ hàng
                  <b className="header-cart-count">0</b>
                </a>
              </div>
            </div>
          </div>
          <div className="navbar-menu">
            <ul className="nav navbar-nav">
              <li className="menu-li">
                <a href="index.html">
                  <i className="fa fa-home" aria-hidden="true" />
                  <b>TRANG CHỦ</b>
                </a>
              </li>
              <li className="dropdown">
                <button className="dropbtn">
                  <i className="fa fa-bars" aria-hidden="true" />
                  <b>DANH MỤC</b> <b className="caret" />
                </button>
                <div className="dropdown-content">
                  <a href="food-list.html">Tất cả</a>
                  <a href="food-list.html">Món gà</a>
                  <a href="food-list.html">Món cá</a>
                  <a href="food-list.html">Đồ lẩu</a>
                </div>
              </li>
              <li className="dropdown">
                <button className="dropbtn">
                  <i className="fa fa-map-marker" aria-hidden="true" />
                  <b>CHI NHÁNH</b> <b className="caret" />
                </button>
                <div className="dropdown-content">
                  <a href="agency.html">Quận 1</a>
                  <a href="agency.html">Quận 2</a>
                  <a href="agency.html">Quận 3</a>
                </div>
              </li>
            </ul>
            <ul className="nav navbar-nav navbar-right">
              <li className="menu-li">
                <a href="register.html">
                  <i className="fa fa-pencil-square-o" /> <b>ĐĂNG KÝ</b>
                </a>
              </li>
              <li className="dropdown menu-li" style={{ paddingRight: `15px` }}>
                <a className="dropdown-toggle" href="#" data-toggle="dropdown">
                  <i className="fa fa-sign-in" /> <b>ĐĂNG NHẬP</b>
                </a>
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
                    <button
                      className="btn btn-primary pull-right"
                      type="submit"
                    >
                      Đăng nhập
                    </button>
                  </form>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

import React from 'react';
import { Link } from 'react-router-dom';

export default class Header extends React.Component {
  render() {
    return (
      <div className="header">
        <div className="container">
          <div className="navbar-search">
            <div className="col-lg-2">
              <Link to="/" style={{ textDecoration: `none` }}>
                <p className="header-logo"> HCMUSach </p>
              </Link>
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
                    placeholder="Tìm kiếm nhanh..."
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
                <Link to="/cart">
                  <i className="fa fa-shopping-cart" aria-hidden="true" />
                  Giỏ hàng
                  <b className="header-cart-count">0</b>
                </Link>
              </div>
            </div>
          </div>
          <div className="navbar-menu">
            <ul className="nav navbar-nav">
              <li className="menu-li">
                <Link to="/">
                  <i className="fa fa-home" aria-hidden="true" />
                  <b>TRANG CHỦ</b>
                </Link>
              </li>
              <li className="dropdown">
                <button className="dropbtn">
                  <i className="fa fa-bars" aria-hidden="true" />
                  <b>THỂ LOẠI</b> <b className="caret" />
                </button>
                <div className="dropdown-content">
                  <a href="food-list.html">Tất cả</a>
                  <a href="food-list.html">Truyện</a>
                  <a href="food-list.html">Kinh tế</a>
                  <a href="food-list.html">Khoa học</a>
                </div>
              </li>
            </ul>
            <ul className="nav navbar-nav navbar-right">
              <li className="menu-li">
                <Link to="/register">
                  <i className="fa fa-pencil-square-o" /> <b>ĐĂNG KÝ</b>
                </Link>
              </li>
              <li className="dropdown menu-li" style={{ paddingRight: `15px` }}>
                <Link
                  className="dropdown-toggle"
                  to="/login"
                  data-toggle="dropdown"
                >
                  <i className="fa fa-sign-in" /> <b>ĐĂNG NHẬP</b>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

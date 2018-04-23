import React from 'react';

export default class Footer extends React.Component {
  render() {
    return (
      <footer>
        <div className="footer">
          <div className="container">
            <div className="row col-md-10 col-md-offset-1">
              <div className="col-md-4">
                <h3> Thông tin </h3>
                <ul>
                  <li>
                    <p>
                      <i className="fa fa-phone" /> Hotline: 0169xxxxxx
                    </p>
                  </li>
                  <li>
                    <p>
                      <i className="fa fa-users" /> Lượng người truy cập:
                      1000000
                    </p>
                  </li>
                </ul>
              </div>
              <div className="col-md-4">
                <h3> Liên hệ </h3>
                <ul>
                  <li>
                    <a href="#"> Admission </a>
                  </li>
                  <li>
                    <a href="#"> Academic </a>
                  </li>
                  <li>
                    <a href="#"> Career </a>
                  </li>
                  <li>
                    <a href="#"> Administration </a>
                  </li>
                </ul>
              </div>
              <div className="col-md-4">
                <h3> Đăng ký theo dõi </h3>
                <ul>
                  <li>
                    <a href="#">
                      <i className="fa fa-facebook-square" /> Facebook
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fa fa-twitter-square" /> Twitter
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fa fa-linkedin-square" /> Linkedin
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fa fa-google-plus-square" /> Google Plus
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}

import React from 'react';
import { Grid, Menu } from 'semantic-ui-react';
import PostCard from './PostCard';
import BookCard from './BookCard';

const Home = props => {
  return (
    <div className="container">
      <div className="col-lg-10 col-lg-offset-1">
        <h4 style={{ paddingTop: `14px` }}>
          <b> Chi nhánh Quận 01</b>
        </h4>
        <hr />
        <div className="row">
          <div className="col-lg-5" style={{ height: `315px` }}>
            <img
              src="http://vivuhanoi.com/wp-content/uploads/2015/11/Hieu-sach.jpg"
              className="img-responsive img-agency"
              style={{ maxHeight: `315px` }}
              alt="img"
            />
            <div className="agency-info" style={{ marginTop: `10px` }}>
              <p>
                <i className="fa fa-map-marker" /> Địa chỉ: 20 Lê Thánh Tôn, P.
                Bến Nghé, Q. 1
              </p>
              <p>Giờ mở cửa: 9h:30 - 21h:00 </p>
            </div>
          </div>
          <div className="col-lg-7">
            <form>
              <div className="panel panel-order">
                <div className="panel-heading text-center">
                  <h4>Sách cùng Cà phê? Hãy đến với HCMUSach</h4>
                </div>
                <ul className="list-group text-center">
                  <li className="list-group-item">
                    <div className="input-group col-md-4 col-md-offset-2 pull-left">
                      <span className="input-group-addon">
                        <i className="fa fa-clock-o fa-lg" />
                      </span>
                      <select
                        id="timeOrder"
                        name="timeOrder"
                        className="form-control"
                        style={{
                          borderBottomRightRadius: `0px`,
                          borderTopRightRadius: `0px`,
                        }}
                      >
                        <option value="9:30">9:30</option>
                        <option value="10:00">10:00</option>
                        <option value="10:30">10:30</option>
                        <option value="11:00">11:00</option>
                        <option value="11:30">11:30</option>
                        <option value="12:00">12:00</option>
                        <option value="12:30">12:30</option>
                        <option value="13:00">13:00</option>
                        <option value="13:30">13:30</option>
                        <option value="14:00">14:00</option>
                        <option value="14:30">14:30</option>
                        <option value="15:00">15:00</option>
                        <option value="15:30">15:30</option>
                        <option value="16:00">16:00</option>
                        <option value="16:30">16:30</option>
                        <option value="17:00">17:00</option>
                        <option value="17:30">17:30</option>
                        <option value="18:00">18:00</option>
                        <option value="18:30">18:30</option>
                        <option value="19:00">19:00</option>
                        <option value="19:30">19:30</option>
                        <option value="20:00">20:00</option>
                        <option value="20:30">20:30</option>
                      </select>
                    </div>
                    <div className="input-group col-md-4">
                      <span
                        className="input-group-addon"
                        style={{
                          borderTopLeftRadius: `0px`,
                          borderBottomLeftRadius: `0px`,
                        }}
                      >
                        <i className="fa fa-users fa-lg" />
                      </span>
                      <select
                        id="amount"
                        name="amount"
                        className="form-control"
                      >
                        <option value="1">1 người</option>
                        <option value="2">2 người</option>
                        <option value="3">3 người</option>
                        <option value="4">4 người</option>
                        <option value="5">5 người</option>
                        <option value="6">6 người</option>
                        <option value="7">7 người</option>
                        <option value="8">8 người</option>
                      </select>
                    </div>
                  </li>
                  <li className="list-group-item">
                    <div className="input-group col-md-8 col-md-offset-2">
                      <span className="input-group-addon">Số điện thoại</span>
                      <input
                        id="phoneNumber"
                        name="phoneNumber"
                        type="text"
                        className="form-control"
                      />
                    </div>
                  </li>
                  <li className="list-group-item">
                    <i className="fa fa-phone fa-lg" />
                    Hot line hỗ trợ:
                    <em style={{ color: `red` }}>0908xxxxxx</em>
                  </li>
                  <button
                    type="submit"
                    className="btn btn-lg btn-block btn-success"
                    href="#"
                  >
                    Đặt chỗ
                  </button>
                </ul>
              </div>
            </form>
          </div>
        </div>
        <Menu pointing secondary>
          <Menu.Item
            content="Sách mới"
            name="book"
            active={props.activeItem === 'book'}
            onClick={props.handleItemClick}
          />
          <Menu.Item
            content="Mua/bán sách cũ"
            name="post"
            active={props.activeItem === 'post'}
            onClick={props.handleItemClick}
          />
        </Menu>
        {props.currentMenu === 'post' ? null : (
          // (
          //   <Grid columns="4" style={{ marginLeft: `4px` }}>
          //     {props.homePost.posts.map(row => (
          //       <Grid.Row key={Math.random()}>
          //         {row.map(post => (
          //           <Grid.Column key={Math.random()}>
          //             <PostCard post={post} />
          //           </Grid.Column>
          //         ))}
          //       </Grid.Row>
          //     ))}
          //   </Grid>
          // )
          <Grid columns="4" style={{ marginLeft: `4px` }}>
            {props.homeBook.books.map(row => (
              <Grid.Row key={Math.random()}>
                {row.map(book => (
                  <Grid.Column key={Math.random()}>
                    <BookCard book={book} />
                  </Grid.Column>
                ))}
              </Grid.Row>
            ))}
          </Grid>
        )}
      </div>
    </div>
  );
};

export default Home;

import React from 'react';
import ReactHtmlParser from 'react-html-parser';
import { Segment } from 'semantic-ui-react';

const Detail = props => {
  const { post } = props.detailPost;
  return (
    <div className="container">
      <div className="col-lg-10 col-lg-offset-1">
        <div className="row food-info">
          <div className="food-head">
            <div className="col-lg-6" style={{ paddingTop: `32px` }}>
              <Segment>
                <img
                  src={post.image}
                  className="img-responsive center-block wine-img-style"
                  style={{ maxHeight: `400px`, margin: `0 auto` }}
                  alt="poster"
                />
              </Segment>
            </div>
            <div className="col-lg-6">
              <h2 style={{ textAlign: `center` }}>{post.title}</h2>
              <p>
                <strong>
                  <i className="fa fa-gratipay" aria-hidden="true" /> Tên sách
                </strong>: {post.name}
              </p>
              <p>
                <strong>
                  <i className="fa fa-leaf" aria-hidden="true" /> Giới thiệu
                </strong>: {ReactHtmlParser(post.description)}
              </p>
              <p>
                <strong>
                  <i className="fa fa-dollar" aria-hidden="true" /> Giá bán
                </strong>: {post.price} VNĐ
              </p>
              <p>
                <strong>
                  <i className="fa fa-tags" aria-hidden="true" /> Tình trạng
                </strong>: {post.cond}/10
              </p>
              <p>
                <strong>
                  <i className="fa fa-eye" aria-hidden="true" /> Lượt xem
                </strong>: 5.000 lượt
              </p>
              <p>
                <strong>
                  <i className="fa fa-shopping-cart" aria-hidden="true" /> Lượt
                  mua
                </strong>: 120 lượt
              </p>
              <p>
                <strong>
                  <i className="fa fa-phone" aria-hidden="true" /> Liên hệ
                </strong>: {post.contact}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Detail;

import React from 'react';
import { Link } from 'react-router-dom';

const Detail = props => {
  const { post } = props.detailPost;
  return (
    <div className="container">
      <div className="col-lg-10 col-lg-offset-1">
        <div className="row food-info">
          <div className="food-head">
            <div className="col-lg-6" style={{ paddingTop: `32px` }}>
              <img
                src={post.image}
                className="img-responsive center-block wine-img-style"
                style={{ maxHeight: `400px`, margin: `0 auto` }}
                alt="poster"
              />
            </div>
            <div className="col-lg-6">
              <h3 style={{ textAlign: `center` }}>{post.name}</h3>
              <p>
                <strong>
                  <i className="fa fa-leaf" aria-hidden="true" /> Mô tả
                </strong>: {post.description}
              </p>
              <p>
                <strong>
                  <i className="fa fa-dollar" aria-hidden="true" /> Giá bán
                </strong>: {post.price}
              </p>
              {/* <p>
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
                  <i className="fa fa-shopping-map" aria-hidden="true" /> Xuất
                  xứ
                </strong>: Scotland
              </p>
              <p>
                <strong>
                  <i className="fa fa-shopping-tag" aria-hidden="true" /> Loại
                  rượu
                </strong>: Brandy
              </p>
              <p>
                <strong>
                  <i className="fa fa-shopping-diamond" aria-hidden="true" />{' '}
                  Nhà sản xuất
                </strong>: Chivas
              </p> */}
              <div
                className="text-center"
                style={{ marginTop: `32px`, marginBottom: `32px` }}
              >
                <button className="btn btn-success btn-lg">Đặt hàng</button>
                <a href="cart.html" className="btn btn-info btn-lg">
                  Xem giỏ hàng
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Detail;

import React from 'react';
import { Segment } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

const Detail = props => {
  const { book } = props.bookDetail;
  return (
    <div className="container">
      <div className="col-lg-10 col-lg-offset-1">
        <div className="row food-info">
          <div className="food-head">
            <div className="col-lg-6" style={{ paddingTop: `32px` }}>
              <Segment>
                <img
                  src={book.bookImage}
                  className="img-responsive center-block wine-img-style"
                  style={{ maxHeight: `400px`, margin: `0 auto` }}
                  alt="poster"
                />
              </Segment>
            </div>
            <div className="col-lg-6">
              <h2 style={{ textAlign: `center` }}>{book.bookName}</h2>
              <p>
                <strong>
                  <i className="fa fa-leaf" aria-hidden="true" /> Giới thiệu
                </strong>: {book.bookDescription}
              </p>
              <p>
                <strong>
                  <i className="fa fa-dollar" aria-hidden="true" /> Giá bán
                </strong>: {book.bookPrice} VNĐ
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
              <div
                className="text-center"
                style={{ marginTop: `32px`, marginBottom: `32px` }}
              >
                <button
                  className="btn btn-success btn-lg"
                  onClick={() => props.handleAddToCart(book)}
                >
                  Thêm vào giỏ hàng
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Detail;

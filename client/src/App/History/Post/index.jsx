import React from 'react';
import { Button } from 'semantic-ui-react';

import PostDetail from '../../PostDetail';

const Post = props => {
  const { posts } = props.userManagement;
  return (
    <div>
      <h4 style={{ paddingTop: `14px` }}>
        <b>Lịch sử bài đăng </b>
      </h4>
      <table className="table table-hover table-bordered">
        <thead>
          <tr>
            <th className="col-lg-3 text-center">Mã bài đăng</th>
            <th className="col-lg-3 text-center">Tiêu đề</th>
            <th className="col-lg-3 text-center">Tình trạng</th>
            <th className="col-lg-3 text-center"> </th>
          </tr>
        </thead>
        <tbody>
          {posts.map(post => {
            return (
              <tr key={Math.random()}>
                <td className="text-center">
                  <h4>{post.id}</h4>
                </td>
                <td className="text-center">
                  <h4>{post.title}</h4>
                </td>
                <td className="text-center">
                  <h4
                    className={
                      post.status === 'PENDING' ? 'text-danger' : 'text-success'
                    }
                  >
                    {post.status === 'PENDING' ? 'Chưa duyệt' : 'Đã duyệt'}
                  </h4>
                </td>
                <td className="text-center">
                  <button
                    onClick={() => props.handleShowDetail(post.id)}
                    className="btn btn-info"
                  >
                    Chi tiết
                  </button>
                </td>
                {props.isShowDetail === post.id && (
                  <div className="mainModal">
                    <div className="contentModal">
                      <PostDetail id={post.id} />
                      <div className="btnCancel">
                        <Button
                          className="btn btn-info"
                          onClick={() => props.handleShowDetail(-1)}
                        >
                          Hủy
                        </Button>
                      </div>
                    </div>
                  </div>
                )}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Post;

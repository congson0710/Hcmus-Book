import React from 'react';
import { Card, Image, Icon } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

const PostCard = props => {
  const { post } = props;
  return (
    <Link to={`/post-detail/${post.id}`}>
      <Card>
        <Image src={post.image} style={{ height: `180px` }} />
        <Card.Content>
          <Card.Header className="card-header">{post.title}</Card.Header>
          <Card.Meta>Tên sách: {post.name}</Card.Meta>
        </Card.Content>
        <Card.Content extra>
          <Icon name="tags" />
          Giá: {post.price} VNĐ
        </Card.Content>
      </Card>
    </Link>
  );
};

export default PostCard;

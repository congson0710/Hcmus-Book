import React from 'react';
import { Card, Image, Icon } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

const BookCard = props => {
  const { book } = props;
  return (
    <Link to={`/book-detail/${book.bookID}`}>
      <Card>
        <Image src={book.bookImage} style={{ height: `240px` }} />
        <Card.Content>
          <Card.Header className="card-header">{book.bookName}</Card.Header>
          <Card.Description>{book.bookDescription}</Card.Description>
        </Card.Content>
        <Card.Content extra>
          <Icon name="tags" />
          Giá: {book.bookPrice} VNĐ
        </Card.Content>
      </Card>
    </Link>
  );
};

export default BookCard;

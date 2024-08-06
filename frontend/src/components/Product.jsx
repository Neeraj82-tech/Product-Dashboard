import React from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Product = ({ product, index }) => {
  return (
    <Card className='my-3 p-3 rounded'>
      <Card.Body>
        <Link to={`/product/${index}`}>
          <Card.Title as='div' className='product-title'>
            <strong>{product.title}</strong>
          </Card.Title>
        </Link>
        <Card.Text as='h3'>Popularity: {product.popularity}</Card.Text>
        <Card.Text as='h3'>Price: ₹{product.price}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default Product;

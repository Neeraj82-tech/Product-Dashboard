import React from 'react';
import { Form } from 'react-bootstrap';

const Sort = ({ sortOrder, setSortOrder }) => {
  return (
    <div>
      <Form.Group controlId="sortOptions">
        <Form.Label>Sort by</Form.Label>
        <Form.Control
          as="select"
          value={sortOrder}
          onChange={(e) => setSortOrder(e.target.value)}
        >
          <option value="priceAsc">Price: Low to High</option>
          <option value="priceDesc">Price: High to Low</option>
          <option value="popularityAsc">Popularity: Low to High</option>
          <option value="popularityDesc">Popularity: High to Low</option>
        </Form.Control>
      </Form.Group>
    </div>
  );
};

export default Sort;

import React from 'react';
import { Form } from 'react-bootstrap';

const Filter = ({ searchTerm, setSearch, priceRange, setPriceRange, popularityRange, setPopularityRange }) => {
  return (
    <div>
      <Form.Control
        type="text"
        placeholder="Search by title"
        value={searchTerm}
        onChange={(e) => setSearch(e.target.value)}
        className="mb-3"
      />
      <Form.Group controlId="priceFilter" className="mb-3">
        <Form.Label>Filter by Price</Form.Label>
        <Form.Control
          as="select"
          value={priceRange}
          onChange={(e) => setPriceRange(e.target.value)}
        >
          <option value="all">All</option>
          <option value="0-5000">0-5000</option>
          <option value="5000-10000">5000-10000</option>
          <option value="10000-20000">10000-20000</option>
          <option value="20000+">20000+</option>
        </Form.Control>
      </Form.Group>
      <Form.Group controlId="popularityFilter" className="mb-3">
        <Form.Label>Filter by Popularity</Form.Label>
        <Form.Control
          as="select"
          value={popularityRange}
          onChange={(e) => setPopularityRange(e.target.value)}
        >
          <option value="all">All</option>
          <option value="0-10000">0-10000</option>
          <option value="10000-30000">10000-30000</option>
          <option value="30000-50000">30000-50000</option>
          <option value="50000+">50000+</option>
        </Form.Control>
      </Form.Group>
    </div>
  );
};

export default Filter;

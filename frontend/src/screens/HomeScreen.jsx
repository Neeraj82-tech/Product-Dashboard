import React, { useState } from 'react';
import { Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import productsData from '../products.json';
import Filter from '../components/Filter';
import Sort from '../components/Sort';
import Pagination from '../components/Pagination';

const HomeScreen = () => {
  const [search, setSearch] = useState('');
  const [priceRange, setPriceRange] = useState('all');
  const [popularityRange, setPopularityRange] = useState('all');
  const [sortOrder, setSortOrder] = useState('priceAsc');
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 20;

  

  const products = Object.values(productsData.products);

  let filteredProducts = products
    .filter(product =>
      product.title.toLowerCase().includes(search.toLowerCase())
    )
    .filter(product => {
      const price = parseInt(product.price, 10);
      switch (priceRange) {
        case '0-5000':
          return price >= 0 && price <= 5000;
        case '5000-10000':
          return price > 5000 && price <= 10000;
        case '10000-20000':
          return price > 10000 && price <= 20000;
        case '20000+':
          return price > 20000;
        default:
          return true;
      }
    })
    .filter(product => {
      const popularity = parseInt(product.popularity, 10);
      switch (popularityRange) {
        case '0-10000':
          return popularity >= 0 && popularity <= 10000;
        case '10000-30000':
          return popularity > 10000 && popularity <= 30000;
        case '30000-50000':
          return popularity > 30000 && popularity <= 50000;
        case '50000+':
          return popularity > 50000;
        default:
          return true;
      }
    });

  switch (sortOrder) {
    case 'priceAsc':
      filteredProducts.sort((a, b) => parseInt(a.price) - parseInt(b.price));
      break;
    case 'priceDesc':
      filteredProducts.sort((a, b) => parseInt(b.price) - parseInt(a.price));
      break;
    case 'popularityAsc':
      filteredProducts.sort((a, b) => parseInt(a.popularity) - parseInt(b.popularity));
      break;
    case 'popularityDesc':
      filteredProducts.sort((a, b) => parseInt(b.popularity) - parseInt(a.popularity));
      break;
    default:
      break;
  }

  const totalProducts = filteredProducts.length;
  const totalPages = Math.ceil(totalProducts / productsPerPage);
  const startIndex = (currentPage - 1) * productsPerPage;
  const paginatedProducts = filteredProducts.slice(startIndex, startIndex + productsPerPage);

  return (
    <div>
      <h1>Product List</h1>
      <Filter
        search={search}
        setSearch={setSearch}
        priceRange={priceRange}
        setPriceRange={setPriceRange}
        popularityRange={popularityRange}
        setPopularityRange={setPopularityRange}
      />
      <Sort sortOrder={sortOrder} setSortOrder={setSortOrder} />
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Title</th>
            <th>Price</th>
            <th>Popularity</th>
          </tr>
        </thead>
        <tbody>
          {paginatedProducts.length > 0 ? (
            paginatedProducts.map((product, index) => (
              <tr key={index}>
                <td>
                  <Link to={`/product/${startIndex + index}`}>
                    {product.title}
                  </Link>
                </td>
                <td>₹{product.price}</td>
                <td>{product.popularity}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="3" className="text-center">No products found</td>
            </tr>
          )}
        </tbody>
      </Table>
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={setCurrentPage}
      />
    </div>
  );
};

export default HomeScreen;

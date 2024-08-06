import React from 'react';
import { Pagination as BootstrapPagination } from 'react-bootstrap';
import './Pagination.css'; 


const Pagination = ({ currentPage, totalPages, onPageChange }) => {
    const handlePageChange = (pageNumber) => {
      if (pageNumber >= 1 && pageNumber <= totalPages) {
        onPageChange(pageNumber);
      }
    };
  
    return (
      <div className="pagination-container">
        <BootstrapPagination>
          <BootstrapPagination.Prev
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
          />
          {[...Array(totalPages)].map((_, index) => (
            <BootstrapPagination.Item
              key={index}
              active={index + 1 === currentPage}
              onClick={() => handlePageChange(index + 1)}
            >
              {index + 1}
            </BootstrapPagination.Item>
          ))}
          <BootstrapPagination.Next
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
          />
        </BootstrapPagination>
      </div>
    );
  };
  
  export default Pagination;
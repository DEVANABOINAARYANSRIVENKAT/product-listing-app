// src/components/Filter.js

import React from 'react';

const Filter = ({ handleFilter }) => {
  return (
    <div className="filter-container">
      <label htmlFor="category"><b>Filter by Category:</b></label>
      <select id="category" onChange={(e) => handleFilter(e.target.value)}>
        <option value="all">All</option>
        <option value="Category A">Category A</option>
        <option value="Category B">Category B</option>
        <option value="Category C">Category C</option>
      </select>
    </div>
  );
};

export default Filter;

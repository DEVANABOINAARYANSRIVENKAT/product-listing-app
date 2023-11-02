// src/components/Sort.js

import React from 'react';

const Sort = ({ handleSort }) => {
  return (
    <div className="sort-container">
      <label htmlFor="sort"><b>Sort by Price:</b></label>
      <select id="sort" onChange={(e) => handleSort(e.target.value)}>
        <option value="asc">Low to High</option>
        <option value="desc">High to Low</option>
      </select>
    </div>
  );
};

export default Sort;

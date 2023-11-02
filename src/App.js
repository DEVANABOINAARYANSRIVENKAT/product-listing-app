// src/App.js

import React, { useState } from 'react';
import ProductList from './components/ProductList';
import Filter from './components/Filter';
import Sort from './components/Sort';
import { products } from './data/products';
import './App.css';

const App = () => {
  const [filteredCategory, setFilteredCategory] = useState('all');
  const [sortOrder, setSortOrder] = useState('asc');

  const handleFilter = (category) => {
    setFilteredCategory(category);
  };

  const handleSort = (order) => {
    setSortOrder(order);
  };

  const filteredProducts = products.filter((product) =>
    filteredCategory === 'all' ? true : product.category === filteredCategory
  );

  const sortedProducts = [...filteredProducts].sort((a, b) =>
    sortOrder === 'asc' ? a.price - b.price : b.price - a.price
  );

  return (
    <div>
      <h1 className="app-heading">Product Listing App</h1>
      <Filter handleFilter={handleFilter} />
      <Sort handleSort={handleSort} />
      <ProductList products={sortedProducts} />
    </div>
  );
};

export default App;

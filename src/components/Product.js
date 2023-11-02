// src/components/Product.js

import React from 'react';
import styled from 'styled-components';

const ProductContainer = styled.div`
  border: 1px solid #ccc;
  padding: 10px;
  margin: 10px;
`;

const ProductImage = styled.img`
  max-width: 100%;
`;

const Product = ({ product }) => {
  const { title, description, price, image } = product;
  
  return (
    <ProductContainer>
      <ProductImage src={require(`../images/${image}`).default} alt={title} />

      <h2>{title}</h2>
      <p>{description}</p>
      <p>Price: ${price}</p>
    </ProductContainer>
  );
};

export default Product;

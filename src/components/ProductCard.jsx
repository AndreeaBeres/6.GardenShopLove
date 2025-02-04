// ProductCard.js

import React from 'react';

const ProductCard = ({ productName, price, image, addToCart }) => {
  return (
    <div className="product">
      <img src={image} alt={productName} />
      <h3>{productName}</h3>
      <p>${price}</p>
      <button onClick={() => addToCart(productName, price)}>Add to Cart</button>
    </div>
  );
};

export default ProductCard;


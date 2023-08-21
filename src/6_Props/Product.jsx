import React from "react";

export default function Product({ product, onGetProduct }) {
  return (
    <div>
      <h1>Name:{product.name}</h1>
      <h3>Price:{product.price}</h3>
      <button onClick={() => onGetProduct(product)}>Details</button>
    </div>
  );
}

import React from "react";

export default function ProductItem({ product, onGetProduct, onAddToCart }) {
  return (
    <div className="card">
      <img
        width="100%"
        height="350px"
        className="card-img"
        src={product.img}
        alt={product.name}
      />
      <div className="card-body">
        <h3 className="card-title">{product.name}</h3>
        <button
          className="btn btn-warning"
          onClick={() => onGetProduct(product)}
        >
          Xem chi tiết
        </button>
        <button
          className="btn btn-success"
          onClick={() => onAddToCart(product)}
        >
          Thêm giỏ hàng
        </button>
      </div>
    </div>
  );
}

import React, { useState } from "react";
import ProductList from "./ProductList";
import ProductDetails from "./ProductDetails";
import Cart from "./Cart";
import data from "./data.json";

export default function Shopping() {
  //quản lí giá trị sản phẩm đang được chọn để xem chi tiết
  const [selectdProduct, setSelectedProduct] = useState(null);
  //state quanr lí trạng thái ẩn hiện của modal giỏ hàng
  const [isOpen, setIsOpen] = useState(false);
  //state quản lí sản phẩm trong giỏ hàng
  const [carts, setCarts] = useState([]);
  // totalProduct không cần tạo state,vì giá trị của nó được tính toán dựa trên giá trị của state carts
  const totalProduct = carts.reduce((result, item) => {
    return result + item.quantity;
  }, 0);

  const handleGetProduct = (product) => {
    setSelectedProduct(product);
  };

  const handleCloseCart = () => {
    setIsOpen(false);
  };

  const handleAddToCart = (product) => {
    //kiểm tra sản phẩm đã tồn tại trong giỏ hàng hay chưa
    const found = carts.find((item) => item.id === product.id);
    if (found) {
      //sản phẩm đa tồn tại trong giỏ
      const newCarts = carts.map((item) => {
        if (item.id === product.id) {
          return { ...item, quantity: item.quantity + 1 };
        }
        return item;
      });
      setCarts(newCarts);
    } else {
      //sản phẩm chưa tồn tại trong giỏ hàng
      const productWithQuantity = { ...product, quantity: 1 };
      setCarts([...carts, productWithQuantity]);
    }
  };

  const handleDeleteCart = (productId) => {
    const updatedCarts = carts.filter((item) => item.id !== productId);
    setCarts(updatedCarts);
  };

  const handleIncrease = (productId) => {
    const updatedCarts = carts.map((item) =>
      item.id === productId ? { ...item, quantity: item.quantity + 1 } : item
    );
    setCarts(updatedCarts);
  };

  const handleDecrease = (productId) => {
    const updatedCarts = carts.map((item) =>
      item.id === productId ? { ...item, quantity: item.quantity - 1 } : item
    );

    // Remove the item from the cart if its quantity becomes 0
    const filterCarts = updatedCarts.filter((item) => item.quantity > 0);

    setCarts(filterCarts);
  };

  return (
    <div className="container">
      <h1 className="text-center text-primary"> Phone Shop</h1>
      <div className="d-flex justify-content-end">
        <button className="btn btn-danger" onClick={() => setIsOpen(true)}>
          Giỏ hàng({totalProduct})
        </button>
      </div>

      <ProductList
        products={data}
        onGetProduct={handleGetProduct}
        onAddToCart={handleAddToCart}
      />
      <ProductDetails product={selectdProduct} />

      {isOpen && (
        <Cart
          carts={carts}
          onCloseCart={handleCloseCart}
          onDeleteCart={handleDeleteCart}
          onIncrease={handleIncrease}
          onDecrease={handleDecrease}
        />
      )}
    </div>
  );
}

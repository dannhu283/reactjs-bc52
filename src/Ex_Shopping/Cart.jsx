import React from "react";

export default function Cart({
  carts,
  onCloseCart,
  onDeleteCart,
  onIncrease,
  onDecrease,
}) {
  return (
    <>
      <div style={{ display: "block" }} className="modal show" tabIndex={-1}>
        <div className="modal-dialog modal-lg">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Giỏ hàng</h5>
              <button
                type="button"
                className="btn-close"
                aria-label="Close"
                onClick={onCloseCart}
              />
            </div>
            <div className="modal-body">
              <table className="table">
                <thead>
                  <tr>
                    <th>Mã sản phẩm</th>
                    <th>Tên sản phẩm</th>
                    <th>Hình ảnh</th>
                    <th>Số lượng</th>
                    <th>Đơn Giá</th>
                    <th> Thành tiền</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  {carts.map((item) => {
                    return (
                      <tr key={item.id}>
                        <td>{item.id}</td>
                        <td>{item.name}</td>
                        <td>
                          <img
                            width="70px"
                            height="70px"
                            src={item.img}
                            alt={item.name}
                          />
                        </td>
                        <td>
                          <button
                            onClick={() => {
                              onDecrease(item.id);
                            }}
                          >
                            -
                          </button>
                          {item.quantity}
                          <button
                            onClick={() => {
                              onIncrease(item.id);
                            }}
                          >
                            +
                          </button>
                        </td>
                        <td>{item.price}</td>
                        <td>{item.price * item.quantity}</td>
                        <td>
                          <button
                            onClick={() => onDeleteCart(item.id)}
                            className="btn btn-danger"
                          >
                            Xóa
                          </button>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                onClick={onCloseCart}
              >
                Đóng
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="modal-backdrop fade show"></div>
    </>
  );
}

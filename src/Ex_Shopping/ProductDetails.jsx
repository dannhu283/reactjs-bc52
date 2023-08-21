import React from "react";

export default function ProductDetails({ product }) {
  if (!product) {
    return null;
  }

  return (
    <div className="row mt-5">
      <div className="col-md-3">
        <h3 className="text-center">{product.name}</h3>
        <img src={product.img} alt={product.name} width="100%" height="350px" />
      </div>

      <div className="col-md-9">
        <h3>Thông số kỹ thuật</h3>
        <table className="table">
          <tbody>
            <tr>
              <td>Màn hình</td>
              <td>{product.display}</td>
            </tr>
            <tr>
              <td>Hệ điều hành</td>
              <td>{product.os}</td>
            </tr>
            <tr>
              <td>Camera</td>
              <td>{product.camera}</td>
            </tr>
            <tr>
              <td>RAM</td>
              <td>{product.ram}</td>
            </tr>
            <tr>
              <td>ROM</td>
              <td>{product.rom}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

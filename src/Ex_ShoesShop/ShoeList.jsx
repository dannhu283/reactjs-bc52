import React from "react";
import ShoeItem from "./ShoeItem";

export default function ShoeList({ products }) {
  return (
    <div className="row">
      {products.map((product) => {
        return (
          <div key={product.id} className="col-md-4">
            <ShoeItem product={product} />
          </div>
        );
      })}
    </div>
  );
}

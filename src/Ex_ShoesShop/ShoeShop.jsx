import React from "react";
import ShoeList from "./ShoeList";
import data from "./data.json";

export default function ShoeShop() {
  return (
    <div className="container">
      <h1 className="text-center tex-primary"> ShoeShop</h1>
      <ShoeList products={data} />
    </div>
  );
}

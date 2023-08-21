import React from "react";

export default function RenderList() {
  const animals = ["Dog", "Cat", "Duck", "Pig"];

  const list = animals.map((item, index) => {
    return <li key={index}>{item}</li>;
  });

  const products = [
    { id: 1, name: "iphone 13", price: "30000000" },
    { id: 2, name: "samsung s22", price: "25000000" },
    { id: 3, name: "Oppo x5", price: "15000000" },
  ];

  return (
    <div>
      <h1> RenderList</h1>
      <ul> {list} </ul>
      <table className="table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => {
            return (
              <tr key={product.id}>
                <td>{product.name}</td>
                <td>{product.price}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

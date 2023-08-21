import React from "react";
import UserProfile from "./UserProfile";
import Product from "./Product";
import Card from "./Card";

export default function Props() {
  const product = {
    id: 1,
    name: "Iphone 13 Promax",
    price: 30000000,
  };

  const handleGetProduct = (product) => {
    alert(product.name);
  };
  return (
    <div>
      <h1> Props</h1>
      <UserProfile name="Alice" age={18} isAdmin />
      <UserProfile name="John" age={20} isAdmin={false} />
      <UserProfile />
      <hr />
      <Product product={product} onGetProduct={handleGetProduct} />
      <hr />
      <Card heading="Greeting">
        <h1>Hello BC52</h1>
      </Card>
      <Card heading="User Profile">
        <UserProfile name="tí" age={25} isAdmin />
      </Card>
    </div>
  );
}

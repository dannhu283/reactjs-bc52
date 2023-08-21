import React, { useState } from "react";
import Icon from "./Icon";

export default function StateCar() {
  const [color, setColor] = useState("black");

  const handleChangeCar = (type) => {
    setColor(type);
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-8">
          <img width="100%" src={`/img/${color}-car.jpg`} alt="#" />
        </div>
        <div className="col-md-4">
          <div className="card">
            <div className="card-header">colors</div>
            <div className="card-body">
              <Icon onChangeCar={handleChangeCar} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

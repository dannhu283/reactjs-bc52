import React from "react";

const icons = [
  {
    type: "black",
    name: "Crystal Black",
    des: "Pearl",
    url: "/img/icon-black.jpg",
  },
  {
    type: "red",
    name: "Ralley Red",
    des: "Metalic",
    url: "/img/icon-red.jpg",
  },
  {
    type: "silver",
    name: "Lunar Silver",
    des: "Metalic",
    url: "/img/icon-silver.jpg",
  },
  {
    type: "steel",
    name: "Modern Steel",
    des: "Metalic",
    url: "/img/icon-steel.jpg",
  },
];

export default function Icon({ onChangeCar }) {
  return icons.map((icon) => {
    return (
      <div className="card" onClick={() => onChangeCar(icon.type)}>
        <div className="card-body d-flex">
          <img width="80px" src={icon.url} alt={icon.type} />
          <div className="ms-3">
            <h3>{icon.name}</h3>
            <p>{icon.des}</p>
          </div>
        </div>
      </div>
    );
  });
}

import React from "react";
import { useSelector } from "react-redux";
import SeatList from "./SeatList";
import Tickets from "./Tickets";
import data from "./data.json";

export default function BookTicket() {
  const { totalPrice } = useSelector((state) => {
    return state.busTicket;
  });

  const handleBook = () => {
    alert(`Total price:$${totalPrice}`);
  };
  return (
    <div className="container">
      <h1 className="text-center text-primary">CyberBus</h1>

      <div className="row mb-3">
        <div className="col-md-6 border ">
          {/* truyền props  */}
          <SeatList seats={data} />
        </div>
        <div className="col-md-6">
          <Tickets />
        </div>
      </div>

      <div className="text-center">
        <button onClick={handleBook} className="btn btn-primary">
          Đặt vé
        </button>
      </div>
    </div>
  );
}

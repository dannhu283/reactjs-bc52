import React from "react";
import SeatList from "./SeatList";
import SeatItem from "./SeatItem";
import Tickets from "./Tickets";
import data from "./data.json";

export default function BookTicket() {
  return (
    <div className="container">
      <h1 className="text-center text-primary">CyberBus</h1>

      <div className="row">
        <div className="col-md-6">
          <SeatList />
        </div>
        <div className="col-md-6">
          <Tickets />
        </div>
      </div>
    </div>
  );
}

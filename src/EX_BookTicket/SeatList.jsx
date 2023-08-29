import React from "react";
import { useSelector } from "react-redux";
import SeatItem from "./SeatItem";

export default function SeatList({ seats }) {
  const { selectedSeats } = useSelector((state) => {
    return state.busTicket;
  });
  return (
    <div className="row">
      <div className="col-md-12 text-center bg-warning">Tài xế</div>
      {seats.map((seat) => {
        //tifm ghế hiện tại có đang trong ds ghế đang chọn hay không
        const isSelected = selectedSeats.find((item) => item.id === seat.id);

        return (
          <div className="col-md-3" key={seat.id}>
            <SeatItem seat={seat} isSelected={!!isSelected} />
          </div>
        );
      })}
    </div>
  );
}

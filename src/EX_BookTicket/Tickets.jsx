import React from "react";
import { useSelector, useDispatch } from "react-redux";
// import { removeSeat } from "../redux/actions/busTicketAction";
import { removeSeat } from "../redux/slices/busTicketSlice";
export default function Tickets() {
  const { selectedSeats } = useSelector((state) => {
    return state.busTicket;
  });

  const dispatch = useDispatch();

  const handleRemove = (seatId) => {
    dispatch(removeSeat(seatId));
  };

  return (
    <div>
      <h4 className="text-center">Danh sách vé đang chọn</h4>
      {selectedSeats.map((item) => {
        return (
          <div className="mb-2 text-center">
            <span className="me-3">
              {item.name} - ${item.price}
            </span>
            <button
              onClick={() => handleRemove(item.id)}
              className="btn btn-danger"
            >
              X
            </button>
          </div>
        );
      })}
    </div>
  );
}

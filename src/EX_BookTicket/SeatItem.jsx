import React from "react";
import { useDispatch } from "react-redux";
import { selectSeat } from "../redux/actions/busTicketAction";

export default function SeatItem({ seat, isSelected }) {
  const dispatch = useDispatch();

  let classes = "btn m-2 w-100";
  if (seat.isBooked) {
    classes += " btn-danger";
  } else if (isSelected) {
    classes += " btn-success";
  } else {
    classes += " btn-secondary";
  }

  const handleSelect = () => {
    // dispatch({
    //   type: "selectSeat",
    //   payload: { ...seat, isSelected: !isSelected },
    // });

    //c2
    dispatch(selectSeat({ ...seat, isSelected: !isSelected }));
  };

  return (
    <button onClick={handleSelect} className={classes} disabled={seat.isBooked}>
      {seat.name}
    </button>
  );
}

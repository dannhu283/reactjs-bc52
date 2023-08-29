//action creator
//sử dụng selectSeat({...})
import { SELECT_SEAT, REMOVE_SEAT } from "../constants/busTicketConstants";
export const selectSeat = (seat) => {
  return {
    type: SELECT_SEAT,
    payload: seat,
  };
};

export const removeSeat = (seatId) => {
  return {
    type: REMOVE_SEAT,
    payload: seatId,
  };
};

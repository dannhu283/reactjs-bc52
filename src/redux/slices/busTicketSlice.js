import { createSlice } from "@reduxjs/toolkit";

const busTicketSlice = createSlice({
  name: "busTicket",
  initialState: {
    selectedSeats: [],
    totalPrice: 0,
  },
  reducers: {
    selectSeat: (state, action) => {
      const { isSelected, ...seat } = action.payload;
      if (isSelected) {
        const selectedSeats = [...state.selectedSeats, seat];
        const totalPrice = state.totalPrice + seat.price;
        return { ...state, selectedSeats, totalPrice };
      }
      const selectedSeats = state.selectedSeats.filter(
        (item) => item.id !== seat.id
      );
      const totalPrice = state.totalPrice - seat.price;
      return { ...state, selectedSeats, totalPrice };
    },
    removeSeat: (state, action) => {
      const selectedSeats = state.selectedSeats.filter(
        (item) => item.id !== action.payload
      );
      const totalPrice = selectedSeats.reduce(
        (result, item) => result + item.price,
        0
      );
      return { ...state, selectedSeats, totalPrice };
    },
  },
});

export const { selectSeat, removeSeat } = busTicketSlice.actions;

export default busTicketSlice.reducer;

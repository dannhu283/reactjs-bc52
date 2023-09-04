import { createSlice } from "@reduxjs/toolkit";

const busTicketSlice = createSlice({
  name: "busTicket",
  initialState: {
    selectedSeats: [],
    totalPrice: 0,
  },
  reducers: {
    selectSeat: (state, action) => {
      //c1:immutable
      //   const { isSelected, ...seat } = action.payload;
      //   if (isSelected) {
      //     const selectedSeats = [...state.selectedSeats, seat];
      //     const totalPrice = state.totalPrice + seat.price;
      //     return { ...state, selectedSeats, totalPrice };
      //   }
      //   const selectedSeats = state.selectedSeats.filter(
      //     (item) => item.id !== seat.id
      //   );
      //   const totalPrice = state.totalPrice - seat.price;
      //   return { ...state, selectedSeats, totalPrice };
      //c2:mutable
      const { isSelected, ...seat } = action.payload;

      if (isSelected) {
        state.selectedSeats.push(seat);
        state.totalPrice += seat.price;
      } else {
        const index = state.selectedSeats.findIndex(
          (item) => item.id === seat.id
        );
        state.selectedSeats.splice(index, 1);
        state.totalPrice -= seat.price;
      }
    },
    removeSeat: (state, action) => {
      //   //C1:immutable
      //   const selectedSeats = state.selectedSeats.filter(
      //     (item) => item.id !== action.payload
      //   );
      //   const totalPrice = selectedSeats.reduce(
      //     (result, item) => result + item.price,
      //     0
      //   );
      //   return { ...state, selectedSeats, totalPrice };
      //c2:mutable
      const seatId = action.payload;
      const index = state.selectedSeats.findIndex((item) => item.id === seatId);
      state.selectedSeats.splice(index, 1);
      state.totalPrice = state.selectedSeats.reduce(
        (result, item) => result + item.price,
        0
      );
    },
  },
});

export const { selectSeat, removeSeat } = busTicketSlice.actions;

export default busTicketSlice.reducer;

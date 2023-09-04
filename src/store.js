import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./redux/reducers/counterReducer";

import todosReducer from "./redux/reducers/todosReducer";
import busTicketReducer from "./redux/slices/busTicketSlice";
// import busTicketReducer from "./redux/reducers/busTickerReducer";
// import postReducer from "./redux/reducers/postReducer";
import postReducer from "./redux/slices/postSlice";

const store = configureStore({
  reducer: {
    counter: counterReducer,
    todo: todosReducer,
    busTicket: busTicketReducer,
    post: postReducer,
  },
});

export default store;

// console.log("store:", store.getState());

// store.subscribe(() => {
//   console.log("State sau khi thay đổi:", store.getState());
// });

// const action = { type: "increase" };
// store.dispatch(action);

// store.dispatch({ type: "decrease" });

// store.dispatch({ type: "increaseByAmount", payload: 10 });

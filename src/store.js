import { configureStore } from "@reduxjs/toolkit";

const counterReducer = (state = 0, action) => {
  switch (action.type) {
    case "increase": {
      return state + 1;
    }
    case "decrease": {
      return state - 1;
    }
    case "increaseByAmount": {
      return state + action.payload;
    }
    case "reset": {
      return 0;
    }
    default:
      return state;
  }
};

const todosReducer = (state = [], action) => {
  switch (action.type) {
    case "addTodo": {
      return [...state, action.payload];
    }
    case "delete": {
      const todoId = action.payload;
      return state.filter((item) => item.id !== todoId);
    }
    case "completedTodo": {
      const todoId = action.payload;
      return state.map((item) => {
        if (item.id === todoId) {
          return { ...item, isCompleted: !item.isCompleted };
        }
        return item;
      });
    }
    default:
      return state;
  }
};

const store = configureStore({
  reducer: {
    counter: counterReducer,
    todo: todosReducer,
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

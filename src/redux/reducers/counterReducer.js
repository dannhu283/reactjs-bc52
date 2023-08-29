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

export default counterReducer;

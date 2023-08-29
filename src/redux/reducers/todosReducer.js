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

export default todosReducer;

import React from "react";

import { useSelector, useDispatch } from "react-redux";

export default function Redux() {
  const counter = useSelector((state) => {
    return state.counter;
  });

  const todos = useSelector((state) => {
    return state.todo;
  });

  const dispatch = useDispatch();

  const handleIncrease = () => {
    dispatch({ type: "increase" });
  };

  const handleDecrease = () => {
    dispatch({ type: "decrease" });
  };

  const handleReset = () => {
    dispatch({ type: "reset" });
  };

  const handleIncreaseByAmount = () => {
    const num = +prompt("input number");

    dispatch({ type: "increaseByAmount", payload: num });
  };

  const handleAddTodo = () => {
    const todo = {
      id: Math.floor(Math.random() * 100),
      title: prompt("input to do title"),
      isCompleted: false,
    };
    dispatch({ type: "addTodo", payload: todo });
  };

  const handleDelete = (todoId) => {
    dispatch({ type: "delete", payload: todoId });
  };

  const handleCompletedTodo = (todoId) => {
    dispatch({ type: "completedTodo", payload: todoId });
  };

  return (
    <div className="container">
      <h1 className="text-center text-primary">Redux</h1>
      <hr />

      <h5>Counter:{counter}</h5>

      <button onClick={handleIncrease}>+</button>

      <button onClick={handleDecrease}>-</button>

      <button onClick={handleIncreaseByAmount}>IncreaseByAmount</button>

      <button onClick={handleReset}>reset</button>

      <hr />

      <h5>Todos</h5>

      <button className="mb-5" onClick={handleAddTodo}>
        Add to do
      </button>
      <ul>
        {/* {todo:{id:1,title:"learn React", isCompleted:true/false}} */}
        {todos.map((item) => {
          return (
            <li className="mb-2" key={item.id}>
              <span
                style={{
                  textDecoration: item.isCompleted ? "line-through" : "none",
                }}
                onClick={() => handleCompletedTodo(item.id)}
              >
                {item.title}
              </span>
              <button
                onClick={() => handleDelete(item.id)}
                className=" btn btn-success"
              >
                X
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

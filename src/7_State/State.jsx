import React, { useState } from "react";

//không được thay đổi trực tiếp giá trị của state
export default function State() {
  const [count, setCount] = useState(1);
  const [message, setMessage] = useState("");

  const handleIncrease = () => {
    setCount(count + 1);
  };

  const handleSetMessage = () => {
    const msg = prompt("nhập vào message");
    setMessage(msg);
  };

  //state là array
  const [colors, setColors] = useState(["red", "green", "blue"]);
  const handleAddColor = () => {
    const color = prompt("nhập vào màu muốn thêm");

    setColors([...colors, color]);
  };
  const handleRemoveColor = () => {
    const color = prompt("nhập vào màu muốn thêm");
    const newColors = colors.filter((item) => item !== color);
    setColors(newColors);
  };

  //state là ob
  const [user, setUser] = useState({ username: "", email: "" });
  const handleChangeUserName = () => {
    const username = prompt("Nhập vào username muốn đổi:");
    setUser({ ...user, username });
  };
  const handleChangeEmail = () => {
    const email = prompt("Nhập vào email muốn đổi:");
    setUser({ ...user, email });
  };

  return (
    <div>
      <h1>State</h1>
      <p>Count:{count}</p>
      <button onClick={handleIncrease}>Increase</button>
      <button onClick={() => setCount(count - 1)}>Decrease</button>
      <hr />
      <p> Message: {message}</p>
      <button onClick={handleSetMessage}>SetMessage</button>
      <hr />
      <p>color:{colors.join(", ")}</p>
      <button className="btn btn-success" onClick={handleAddColor}>
        Add color
      </button>
      <button className="btn btn-danger" onClick={handleRemoveColor}>
        Delete color
      </button>
      <hr />
      <p>
        Username:{user.username}-email:{user.email}
      </p>
      <button onClick={handleChangeUserName}>Change username</button>
      <button onClick={handleChangeEmail}>Change email</button>
    </div>
  );
}

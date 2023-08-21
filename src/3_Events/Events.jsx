import React from "react";

//truyền vào hàm <button onClick={handleClick}>click</button> (đúng,không có dấu ngoặc tròn)

//gọi hàm :<button onClick={handleClick()}>click</button> (sai)

export default function Events() {
  const handleClick = () => {
    alert("clicked");
  };

  const handleShowMessage = (name) => {
    alert(`Hello ${name}`);
  };

  const handleChange = (event) => {
    console.log(event.target.value);
  };
  return (
    <div>
      <h1> Events</h1>
      <button onClick={handleClick}>click</button>
      <button
        onClick={() => {
          alert("clicked");
        }}
      >
        click2
      </button>

      <button
        onClick={() => {
          handleShowMessage("Jack");
        }}
      >
        Show Message
      </button>
      <br />
      <br />
      <br />
      <input type="text" onChange={handleChange} />
    </div>
  );
}

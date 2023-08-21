import React, { useState, useEffect } from "react";

export default function Children({ username }) {
  const [message, setMessage] = useState(`Hello ${username}`);

  useEffect(() => {
    setMessage(`Hello ${username}`);
  }, [username]);

  useEffect(() => {
    //cleanup Effect
    return () => {};
  }, []);

  return (
    <div>
      <h1>Children</h1>
      <p>Message:{message}</p>
    </div>
  );
}

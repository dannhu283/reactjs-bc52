import React, { useEffect, useState } from "react";
import axios from "axios";
import Children from "./Children";

export default function Effect() {
  const [users, setUser] = useState([]);

  const [searchTerm, setSearchTerm] = useState("");

  const [username, setUsername] = useState("");

  const handleSetUsername = () => {
    const value = prompt("input UserName");
    setUsername(value);
  };

  useEffect(() => {
    axios({
      method: "GET",
      url: "https://64a6ad14096b3f0fcc8042cd.mockapi.io/users",
      params: { name: searchTerm || undefined },
    }).then((response) => {
      setUser(response.data);
    });

    // const getUsers = async () => {
    //   try {
    //     const response = await axios({
    //       method: "GET",
    //       url: "https://64a6ad14096b3f0fcc8042cd.mockapi.io/users",
    //       param: {
    //         name: searchTerm || undefined,
    //       },
    //     });
    //     setUser(response.data);
    //   } catch (error) {
    //     console.log(error);
    //   }
    // };

    // getUsers();
  }, [searchTerm]);

  console.log("render-runs");
  return (
    <div>
      <h1 className="text-center text-danger">Effect</h1>
      <input
        className="ms-3 text-danger"
        placeholder="Search User"
        value={searchTerm}
        onChange={(evt) => {
          setSearchTerm(evt.target.value);
        }}
      />
      <ul>
        {users.map((user) => {
          return <li key={user.id}>{user.name}</li>;
        })}
      </ul>
      <hr />

      <button onClick={handleSetUsername}>Set Username</button>
      {username && <Children username={username} />}
    </div>
  );
}

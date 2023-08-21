import axios from "axios";
import React from "react";

export default function UserList({ users, onDeleteSuccess, onSelectUser }) {
  const handleDlete = async (userId) => {
    try {
      await axios({
        method: "DELETE",
        url: `https://64a6ad13096b3f0fcc8042b9.mockapi.io/users/${userId}`,
      });

      //xoá thành công
      onDeleteSuccess();
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="mt-3">
      <table className="table">
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Address</th>
            <th>DateOfBirth</th>
            <th>Phone</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.firstName}</td>
              <td>{user.lastName}</td>
              <td>{user.email}</td>
              <td>{user.address}</td>
              <td>{user.dateOfBirth}</td>
              <td>{user.phone}</td>
              <td>
                <button
                  className="btn btn-success me-2"
                  onClick={() => onSelectUser(user.id)}
                >
                  Edit
                </button>
                <button
                  className="btn btn-danger"
                  onClick={() => handleDlete(user.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

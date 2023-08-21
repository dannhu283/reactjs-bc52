import React, { useEffect, useState } from "react";
import UserForm from "./UserForm";
import UserList from "./UserList";
import axios from "axios";

export default function UserManagement() {
  //state quản lí  danh sách người dùng từ API
  const [users, setUsers] = useState([]);
  //state quản lí người dùng đang được chọn
  const [selectedUser, setSelectedUser] = useState(null);

  //hamf gọi API lấy ds user người dùng và gán cho state users
  const getUsers = async () => {
    try {
      const reponse = await axios({
        method: "GET",
        url: "https://64a6ad13096b3f0fcc8042b9.mockapi.io/users",
      });
      setUsers(reponse.data);
    } catch (error) {
      console.log(error);
    }
  };

  //hàm nhận vào userID và tìm user tương ứng
  const getUserById = async (userId) => {
    try {
      const response = await axios({
        method: "GET",
        url: `https://64a6ad13096b3f0fcc8042b9.mockapi.io/users/${userId}`,
      });

      setSelectedUser(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    //call back của useEffect sau khi component render lần đầu
    getUsers();
  }, []);

  return (
    <div className="container">
      <h1 className="text-center text-primary">Usermanagement</h1>

      <UserForm onSubmitSuccess={getUsers} selectedUser={selectedUser} />

      <UserList
        onDeleteSuccess={getUsers}
        users={users}
        onSelectUser={getUserById}
      />
    </div>
  );
}

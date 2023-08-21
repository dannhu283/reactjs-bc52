import React, { useState, useEffect } from "react";
import axios from "axios";

export default function UserForm({ onSubmitSuccess, selectedUser }) {
  const [values, setValues] = useState({
    firstName: "",
    lastName: "",
    email: "",
    dateOfBirth: "",
    address: "",
    phone: "",
  });

  const handleChange = (evt) => {
    const { name, value } = evt.target;

    setValues({ ...values, [name]: value });
  };

  const handleSubmit = async (evt) => {
    evt.preventDefault();

    const { id, ...payload } = values;
    const options = id
      ? {
          method: "PUT",
          url: `https://64a6ad13096b3f0fcc8042b9.mockapi.io/users/${id}`,
          data: payload,
        }
      : {
          method: "POST",
          url: "https://64a6ad13096b3f0fcc8042b9.mockapi.io/users/",
          data: payload,
        };

    try {
      await axios(options);
      //sau khi thêm thành công
      onSubmitSuccess();
      //reset form
      setValues({
        firstName: "",
        lastName: "",
        email: "",
        dateOfBirth: "",
        address: "",
        phone: "",
      });
    } catch (error) {
      console.log(error);
    }
  };

  //dùng effect để theo dõi giá trị của prop selectedUser thay đổi sẽ cập nhật cho state values
  useEffect(() => {
    //kiểm tra nếu là null thì không làm gì hết
    if (!selectedUser) {
      return;
    }
    setValues({ ...selectedUser });
  }, [selectedUser]);

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-2">
        <label className="form-lable" htmlFor="firstName">
          Fisrt Name
        </label>
        <input
          className="form-control"
          id="firstName"
          value={values.firstName}
          name="firstName"
          onChange={handleChange}
        />
      </div>
      <div className="mb-2">
        <label className="form-lable" htmlFor="lastName">
          Last Name
        </label>
        <input
          className="form-control"
          id="lastName"
          value={values.lastName}
          name="lastName"
          onChange={handleChange}
        />
      </div>
      <div className="mb-2">
        <label className="form-lable" htmlFor="email">
          Email
        </label>
        <input
          className="form-control"
          id="email"
          value={values.email}
          name="email"
          onChange={handleChange}
        />
      </div>
      <div className="mb-2">
        <label className="form-lable" htmlFor="dateOfBirth">
          Date Of Birth
        </label>
        <input
          className="form-control"
          id="dateOfBirth"
          value={values.dateOfBirth}
          name="dateOfBirth"
          onChange={handleChange}
        />
      </div>
      <div className="mb-2">
        <label className="form-lable" htmlFor="address">
          Address
        </label>
        <input
          className="form-control"
          id="address"
          value={values.address}
          name="address"
          onChange={handleChange}
        />
      </div>
      <div className="mb-2">
        <label className="form-lable" htmlFor="phone">
          Phone
        </label>
        <input
          className="form-control"
          id="phone"
          value={values.phone}
          name="phone"
          onChange={handleChange}
        />
      </div>
      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
}

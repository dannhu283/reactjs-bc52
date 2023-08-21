import React, { useState } from "react";

export default function Form() {
  const [values, setValues] = useState({
    username: "",
    email: "",
    address: "",
    favouriteColor: "",
  });

  const handleSubmit = (evt) => {
    // Ngăn chặn hành vi mặc định khi submit form là reload lại page và đưa các giá trị lên url
    evt.preventDefault();
  };

  const handleChange = (evt) => {
    //cần đặt thuộc tính name của ip nó khớp với tên thuộc tính trong ob values
    setValues({ ...values, [evt.target.name]: evt.target.value });
  };

  const handleReset = () => {
    setValues({
      username: "",
      email: "",
      address: "",
      favouriteColor: "",
    });
  };

  return (
    <div>
      <h1 className="text-center">Form</h1>

      <form onSubmit={handleSubmit} className="mx-5">
        <div className="mb-3">
          <label className="form-lable">Username</label>
          <input
            className="form-control"
            name="username"
            onChange={handleChange}
            value={values.username}
          />
        </div>
        <div className="mb-3">
          <label className="form-lable">Email</label>
          <input
            className="form-control"
            name="email"
            onChange={handleChange}
            value={values.email}
          />
        </div>
        <div className="mb-3">
          <label className="form-lable">Address</label>
          <input
            className="form-control"
            name="address"
            onChange={handleChange}
            value={values.address}
          />
        </div>

        <div className="mb-4">
          <label className="form-lable">chọn màu sắc</label>
          <select
            className="form-control"
            name="favouriteColor"
            value={values.favouriteColor}
            onChange={handleChange}
          >
            <option value="">-----</option>
            <option value="red">Red</option>
            <option value="black">Black</option>
            <option value="white">White</option>
          </select>
        </div>

        <button type="submit" className="btn btn-success">
          Submit
        </button>
        <button
          type="button"
          className="btn btn-danger ms-1"
          onClick={handleReset}
        >
          reset
        </button>
      </form>
    </div>
  );
}

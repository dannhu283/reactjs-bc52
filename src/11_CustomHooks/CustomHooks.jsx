import React, { useState } from "react";
import useCount from "./useCount";
import useForm from "./useForm";

export default function CustomHooks() {
  const { count, handleIncrease, handleDecrease, handleReset } = useCount();

  const { values, handleChange } = useForm({ email: "", password: "" });
  return (
    <>
      <h1 className="text-center text-primary">CustomHooks</h1>
      <hr />
      <div className="d-flex justify-content-center">   
        <button className="btn btn-danger" onClick={handleDecrease}>
          -
        </button>
        <h1>{count}</h1>
        <button className="btn btn-success" onClick={handleIncrease}>
          +
        </button>
        <button className="btn btn-primary ms-5" onClick={handleReset}>
          reset
        </button>
      </div>

      <hr />

      <form onSubmit={(evt) => evt.preventDefault()}>
        <div className="mb-3 ms-3">
          <label className="form-lable"> Email</label>
          <input
            name="email"
            className="form-control"
            value={values.email}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3 ms-3">
          <label className="form-lable"> PassWord</label>
          <input
            className="form-control"
            name="password"
            type="password"
            value={values.password}
            onChange={handleChange}
          />
        </div>
        <button className="btn btn-primary">Submit</button>
      </form>
    </>
  );
}

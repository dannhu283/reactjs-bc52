import React, { useState, forwardRef } from "react";

function SampleForm({ onsubmit }, ref) {
  const [values, setValues] = useState({ email: "", password: "" });

  const handleChange = (evt) => {
    const { name, value } = evt.target;

    setValues({ ...values, [name]: value });
  };

  return (
    <div>
      <h1 handleChange>SampleForm</h1>
      <form
        ref={ref}
        onSubmit={(evt) => {
          evt.preventDefault();
          onsubmit(values);
        }}
      >
        <div className="mb-3 ms-3">
          <label className="form-lable"> Email</label>
          <input
            name="email"
            className="form-control"
            onChange={handleChange}
          />
        </div>
        <div className="mb-3 ms-3">
          <label className="form-lable"> PassWord</label>
          <input
            className="form-control"
            name="password"
            type="password"
            onChange={handleChange}
          />
        </div>
      </form>
    </div>
  );
}
//export sau khi forward
export default forwardRef(SampleForm);

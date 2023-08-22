import React, { useRef, useEffect, useState } from "react";
import SampleForm from "./SampleForm";

export default function Ref() {
  const inputRef = useRef();

  const inputFileRef = useRef();

  const formRef = useRef();

  const timer = useRef();

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const handleSubmit = (values) => {
    console.log(values);
  };

  const [searchTerm, SetSearchTerm] = useState("");

  const handleChangeSearchTerm = (evt) => {
    SetSearchTerm(evt.target.value);

    clearTimeout(timer.current);

    timer.current = setTimeout(() => {
      alert(evt.target.value);
    }, 300);
  };

  return (
    <div>
      <h1 className="text-center text-primary">Ref</h1>

      <hr />
      <input className="ms-3" placeholder="Input Your Message" ref={inputRef} />

      <hr />

      <input type="file" hidden ref={inputFileRef} />
      <button
        className="btn btn-success"
        onClick={() => inputFileRef.current.click()}
      >
        UploadFile
      </button>

      <hr />
      <SampleForm onsubmit={handleSubmit} ref={formRef} />
      <button
        onClick={() => formRef.current.requestSubmit()}
        className="btn btn-warning ms-3"
      >
        Submit
      </button>

      <hr />

      <div className="mb-3 ms-3">
        <label className="form-lable text-danger">Demo Debounce</label>
        <input
          className="form-control"
          value={searchTerm}
          onChange={handleChangeSearchTerm}
        />
      </div>
    </div>
  );
}

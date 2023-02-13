import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Form from "./Form";

const FormStorage = () => {
  const navigate = useNavigate();
  const [value, setValue] = useState();

  const loginHandler = () => {
    if (value !== "") {
      window.location.reload();
      localStorage.setItem("neha", true, value);
    }
  };
  const [localValue, setLocalValue] = useState("");
  useEffect(() => {
    setLocalValue(localStorage.getItem("neha", true));
  }, [localValue]);
  return (
    <>
      {localValue === "true" ? (
        <Form />
      ) : (
        <div className="w-100 vh-100 d-flex flex-column justify-content-center align-items-center">
          <input
            onChange={(e) => setValue(e.target.value)}
            className="input"
            type="text"
            placeholder="Name"
            value={value}
          />
          <button onClick={() => loginHandler()} className="btn btn-success">
            Login
          </button>
        </div>
      )}
    </>
  );
};

export default FormStorage;

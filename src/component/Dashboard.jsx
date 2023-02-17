import React, { useState } from "react";
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import ItemOne from "./ItemOne";
import ItemTwo from "./ItemTwo";

const Dashboard = () => {
  const [valueOne, setValueOne] = useState("");
  const [valueTwo, setValueTwo] = useState("");
  const [updateValueOne, setUpdateValueOne] = useState("");
  const [updateValueTwo, setUpdateValueTwo] = useState("");
  const location = useLocation();
  const nevigate = useNavigate();

  const updateOneHandler = () => {
    nevigate("/form2/one");
    setUpdateValueOne(valueOne);
  };

  const updateTwoHandler = () => {
    nevigate("/form2/two");
    setUpdateValueTwo(valueTwo);
  };

  return (
    <>
      <div className="d-flex justify-content-between">
        <div className="sidebar">
          <div className="pt-5 px-3">
            <button
              onClick={() => nevigate("/form2/one")}
              className="w-100 py-2 btn btn-primary text-white"
            >
              First Form
            </button>
          </div>
          <div className="pt-3 px-3">
            <button
              onClick={() => nevigate("/form2/two")}
              className="w-100 py-2 btn btn-primary text-white"
            >
              Second Form
            </button>
          </div>
        </div>
        <div className="">
          {location.pathname === "/form2/one" && (
            <ItemOne
              setValueOne={setValueOne}
              updateValueOne={updateValueOne}
            />
          )}
          {location.pathname === "/form2/two" && (
            <ItemTwo
              setValueTwo={setValueTwo}
              updateValueTwo={updateValueTwo}
            />
          )}
        </div>
        <div className="content_show text-white text-start ps-5">
          <div>
            <h2 className="pt-5">First Value</h2>
            <p onClick={() => updateOneHandler()}>
              {valueOne ? valueOne : "...."}
            </p>
          </div>
          <div>
            <h2 className="pt-5">Second Value</h2>
            <p onClick={() => updateTwoHandler()}>
              {valueTwo ? valueTwo : "...."}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;

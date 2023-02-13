import React, { useState } from "react";

const Form = () => {
  const initialState = {
    name: "",
    email: "",
    password: "",
  };
  const [arr, setArr] = useState([]);
  const [inputValue, setValue] = useState(initialState);
  const [updateValue, setUpdatedValue] = useState(false);
  const [updateValue2, setUpdatedValue2] = useState(null);
  const submitHandler = () => {
    if (
      inputValue.name !== "" &&
      inputValue.email !== "" &&
      inputValue.password !== ""
    ) {
      if (updateValue2) {
        const indexValue = arr.indexOf(updateValue2);
        setArr((prevState) => [
          ...prevState,
          arr.splice(indexValue, 1, inputValue),
        ]);
        console.log(updateValue2, "updateValue2");
      } else {
        setArr((prevState) => [...prevState, inputValue]);
      }
      setValue(initialState);
    }
  };
  const deleteHandler = (index) => {
    const duplicateArray = [...arr];
    const newArray = duplicateArray.filter((value, i) => i !== index);
    setArr(newArray);
  };
  const updateData = (obj, i) => {
    setUpdatedValue(true);
    setValue(obj);
    setUpdatedValue2(obj);
  };
  // const updateArr = () => {
  //   const indexValue = arr.indexOf(updateValue2);
  //   setArr((prevState) => [
  //     ...prevState,
  //     arr.splice(indexValue, 1, inputValue),
  //   ]);
  //   console.log(updateValue2, "updateValue2");
  //   setUpdatedValue(false);
  //   setValue(initialState);
  // };
  const logoutHamdler = () => {
    localStorage.removeItem("neha", false);
    window.location.reload();
  };
  return (
    <div className="position-relative">
      <button
        onClick={logoutHamdler}
        className="btn btn-dark mt-5 me-5 position-absolute end-0 top-0"
      >
        LOGOUT
      </button>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-6">
            <h2 className="fw-bold pt-5 pb-4">LIST ITEMS</h2>
            <div className="form_input">
              <input
                onChange={(e) =>
                  setValue({
                    ...inputValue,
                    name: e.target.value,
                  })
                }
                type="text"
                name=""
                placeholder="Name"
                id=""
                value={inputValue.name}
              />
              <input
                onChange={(e) =>
                  setValue({
                    ...inputValue,
                    email: e.target.value,
                  })
                }
                type="text"
                name=""
                placeholder="email"
                id=""
                value={inputValue.email}
              />
              <input
                onChange={(e) =>
                  setValue({
                    ...inputValue,
                    password: e.target.value,
                  })
                }
                type="text"
                name=""
                placeholder="password"
                id=""
                value={inputValue.password}
              />

              <button onClick={submitHandler}>Add in list</button>
            </div>
          </div>
        </div>
      </div>
      {arr.length > 0 && (
        <table className="w-100 layout_fixed mt-5">
          <thead>
            <tr>
              <th>SR NO.</th>
              <th>NAME</th>
              <th>EMAIL</th>
              <th>PASSWORD</th>
            </tr>
          </thead>
          <tbody>
            {arr.map((obj, index) => (
              <tr key={index}>
                <td className="bg-success text-white fw-bold border">
                  {index + 1}
                </td>
                <td className="bg-dark text-white fw-bold border">
                  {obj.name}
                </td>
                <td className="bg-success text-white fw-bold border">
                  {obj.email}
                </td>
                <td className="bg-dark text-white fw-bold border">
                  {obj.password}
                </td>
                <td className=" text-white fw-bold">
                  <button
                    onClick={() => deleteHandler(index)}
                    className="btn btn-danger fw-bold"
                  >
                    DELETE
                  </button>
                  <button
                    onClick={() => {
                      updateData(obj, index);
                    }}
                    className="btn btn-warning fw-bold ms-3"
                  >
                    UPDATE
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default Form;

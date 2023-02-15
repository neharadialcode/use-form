import React, { useEffect, useState } from "react";

const Form = () => {
  const initialState = {
    name: "",
    email: "",
    password: "",
  };
  const initialArr = [
    {
      name: "text 1",
      email: "x@gmail.com",
      password: "1223",
    },
    {
      name: "new",
      email: "y@gmail.com",
      password: "1223",
    },
    {
      name: "dummy",
      email: "z@gmail.com",
      password: "1223",
    },
  ];
  const [arr, setArr] = useState(initialArr);
  const [inputValue, setValue] = useState(initialState);
  const [updateValue, setUpdatedValue] = useState(false);
  const [updateIndex, setUpdateIndex] = useState(null);
  const [searchValue, setSearchValue] = useState("");

  const submitHandler = () => {
    if (
      inputValue.name !== "" &&
      inputValue.email !== "" &&
      inputValue.password !== ""
    ) {
      // THIS CODE RUN WHILE ONLY IN UPDATE
      if (updateValue) {
        arr && arr.splice(updateIndex, 1, inputValue);
      } else if (!updateValue) {
        console.log("on else  ");
        setArr((prevState) => [...prevState, inputValue]);
      }
      setValue(initialState);
    }
  };
  const deleteHandler = (index) => {
    const duplicateArray = [...arr];
    const newArray = duplicateArray.filter((val, i) => i !== index);
    setArr(newArray);
  };

  const updateData = (obj, index) => {
    setUpdatedValue(true);
    setValue(obj);
    setUpdateIndex(index);
  };

  const logoutHamdler = () => {
    localStorage.removeItem("neha", false);
    window.location.reload();
  };

  function handleSearch(e) {
    setSearchValue(e.target.value);
  }

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
      <div className="my-5 row mx-0">
        <div className="col-4 px-5">
          <input
            onChange={(e) => handleSearch(e)}
            className="w-100"
            type="text"
            name=""
            value={searchValue}
            placeholder="Search"
            id=""
          />
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
            {searchValue ? (
              <>
                {arr
                  .filter((obj) => {
                    if (obj.name.includes(searchValue)) {
                      return true;
                    }
                  })
                  .map((obj, index) => (
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
              </>
            ) : (
              <>
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
              </>
            )}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default Form;

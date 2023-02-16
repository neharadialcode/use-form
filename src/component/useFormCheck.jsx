import React, { useState } from "react";
import { useForm } from "react-hook-form";
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
const FormCheck = () => {
  const [arr, setArr] = useState(initialArr);
  const [updateValue, setUpdatedValue] = useState({});
  const [updateIndex, setUpdateIndex] = useState(null);
  const [searchVal, setSearchVal] = useState(null);
  const [ifValue, setIfValue] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors },
  } = useForm({
    defaultValues: updateValue,
  });

  // FOR ADD VALUES IN ARRAY AND MAKE THE INPUT BLANK
  const onSubmit = (data) => {
    console.log(data);
    if (ifValue) {
      arr[updateIndex].name = data.name;
      arr && arr.splice(updateIndex, 1, data);
    } else {
      const emailExist = arr.filter((val) => val.email === data.email);
      if (emailExist.length === 0) {
        setArr((prevState) => [...prevState, data]);
      }
    }
    reset({ name: "", email: "", password: "", cpassword: "" });
  };
  // FOR DELETE ANY OBJECT FORM ARRAY
  const deleteHandler = (index) => {
    const duplicateArray = [...arr];
    const newArray = duplicateArray.filter((val, i) => i !== index);
    setArr(newArray);
  };
  // FOR SEARCH ANY VALUE FORM ARRAY
  const searchHandler = (e) => {
    setSearchVal(e.target.value);
  };

  // FOR UPDATE THE VALUE IN ARRAY

  const updateData = (obj, index) => {
    setUpdatedValue(obj);
    setUpdateIndex(index);
    setIfValue(true);
  };
  console.log(updateValue, "obj");

  return (
    <div>
      <div className="row justify-content-center  mx-0">
        <div className="col-6">
          <form className="form_input" onSubmit={handleSubmit(onSubmit)}>
            {/* NAME INPUT VALUE */}
            <div>
              <input
                defaultValue={updateValue.name}
                name="name"
                type="text"
                placeholder="Name"
                {...register("name", { required: true })}
                aria-invalid={errors.name ? "true" : "false"}
              />
              {errors.name?.type === "required" && (
                <p role="alert">First name is required</p>
              )}
            </div>
            {/* EMAIL INPUT VALUE */}
            <div>
              <input
                {...register("email", {
                  required: "Please Enter Your Email!",
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: "Please Enter A Valid Email!",
                  },
                })}
                id="email"
                defaultValue={updateValue.email}
                placeholder="Email"
              />

              <p className="error-message" role="alert">
                {errors.email?.message}
              </p>
            </div>
            {/* PASSWORD INPUT VALUE */}
            <div>
              <input
                className="input-field"
                size={"44"}
                defaultValue={updateValue.password}
                type="password"
                placeholder="Password"
                name="password"
                {...register("password", {
                  required: "**Password is required",
                  minLength: {
                    value: 4,
                    message: "**Password must be more than 4 characters",
                  },
                  maxLength: {
                    value: 12,
                    message: "**Password cannot exceed more than 12 characters",
                  },
                })}
              ></input>

              <p className="alerts">{errors.password?.message}</p>
            </div>
            {/* CONFIRM PASSWORD INPUT VALUE */}
            <div>
              <input
                defaultValue={updateValue.cpassword}
                className="input-field"
                size={"44"}
                type="password"
                placeholder="Confirm Password"
                name="cpassword"
                {...register("cpassword", {
                  required: "Confirm password is required",
                  validate: (val) => {
                    if (watch("password") != val) {
                      return "Password not matched";
                    }
                  },
                })}
              ></input>
              <p className="alerts">{errors.cpassword?.message}</p>
            </div>
            <input className="bg-success text-white fw-bold" type="submit" />
          </form>
        </div>
      </div>
      {/* TABLR ARRAY LIST */}

      <input
        className="mt-5"
        type="text"
        placeholder="Search"
        onChange={(e) => searchHandler(e)}
      />

      {arr.length > 0 && (
        <table className="w-100 layout_fixed my-5">
          <thead>
            <tr>
              <th>SR NO.</th>
              <th>NAME</th>
              <th>EMAIL</th>
              <th>PASSWORD</th>
            </tr>
          </thead>
          <tbody>
            {searchVal ? (
              <>
                {arr
                  .filter((obj) => {
                    if (obj.name.includes(searchVal)) {
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

export default FormCheck;

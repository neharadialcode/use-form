import React, { useState } from "react";
import { useForm } from "react-hook-form";

const CreatePass = () => {
  //show password

  let password;

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    watch,
    getValues,
  } = useForm({
    mode: "onTouched",
  });
  password = watch("password", "");

  const onSubmit = (data) => {
    console.log(data);
    reset();
  };

  return (
    <div className="Container">
      <div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="type-box1">
            <input
              className="input-field"
              size={"44"}
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

            <input
              className="input-field"
              size={"44"}
              type={"password"}
              placeholder="Password"
              name="cpassword"
              {...register("cpassword", {
                required: "**Password is required",
                validate: (val) => {
                  if (watch("password") != val) {
                    return "Your passwords do no match";
                  }
                },
              })}
            ></input>

            <p className="alerts">{errors.cpassword?.message}</p>
            <div className="Button">
              <button className="Login-Button4" Label="Proceed">
                submit
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreatePass;

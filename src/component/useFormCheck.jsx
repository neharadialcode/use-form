import React from "react";
import { useForm } from "react-hook-form";

const FormCheck = () => {
  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: "",
      email: "",
      password: "",
      cpassword: "",
    },
    mode: "onTouched",
  });

  const onSubmit = (data) => {
    console.log(data);
    reset();
  };
  return (
    <div>
      <div className="row justify-content-center vh-100 align-items-center mx-0">
        <div className="col-6">
          <form className="form_input" onSubmit={handleSubmit(onSubmit)}>
            {/* NAME INPUT VALUE */}
            <div>
              <input
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
                className="input-field"
                size={"44"}
                type={"password"}
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
    </div>
  );
};

export default FormCheck;

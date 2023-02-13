import React from "react";
import { useForm } from "react-hook-form";

const FormCheck = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    shouldUseNativeValidation: true,
    shouldUnregister: true,
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
  });
  const onSubmit = (data) => {
    if (data.name !== "" && data.email !== "" && data.password !== "") {
      console.log(data);
      reset();
    }
  };
  return (
    <div>
      <div className="row justify-content-center vh-100 align-items-center mx-0">
        <div className="col-6">
          <form className="form_input" onSubmit={handleSubmit(onSubmit)}>
            <input
              name="name"
              type="text"
              placeholder="name"
              aria-invalid={errors.name ? "true" : "false"}
              {...register("name", { required: "name is required" })}
            />
            {errors.name?.type === "required" && <p>First name is required</p>}
            <input
              name="email"
              type="email"
              placeholder="email"
              {...register("email", { required: "EMAIL IS REQUIRD" })}
              aria-invalid={errors.email ? "true" : "false"}
            />
            {errors.email && <p>Email name is required.</p>}
            <input
              name="password"
              type="password"
              placeholder="password"
              {...register("password", { required: "PASSWORD IS REQUIRD" })}
              aria-invalid={errors.password ? "true" : "false"}
            />
            {errors.password && <p>Password is required</p>}
            <input type="submit" />
          </form>
        </div>
      </div>
    </div>
  );
};

export default FormCheck;

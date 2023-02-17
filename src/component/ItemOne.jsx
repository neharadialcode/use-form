import React from "react";
import { useForm } from "react-hook-form";

const ItemOne = ({ setValueOne, updateValueOne }) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: { setValueOne },
  });
  const onSubmit = (data) => {
    setValueOne(data.firstName);
    reset({ firstName: "" });
    if (updateValueOne) {
      updateValueOne = data.firstName;
    }
  };

  return (
    <div>
      <form className="form_input" onSubmit={handleSubmit(onSubmit)}>
        {/* NAME INPUT VALUE */}
        <div>
          <input
            defaultValue={updateValueOne}
            name="firstName"
            type="text"
            placeholder="First Name"
            {...register("firstName", { required: true })}
            aria-invalid={errors.name ? "true" : "false"}
          />
          {errors.firstName?.type === "required" && (
            <p role="alert">First name is required</p>
          )}
        </div>

        <input className="bg-success text-white fw-bold" type="submit" />
      </form>
    </div>
  );
};

export default ItemOne;

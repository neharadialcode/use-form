import React from "react";
import { useForm } from "react-hook-form";

const ItemTwo = ({ setValueTwo, updateValueTwo }) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: { setValueTwo },
  });
  const onSubmit = (data) => {
    setValueTwo(data.lastName);
    reset({ lastName: "" });
    if (updateValueTwo) {
      updateValueTwo = data.lastName;
    }
  };

  return (
    <div>
      <form className="form_input" onSubmit={handleSubmit(onSubmit)}>
        {/* NAME INPUT VALUE */}
        <div>
          <input
            defaultValue={updateValueTwo}
            name="lastName"
            type="text"
            placeholder="Last Name"
            {...register("lastName", { required: true })}
            aria-invalid={errors.name ? "true" : "false"}
          />
          {errors.lastName?.type === "required" && (
            <p role="alert">Last name is required</p>
          )}
        </div>

        <input className="bg-success text-white fw-bold" type="submit" />
      </form>
    </div>
  );
};

export default ItemTwo;

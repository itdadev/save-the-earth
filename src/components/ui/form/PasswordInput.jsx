import React from "react";
import { Controller } from "react-hook-form";
import Password from "antd/es/input/Password";
import { ErrorMessage } from "@/components/ui/form/TextInput";

const PasswordInput = props => {
  return (
    <Controller
      name={props.name}
      control={props.control}
      render={({ field, formState: { errors } }) => {
        return (
          <div>
            <label htmlFor={props.id}>{props.label}</label>

            <Password
              {...field}
              {...props}
              id={name}
              status={errors[props.name] ? "error" : ""}
              size="large"
              type="password"
              maxLength={15}
            />

            <ErrorMessage>{errors[props.name]?.message}</ErrorMessage>
          </div>
        );
      }}
    />
  );
};

export default PasswordInput;

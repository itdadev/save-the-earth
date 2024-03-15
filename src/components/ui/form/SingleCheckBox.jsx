import React from "react";
import { Controller } from "react-hook-form";
import { Checkbox } from "antd";

import { ErrorMessage } from "@/components/ui/form/TextInput";

const SingleCheckBox = ({ name, control, label, noError }) => {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field, formState: { errors } }) => {
        return (
          <>
            <Checkbox {...field} checked={field.value}>
              {label}
            </Checkbox>

            {errors[name] && !noError && (
              <ErrorMessage>{errors[name].message}</ErrorMessage>
            )}
          </>
        );
      }}
    />
  );
};

export default SingleCheckBox;

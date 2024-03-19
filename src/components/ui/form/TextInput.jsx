import React, { useCallback } from "react";
import { Flex, Input } from "antd";
import styled from "@emotion/styled";
import { Controller } from "react-hook-form";
import {
  changeInputBirthFormat,
  changeInputPhoneFormat,
} from "@/utils/Functions";
import { log } from "@craco/craco/dist/lib/logger";

export const ErrorMessage = styled.div(({ theme }) => ({
  minHeight: "2rem",
  fontSize: "1.2rem",
  paddingTop: "0.2rem",
  color: theme.color.error,
}));

const Container = styled.div(() => ({
  flex: 1,
}));

const TextInput = ({
  label,
  placeholder,
  id,
  name,
  control,
  type = "text",
  addonAfter,
  labelafter,
  disabled,
  setValue,
  maxLength,
  inputMode,
}) => {
  const inputFormatChangeHandler = useCallback(
    (e, onChange) => {
      onChange(e);

      if (name === "user_phone") {
        changeInputPhoneFormat(e, setValue);
      }

      if (name === "user_birth") {
        changeInputBirthFormat(e, setValue);
      }
    },
    [name, setValue],
  );

  return (
    <Controller
      name={name}
      control={control}
      render={({ field, formState: { errors } }) => {
        return (
          <Container>
            <Flex justify="space-between">
              <label htmlFor={id}>{label}</label>

              {labelafter}
            </Flex>

            <Input
              {...field}
              id={id}
              size="large"
              placeholder={placeholder}
              inputMode={inputMode ? inputMode : ""}
              status={errors[name] ? "error" : ""}
              name={name}
              type={type}
              addonAfter={addonAfter}
              disabled={disabled}
              onChange={e => inputFormatChangeHandler(e, field.onChange)}
              maxLength={maxLength}
            />

            <ErrorMessage>{errors[name]?.message}</ErrorMessage>
          </Container>
        );
      }}
    />
  );
};

export default TextInput;
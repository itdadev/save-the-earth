import React, { useCallback } from "react";
import { Flex, Input } from "antd";
import styled from "@emotion/styled";
import { Controller } from "react-hook-form";
import {
  changeInputBirthFormat,
  changeInputPhoneFormat,
} from "@/utils/Functions";

export const ErrorMessage = styled.div(({ theme }) => ({
  minHeight: "2rem",
  fontSize: "1.2rem",
  paddingTop: "0.2rem",
  color: theme.color.error,
}));

export const SuccessMessage = styled.div(({ theme }) => ({
  minHeight: "2rem",
  fontSize: "1.2rem",
  paddingTop: "0.2rem",
  color: theme.color.primary01,
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
  customMessage,
  inputMode,
  autoComplete,
  readOnly,
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
              disabled={disabled || readOnly}
              onChange={e => inputFormatChangeHandler(e, field.onChange)}
              maxLength={maxLength}
              autoComplete={autoComplete ? "one-time-code" : ""}
            />

            {customMessage ? (
              <SuccessMessage>{customMessage}</SuccessMessage>
            ) : (
              <ErrorMessage>
                {errors[name]?.message || errors[`${name}_checked`]?.message}
              </ErrorMessage>
            )}
          </Container>
        );
      }}
    />
  );
};

export default TextInput;

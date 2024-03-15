import React from "react";
import { Flex, Input } from "antd";
import styled from "@emotion/styled";
import { Controller } from "react-hook-form";

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
}) => {
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
              size="large"
              placeholder={placeholder}
              id={id}
              status={errors[name] ? "error" : ""}
              name={name}
              type={type}
              addonAfter={addonAfter}
            />

            <ErrorMessage>{errors[name]?.message}</ErrorMessage>
          </Container>
        );
      }}
    />
  );
};

export default TextInput;

import React from "react";
import { Controller } from "react-hook-form";
import Password from "antd/es/input/Password";
import { ErrorMessage } from "@/components/ui/form/TextInput";
import styled from "@emotion/styled";
import { InfoCircleOutlined } from "@ant-design/icons";
import { Flex } from "antd";

const Label = styled.label(() => ({
  display: "flex",
  alignItems: "center",
  gap: "0 1rem",
  flexWrap: "wrap",
}));

const Information = styled(Flex)(({ theme }) => ({
  color: theme.color.grey06,
  minHeight: "2rem",
  fontSize: "1.2rem",
  paddingTop: "0.2rem",
}));
const PasswordInput = props => {
  return (
    <Controller
      name={props.name}
      control={props.control}
      render={({ field, formState: { errors } }) => {
        return (
          <div>
            <Label htmlFor={props.id}>
              {props.label}

              <Information gap="0.4rem" align="center">
                <InfoCircleOutlined />

                <p>영문+숫자 8자리~12자리 입력해주세요.</p>
              </Information>
            </Label>

            <Password
              {...field}
              {...props}
              id={props.name}
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

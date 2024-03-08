import React from "react";
import styled from "@emotion/styled";
import { mq } from "@/libs/react-responsive/mediaQuery";

const Container = styled.button(({ bgColor, textColor = "white" }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  borderRadius: "6rem",
  background: bgColor,
  fontSize: "1.4rem",
  color: textColor,
  textAlign: "center",
  lineHeight: "normal",
  minWidth: "12rem",
  maxWidth: "12rem",
  minHeight: "3rem",
  maxHeight: "3rem",

  [mq("desktop")]: {
    minWidth: "20rem",
    maxWidth: "20rem",
    minHeight: "5rem",
    maxHeight: "5rem",
    fontSize: "2.2rem",
  },
}));

const PrimaryButton = ({
  children,
  clickEvent,
  buttonType = "button",
  bgColor,
  textColor,
}) => {
  return (
    <Container
      type={buttonType}
      onClick={clickEvent}
      bgColor={bgColor}
      textColor={textColor}
    >
      {children}
    </Container>
  );
};

export default PrimaryButton;

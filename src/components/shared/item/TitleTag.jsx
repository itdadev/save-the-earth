import React from "react";
import styled from "@emotion/styled";
import { mq } from "@/libs/react-responsive/mediaQuery";

const Container = styled.div(({ theme, bgColor, textColor, fit }) => ({
  width: "fit-content",
  margin: "0 auto",
  padding: "0.6rem 2rem 0.4rem",
  borderRadius: "8rem",
  background: bgColor,
  fontSize: "1.3rem",
  color: textColor,
  textAlign: "center",
  lineHeight: 1,
  whiteSpace: "nowrap",

  [mq("desktop")]: {
    padding: fit ? "1rem 3rem 0.7rem 3rem" : "1rem 7rem 0.6rem",
    fontSize: fit ? "1.8rem" : "2.4rem",
  },
}));

const TitleTag = ({ title, bgColor = "#000", textColor = "white", fit }) => {
  return (
    <Container bgColor={bgColor} textColor={textColor} fit={fit}>
      {title}
    </Container>
  );
};

export default TitleTag;

import React from "react";
import styled from "@emotion/styled";
import { mq } from "@/libs/react-responsive/mediaQuery";

const Container = styled.div(() => ({
  width: "100%",
  maxWidth: "115rem",
  margin: "0 auto",
  padding: "0 1.6rem",

  [mq("desktop")]: {
    padding: "0 3rem",
  },
}));

const CommonContainer = ({ children }) => {
  return <Container>{children}</Container>;
};

export default CommonContainer;

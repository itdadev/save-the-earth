import React from "react";
import styled from "@emotion/styled";
import { mq } from "@/lib/react-responsive/mediaQuery";

const Container = styled.div(() => ({
  width: "100%",
  margin: "4.8rem 0 0",
  padding: "6rem 0",

  [mq("desktop")]: {
    margin: "14.6rem 0 0",
    padding: "9rem 0",
  },
}));

const CommonPageContainer = ({ children }) => {
  return <Container>{children}</Container>;
};

export default CommonPageContainer;

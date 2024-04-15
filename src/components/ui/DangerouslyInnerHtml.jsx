import React from "react";
import styled from "@emotion/styled";

const Container = styled.div(({ noLink }) => ({
  a: {
    pointerEvents: noLink ? "none" : "auto",
  },
}));

const DangerouslyInnerHtml = ({ value, className, noLink }) => {
  return (
    <Container
      noLink={noLink}
      className={className}
      dangerouslySetInnerHTML={{
        __html: value,
      }}
    />
  );
};

export default DangerouslyInnerHtml;

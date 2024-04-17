import React from "react";
import styled from "@emotion/styled";

const Container = styled.div(({ noLink, noImage }) => ({
  a: {
    pointerEvents: noLink ? "none" : "auto",
  },

  img: {
    display: noImage ? "none" : "block",
  },
}));

const DangerouslyInnerHtml = ({ value, className, noLink, noImage }) => {
  return (
    <Container
      noImage={noImage}
      noLink={noLink}
      className={className}
      dangerouslySetInnerHTML={{
        __html: value,
      }}
    />
  );
};

export default DangerouslyInnerHtml;

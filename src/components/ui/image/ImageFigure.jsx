/*
  NOTE: 이미지 관련 공통 컴포넌트를 모아둔 파일입니다. 특정 비율/가로세로 크기에 맞춰 이미지를 가운데 기준으로 자를 수 있습니다.
  NOTE: 예시) <ImageFigure><img src={image.url} /></ImageFigure>
*/

import React from "react";
import styled from "@emotion/styled";

const Container = styled.figure(({ ratio, radius, width, height }) => ({
  position: "relative",
  width: width ? width : "100%",
  height: height ? height : "100%",
  minHeight: "auto",
  aspectRatio: ratio ? ratio : "1 / 1",
  borderRadius: radius ? radius : 0,
  overflow: "hidden",

  img: {
    position: "absolute",
    width: "100%",
    height: "100%",
    objectFit: "cover",
    inset: 0,
  },
}));

const ImageFigure = ({ children, ratio, radius, width, height }) => {
  return (
    <Container ratio={ratio} radius={radius} width={width} height={height}>
      {children}
    </Container>
  );
};

export default ImageFigure;

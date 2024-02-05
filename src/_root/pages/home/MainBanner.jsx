import React from "react";
import { image } from "@/theme";
import styled from "@emotion/styled";
import { ImageFigure } from "@/components/ui/image";
import { useMediaQuery } from "react-responsive";

const Container = styled.div(() => ({}));

const MainBannerImage = styled.figure(() => ({
  overflow: "hidden",
}));

const MainBanner = () => {
  const isDesktop = useMediaQuery({ minWidth: 1240 });

  return (
    <Container>
      <MainBannerImage>
        <ImageFigure ratio={isDesktop ? "3 / 1" : "1 / 1"}>
          <img src={image.banner01} alt="낙엽을 밟고 있는 발" />
        </ImageFigure>
      </MainBannerImage>
    </Container>
  );
};

export default MainBanner;

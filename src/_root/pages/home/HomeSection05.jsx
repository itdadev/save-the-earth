import React from "react";
import { image } from "@/theme";
import styled from "@emotion/styled";
import { Flex } from "antd";

import { CommonContainer } from "@/components/ui/container";
import { Link } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import { mq } from "@/libs/react-responsive/mediaQuery";

const Container = styled(Flex)(({ theme }) => ({
  padding: "1rem 3rem",
  borderRadius: "10rem",
  background: theme.color.black01,
  color: "white",
  fontSize: "1.6rem",

  [mq("desktop")]: {
    padding: "3rem 9rem",
    fontSize: "4rem",
  },
}));

const TextWrapper = styled(Flex)(() => ({
  gap: "0 1.6rem",

  [mq("desktop")]: {
    gap: "0 3rem",
  },
}));
const HomeSection05 = () => {
  const isDesktop = useMediaQuery({ minWidth: 1240 });

  return (
    <CommonContainer>
      <Link to="/environment-calendar">
        <Container align="center" justify="space-between">
          <img
            src={image.calendarIcon.default}
            alt="달력 아이콘"
            width={isDesktop ? 90 : 32}
          />

          <TextWrapper align="center">
            <p>환경달력 보러가기</p>

            <img
              src={image.rightArrowIcon.default}
              alt="오른쪽 화살표 아이콘"
              width={isDesktop ? 20 : 8}
            />
          </TextWrapper>
        </Container>
      </Link>
    </CommonContainer>
  );
};

export default HomeSection05;

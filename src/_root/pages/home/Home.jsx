// NOTE: 메인 화면 부모 컴포넌트입니다. 섹션 1, 2, 3을 import합니다.
import React from "react";
import styled from "@emotion/styled";

import {
  HomeSection01,
  HomeSection02,
  HomeSection03,
  HomeSection04,
  HomeSection05,
  MainBanner,
} from "@/_root/pages/home/index";
import { color } from "@/theme";
import { mq } from "@/lib/react-responsive/mediaQuery";

const Container = styled.div(() => ({}));

const Wrapper = styled.section(({ color = "white" }) => ({
  width: "100%",
  padding: "5rem 0",
  background: color,

  [mq("desktop")]: {
    padding: "9rem 0",
  },
}));

const Home = () => {
  return (
    <Container>
      <MainBanner />

      {/* Section 01: 세이브더얼스 */}
      <Wrapper>
        <HomeSection01 />
      </Wrapper>

      {/* Section 02: 캠페인 & 활동 */}
      <Wrapper color={color.secondary01}>
        <HomeSection02 />
      </Wrapper>

      {/* Section 03: 자연과 인간의 균형있는 공존 */}
      <Wrapper color={color.primary01}>
        <HomeSection03 />
      </Wrapper>

      {/* Section 04: 작은 행동 실천 */}
      <Wrapper>
        <HomeSection04 />
      </Wrapper>

      <Wrapper color={color.blue01}>
        <HomeSection05 />
      </Wrapper>
    </Container>
  );
};

export default Home;

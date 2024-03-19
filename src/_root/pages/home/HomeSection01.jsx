import React from "react";
import { image } from "@/theme";
import { Flex } from "antd";
import styled from "@emotion/styled";

import CommonContainer from "@/components/ui/container/CommonContainer";
import { mq } from "@/libs/react-responsive/mediaQuery";

const Container = styled(Flex)(() => ({
  flexDirection: "column",
  padding: "9rem 0",
  alignItems: "center",
  justifyContent: "center",
  textAlign: "center",

  [mq("desktop")]: {
    flexDirection: "row",
  },
}));

const StyledImage = styled.img(() => ({
  width: "7rem",

  [mq("desktop")]: {
    width: "17rem",
  },
}));

const Title = styled.header(({ theme }) => ({
  fontSize: "3.2rem",
  fontWeight: theme.fontWeight.bold,

  [mq("desktop")]: {
    fontSize: "4.8rem",
  },
}));

const Description = styled.p(({ theme }) => ({
  fontSize: "1.6rem",

  [mq("desktop")]: {
    fontSize: "2.6rem",
  },
}));

const HomeSection01 = () => {
  return (
    <CommonContainer>
      <Container gap="1rem 6rem">
        <StyledImage src={image.planetEarth.default} alt="지구 아이콘" />

        <Flex vertical>
          <Title>세이브더얼스</Title>

          <Description>
            ‘자연과 인간의 균형 있는 공존’에 대하여 연구하고, 이를 실행하기 위한
            다양한 실천안을만들고 전파하여 더 많은 사람들이 환경에 대한 올바른
            인식을 가지도록 노력할 것입니다. 작은 한걸음이 미래를 바꾸듯 조금씩,
            명확하게 ‘작은행동실천’을 만들어가려 합니다.
          </Description>
        </Flex>
      </Container>
    </CommonContainer>
  );
};

export default HomeSection01;

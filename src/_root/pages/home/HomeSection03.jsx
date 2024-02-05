import React from "react";
import styled from "@emotion/styled";
import { useMediaQuery } from "react-responsive";
import { Flex } from "antd";
import { image } from "@/theme";

import { TitleTag } from "@/components/shared/item";
import { CommonContainer } from "@/components/ui/container";
import { IsDesktop, mq } from "@/lib/react-responsive/mediaQuery";
import { useTheme } from "@emotion/react";
import { CORE_VALUE_ARR } from "@/constants/staticInformation";

const Wrapper = styled(Flex)(() => ({
  flexDirection: "column-reverse",

  [mq("desktop")]: {
    flexDirection: "row",
  },
}));

const CoreValueWrapper = styled(Flex)(() => ({
  width: "100%",

  [mq("desktop")]: {
    width: "60%",
  },
}));

const CoreValueItem = styled(Flex)(() => ({
  width: "100%",
  maxWidth: "26rem",
  padding: "2rem",
  background: "white",
  borderRadius: "1rem",
  textAlign: "center",
  fontSize: "1.2rem",

  [mq("desktop")]: {
    fontSize: "1.6rem",
  },
}));

const CoreValueTitle = styled.header(({ theme }) => ({
  fontSize: "2rem",
  color: theme.color.primary02,
  fontWeight: theme.fontWeight.bold,

  [mq("desktop")]: {
    fontSize: "3.6rem",
  },
}));

const TextWrapper = styled(Flex)(() => ({
  width: "100%",
  color: "white",
  fontSize: "2.2rem",

  [mq("desktop")]: {
    width: "40%",
  },
}));

const TextTitle = styled.header(({ theme }) => ({
  marginBottom: "3.5rem",
  textAlign: "center",
  fontSize: "2.6rem",
  fontWeight: theme.fontWeight.bold,

  [mq("desktop")]: {
    marginBottom: 0,
    fontSize: "4rem",
  },
}));

const HomeSection03 = () => {
  const theme = useTheme();
  const isDesktop = useMediaQuery({ minWidth: 1240 });

  return (
    <CommonContainer>
      <Wrapper align="center" justify="space-between" gap="0 3rem">
        <CoreValueWrapper gap="0 1.4rem">
          {CORE_VALUE_ARR.map(value => {
            return (
              <CoreValueItem
                vertical
                align="center"
                justify="center"
                gap="1.4rem 0"
                key={value.id}
              >
                <img
                  src={value.src}
                  alt={value.title}
                  width={isDesktop ? 110 : 50}
                />

                <CoreValueTitle>{value.title}</CoreValueTitle>

                <p>{value.description}</p>
              </CoreValueItem>
            );
          })}
        </CoreValueWrapper>

        <TextWrapper vertical gap="1rem 0">
          <TitleTag
            title="핵심 가치"
            bgColor="white"
            textColor={theme.color.primary01}
          />

          <TextTitle>
            <IsDesktop>
              <p>자연과 인간의</p>
            </IsDesktop>

            <p>균형있는 공존</p>
          </TextTitle>

          <IsDesktop>
            <p>
              자연의 경계를 존중하며, 인간의 발전과 자연의 복원을 조화롭게
              이루어 낼 때 우리는 균형있는 공존을 할 수 있을 것입니다.사단법인
              세이브더얼스는 지속 가능한 미래를 위해 위해 움직이고, 행동하며,
              실천하여 자연과 인간의 조화로운 공존을 추구하고 더 나은 세상을
              만들어 나가도록 노력할 것입니다.
            </p>
          </IsDesktop>
        </TextWrapper>
      </Wrapper>
    </CommonContainer>
  );
};

export default HomeSection03;

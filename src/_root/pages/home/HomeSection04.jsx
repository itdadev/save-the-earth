import React from "react";
import styled from "@emotion/styled";
import { Flex } from "antd";

import { CommonContainer } from "@/components/ui/container";
import { IsDesktop, mq } from "@/libs/react-responsive/mediaQuery";
import { ActionList, TitleTag } from "@/components/shared/item";

const TitleWrapper = styled.div(() => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  marginBottom: "4rem",

  [mq("desktop")]: {
    gap: "0 4.2rem",
    marginBottom: "9rem",
  },
}));

const TagWrapper = styled(Flex)(() => ({
  minWidth: "24rem",
}));

const CoreValueTitle = styled.div(({ theme }) => ({
  fontSize: "2.6rem",
  fontWeight: theme.fontWeight.bold,

  [mq("desktop")]: {
    fontSize: "3.8rem",
  },
}));

const CoreValueDescription = styled.p(({ theme }) => ({
  fontSize: "2.2rem",
}));

const HomeSection04 = () => {
  return (
    <CommonContainer>
      <div>
        <TitleWrapper>
          <TagWrapper vertical justify="center" align="center">
            <TitleTag title="핵심 가치" />

            <CoreValueTitle>작은 행동 실현</CoreValueTitle>
          </TagWrapper>

          <IsDesktop>
            <CoreValueDescription>
              탄소 중립을 달성하기 위해 우리는 다양한 작은 실천을 통해
              일상생활에서 탄소 배출을 줄일 수 있습니다. 이러한 작은 행동은 지속
              가능한 미래를 향한 중요한 단계이며 더 나은 환경을 위해 함께
              노력하는 우리의 가치를 반영합니다.
            </CoreValueDescription>
          </IsDesktop>
        </TitleWrapper>

        <ActionList />
      </div>
    </CommonContainer>
  );
};

export default HomeSection04;

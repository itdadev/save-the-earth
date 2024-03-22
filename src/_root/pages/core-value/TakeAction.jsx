import React from "react";

import { image } from "@/theme";
import styled from "@emotion/styled";
import { Flex } from "antd";

import {
  CommonContainer,
  CommonPageContainer,
} from "@/components/ui/container";
import {
  CommonDescriptionOne,
  CommonTitleTwo,
} from "@/components/ui/fonts/Fonts";
import { ActionList } from "@/components/shared/item";
import { mq } from "@/libs/react-responsive/mediaQuery";

const Wrapper = styled(Flex)(() => ({
  flexDirection: "column-reverse",

  [mq("desktop")]: {
    flexDirection: "row",
    gap: "0 9rem",
  },
}));

const Image = styled.img(() => ({
  [mq("desktop")]: {
    width: "50rem",
  },
}));

const ListWrapper = styled.div(({ theme }) => ({
  marginTop: "9rem",
  paddingTop: "2rem",

  borderTop: `1px solid ${theme.color.grey05}`,
  borderBottom: `1px solid ${theme.color.grey05}`,

  [mq("desktop")]: {
    padding: "7.2rem 0",
    borderTop: `1px solid ${theme.color.black01}`,
    borderBottom: `1px solid ${theme.color.black01}`,
  },
}));

const TakeAction = () => {
  return (
    <CommonPageContainer>
      <CommonContainer>
        <Wrapper>
          <Image src={image.takeAction} alt="재활용품들고 있는 남자" />

          <Flex gap="3rem 0" vertical>
            <CommonTitleTwo>탄소중립을 위한 작은 행동실천</CommonTitleTwo>

            <CommonDescriptionOne>
              탄소 중립을 달성하기 위해 우리는 다양한 작은 실천을 통해
              일상생활에서 탄소 배출을 줄일 수 있습니다. 이러한 작은 행동은 지속
              가능한 미래를 향한 중요한 단계이며 더 나은 환경을 위해 함께
              노력하는 우리의 가치를 반영합니다.
            </CommonDescriptionOne>
          </Flex>
        </Wrapper>

        <ListWrapper>
          <ActionList />
        </ListWrapper>
      </CommonContainer>
    </CommonPageContainer>
  );
};

export default TakeAction;

import React from "react";
import { IsDefault, IsDesktop, mq } from "@/libs/react-responsive/mediaQuery";
import { useMediaQuery } from "react-responsive";
import { image } from "@/theme";
import styled from "@emotion/styled";
import { Flex } from "antd";

const Container = styled.div(() => ({
  display: "flex",
  flexDirection: "column",
  flexWrap: "wrap",
  gap: "2rem",
  justifyContent: "center",

  [mq("desktop")]: {
    flexDirection: "row",
    justifyContent: "space-between",
    gap: "8rem",
  },
}));

const ActionItem = styled(Flex)(({ theme }) => ({
  alignItems: "center",
  color: theme.color.primary01,
  padding: "0 2rem 2rem",
  gap: "0 1.6rem",
  minHeight: "9rem",

  "&:not(:last-of-type)": {
    borderBottom: `1px solid ${theme.color.grey04}`,
  },

  "&:nth-of-type(2n - 1)": {
    color: theme.color.secondary01,
  },

  [mq("desktop")]: {
    width: "calc(50% - 8rem)",
    padding: 0,
    gap: "0 3rem",

    "&:not(:last-of-type)": {
      border: "none",
    },
  },
}));

const ActionTitle = styled.header(({ theme }) => ({
  flex: 1,
  display: "flex",
  alignItems: "center",
  gap: "0 0.6rem",
  fontSize: "2.2rem",
  fontWeight: theme.fontWeight.bold,
  whiteSpace: "nowrap",
  minWidth: "20rem",

  [mq("desktop")]: {
    fontSize: "3.6rem",
    alignItems: "flex-end",
  },
}));

const ActionSubTitle = styled.header(({ theme }) => ({
  fontSize: "2.4rem",
  fontWeight: theme.fontWeight.regular,
}));

const ActionDescription = styled.header(({ theme }) => ({
  fontSize: "1.6rem",
  color: theme.color.black01,
  minWidth: "18rem",

  li: {
    listStyle: "disc",
  },

  [mq("desktop")]: {
    fontSize: "2.4rem",
  },
}));

const ActionTexts = styled(Flex)(() => ({
  justifyContent: "space-between",
  width: "100%",
  gap: "0 1.4rem",

  [mq("desktop")]: {
    flexDirection: "column",
  },
}));

const ItemBox = styled.div(() => ({
  display: "flex",
  gap: "0.4rem",

  [mq("desktop")]: {
    flexDirection: "row",
  },
}));
const ActionList = () => {
  const isDesktop = useMediaQuery({ minWidth: 1240 });

  const actionArr = [
    {
      id: 1,
      title: "에너지",
      subTitle: "Energy",
      list: ["절약 습관 만들기", "효율개선 제품사용"],
      src: image.action01.default,
    },
    {
      id: 2,
      title: "생활습관",
      subTitle: "lifestyle",
      list: ["물 사용량 줄이기", "불필요한 불 소등", "제품 구매시 포장 줄이기"],
      src: image.action02.default,
    },
    {
      id: 3,
      title: "식습관",
      subTitle: "Eating habits",
      list: ["지역 농산물 구매", "채식 위주의 건강 식습관"],
      src: image.action03.default,
    },
    {
      id: 4,
      title: "교통",
      subTitle: "traffic",
      list: ["대중교통 이용하기", "동승하기", "걷거나 자전거 타기"],
      src: image.action04.default,
    },
    {
      id: 5,
      title: "생활 쓰레기",
      subTitle: "Recycling",
      list: ["분리배출", "자연친화적 제품 사용"],
      src: image.action05.default,
    },
  ];

  return (
    <Container>
      {actionArr.map(action => {
        return (
          <ActionItem key={action.id} align="center">
            <IsDesktop>
              <img
                src={action.src}
                alt={action.title}
                width={isDesktop ? 130 : 45}
              />
            </IsDesktop>

            <ActionTexts gap="1rem 1.4rem" wrap="wrap">
              <ActionTitle>
                <Flex gap="0 1rem" align="center">
                  <IsDefault>
                    <img src={action.src} alt={action.title} width={20} />
                  </IsDefault>
                  {action.title}
                </Flex>

                <IsDesktop>
                  <ActionSubTitle>{action.subTitle}</ActionSubTitle>
                </IsDesktop>
              </ActionTitle>

              <ActionDescription>
                {action.list.map(item => {
                  return (
                    <ItemBox key={item}>
                      <span>•</span>
                      <span>{item}</span>
                    </ItemBox>
                  );
                })}
              </ActionDescription>
            </ActionTexts>
          </ActionItem>
        );
      })}
    </Container>
  );
};

export default ActionList;

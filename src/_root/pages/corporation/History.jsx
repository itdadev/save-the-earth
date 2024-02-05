import React from "react";
import styled from "@emotion/styled";
import { Flex } from "antd";

import {
  CommonContainer,
  CommonPageContainer,
} from "@/components/ui/container";
import {
  OFFLINE_HISTORY_ARR,
  ONLINE_HISTORY_ARR,
} from "@/constants/staticInformation";
import { CommonTitleTwo } from "@/components/ui/fonts/Fonts";
import { mq } from "@/lib/react-responsive/mediaQuery";

const Container = styled(Flex)(() => ({
  flexDirection: "column",

  [mq("desktop")]: {
    flexDirection: "row",
  },
}));

const EachRow = styled.div(({ theme }) => ({
  borderLeft: `1px solid ${theme.color.black01}`,
  paddingLeft: "3.2rem",

  [mq("desktop")]: {
    paddingLeft: "6rem",
  },
}));

const Wrapper = styled.div(() => ({
  marginBottom: "2rem",
}));

const Year = styled.div(({ theme }) => ({
  marginBottom: "2rem",
  fontWeight: theme.fontWeight.bold,
  color: theme.color.primary02,
  fontSize: "2.2rem",

  [mq("desktop")]: {
    fontSize: "3.6rem",
    marginBottom: "3rem",
  },
}));

const Month = styled.div(({ theme }) => ({
  position: "relative",
  minWidth: "3.2rem",
  height: "fit-content",
  lineHeight: 1,
  fontWeight: theme.fontWeight.bold,
  fontSize: "2rem",

  ":before": {
    position: "absolute",
    content: '" "',
    display: "block",
    left: "-3.8rem",
    top: "50%",
    transform: "translateY(-50%)",
    width: "1rem",
    height: "1rem",
    borderRadius: "50%",
    background: theme.color.black01,
  },

  [mq("desktop")]: {
    fontSize: "3rem",
    minWidth: "5rem",

    ":before": {
      left: "-6.8rem",
      width: "1.6rem",
      height: "1.6rem",
    },
  },
}));

const TitleWrapper = styled.header(() => ({
  marginBottom: "4.8rem",

  [mq("desktop")]: {
    marginBottom: "8rem",
  },
}));

const Title = styled.header(() => ({
  fontSize: "1.6rem",

  [mq("desktop")]: {
    fontSize: "2.2rem",
  },
}));

const Description = styled.div(({ theme }) => ({
  fontSize: "1.4rem",
  color: theme.color.primary02,
}));

const Buttons = styled(Flex)(() => ({
  gap: "0 1rem",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",

  [mq("desktop")]: {
    gap: "0 2rem",
  },
}));

const Button = styled.div(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  borderRadius: "6rem",
  fontSize: "1.4rem",
  minWidth: "10rem",
  height: "3rem",
  fontWeight: theme.fontWeight.bold,
  border: `1px solid ${theme.color.black01}`,

  [mq("desktop")]: {
    minWidth: "20rem",
    height: "6rem",
    fontSize: "2.4rem",
  },
}));

const History = () => {
  return (
    <CommonPageContainer>
      <CommonContainer>
        <TitleWrapper>
          <CommonTitleTwo>연혁 및 주요활동</CommonTitleTwo>

          <Buttons>
            <Button>오프라인</Button>

            <Button>온라인</Button>
          </Buttons>
        </TitleWrapper>

        <Container>
          <EachRow>
            {OFFLINE_HISTORY_ARR.map(offlineHistory => {
              return (
                <div key={offlineHistory.id}>
                  <Year>{offlineHistory.year}</Year>

                  {offlineHistory.months.map(month => {
                    return (
                      <Flex key={month.id} gap="0 1rem">
                        <Month>{month.month}</Month>

                        <Wrapper gap="2rem 0" vertical>
                          {month.events.map(event => {
                            return (
                              <div key={event.id}>
                                <Title>{event.title}</Title>

                                <Description>{event.description}</Description>
                              </div>
                            );
                          })}
                        </Wrapper>
                      </Flex>
                    );
                  })}
                </div>
              );
            })}
          </EachRow>

          <EachRow>
            {ONLINE_HISTORY_ARR.map(offlineHistory => {
              return (
                <div key={offlineHistory.id}>
                  <Year>{offlineHistory.year}</Year>

                  {offlineHistory.months.map(month => {
                    return (
                      <Flex key={month.id} gap="0 1rem">
                        <Month>{month.month}</Month>

                        <Wrapper gap="2rem 0" vertical>
                          {month.events.map(event => {
                            return (
                              <div key={event.id}>
                                <Title>{event.title}</Title>

                                <Description>{event.description}</Description>
                              </div>
                            );
                          })}
                        </Wrapper>
                      </Flex>
                    );
                  })}
                </div>
              );
            })}
          </EachRow>
        </Container>
      </CommonContainer>
    </CommonPageContainer>
  );
};

export default History;

import React from "react";
import styled from "@emotion/styled";
import { Flex } from "antd";
import dayjs from "dayjs";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

import {
  CommonContainer,
  CommonPageContainer,
} from "@/components/ui/container";
import { CommonTitleTwo } from "@/components/ui/fonts/Fonts";
import { HISTORY_LIST_QUERY_KEY } from "@/constants/queryKeys";
import { HISTORY_API_URL } from "@/constants/apiUrls";
import { ImageFigure } from "@/components/ui/image";
import { IsDefault, IsDesktop, mq } from "@/libs/react-responsive/mediaQuery";

const Container = styled(Flex)(() => ({
  flexDirection: "column",

  [mq("desktop")]: {
    flexDirection: "row",
  },
}));

const Block = styled(Flex)(() => ({
  width: "100%",

  [mq("desktop")]: {
    width: "50%",
    marginBottom: "3rem",
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
    marginBottom: "1rem",
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
    background: theme.color.grey06,
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

const MobileButton = styled.div(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  borderRadius: "6rem",
  fontSize: "1.4rem",
  maxWidth: "10rem",
  margin: "3.4rem 0",
  height: "3rem",
  fontWeight: theme.fontWeight.bold,
  border: `1px solid ${theme.color.black01}`,

  [mq("desktop")]: {
    minWidth: "20rem",
    height: "6rem",
    fontSize: "2.4rem",
  },
}));

const ImageWrapper = styled.div(() => ({
  marginBottom: "2rem",
  maxWidth: "95%",

  [mq("desktop")]: {
    maxWidth: "90%",
  },
}));

const History = () => {
  const { data: offlineHistory } = useQuery({
    queryKey: [HISTORY_LIST_QUERY_KEY],
    queryFn: async () => await axios.get(`${HISTORY_API_URL}`),
    select: data => {
      return data?.data?.data?.offline.sort(
        (a, b) => new Date(b.history_date) - new Date(a.history_date),
      );
    },
  });

  const { data: onlineHistory } = useQuery({
    queryKey: [HISTORY_LIST_QUERY_KEY],
    queryFn: async () => await axios.get(`${HISTORY_API_URL}`),
    select: data => {
      return data?.data?.data?.online.sort(
        (a, b) => new Date(b.history_date) - new Date(a.history_date),
      );
    },
  });

  const renderHistory = history => {
    let prevYear = null;

    return history?.map(item => {
      const day = dayjs(item.history_date);
      const year = day.year();

      const yearComponent = prevYear !== year ? <Year>{year}</Year> : null;

      prevYear = year;

      return (
        <div key={item.history_seq}>
          {yearComponent}

          <Flex gap="0 1rem">
            <Month>{day.month() + 1}</Month>

            <Wrapper gap="2rem 0" vertical>
              <div>
                <Title>{item.history_title}</Title>

                <Description>{item.history_content}</Description>
              </div>
            </Wrapper>
          </Flex>

          {item.image_url && (
            <ImageWrapper>
              <img src={item.image_url} alt={item.history_title} width="100%" />
            </ImageWrapper>
          )}
        </div>
      );
    });
  };

  return (
    <CommonPageContainer>
      <CommonContainer>
        <TitleWrapper>
          <CommonTitleTwo>연혁 및 주요활동</CommonTitleTwo>
        </TitleWrapper>

        <Container>
          <Block vertical>
            <IsDefault>
              <MobileButton>오프라인</MobileButton>
            </IsDefault>

            <IsDesktop>
              <MobileButton>오프라인</MobileButton>
            </IsDesktop>

            <EachRow>{renderHistory(offlineHistory)}</EachRow>
          </Block>

          <Block vertical>
            <IsDefault>
              <MobileButton>온라인</MobileButton>
            </IsDefault>

            <IsDesktop>
              <MobileButton>온라인</MobileButton>
            </IsDesktop>

            <EachRow>{renderHistory(onlineHistory)}</EachRow>
          </Block>
        </Container>
      </CommonContainer>
    </CommonPageContainer>
  );
};

export default History;

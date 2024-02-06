import React, { useRef } from "react";
import { Flex } from "antd";
import styled from "@emotion/styled";

import {
  CommonContainer,
  CommonPageContainer,
} from "@/components/ui/container";
import { CommonTitleTwo } from "@/components/ui/fonts/Fonts";
import { CustomFullCalendar } from "@/components/ui/calendar";
import { GetDate, GetDay, GetMonth } from "@/utils/Functions";
import { mq } from "@/lib/react-responsive/mediaQuery";

const EventList = styled.div(() => ({
  marginTop: "6rem",
}));

const EventItem = styled(Flex)(() => ({
  marginBottom: "4rem",
}));

const EventTitle = styled.div(({ theme }) => ({
  fontSize: "2rem",
  fontWeight: theme.fontWeight.bold,

  [mq("desktop")]: {
    fontSize: "2.8rem",
  },
}));

const Month = styled.div(({ theme }) => ({
  marginBottom: "3.2rem",
  fontSize: "2.8rem",
  lineHeight: "normal",
  textTransform: "uppercase",
  fontWeight: theme.fontWeight.bold,

  [mq("desktop")]: {
    fontSize: "3.2rem",
  },
}));

const Day = styled.div(({ theme }) => ({
  fontSize: "1.4rem",
  lineHeight: "normal",
  textTransform: "uppercase",
  color: theme.color.grey01,
}));

const DateText = styled.div(({ theme }) => ({
  fontSize: "1.8rem",
  color: theme.color.tertiary,
  fontWeight: theme.fontWeight.bold,
  lineHeight: "normal",

  [mq("desktop")]: {
    fontSize: "2.4rem",
  },
}));

const EnvironmentCalendar = () => {
  const listRef = useRef([]);

  const events = [
    { title: "세계 습지의 날", start: new Date("2024-2-2") },
    { title: "세계 고래의 날", start: new Date("2024-2-18") },
    { title: "세계 야생 동식물의 날", start: new Date("2024-3-3") },
    { title: "국립공원의 날", start: new Date("2024-3-3") },
    { title: "흙의 날", start: new Date("2024-3-11") },
    { title: "세계 재활용의 날", start: new Date("2024-3-18") },
    { title: "세계 숲(삼림)의 날", start: new Date("2024-3-21") },
    { title: "세계 물의 날", start: new Date("2024-3-22") },
    { title: "세계 기상의 날", start: new Date("2024-3-23") },
    { title: "세계 불(전기)끄는 날", start: new Date("2024-3-30") },
  ];

  return (
    <CommonPageContainer>
      <CommonContainer>
        <CommonTitleTwo>환경 달력</CommonTitleTwo>

        <CustomFullCalendar events={events} listRef={listRef} />

        <EventList>
          <Month>{GetMonth(events[0].start)}</Month>

          {events.map((event, idx) => {
            return (
              <EventItem
                gap="0 2rem"
                align="center"
                ref={elem => (listRef.current[idx] = elem)}
                key={event.title}
              >
                <Flex vertical align="center">
                  <Day>{GetDay(event.start)}</Day>

                  <DateText>{GetDate(event.start)}</DateText>
                </Flex>

                <EventTitle>{event.title}</EventTitle>
              </EventItem>
            );
          })}
        </EventList>
      </CommonContainer>
    </CommonPageContainer>
  );
};

export default EnvironmentCalendar;

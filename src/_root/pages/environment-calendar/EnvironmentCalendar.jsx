import React, { useEffect, useRef, useState } from "react";
import { Flex } from "antd";
import axios from "axios";
import styled from "@emotion/styled";
import { useQuery } from "@tanstack/react-query";

import {
  CommonContainer,
  CommonPageContainer,
} from "@/components/ui/container";
import { CommonTitleTwo } from "@/components/ui/fonts/Fonts";
import { ENVIRONMENT_API_URL } from "@/constants/apiUrls";
import { CustomFullCalendar } from "@/components/ui/calendar";
import { CALENDAR_LIST_QUERY_KEY } from "@/constants/queryKeys";
import { changeCalendarDateFormat, GetDate, GetDay } from "@/utils/Functions";
import { mq } from "@/libs/react-responsive/mediaQuery";

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
  const [body, setBody] = useState({
    calendarEvent: {},
    currentMonthEvent: {},
  });

  const listRef = useRef();

  const { data: environmentEvents } = useQuery({
    queryKey: [CALENDAR_LIST_QUERY_KEY, body],
    queryFn: async () =>
      await axios.get(
        `${ENVIRONMENT_API_URL}?date_from=${body.calendarEvent.date_from}&date_to=${body.calendarEvent.date_to}&month_prev=${body.calendarEvent.month_prev}&month_current=${body.calendarEvent.month_current}&month_next=${body.calendarEvent.month_next}`,
      ),
    select: data => {
      return changeCalendarDateFormat(data);
    },
    enabled: body.calendarEvent !== {},
  });

  const { data: currentMonthEvents } = useQuery({
    queryKey: ["currentMonthEvents", body],
    queryFn: async () =>
      await axios.get(
        `${ENVIRONMENT_API_URL}?date_from=${body.currentMonthEvent.date_from}&date_to=${body.currentMonthEvent.date_to}&month_prev=${body.currentMonthEvent.month_prev}&month_current=${body.currentMonthEvent.month_current}&month_next=${body.currentMonthEvent.month_next}`,
      ),
    select: data => {
      return changeCalendarDateFormat(data);
    },
    enabled: body.currentMonthEvent !== {},
  });

  return (
    <CommonPageContainer>
      <CommonContainer>
        <CommonTitleTwo>환경 달력</CommonTitleTwo>

        <CustomFullCalendar
          events={environmentEvents}
          setBody={setBody}
          listRef={listRef}
        />

        {currentMonthEvents && (
          <EventList ref={listRef}>
            <Month>
              {body?.currentMonthEvent.month_current.replace("0", "")}월
            </Month>

            {currentMonthEvents
              ?.sort((a, b) => new Date(a.start) - new Date(b.start))
              ?.map(event => {
                return (
                  <EventItem gap="0 2rem" align="center" key={event.title}>
                    <Flex vertical align="center">
                      <Day>{GetDay(event.start)}</Day>

                      <DateText>{GetDate(event.start)}</DateText>
                    </Flex>

                    <EventTitle>{event.title}</EventTitle>
                  </EventItem>
                );
              })}
          </EventList>
        )}
      </CommonContainer>
    </CommonPageContainer>
  );
};

export default EnvironmentCalendar;

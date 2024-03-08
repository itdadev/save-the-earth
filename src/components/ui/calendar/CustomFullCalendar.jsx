import React, { useCallback } from "react";
import styled from "@emotion/styled";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import rrulePlugin from "@fullcalendar/rrule";
import { Badge } from "antd";
import { HEADER_MOBILE_HEIGHT, HEADER_WEB_HEIGHT } from "@/constants/zIndex";
import dayjs from "dayjs";

const DateItemWrapper = styled.div(() => ({
  cursor: "pointer",
}));

const DateItem = styled(Badge)(() => ({
  padding: "0 0.6rem",
  color: "white !important",
}));
const CustomFullCalendar = ({ events, setBody, listRef }) => {
  const scrollIntoList = useCallback(() => {
    if (matchMedia("screen and (min-width: 1024px)").matches) {
      listRef.current.style.scrollMargin = 146;
    } else {
      listRef.current.style.scrollMargin = 48;
    }

    listRef.current.scrollIntoView({
      behavior: "smooth",
      block: "nearest",
      inline: "center",
    });
  }, [listRef?.current]);

  const renderEventContent = eventInfo => {
    return (
      <DateItemWrapper onClick={() => scrollIntoList(0)}>
        <DateItem status="error" text={eventInfo.event.title} />
      </DateItemWrapper>
    );
  };

  return (
    <FullCalendar
      plugins={[dayGridPlugin, rrulePlugin]}
      eventContent={renderEventContent}
      initialView="dayGridMonth"
      locale="kr"
      events={events}
      datesSet={function (dateInfo) {
        const dateFrom = dayjs(dateInfo.startStr)
          .subtract(1, "month")
          .format("YYYY-MM");
        const dateTo = dayjs(dateInfo.startStr)
          .add(1, "month")
          .format("YYYY-MM");

        setBody({
          calendarEvent: {
            date_from: dateFrom,
            date_to: dateTo,
            month_prev: dayjs(dateFrom).format("MM"),
            month_current: dayjs(dateInfo.startStr).format("MM"),
            month_next: dayjs(dateTo).format("MM"),
          },
          currentMonthEvent: {
            date_from: dateTo,
            date_to: dateTo,
            month_prev: dayjs(dateInfo.startStr).format("MM"),
            month_current: dayjs(dateInfo.startStr).format("MM"),
            month_next: dayjs(dateInfo.startStr).format("MM"),
          },
        });
      }}
    />
  );
};

export default CustomFullCalendar;

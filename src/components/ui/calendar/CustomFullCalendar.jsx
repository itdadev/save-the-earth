import React, { useCallback, useEffect, useRef } from "react";
import styled from "@emotion/styled";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import rrulePlugin from "@fullcalendar/rrule";
import listPlugin from "@fullcalendar/list";
import { Badge } from "antd";
import dayjs from "dayjs";
import { useMediaQuery } from "react-responsive";

const DateItemWrapper = styled.div(() => ({
  cursor: "pointer",
}));

const DateItem = styled(Badge)(() => ({
  padding: "0 0.6rem",
  color: "white !important",
}));
const CustomFullCalendar = ({ events, setBody, listRef }) => {
  const isMobile = useMediaQuery({ maxWidth: 767 });

  const calendarRef = useRef(null);

  const scrollIntoList = useCallback(() => {
    listRef.current.scrollIntoView({
      behavior: "smooth",
    });
  }, [listRef?.current]);

  // useEffect(() => {
  //   if (calendarRef.current && isMobile) {
  //     calendarRef.current.getApi().changeView("listWeek");
  //   } else {
  //     calendarRef.current.getApi().changeView("dayGridMonth");
  //   }
  // }, [isMobile]);

  const renderEventContent = eventInfo => {
    return (
      <DateItemWrapper onClick={() => scrollIntoList(0)}>
        <DateItem status="error" text={eventInfo.event.title} />
      </DateItemWrapper>
    );
  };

  return (
    <FullCalendar
      plugins={[dayGridPlugin, rrulePlugin, listPlugin]}
      eventContent={renderEventContent}
      initialView="dayGridMonth"
      locale="kr"
      buttonText={{
        today: "오늘",
      }}
      ref={calendarRef}
      events={events}
      datesSet={function (dateInfo) {
        const dateFrom =
          dayjs(dateInfo.startStr).get("date") > 1
            ? dayjs(dateInfo.startStr).format("YYYY-MM")
            : dayjs(dateInfo.startStr).subtract(1, "month").format("YYYY-MM");

        const dateTo = dayjs(dateInfo.endStr).format("YYYY-MM");

        const dateCurrent = dayjs(dateInfo.endStr)
          .subtract(1, "month")
          .format("YYYY-MM");

        setBody({
          calendarEvent: {
            date_from: dateFrom,
            date_to: dateTo,
            month_prev: dayjs(dateFrom).format("MM"),
            month_current: dayjs(dateCurrent).format("MM"),
            month_next: dayjs(dateTo).format("MM"),
          },
          currentMonthEvent: {
            date_from: dateCurrent,
            date_to: dateCurrent,
            month_prev: dayjs(dateCurrent).format("MM"),
            month_current: dayjs(dateCurrent).format("MM"),
            month_next: dayjs(dateCurrent).format("MM"),
          },
        });
      }}
    />
  );
};

export default CustomFullCalendar;

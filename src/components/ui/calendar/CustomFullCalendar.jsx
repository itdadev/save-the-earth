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

  useEffect(() => {
    if (calendarRef.current && isMobile) {
      calendarRef.current.getApi().changeView("listWeek");
      console.log(calendarRef);
    } else {
      calendarRef.current.getApi().changeView("dayGridMonth");
    }
  }, [isMobile]);

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
      ref={calendarRef}
      events={events}
      datesSet={function (dateInfo) {
        const dateFrom = dayjs(dateInfo.startStr).format("YYYY-MM");
        const dateTo = dayjs(dateInfo.startStr)
          .add(2, "month")
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
            month_prev: dayjs(dateInfo.startStr).add(1, "month").format("MM"),
            month_current: dayjs(dateInfo.startStr)
              .add(1, "month")
              .format("MM"),
            month_next: dayjs(dateInfo.startStr).add(1, "month").format("MM"),
          },
        });
      }}
    />
  );
};

export default CustomFullCalendar;

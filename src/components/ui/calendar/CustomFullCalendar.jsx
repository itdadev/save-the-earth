import React, { useCallback } from "react";
import styled from "@emotion/styled";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import { Badge } from "antd";
import { HEADER_MOBILE_HEIGHT, HEADER_WEB_HEIGHT } from "@/constants/zIndex";

const DateItemWrapper = styled.div(() => ({
  cursor: "pointer",
}));

const DateItem = styled(Badge)(() => ({
  padding: "0 0.6rem",
  color: "white !important",
}));

const CustomFullCalendar = ({ events, listRef }) => {
  const scrollIntoList = useCallback(
    idx => {
      if (matchMedia("screen and (min-width: 1024px)").matches) {
        listRef.current[idx].style.scrollMargin = HEADER_WEB_HEIGHT;
      } else {
        listRef.current[idx].style.scrollMargin = HEADER_MOBILE_HEIGHT;
      }

      console.log(listRef.current[idx]);

      listRef?.current[idx].scrollIntoView({
        behavior: "smooth",
        // block: "start",
        // inline: "nearest",
      });
    },
    [listRef?.current],
  );

  const renderEventContent = eventInfo => {
    return (
      <DateItemWrapper onClick={() => scrollIntoList(0)}>
        <DateItem status="error" text={eventInfo.event.title} />
      </DateItemWrapper>
    );
  };

  return (
    <FullCalendar
      plugins={[dayGridPlugin]}
      eventContent={renderEventContent}
      events={events}
      initialView="dayGridMonth"
      locale="kr"
    />
  );
};

export default CustomFullCalendar;

import React from "react";
import { Badge, Calendar } from "antd";
import styled from "@emotion/styled";

const DateEventItem = styled.li(() => ({
  padding: "0 1rem",
  margin: "0 0.5rem",
  boxShadow: "2px 2px 5px rgba(0, 0, 0, 0.2)",
  borderRadius: "0.5rem",
}));
const getListData = value => {
  let listData;

  switch (value.date()) {
    case 2:
      listData = [
        {
          type: "error",
          content: "세계 습지의 날",
        },
      ];
      break;
    case 18:
      listData = [
        {
          type: "error",
          content: "세계 고래의 날",
        },
      ];
      break;
    default:
  }

  return listData || [];
};
const getMonthData = value => {
  if (value.month() === 8) {
    return 1394;
  }
};
const AntdCalendar = () => {
  const monthCellRender = value => {
    const num = getMonthData(value);

    return num ? (
      <div className="notes-month">
        <section>{num}</section>

        <span>Backlog number</span>
      </div>
    ) : null;
  };

  const dateCellRender = value => {
    const listData = getListData(value);

    return (
      <ul className="events">
        {listData.map(item => (
          <DateEventItem key={item.content}>
            <Badge status={item.type} text={item.content} />
          </DateEventItem>
        ))}
      </ul>
    );
  };
  const cellRender = (current, info) => {
    if (info.type === "date") return dateCellRender(current);
    if (info.type === "month") return monthCellRender(current);

    return info.originNode;
  };
  return (
    <Calendar
      cellRender={cellRender}
      onSelect={(date, { source }) => {
        if (source === "date") {
          console.log("Panel Select:", source);
        }
      }}
    />
  );
};

export default AntdCalendar;

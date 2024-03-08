import dayjs from "dayjs";
import "dayjs/locale/ko";

export function DividePerPage(array, itemsPerPage) {
  const length = array.length;
  const divide = Math.floor(length / itemsPerPage);

  const newArray = [];

  for (let i = 0; i <= divide; i++) {
    // 배열 0부터 itemsPerPage 잘라 새 배열에 넣기
    newArray.push(array.splice(0, itemsPerPage));
  }

  return newArray;
}

export function GetDay(date) {
  return dayjs(new Date(date)).locale("ko").format("ddd");
}

export function GetDate(date) {
  return dayjs(new Date(date)).format("DD");
}

export function GetMonth(date) {
  return dayjs(new Date(date)).locale("ko").format("MMMM");
}

export function changeCalendarDateFormat(data) {
  const result = data?.data.data;
  return result.map(event => {
    const startDate = dayjs(event.event_date)
      .subtract(100, "year")
      .format("YYYY-MM-DD");
    const dateFormatted = dayjs(event.event_date).format("YYYY-MM-DD");

    return {
      id: event.event_seq,
      title: event.event_title,
      start: new Date(dateFormatted),
      allDay: true,
      rrule: event.event_repeat ? { freq: "yearly", dtstart: startDate } : null,
    };
  });
}

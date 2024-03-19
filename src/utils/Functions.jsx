import dayjs from "dayjs";
import "dayjs/locale/ko";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

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

export function changeDateKorean(dateString) {
  const date = new Date(dateString);

  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");

  return `${year}년 ${month}월 ${day}일`;
}

export function changeBirthFormat(data) {
  return dayjs(data).format("YYYY-MM-DD");
}

export function changePhoneFormat(data) {
  return data
    ?.replace(/[^0-9]/g, "")
    .replace(/^(\d{0,3})(\d{0,4})(\d{0,4})$/g, "$1-$2-$3")
    .replace(/(-{1,2})$/g, "");
}

// FUNCTION : 핸드폰 번호 입력시 "-" 추가
export function changeInputPhoneFormat(e, setValue) {
  e.target.value = e.target.value
    .replace(/[^0-9]/g, "")
    .replace(/^(\d{0,3})(\d{0,4})(\d{0,4})$/g, "$1-$2-$3")
    .replace(/(-{1,2})$/g, "");

  setValue("user_phone", e.target.value);
}

export function changeInputBirthFormat(e, setValue) {
  e.target.value = e.target.value
    .replace(/[^0-9]/g, "")
    .replace(/^(\d{0,4})(\d{0,2})(\d{0,2})$/g, "$1-$2-$3")
    .replace(/(-{1,2})$/g, "");

  setValue("user_birth", e.target.value);
}

export function replaceAllDash(data) {
  return data.replaceAll("-", "");
}

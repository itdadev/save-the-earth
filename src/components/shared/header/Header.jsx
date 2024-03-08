/*
  NOTE: 헤더 부모 컴포넌트입니다. menu 트리 배열을 내보내고 WebHeader.jsx와 MobileHeader.jsx를 가져옵니다.
*/

import React from "react";
import { MobileHeader, WebHeader } from "@/components/shared/header/index";
import { IsDefault, IsDesktop } from "@/libs/react-responsive/mediaQuery";

const Header = () => {
  const utilMenu = [
    { id: 1, title: "홈", url: "/" },
    { id: 2, title: "로그인", url: "/login" },
    { id: 3, title: "국세청", outerLink: "https://www.nts.go.kr/" },
  ];

  const menuTree = [
    {
      id: 1,
      title: "Youtube 캠페인",
      url: "/youtube-campaign",
    },
    {
      id: 2,
      title: "캠페인 & 활동",
      subMenus: [
        { id: 1, title: "깨끗한 연안 만들기", url: "/clean-shore" },
        { id: 2, title: "숲과 환경", url: "/forest" },
        { id: 3, title: "환경 보존", url: "/environment" },
        { id: 4, title: "식목일 행사", url: "/tree-planting" },
        { id: 5, title: "지난활동", url: "/latest-activities" },
      ],
    },
    {
      id: 3,
      title: "핵심가치",
      subMenus: [
        { id: 1, title: "균형있는 공존", url: "/balanced-coexistence" },
        { id: 2, title: "작은 행동 실천", url: "/take-action" },
      ],
    },
    {
      id: 4,
      title: "환경 달력",
      url: "/environment-calendar",
    },
    {
      id: 5,
      title: "사단법인 소개",
      subMenus: [
        { id: 1, title: "설립선언문", url: "/declaration-establishment" },
        { id: 2, title: "임원진", url: "/executives" },
        { id: 3, title: "연혁 및 주요활동", url: "/history" },
        { id: 4, title: "미디어", url: "/media" },
        { id: 5, title: "이용약관", url: "/terms-of-use" },
        { id: 6, title: "개인정보취급방침", url: "/privacy-policy" },
        { id: 7, title: "정관/회계보고서", url: "/account-report" },
        { id: 8, title: "회사소개", url: "/about-company" },
      ],
    },
  ];

  return (
    <>
      <IsDesktop>
        <WebHeader menuTree={menuTree} utilMenu={utilMenu} />
      </IsDesktop>

      <IsDefault>
        <MobileHeader menuTree={menuTree} utilMenu={utilMenu} />
      </IsDefault>
    </>
  );
};

export default Header;

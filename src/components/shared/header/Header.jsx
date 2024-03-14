/*
  NOTE: 헤더 부모 컴포넌트입니다. menu 트리 배열을 내보내고 WebHeader.jsx와 MobileHeader.jsx를 가져옵니다.
*/

import React, { useEffect, useState } from "react";
import { MobileHeader, WebHeader } from "@/components/shared/header/index";
import { IsDefault, IsDesktop } from "@/libs/react-responsive/mediaQuery";
import { useQuery } from "@tanstack/react-query";
import { CAMPAIGN_LIST_QUERY_KEY } from "@/constants/queryKeys";
import axios from "axios";
import { CAMPAIGN_API_URL } from "@/constants/apiUrls";
import { MENU_LIST } from "@/constants/staticInformation";

const Header = () => {
  const [menuTree, setMenuTree] = useState(MENU_LIST);

  const { data: campaignList } = useQuery({
    queryKey: [CAMPAIGN_LIST_QUERY_KEY],
    queryFn: async () => await axios.get(`${CAMPAIGN_API_URL}`),
    select: data => {
      return data?.data?.data;
    },
  });

  const utilMenu = [
    { id: 1, title: "홈", url: "/" },
    { id: 2, title: "로그인", url: "/login" },
    { id: 3, title: "국세청", outerLink: "https://www.nts.go.kr/" },
  ];

  useEffect(() => {
    if (campaignList) {
      const campaignMenuList = campaignList?.map(campaignMenu => {
        return {
          id: campaignMenu?.campaign_seq,
          title: campaignMenu?.campaign_menu_title,
          url: `/campaign/${campaignMenu?.campaign_menu_title.replaceAll(" ", "-")}`,
        };
      });
      // 캠페인 & 활동 항목 찾기
      const campaignActivityIndex = menuTree.findIndex(item => item.id === 2);

      if (campaignActivityIndex !== -1) {
        // 새로운 캠페인 메뉴를 기존 subMenus에 추가
        const updatedSubMenu = [
          ...campaignMenuList,
          ...menuTree[campaignActivityIndex].subMenus,
        ];

        // 캠페인 & 활동 항목의 subMenus 업데이트
        const updatedMenuTree = [...menuTree];

        updatedMenuTree[campaignActivityIndex] = {
          ...updatedMenuTree[campaignActivityIndex],
          subMenus: updatedSubMenu,
        };

        // 메뉴 트리 업데이트
        setMenuTree(updatedMenuTree);
      }
    }
  }, [campaignList]);

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

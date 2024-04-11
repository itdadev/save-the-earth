/*
  NOTE: 헤더 부모 컴포넌트입니다. menu 트리 배열을 내보내고 WebHeader.jsx와 MobileHeader.jsx를 가져옵니다.
*/

import React, { useEffect, useMemo } from "react";
import axios from "axios";

import { MobileHeader, WebHeader } from "@/components/shared/header/index";
import { IsDefault, IsDesktop } from "@/libs/react-responsive/mediaQuery";
import { useQuery } from "@tanstack/react-query";
import {
  CAMPAIGN_LIST_QUERY_KEY,
  USER_DATA_QUERY_KEY,
} from "@/constants/queryKeys";
import { CAMPAIGN_API_URL, USER_API_URL } from "@/constants/apiUrls";
import { MENU_LIST } from "@/constants/staticInformation";
import { useUserStore } from "@/store/useUserStore";
import Interceptor from "@/libs/axios/AxiosInterceptor";
import { LOCAL_STORAGE_TOKENS } from "@/constants/storageKey";
import { changeUrl } from "@/utils/Functions";

const Header = () => {
  const { user, setUser, clearUser } = useUserStore();

  const { data: userData, isSuccess } = useQuery({
    queryKey: [USER_DATA_QUERY_KEY],
    queryFn: async () => await Interceptor.get(`${USER_API_URL}`),
    select: data => {
      return data?.data?.data;
    },
    enabled: !!localStorage.getItem(LOCAL_STORAGE_TOKENS),
  });
  useEffect(() => {
    if (isSuccess) {
      setUser(userData);
    } else {
      clearUser();
    }
  }, [isSuccess]);

  const { data: campaignList } = useQuery({
    queryKey: [CAMPAIGN_LIST_QUERY_KEY],
    queryFn: async () => await axios.get(`${CAMPAIGN_API_URL}`),
    select: data => {
      return data?.data?.data;
    },
  });

  const utilMenu = [
    { id: 1, title: "홈", url: "/" },
    {
      id: 2,
      title: user ? `${user?.user_name}님` : "로그인",
      url: user ? "/mypage" : "/login",
    },
    { id: 3, title: "국세청", outerLink: "https://www.nts.go.kr/" },
  ];

  const menuList = useMemo(() => {
    if (campaignList) {
      const campaignMenuList = campaignList?.map(campaignMenu => {
        return {
          id: campaignMenu?.campaign_seq,
          title: campaignMenu?.campaign_menu_title,
          url: `/campaign/${changeUrl(campaignMenu?.campaign_menu_title)}/${campaignMenu?.campaign_seq}`,
        };
      });
      // 캠페인 & 활동 항목 찾기
      const campaignActivityIndex = MENU_LIST.findIndex(item => item.id === 2);

      if (campaignActivityIndex !== -1) {
        // 새로운 캠페인 메뉴를 기존 subMenus에 추가
        const updatedSubMenu = [
          ...campaignMenuList,
          ...MENU_LIST[campaignActivityIndex].subMenus,
        ];

        // 캠페인 & 활동 항목의 subMenus 업데이트
        const updatedMenuTree = [...MENU_LIST];

        updatedMenuTree[campaignActivityIndex] = {
          ...updatedMenuTree[campaignActivityIndex],
          subMenus: updatedSubMenu,
        };

        // 메뉴 트리 업데이트
        return updatedMenuTree;
      }
    } else {
      return MENU_LIST;
    }
  }, [campaignList]);

  return (
    <>
      <IsDesktop>
        <WebHeader menuTree={menuList} utilMenu={utilMenu} />
      </IsDesktop>

      <IsDefault>
        <MobileHeader menuTree={menuList} utilMenu={utilMenu} />
      </IsDefault>
    </>
  );
};

export default Header;

import React from "react";

import { image } from "@/theme";
import {
  CommonContainer,
  CommonPageContainer,
} from "@/components/ui/container";
import { CommonTitleOne } from "@/components/ui/fonts/Fonts";
import { Flex } from "antd";
import styled from "@emotion/styled";
import { mq } from "@/lib/react-responsive/mediaQuery";

const PageTitle = styled(CommonTitleOne)(() => ({
  lineHeight: 0.8,
}));

const LogoImage = styled.img(() => ({
  width: "20rem",

  [mq("desktop")]: {
    width: "45rem",
  },
}));

const ExecutiveList = styled(Flex)(() => ({
  marginTop: "9rem",
  gap: "2.4rem",
  flexWrap: "wrap",

  [mq("desktop")]: {
    gap: "5rem",
  },
}));

const ExecutiveItem = styled(Flex)(({ theme }) => ({
  width: "100%",
  border: `1px solid ${theme.color.primary01}`,

  [mq("desktop")]: {
    width: "calc(50% - 2.5rem)",
  },
}));

const ExecutiveName = styled(Flex)(({ theme }) => ({
  padding: "1rem 2rem",
  background: theme.color.primary01,
  color: "white",
  fontWeight: theme.fontWeight.bold,
  fontSize: "2rem",

  [mq("desktop")]: {
    fontSize: "3.2rem",
  },
}));

const ExecutivePosition = styled.div(({ theme }) => ({
  fontWeight: theme.fontWeight.regular,
  fontSize: "1.4rem",

  [mq("desktop")]: {
    fontSize: "2.4rem",
  },
}));

const ExecutiveWrapper = styled.div(() => ({
  display: "flex",
  flexDirection: "column",
  padding: "1rem 2rem",
  fontSize: "1.5rem",
  gap: "1.5rem 0",

  [mq("desktop")]: {
    fontSize: "2rem",
  },
}));

const ExecutiveBefore = styled.ul(({ theme }) => ({
  fontWeight: theme.fontWeight.light,
}));

const Executives = () => {
  const executiveArr = [
    {
      id: 1,
      title: "정미혜",
      position: "이사장",
      now: [
        {
          id: 1,
          description: "현) (2004 ~ ) ㈜쎄도르그룹 대표이사",
        },
        {
          id: 2,
          description: "현) (2011~ ) ㈜체뚜코리아 대표이사",
        },
        {
          id: 3,
          description: "현) (2023~ ) 사단법인 세이브더얼스 이사장",
        },
      ],
      before: [{ id: 1, description: "전) 나인웨스트그룹 아시아총괄지사장" }],
    },
    {
      id: 2,
      title: "조은원",
      position: "이사",
      now: [
        {
          id: 1,
          description: "현) (2018~ ) (사)항공기 소음 이사장",
        },
      ],
    },
    {
      id: 3,
      title: "이승훈",
      position: "이사",
      now: [
        {
          id: 1,
          description: "현) (2023~ ) ㈜캐슬피엠 대표이사",
        },
      ],
      before: [
        {
          id: 1,
          description: "전) ㈜캐슬피엠 전무이사",
        },
        {
          id: 2,
          description: "전) ㈜시원아이웨어 전무이사",
        },
      ],
    },
    {
      id: 4,
      title: "이해림",
      position: "이사",
      now: [
        {
          id: 1,
          description: "현) (2022. 7~ ) 고양시의회 건설교통위원회",
        },
      ],
      before: [
        {
          id: 1,
          description: "전) ㈜더말코리아 해외영업부",
        },
        {
          id: 2,
          description: "전) 고양시의회 건설교통위원회 부위원장",
        },
      ],
    },
    {
      id: 5,
      title: "윤여창",
      position: "이사",
      now: [
        {
          id: 1,
          description: "현) (2012~ ) 팩트티비 제작본부장",
        },
      ],
      before: [
        {
          id: 1,
          description: "전) ㈜청춘미디어 대표",
        },
        {
          id: 2,
          description: "전) 경기도교육청 대변인실/미디어방송팀장",
        },
      ],
    },
    {
      id: 6,
      title: "김은영",
      position: "감사",
      now: [
        {
          id: 1,
          description: "현) (2020.12~ ) 일신회계법인/태인회계법인 감사본부",
        },
      ],
      before: [
        {
          id: 1,
          description: "전) ㈜코스틸 전략기획본부 전무",
        },
        {
          id: 2,
          description: "전) 김은영 세무회계사무소",
        },
      ],
    },
    {
      id: 7,
      title: "왕성옥",
      position: "감사",
      before: [
        {
          id: 1,
          description: "전) 고양시의원 문화복지위원회",
        },
        {
          id: 2,
          description: "전) 경기도의회 의원 보건복지위원회",
        },
      ],
    },
  ];

  return (
    <CommonPageContainer>
      <CommonContainer>
        <Flex align="flex-end" justify="center" gap="0 1rem">
          <LogoImage src={image.footerLogo.default} alt="" width={450} />

          <PageTitle>임원진</PageTitle>
        </Flex>

        <ExecutiveList>
          {executiveArr.map(executive => {
            return (
              <ExecutiveItem vertical key={executive.id}>
                <ExecutiveName align="flex-end" gap="0 0.8rem">
                  {executive.title}

                  <ExecutivePosition>{executive.position}</ExecutivePosition>
                </ExecutiveName>

                <ExecutiveWrapper>
                  <ul>
                    {executive.now?.map(now => {
                      return <li key={now.id}>{now.description}</li>;
                    })}
                  </ul>

                  <ExecutiveBefore>
                    {executive.before?.map(before => {
                      return <li key={before.id}>{before.description}</li>;
                    })}
                  </ExecutiveBefore>
                </ExecutiveWrapper>
              </ExecutiveItem>
            );
          })}
        </ExecutiveList>
      </CommonContainer>
    </CommonPageContainer>
  );
};

export default Executives;

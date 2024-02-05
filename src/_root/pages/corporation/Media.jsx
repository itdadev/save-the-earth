import React, { useState } from "react";
import styled from "@emotion/styled";
import { Flex } from "antd";

import { color, image } from "@/theme";
import {
  CommonContainer,
  CommonPageContainer,
} from "@/components/ui/container";
import { CommonTitleTwo } from "@/components/ui/fonts/Fonts";
import { PrimaryButton } from "@/components/ui/buttons";
import { mq } from "@/lib/react-responsive/mediaQuery";
import { ImageFigure } from "@/components/ui/image";
import { Pagination } from "@/components/shared/item";

const MediaList = styled(Flex)(() => ({
  gap: "3.4rem 4.4rem",
  marginTop: "1.5rem",
  flexWrap: "wrap",
}));

const MediaItem = styled.div(() => ({
  width: "100%",
  borderRadius: "1rem",
  overflow: "hidden",

  [mq("desktop")]: {
    width: "calc(50% - 2.2rem)",
  },
}));
const Texts = styled(Flex)(({ theme, order }) => ({
  background: order === 0 ? theme.color.primary01 : theme.color.secondary01,
  height: "27.4rem",
  padding: "3rem 1.6rem",
  color: "white",
  fontSize: "1.4rem",
  textAlign: "center",

  [mq("desktop")]: {
    padding: "4rem 3rem",
  },
}));

const Title = styled.header(({ theme }) => ({
  fontSize: "3rem",
  fontWeight: theme.fontWeight.bold,
}));
const Media = () => {
  const [active, setActive] = useState(1);

  const TOTAL_PAGE = 4;

  const mediaArr = [
    {
      id: 1,
      title: "건강을 지키는 것이 곧...",
      description:
        "환경단체인 사단법인 세이브더얼스가 지난 14일 북한산 캠비움힐스에서 맨발 걷기와 야채 비빔밥 함께하기 행사를 진행했다. 이번 행사는 세계 채식인의 날과 산의 날을 맞아 사람과 자연이 건강하게 조화할 수 있도록 하는 취지에서 기획되었다",
      image: image.media02,
    },
    {
      id: 2,
      title: "세이브더얼스, 국제 연안...",
      description:
        "환경단체인 사단법인 세이브더얼스가 지난 16일 국제 연안 정화의 날을 맞아 인천광역시 영종도 마시안 해변에서 쓰레기 줍기 봉사를 했다. 국제 연안 정화의 날은 매년 9월 셋째 주 토요일에 전세계 100여개 국가에서 50만명이 넘는 자원봉사자가 해양 환경 보전…",
      image: image.media01,
    },
  ];

  return (
    <CommonPageContainer>
      <CommonContainer>
        <CommonTitleTwo>미디어</CommonTitleTwo>

        <Pagination total={TOTAL_PAGE} active={active} setActive={setActive} />

        <MediaList>
          {mediaArr.map((media, idx) => {
            return (
              <MediaItem key={media.id}>
                <ImageFigure ratio="4 / 3" height="30rem">
                  <img src={media.image} alt={media.title} />
                </ImageFigure>

                <Texts
                  order={idx % 2}
                  vertical
                  gap="2rem 0"
                  align="center"
                  justify="center"
                >
                  <Title className="ellipsis-1">{media.title}</Title>

                  <div className="ellipsis-5">{media.description}</div>

                  <PrimaryButton
                    bgColor="white"
                    textColor={
                      idx % 2 === 0 ? color.primary02 : color.secondary02
                    }
                  >
                    <Flex align="center" gap="0 0.4rem">
                      <p>기사보기</p>

                      {idx % 2 === 0 ? (
                        <img
                          src={image.rightArrowGreen.default}
                          alt="오른쪽 화살표"
                        />
                      ) : (
                        <img
                          src={image.rightArrowOrange.default}
                          alt="오른쪽 화살표"
                        />
                      )}
                    </Flex>
                  </PrimaryButton>
                </Texts>
              </MediaItem>
            );
          })}
        </MediaList>
      </CommonContainer>
    </CommonPageContainer>
  );
};

export default Media;

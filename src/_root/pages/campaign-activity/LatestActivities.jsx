import React, { useState } from "react";

import { color, image } from "@/theme";
import {
  CommonContainer,
  CommonPageContainer,
} from "@/components/ui/container";
import { Pagination, TitleTag } from "@/components/shared/item";
import { Flex, Image } from "antd";
import { CommonTitleFour } from "@/components/ui/fonts/Fonts";
import styled from "@emotion/styled";
import { ImageFigure } from "@/components/ui/image";
import { useMediaQuery } from "react-responsive";
import { mq } from "@/lib/react-responsive/mediaQuery";

const Container = styled.div(() => ({
  marginTop: "8rem",
}));

const ActivityItem = styled(Flex)(({ theme }) => ({
  width: "100%",
  gap: "0 2.4rem",
  padding: "2rem 0",
  fontSize: "1.8rem",
  borderBottom: `1px solid ${theme.color.grey05}`,

  ":nth-of-type(1)": {
    borderTop: `1px solid ${theme.color.grey05}`,
  },

  [mq("desktop")]: {
    width: "50%",
    padding: "6rem 3rem",
    ":nth-of-type(1), :nth-of-type(2)": {
      borderTop: `1px solid ${theme.color.grey05}`,
    },
  },
}));

const LatestActivities = () => {
  const isDesktop = useMediaQuery({ minWidth: 1240 });

  const [active, setActive] = useState(1);

  const latestActivityArr = [
    {
      id: 1,
      title: "국제 연안 정화의 날 연안 정화 활동",
      date: "2023년 09월 16일",
      place: "영종도 마시안해변",
      src: image.latestActivities01,
    },
    {
      id: 2,
      title: "후쿠시마 오염수 방류 반대 서명",
      date: "2023년 06월 06일, 14일~15일",
      place: "북한산 등산로 입구",
      src: image.latestActivities02,
    },
  ];
  return (
    <CommonPageContainer>
      <CommonContainer>
        <TitleTag title="지난활동" bgColor={color.blue01} />

        <Container>
          <Pagination total={2} active={active} setActive={setActive} />

          <Flex wrap="wrap">
            {latestActivityArr.map(activity => {
              return (
                <ActivityItem key={`${activity.title}${activity.id}`}>
                  <ImageFigure width={isDesktop ? "25.2rem" : "15rem"}>
                    <img src={activity.src} alt={activity.title} />
                  </ImageFigure>

                  <Flex vertical justify="space-between">
                    <CommonTitleFour>{activity.title}</CommonTitleFour>

                    <ul>
                      <li>일시: {activity.date}</li>
                      <li>장소: {activity.place}</li>
                    </ul>
                  </Flex>
                </ActivityItem>
              );
            })}
          </Flex>
        </Container>
      </CommonContainer>
    </CommonPageContainer>
  );
};

export default LatestActivities;

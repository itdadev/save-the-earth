import React, { useState } from "react";
import styled from "@emotion/styled";
import { color } from "@/theme";
import { mq } from "@/libs/react-responsive/mediaQuery";
import { useMediaQuery } from "react-responsive";

import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import { ACTIVITY_LIST_QUERY_KEY, LOAD_SIZE_4 } from "@/constants/queryKeys";
import { ACTIVITY_API_URL } from "@/constants/apiUrls";
import DangerouslyInnerHtml from "@/components/ui/DangerouslyInnerHtml";

import {
  CommonContainer,
  CommonPageContainer,
} from "@/components/ui/container";
import { CustomPagination, TitleTag } from "@/components/shared/item";
import { Flex } from "antd";
import { CommonTitleFour } from "@/components/ui/fonts/Fonts";
import { ImageFigure } from "@/components/ui/image";
import { Link } from "react-router-dom";

const Container = styled.div(() => ({
  marginTop: "8rem",
}));

const ActivityItem = styled(Link)(({ theme }) => ({
  display: "flex",
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

  const { data: activityList } = useQuery({
    queryKey: [ACTIVITY_LIST_QUERY_KEY, active],
    queryFn: async () =>
      await axios.get(
        `${ACTIVITY_API_URL}?limit=${LOAD_SIZE_4}&page=${active}`,
      ),
    select: data => {
      return data?.data;
    },
  });

  return (
    <CommonPageContainer>
      <CommonContainer>
        <TitleTag title="지난활동" bgColor={color.blue01} />

        <Container>
          <CustomPagination
            total={activityList?.totalCnt}
            active={active}
            setActive={setActive}
          />

          <Flex wrap="wrap">
            {activityList?.data?.map(activity => {
              return (
                <ActivityItem
                  key={`${activity.title}${activity.activity_seq}`}
                  to={`/latest-activities/${activity.activity_seq}`}
                >
                  <ImageFigure width={isDesktop ? "25.2rem" : "15rem"}>
                    <img
                      src={activity.image_url}
                      alt={activity.activity_title}
                    />
                  </ImageFigure>

                  <Flex vertical justify="space-between">
                    <CommonTitleFour>{activity.activity_title}</CommonTitleFour>

                    <DangerouslyInnerHtml value={activity.activity_content} />
                    <ul>
                      <li>일시: {activity.activity_date}</li>
                      <li>장소: {activity.activity_location}</li>
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

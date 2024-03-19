import React from "react";
import styled from "@emotion/styled";
import { image } from "@/theme";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";

import { ACTIVITY_DETAIL_QUERY_KEY } from "@/constants/queryKeys";
import { ACTIVITY_API_URL } from "@/constants/apiUrls";

import {
  CommonDescriptionOne,
  CommonTitleTwo,
} from "@/components/ui/fonts/Fonts";
import { color } from "@/theme";
import {
  CommonContainer,
  CommonPageContainer,
} from "@/components/ui/container";
import { TitleTag } from "@/components/shared/item";
import { mq } from "@/libs/react-responsive/mediaQuery";
import DangerouslyInnerHtml from "@/components/ui/DangerouslyInnerHtml";
import { ImageFigure } from "@/components/ui/image";

const PageTitle = styled(CommonTitleTwo)(({ theme }) => ({
  margin: "2rem 0",
  textAlign: "center",
}));

const ActivityDescription = styled(CommonDescriptionOne)(({ theme }) => ({
  marginTop: "3.2rem",

  [mq("desktop")]: {
    marginTop: "5.4rem",
  },
}));

const ActivityInfoList = styled.ul(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  margin: "3rem 0 8rem",
  fontSize: "1.4rem",

  [mq("desktop")]: {
    flexDirection: "row",
    fontSize: "1.8rem",
    borderTop: `1px solid ${theme.color.black01}`,
    borderBottom: `1px solid ${theme.color.black01}`,
  },
}));

const ActivityInfoItem = styled.li(({ theme }) => ({
  flex: 1,
  display: "flex",
  gap: "0 4rem",
  fontWeight: theme.fontWeight.regular,
  padding: "2rem 1.5rem",

  borderBottom: `1px solid ${theme.color.grey05}`,

  ":first-of-type": {
    borderTop: `1px solid ${theme.color.grey05}`,
  },

  [mq("desktop")]: {
    padding: "8rem 3rem",
    border: "none",

    ":first-of-type": {
      border: "none",
    },
  },
}));

const ActivityImage = styled.img(() => ({
  width: "3rem",

  [mq("desktop")]: {
    width: "8rem",
  },
}));

const ActivityInfoTitle = styled.header(({ theme }) => ({
  fontSize: "1.6rem",
  fontWeight: theme.fontWeight.bold,

  [mq("desktop")]: {
    fontSize: "2.6rem",
  },
}));

const LatestActivityDetail = () => {
  const activityId = useParams().activityId;

  const { data: activityDetail } = useQuery({
    queryKey: [ACTIVITY_DETAIL_QUERY_KEY, activityId],
    queryFn: async () => await axios.get(`${ACTIVITY_API_URL}/${activityId}`),
    enabled: !!activityId,
    select: data => {
      return data?.data?.data;
    },
  });

  const detailData = activityDetail?.detail_data;

  const activityArr = [
    {
      id: 1,
      title: "행사일",
      description: <div>{detailData?.activity_date}</div>,
    },
    {
      id: 2,
      title: "장소",
      description: (
        <div>
          <p>{detailData?.activity_location}</p>
        </div>
      ),
    },
    {
      id: 3,
      title: "참여대상",
      description: (
        <div>
          <p>{detailData?.activity_participants}</p>
        </div>
      ),
    },
  ];

  return (
    <CommonPageContainer>
      <CommonContainer>
        <TitleTag title="지난활동" bgColor={color.blue01} />

        <PageTitle>{detailData?.activity_title}</PageTitle>

        <ImageFigure ratio="2 / 1">
          <img
            src={
              activityDetail?.file_list[0] !== undefined
                ? activityDetail?.file_list[0].file_url
                : ""
            }
            alt={"지난활동 이미지"}
          />
        </ImageFigure>

        <ActivityDescription>
          <DangerouslyInnerHtml value={detailData?.activity_content} />

          <div>
            <ActivityInfoList>
              {activityArr.map((activity, idx) => {
                return (
                  <ActivityInfoItem key={activity.id}>
                    <ActivityImage
                      src={`${image?.[`activityIcon0${idx + 1}`]?.default}`}
                      alt={activity.title}
                    />
                    <div>
                      <ActivityInfoTitle>{activity.title}</ActivityInfoTitle>

                      <div>{activity.description}</div>
                    </div>
                  </ActivityInfoItem>
                );
              })}
            </ActivityInfoList>
          </div>
        </ActivityDescription>
      </CommonContainer>
    </CommonPageContainer>
  );
};

export default LatestActivityDetail;

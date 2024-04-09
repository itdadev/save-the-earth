import React, { useEffect, useState } from "react";
import styled from "@emotion/styled";
import { Flex } from "antd";
import { color, image } from "@/theme";
import { useParams } from "react-router-dom";

import { useQuery } from "@tanstack/react-query";
import { CAMPAIGN_DETAIL_QUERY_KEY } from "@/constants/queryKeys";
import axios from "axios";
import DangerouslyInnerHtml from "@/components/ui/DangerouslyInnerHtml";

import { ImageFigure } from "@/components/ui/image";
import {
  CommonContainer,
  CommonPageContainer,
} from "@/components/ui/container";
import { TitleTag } from "@/components/shared/item";
import {
  CommonDescriptionOne,
  CommonTitleThree,
  CommonTitleTwo,
} from "@/components/ui/fonts/Fonts";
import { mq } from "@/libs/react-responsive/mediaQuery";
import { CAMPAIGN_API_URL } from "@/constants/apiUrls";

const PageTitle = styled(CommonTitleTwo)(() => ({
  margin: "2rem 0",
  textAlign: "center",
}));

const ActivityDescription = styled(CommonDescriptionOne)(({ theme }) => ({
  marginTop: "3.2rem",
  fontWeight: theme.fontWeight.regular,
  whiteSpace: "break-spaces",

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
  fontWeight: theme.fontWeight.light,
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

const Description = styled.div(({ theme }) => ({
  fontWeight: theme.fontWeight.light,
}));

const PlanWrapper = styled(Flex)(() => ({
  gap: "2rem 10rem",
  flexDirection: "column",

  [mq("desktop")]: {
    flexDirection: "row",
  },
}));

const PlanItem = styled.div(() => ({
  display: "flex",
  gap: "0 0.8rem",
  alignItems: "center",
  [mq("desktop")]: {
    alignItems: "flex-start",
  },
}));

const PlanNumber = styled(Flex)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: "2rem",
  minWidth: "2rem",
  height: "2rem",
  borderRadius: "0.2rem",
  background: theme.color.black01,
  color: "white",
  fontSize: "1.4rem",
  textAlign: "center",
  fontWeight: theme.fontWeight.bold,

  [mq("desktop")]: {
    width: "2rem",
    height: "3rem",
    fontSize: "1.8rem",
    marginTop: "0.4rem",
  },
}));

const CampaignDetail = () => {
  const [activityArr, setActivityArr] = useState([]);
  const { campaignId } = useParams();

  const { data: campaignDetail } = useQuery({
    queryKey: [CAMPAIGN_DETAIL_QUERY_KEY, campaignId],
    queryFn: async () => await axios.get(`${CAMPAIGN_API_URL}/${campaignId}`),
    select: data => {
      return data?.data?.data;
    },
  });

  useEffect(() => {
    setActivityArr([
      {
        id: 1,
        title: "행사일",
        description: <div>{campaignDetail?.detail_data.campaign_date}</div>,
      },
      {
        id: 2,
        title: "장소",
        description: <div>{campaignDetail?.detail_data.campaign_location}</div>,
      },
      {
        id: 3,
        title: "참여대상",
        description: (
          <div>{campaignDetail?.detail_data.campaign_participants}</div>
        ),
      },
    ]);
  }, [campaignDetail]);

  return (
    <CommonPageContainer>
      <CommonContainer>
        <TitleTag title="환경활동" bgColor={color.primary02} />

        <PageTitle>{campaignDetail?.detail_data.campaign_title}</PageTitle>

        <ImageFigure ratio="2 / 1">
          <img
            src={campaignDetail?.file_list[0].file_url}
            alt={campaignDetail?.detail_data.campaign_title}
          />
        </ImageFigure>

        <ActivityDescription>
          <DangerouslyInnerHtml
            value={campaignDetail?.detail_data.campaign_content}
          />

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

                      <Description>{activity.description}</Description>
                    </div>
                  </ActivityInfoItem>
                );
              })}
            </ActivityInfoList>
          </div>
        </ActivityDescription>

        {campaignDetail?.plan_list && (
          <PlanWrapper>
            <CommonTitleThree textColor={color.primary02}>
              세부 추진계획
            </CommonTitleThree>

            <Flex vertical gap="2rem 0">
              {campaignDetail?.plan_list?.map((plan, idx) => {
                return (
                  <PlanItem key={plan.campaign_plan_seq}>
                    <PlanNumber>{idx + 1}</PlanNumber>

                    <CommonDescriptionOne>
                      {plan.campaign_plan_content}
                    </CommonDescriptionOne>
                  </PlanItem>
                );
              })}
            </Flex>
          </PlanWrapper>
        )}
      </CommonContainer>
    </CommonPageContainer>
  );
};

export default CampaignDetail;

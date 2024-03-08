import React from "react";
import styled from "@emotion/styled";
import { Flex } from "antd";

import { color, image } from "@/theme";
import {
  CommonContainer,
  CommonPageContainer,
} from "@/components/ui/container";
import { TitleTag } from "@/components/shared/item";
import {
  CommonDescriptionOne,
  CommonTitleTwo,
  CommonTitleThree,
} from "@/components/ui/fonts/Fonts";
import { ImageFigure } from "@/components/ui/image";
import { mq } from "@/libs/react-responsive/mediaQuery";

const PageTitle = styled(CommonTitleTwo)(({ theme }) => ({
  margin: "2rem 0",
  textAlign: "center",
}));

const ActivityDescription = styled(CommonDescriptionOne)(({ theme }) => ({
  marginTop: "3.2rem",
  fontWeight: theme.fontWeight.light,

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

const PlanWrapper = styled(Flex)(() => ({
  gap: "2rem 10rem",
  flexDirection: "column",

  [mq("desktop")]: {
    flexDirection: "row",
  },
}));

const PlanItem = styled(Flex)(() => ({
  [mq("desktop")]: {
    alignItems: "center",
  },
}));

const PlanNumber = styled(Flex)(({ theme }) => ({
  alignItems: "center",
  justifyContent: "center",
  width: "2rem",
  height: "2rem",
  borderRadius: "0.2rem",
  background: theme.color.black01,
  color: "white",
  fontSize: "1.8rem",
  textAlign: "center",
  fontWeight: theme.fontWeight.bold,

  [mq("desktop")]: {
    width: "2rem",
    height: "3rem",
  },
}));

const CampaignActivity = ({
  title,
  mainImage,
  activityArr,
  planArr,
  children,
}) => {
  return (
    <CommonPageContainer>
      <CommonContainer>
        <TitleTag title="환경활동" bgColor={color.primary02} />

        <PageTitle>{title}</PageTitle>

        <ImageFigure ratio="2 / 1">
          <img src={mainImage} alt={title} />
        </ImageFigure>

        <ActivityDescription>
          {children}

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

        {planArr && (
          <PlanWrapper>
            <CommonTitleThree textColor={color.primary02}>
              세부 추진계획
            </CommonTitleThree>

            <Flex vertical gap="2rem 0">
              {planArr?.map(plan => {
                return (
                  <PlanItem key={plan.id} gap="0 0.8rem" align="center">
                    <PlanNumber>{plan.id}</PlanNumber>

                    <CommonDescriptionOne>
                      <span
                        style={
                          {
                            // display: "inline-block",
                            // lineHeight: "normal",
                            // verticalAlign: "middle",
                          }
                        }
                      >
                        {plan.description}
                      </span>
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

export default CampaignActivity;

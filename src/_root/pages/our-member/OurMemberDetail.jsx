import React from "react";
import { useParams } from "react-router-dom";
import styled from "@emotion/styled";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";

import { color } from "@/theme";
import {
  CommonContainer,
  CommonPageContainer,
} from "@/components/ui/container";
import { TitleTag } from "@/components/shared/item";
import {
  CommonDescriptionOne,
  CommonTitleTwo,
} from "@/components/ui/fonts/Fonts";
import { MEMBER_DETAIL_QUERY_KEY } from "@/constants/queryKeys";
import { MEMBER_API } from "@/constants/apiUrls";
import { ImageFigure } from "@/components/ui/image";
import DangerouslyInnerHtml from "@/components/ui/DangerouslyInnerHtml";
import { mq } from "@/libs/react-responsive/mediaQuery";

const PageTitle = styled(CommonTitleTwo)(() => ({
  margin: "2rem 0",
  textAlign: "center",
}));

const Description = styled(CommonDescriptionOne)(({ theme }) => ({
  marginTop: "3.2rem",
  fontWeight: theme.fontWeight.regular,
  whiteSpace: "break-spaces",

  [mq("desktop")]: {
    marginTop: "5.4rem",
  },

  "& img": {
    width: "100% !important",
    height: "100% !important",
    objectFit: "contain",
    margin: "0.6rem 0",
  },
}));

const OurMemberDetail = () => {
  const { memberId } = useParams();

  const { data: memberDetail } = useQuery({
    queryKey: [MEMBER_DETAIL_QUERY_KEY, memberId],
    queryFn: async () => await axios.get(`${MEMBER_API}/${memberId}`),
    select: data => {
      return data?.data?.data;
    },
  });

  return (
    <CommonPageContainer>
      <CommonContainer>
        <TitleTag title="우리 회원 공간" bgColor={color.primary02} />

        <PageTitle>{memberDetail?.detail_data?.member_title}</PageTitle>

        <ImageFigure ratio="2 / 1">
          <img
            src={memberDetail?.file_list[0].file_url}
            alt={memberDetail?.detail_data.member_title}
          />
        </ImageFigure>

        <Description>
          <DangerouslyInnerHtml
            value={memberDetail?.detail_data.member_content}
          />
        </Description>
      </CommonContainer>
    </CommonPageContainer>
  );
};
export default OurMemberDetail;

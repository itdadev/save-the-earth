import React from "react";
import axios from "axios";
import { Flex } from "antd";
import styled from "@emotion/styled";
import { useQuery } from "@tanstack/react-query";

import { image } from "@/theme";
import {
  CommonContainer,
  CommonPageContainer,
} from "@/components/ui/container";
import { CommonTitleOne } from "@/components/ui/fonts/Fonts";
import { EXECUTIVE_LIST_QUERY_KEY } from "@/constants/queryKeys";
import { EXECUTIVE_LIST_API_URL } from "@/constants/apiUrls";
import { mq } from "@/libs/react-responsive/mediaQuery";

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
  lineHeight: "2.5rem",

  [mq("desktop")]: {
    fontSize: "2.4rem",
    lineHeight: "4.1rem",
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

const ExperienceUl = styled.ul(({ theme, before }) => ({
  fontWeight: before ? theme.fontWeight.light : "",
}));

const Executives = () => {
  const { data: executiveList } = useQuery({
    queryKey: [EXECUTIVE_LIST_QUERY_KEY],
    queryFn: async () => await axios.get(EXECUTIVE_LIST_API_URL),
    select: data => {
      return data?.data?.data;
    },
  });

  return (
    <CommonPageContainer>
      <CommonContainer>
        <Flex align="flex-end" justify="center" gap="0 1rem">
          <LogoImage src={image.footerLogo.default} alt="" width={450} />

          <PageTitle>임원진</PageTitle>
        </Flex>

        <ExecutiveList>
          {executiveList?.map(executive => {
            return (
              <ExecutiveItem vertical key={executive.executive_seq}>
                <ExecutiveName align="flex-end" gap="0 0.8rem">
                  {executive.executive_name}

                  <ExecutivePosition>
                    {executive.executive_position}
                  </ExecutivePosition>
                </ExecutiveName>

                <ExecutiveWrapper>
                  {executive.current_experience?.length > 0 && (
                    <ExperienceUl>
                      {executive.current_experience?.map((now, idx) => {
                        return <li key={idx}>{now.experience}</li>;
                      })}
                    </ExperienceUl>
                  )}

                  {executive.past_experience?.length > 0 && (
                    <ExperienceUl before={true}>
                      {executive.past_experience?.map((before, idx) => {
                        return <li key={idx}>{before.experience}</li>;
                      })}
                    </ExperienceUl>
                  )}
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

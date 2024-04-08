import React, { useState } from "react";
import { Flex } from "antd";
import axios from "axios";
import styled from "@emotion/styled";
import { useQuery } from "@tanstack/react-query";

import { image } from "@/theme";
import {
  CommonContainer,
  CommonPageContainer,
} from "@/components/ui/container";
import {
  CommonDescriptionTwo,
  CommonTitleThree,
} from "@/components/ui/fonts/Fonts";
import { CustomPagination, TitleTag } from "@/components/shared/item";
import { LOAD_SIZE_4, YOUTUBE_LIST_QUERY_KEY } from "@/constants/queryKeys";
import { YOUTUBE_API_URL } from "@/constants/apiUrls";
import { mq } from "@/libs/react-responsive/mediaQuery";

const TitleWrapper = styled(CommonTitleThree)(() => ({
  position: "relative",
  marginBottom: "2.2rem",
  textAlign: "center",
}));

const PageTitle = styled(CommonTitleThree)(({ theme }) => ({
  color: theme.color.primary01,
}));

const Tag = styled(CommonTitleThree)(() => ({
  position: "relative",
  marginBottom: "1.2rem",

  [mq("desktop")]: {
    position: "absolute",
    left: 0,
    top: "50%",
    transform: "translateY(-50%)",
    marginBottom: 0,
  },
}));

const YoutubeList = styled(Flex)(() => ({
  gap: "3.4rem 4.4rem",
  marginTop: "1.5rem",
  flexWrap: "wrap",
}));

const YoutubeItem = styled.iframe(() => ({
  width: "100%",
  aspectRatio: "5 / 3",

  [mq("desktop")]: {
    width: "calc(50% - 2.2rem)",
  },
}));

const YoutubeCampaign = () => {
  const [active, setActive] = useState(1);

  console.log(active);

  const { data: youtubeList } = useQuery({
    queryKey: [YOUTUBE_LIST_QUERY_KEY, active],
    queryFn: async () =>
      await axios.get(`${YOUTUBE_API_URL}?limit=${LOAD_SIZE_4}&page=${active}`),
    select: data => {
      return data?.data;
    },
  });

  return (
    <CommonPageContainer>
      <CommonContainer>
        <TitleWrapper>
          <a
            href="https://www.youtube.com/@save_the_earth_tv"
            target="_blank"
            rel="noreferrer"
            style={{ width: "fit-content" }}
          >
            <Tag>
              <TitleTag
                title={
                  <Flex gap="0 4rem">
                    <img
                      src={image.videoPlayButton.default}
                      alt="오른쪽 화살표"
                    />
                    채널 바로가기
                  </Flex>
                }
                bgColor="#E60000"
                fit
              />
            </Tag>
          </a>

          <Flex vertical>
            <PageTitle>Youtube 캠페인</PageTitle>

            <CommonDescriptionTwo>
              세이브더얼스 공식 Youtube 채널
            </CommonDescriptionTwo>
          </Flex>
        </TitleWrapper>

        <CustomPagination
          total={youtubeList?.totalCnt}
          active={active}
          setActive={setActive}
        />

        <YoutubeList>
          {youtubeList?.data?.map(youtube => {
            const regExp =
              /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/;
            const matches = youtube.youtube_link?.match(regExp);

            return (
              <YoutubeItem
                key={youtube.youtube_link}
                src={"https://www.youtube.com/embed/" + matches[7]}
                title={youtube.youtube_title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; "
                allowFullScreen
              ></YoutubeItem>
            );
          })}
        </YoutubeList>
      </CommonContainer>
    </CommonPageContainer>
  );
};

export default YoutubeCampaign;

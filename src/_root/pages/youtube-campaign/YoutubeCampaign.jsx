import React, { useCallback, useState } from "react";
import { Flex } from "antd";
import styled from "@emotion/styled";

import { image } from "@/theme";
import {
  CommonContainer,
  CommonPageContainer,
} from "@/components/ui/container";
import {
  CommonDescriptionTwo,
  CommonTitleThree,
} from "@/components/ui/fonts/Fonts";
import { Pagination, TitleTag } from "@/components/shared/item";
import { mq } from "@/lib/react-responsive/mediaQuery";
import { DividePerPage } from "@/utils/Functions";

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

  const youtubeList = [
    {
      id: 1,
      link: "https://www.youtube.com/embed/rNKHNABS3ro?si=xGk0K2NCuSjNFGQp",
    },
    {
      id: 2,
      link: "https://www.youtube.com/embed/V6DfsFmW9N0?si=b945T58OseYMJPbh",
    },
    {
      id: 3,
      link: "https://www.youtube.com/embed/30i9rxCUDJo?si=_Ul2httb8K_XJYE7",
    },
    {
      id: 4,
      link: "https://www.youtube.com/embed/TTel6bSQtVM?si=2HzapfIt0enZdbVx",
    },
    {
      id: 5,
      link: "https://www.youtube.com/embed/efdZgumhYfA?si=xaes4GUmA2ZWNEuG",
    },
  ];

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

        <Pagination
          total={youtubeList.length}
          active={active}
          setActive={setActive}
        />

        <YoutubeList>
          {DividePerPage(youtubeList, 4)[active - 1]?.map(youtube => {
            return (
              <YoutubeItem
                key={youtube.link}
                src={youtube.link}
                title="YouTube video player"
                frameBorder="0"
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

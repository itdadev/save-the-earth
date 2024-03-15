import React, { useState } from "react";
import styled from "@emotion/styled";
import { Flex } from "antd";
import { useQuery } from "@tanstack/react-query";

import { color, image } from "@/theme";
import {
  CommonContainer,
  CommonPageContainer,
} from "@/components/ui/container";
import { CommonTitleTwo } from "@/components/ui/fonts/Fonts";
import { PrimaryButton } from "@/components/ui/buttons";
import { mq } from "@/libs/react-responsive/mediaQuery";
import { ImageFigure } from "@/components/ui/image";
import { CustomPagination } from "@/components/shared/item";
import { LOAD_SIZE_4, MEDIA_LIST_QUERY_KEY } from "@/constants/queryKeys";
import { MEDIA_LIST_API } from "@/constants/apiUrls";
import axios from "axios";

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
    height: "27rem",
    padding: "4rem 3rem",
  },
}));

const Title = styled.header(({ theme }) => ({
  fontSize: "3rem",
  fontWeight: theme.fontWeight.bold,
}));
const Media = () => {
  const [active, setActive] = useState(1);

  const { data: mediaList } = useQuery({
    queryKey: [MEDIA_LIST_QUERY_KEY, active],
    queryFn: async () =>
      await axios.get(`${MEDIA_LIST_API}?page=${active}&limit=${LOAD_SIZE_4}`),
    select: data => {
      return data?.data;
    },
  });

  const handleArticleClick = articleLink => {
    window.open(articleLink, "_blank");
  };

  return (
    <CommonPageContainer>
      <CommonContainer>
        <CommonTitleTwo>미디어</CommonTitleTwo>

        <CustomPagination
          total={mediaList?.totalCnt}
          active={active}
          setActive={setActive}
        />

        <MediaList>
          {mediaList?.data?.map((media, idx) => {
            return (
              <MediaItem key={media.media_seq}>
                <ImageFigure ratio="4 / 3" height="30rem">
                  <img src={media.image_url} alt={media.media_title} />
                </ImageFigure>

                <Texts
                  order={idx % 2}
                  vertical
                  gap="2rem 0"
                  align="center"
                  justify="center"
                >
                  <Title className="ellipsis-1">{media.media_title}</Title>

                  <div className="ellipsis-5">{media.media_content}</div>

                  <PrimaryButton
                    bgColor="white"
                    textColor={
                      idx % 2 === 0 ? color.primary02 : color.secondary02
                    }
                    clickEvent={() => handleArticleClick(media.article_link)}
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

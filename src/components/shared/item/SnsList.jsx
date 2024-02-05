import React from "react";
import { Flex } from "antd";
import styled from "@emotion/styled";

import { image } from "@/theme";
import { mq } from "@/lib/react-responsive/mediaQuery";

const SnsImage = styled.img(({ big }) => ({
  width: big ? "5.2rem" : "2rem",
  height: big ? "5.2rem" : "2rem",

  [mq("desktop")]: {
    width: big ? "7.5rem" : "4rem",
    height: big ? "7.5rem" : "4rem",
  },
}));
const SnsList = ({ big }) => {
  const snsArr = [
    {
      id: 1,
      title: "youtube",
      src: image.snsIcon01.default,
      url: "https://www.youtube.com/@save_the_earth_tv",
    },
    {
      id: 2,
      title: "tiktok",
      src: image.snsIcon02.default,
      url: "https://www.tiktok.com/@savetheearth.tv",
    },
    {
      id: 3,
      title: "instagram",
      src: image.snsIcon03.default,
      url: "https://www.instagram.com/2023.savetheearth/",
    },
    {
      id: 4,
      title: "facebook",
      src: image.snsIcon04.default,
      url: "https://www.facebook.com/people/%EC%82%AC%EB%8B%A8%EB%B2%95%EC%9D%B8-%EC%84%B8%EC%9D%B4%EB%B8%8C%EB%8D%94%EC%96%BC%EC%8A%A4/61552583009719/",
    },
  ];

  return (
    <Flex align="center" gap="0 1.5rem">
      {snsArr.map(sns => {
        return (
          <a href={sns.url} target="_blank" rel="noreferrer" key={sns.id}>
            <SnsImage src={sns.src} alt={sns.title} key={sns.id} big={big} />
          </a>
        );
      })}
    </Flex>
  );
};

export default SnsList;

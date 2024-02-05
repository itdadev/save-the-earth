import React from "react";
import styled from "@emotion/styled";
import { Flex } from "antd";

import { ImageFigure } from "@/components/ui/image";
import { TEXT_Z_INDEX } from "@/constants/zIndex";
import { image } from "@/theme";
import { mq } from "@/lib/react-responsive/mediaQuery";

const List = styled(Flex)(() => ({
  width: "100%",
  gap: "0 0.4rem",
}));
const Item = styled.div(({ color, big }) => ({
  flex: 1,
  position: "relative",
  maxWidth: "26rem",
  color: "white",
  fontSize: "1.1rem",

  "&::after": {
    position: "absolute",
    content: '""',
    background: `linear-gradient(transparent 20% 40% ,${color} 60% 100%)`,
    width: "100%",
    height: "100%",
    top: 0,
  },

  [mq("desktop")]: {
    fontSize: big === "true" ? "2rem" : "1.1rem",
  },
}));

const Text = styled(Flex)(({ big }) => ({
  position: "relative",
  zIndex: TEXT_Z_INDEX,

  [mq("desktop")]: {
    padding: big === "true" ? "3rem 6rem" : 0,
  },
}));

const Dollar = styled.div(({ theme, big }) => ({
  fontSize: big === "true" ? "2.2rem" : "2.4rem",
  fontWeight: theme.fontWeight.bold,

  [mq("desktop")]: {
    fontSize: big === "true" ? "3.8rem" : "2.4rem",
  },
}));

const ProjectList = ({ big }) => {
  const projectList = [
    {
      id: 1,
      title: "기후 프로젝트",
      dollar: "$375k+",
      src: image.headerProject01,
      color: "#6DA1D8",
    },
    {
      id: 2,
      title: "산림 프로젝트",
      dollar: "$250k+",
      src: image.headerProject02,
      color: "#8AB469",
    },
    {
      id: 3,
      title: "해양 프로젝트",
      dollar: "$100k+",
      src: image.headerProject03,
      color: "#FF8D56",
    },
  ];

  return (
    <List align="center" justify="space-between">
      {projectList.map(project => {
        return (
          <Item
            color={project.color}
            key={project.id}
            big={big ? "true" : "false"}
          >
            <ImageFigure>
              <img src={project.src} alt={project.title} />
            </ImageFigure>

            <Text
              vertical
              align="center"
              justify="center"
              gap="0.4rem 0"
              big={big ? "true" : "false"}
            >
              {project.title}

              <Dollar big={big ? "true" : "false"}>{project.dollar}</Dollar>
            </Text>
          </Item>
        );
      })}
    </List>
  );
};

export default ProjectList;

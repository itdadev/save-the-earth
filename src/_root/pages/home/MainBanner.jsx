import React, { useRef, useState } from "react";
import styled from "@emotion/styled";

import { useMediaQuery } from "react-responsive";
import { useQuery } from "@tanstack/react-query";
import { HOME_BANNER_QUERY_KEY } from "@/constants/queryKeys";
import { HOME_BANNER_API_URL } from "@/constants/apiUrls";
import axios from "axios";
import { mq } from "@/libs/react-responsive/mediaQuery";
import ReactPlayer from "react-player/lazy";

const Container = styled.div(() => ({
  video: {
    width: "100%",
    height: "100%",
    objectFit: "cover !important",
    inset: 0,
    position: "absolute",
  },
}));

const VideoWrapper = styled(ReactPlayer)(() => ({
  marginTop: "4.8rem",

  [mq("desktop")]: {
    marginTop: "14.6rem",
  },
}));

const PipWrapper = styled.div(() => ({
  position: "absolute",
  top: 0,
  left: 0,
  width: "100%",

  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  zIndex: 1,

  video: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    inset: 0,
    position: "absolute",
  },

  [mq("desktop")]: {},
}));

const MainBanner = () => {
  const isDesktop = useMediaQuery({ minWidth: 1240 });

  const [pipActive, setPipActive] = useState(false);

  const { data: homeBanner } = useQuery({
    queryKey: [HOME_BANNER_QUERY_KEY],
    queryFn: async () => await axios.get(HOME_BANNER_API_URL),
    select: data => {
      return data?.data.data[0];
    },
  });

  return (
    <Container
      onContextMenu={e => {
        e.preventDefault();
      }}
    >
      <div className="player-wrapper" style={{ position: "relative" }}>
        {homeBanner?.file_url !== undefined && (
          <VideoWrapper
            url={homeBanner?.file_url}
            loop
            width="100%"
            height={isDesktop ? "1275px" : "640px"}
            muted={true}
            playing={true}
            light={false}
            controls={false}
            pip={true}
            playsinline
            onEnablePIP={() => setPipActive(true)}
            onDisablePIP={() => setPipActive(false)}
          ></VideoWrapper>
        )}

        {pipActive && (
          <PipWrapper>
            <p style={{ color: "white" }}>PIP Mode Active</p>
          </PipWrapper>
        )}
      </div>
    </Container>
  );
};

export default MainBanner;

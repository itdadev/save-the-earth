import React, { useRef, useState } from "react";
import styled from "@emotion/styled";

import { useMediaQuery } from "react-responsive";
import { useQuery } from "@tanstack/react-query";
import { HOME_BANNER_QUERY_KEY } from "@/constants/queryKeys";
import { HOME_BANNER_API_URL } from "@/constants/apiUrls";
import axios from "axios";
import { mq } from "@/libs/react-responsive/mediaQuery";
import ReactPlayer from "react-player/lazy";

const Container = styled.div(() => ({}));

const VideoWrapper = styled(ReactPlayer)(() => ({
  width: "100%",
  height: "64rem",
  marginTop: "4.8rem",
  objectFit: "cover",

  [mq("desktop")]: {
    marginTop: "14.6rem",
  },
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
    <Container>
      <div className="player-wrapper">
        {homeBanner?.file_url !== undefined && (
          <VideoWrapper
            url={homeBanner?.file_url}
            loop
            width="100%"
            height="100%"
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
          <div
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              backgroundColor: "rgba(0,0,0,0.5)",
              width: "100%",
              height: "100%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              zIndex: 10000,
            }}
          >
            <p style={{ color: "white" }}>PIP Mode Active</p>
          </div>
        )}
      </div>
    </Container>
  );
};

export default MainBanner;

import React, { useRef } from "react";
import styled from "@emotion/styled";

import { useMediaQuery } from "react-responsive";
import { useQuery } from "@tanstack/react-query";
import { HOME_BANNER_QUERY_KEY } from "@/constants/queryKeys";
import { HOME_BANNER_API_URL } from "@/constants/apiUrls";
import axios from "axios";
import { mq } from "@/libs/react-responsive/mediaQuery";

const Container = styled.div(() => ({}));

const VideoWrapper = styled.video(() => ({
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

  const { data: homeBanner } = useQuery({
    queryKey: [HOME_BANNER_QUERY_KEY],
    queryFn: async () => await axios.get(HOME_BANNER_API_URL),
    select: data => {
      return data?.data.data[0];
    },
  });

  return (
    <Container>
      {homeBanner?.file_url !== undefined && (
        <VideoWrapper autoPlay muted loop>
          <source src={homeBanner?.file_url} type="video/mp4" />
        </VideoWrapper>
      )}
    </Container>
  );
};

export default MainBanner;

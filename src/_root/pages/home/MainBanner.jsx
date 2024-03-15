import React from "react";
import { image } from "@/theme";
import styled from "@emotion/styled";
import { ImageFigure } from "@/components/ui/image";
import { useMediaQuery } from "react-responsive";
import { useQuery } from "@tanstack/react-query";
import {
  EXECUTIVE_LIST_QUERY_KEY,
  HOME_BANNER_QUERY_KEY,
} from "@/constants/queryKeys";
import {
  EXECUTIVE_LIST_API_URL,
  HOME_BANNER_API_URL,
} from "@/constants/apiUrls";
import axios from "axios";

const Container = styled.div(() => ({}));

const MainBannerImage = styled.figure(() => ({
  overflow: "hidden",
}));

const VideoWrapper = styled.video(() => ({
  width: "100%",
  height: "auto",
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

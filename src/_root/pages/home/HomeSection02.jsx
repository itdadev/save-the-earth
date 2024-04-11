import React, { useCallback, useRef, useState } from "react";
import styled from "@emotion/styled";
import Slider from "react-slick";

import { CommonContainer } from "@/components/ui/container";
import { Flex } from "antd";
import { IsDefault, IsDesktop, mq } from "@/libs/react-responsive/mediaQuery";
import { ImageFigure } from "@/components/ui/image";
import { Link, useNavigate } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import {
  ACTIVITY_LIST_QUERY_KEY,
  CAMPAIGN_LIST_QUERY_KEY,
  LOAD_SIZE_4,
} from "@/constants/queryKeys";
import axios from "axios";
import { ACTIVITY_API_URL, CAMPAIGN_API_URL } from "@/constants/apiUrls";
import { changeUrl } from "@/utils/Functions";
import { log } from "@craco/craco/dist/lib/logger";

const CampaignWrapper = styled.div(() => ({
  position: "relative",

  ".slick-dots": {
    position: "absolute",
    top: "-10rem",
    right: 0,
    maxWidth: "115rem",
    width: "fit-content",

    li: {
      "& li.slick-active button:before": {
        color: "white",
      },
    },
  },

  ".slick-slide": {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",

    [mq("desktop")]: {
      display: "block",
    },
  },
}));

const Title = styled.header(({ theme }) => ({
  position: "relative",
  fontSize: "4rem",
  color: "white",
  textAlign: "center",
  fontWeight: theme.fontWeight.bold,
  margin: "0 auto 4rem",
}));

const CampaignItem = styled.div(() => ({
  borderRadius: "1rem",
  textAlign: "center",
  background: "white",
  overflow: "hidden",
  maxWidth: "36rem",
  minHeight: "40rem",
  cursor: "pointer",
}));

const CampaignTexts = styled.div(({ theme }) => ({
  padding: "2rem",
  color: theme.color.grey02,
  fontSize: "1.5rem",
}));

const CampaignTitle = styled.div(({ theme }) => ({
  fontSize: "3rem",
  fontWeight: theme.fontWeight.bold,
  color: theme.color.black01,
}));

const DotWrapper = styled(Flex)(() => ({
  justifyContent: "center",
  marginTop: "2rem",
  gap: "0 1rem",

  [mq("desktop")]: {
    position: "absolute",
    right: 0,
    top: "50%",
    transform: "translateY(-50%)",
  },
}));

const Dot = styled.button(({ on }) => ({
  width: "1rem",
  height: "1rem",
  borderRadius: "50%",
  background: on === "true" ? "white" : "#FFD5BC",

  "&:hover": {
    background: "white",
  },
}));

const DotList = ({ goToSlide, campaignArr, currentIdx }) => {
  return (
    <DotWrapper align="center">
      {campaignArr?.map((item, idx) => {
        return (
          <Dot
            onClick={() => goToSlide(idx)}
            key={item.campaign_seq}
            on={currentIdx === idx ? "true" : "false"}
          />
        );
      })}

      <Dot
        onClick={() => goToSlide(campaignArr?.length)}
        on={currentIdx === campaignArr?.length ? "true" : "false"}
      />
    </DotWrapper>
  );
};
const HomeSection02 = () => {
  const navigate = useNavigate();
  const dotRef = useRef(null);

  const [currentIdx, setCurrentIdx] = useState(0);
  const [dragging, setDragging] = useState(true);

  const handleBeforeChange = useCallback(() => {
    setDragging(true);
  }, [setDragging]);

  const handleAfterChange = useCallback(() => {
    setDragging(false);
  }, [setDragging]);

  const { data: campaignList } = useQuery({
    queryKey: [CAMPAIGN_LIST_QUERY_KEY],
    queryFn: async () => await axios.get(`${CAMPAIGN_API_URL}`),
    select: data => {
      return data?.data?.data;
    },
  });

  const { data: activityList } = useQuery({
    queryKey: [ACTIVITY_LIST_QUERY_KEY],
    queryFn: async () =>
      await axios.get(`${ACTIVITY_API_URL}?limit=${LOAD_SIZE_4}`),
    select: data => {
      return data?.data;
    },
  });

  const onClickCard = useCallback(
    (e, path, state) => {
      navigate(path, { state: { id: state } });
    },
    [navigate],
  );

  const goToSlide = index => {
    if (dotRef?.current) {
      dotRef.current.slickGoTo(index);
      setCurrentIdx(index);
    }
  };

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    swipeToSlide: true,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 5000,
    touchThreshold: 5000,
    centerMode: false,
    draggable: dragging,
    onTouchStart: () => console.log("start"),
    onTouchEnd: () => console.log("end"),
    pauseOnHover: dragging,
    responsive: [
      {
        breakpoint: 1240,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 1080,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <>
      <CommonContainer>
        <Title>
          <p>캠페인&활동</p>

          <IsDesktop>
            <DotList
              goToSlide={goToSlide}
              campaignArr={campaignList}
              currentIdx={currentIdx}
            />
          </IsDesktop>
        </Title>

        <CampaignWrapper>
          <Slider
            {...settings}
            ref={dotRef}
            afterChange={idx => setCurrentIdx(idx)}
          >
            {campaignList?.map(item => {
              return (
                <CampaignItem
                  key={item.campaign_seq}
                  onClick={e =>
                    onClickCard(
                      e,
                      `/campaign/${changeUrl(item.campaign_menu_title)}/${item.campaign_seq}`,
                      item.campaign_seq,
                    )
                  }
                >
                  <ImageFigure ratio="3 / 2">
                    <img src={item.image_url} alt={item.campaign_menu_title} />
                  </ImageFigure>

                  <CampaignTexts>
                    <CampaignTitle>{item.campaign_menu_title}</CampaignTitle>

                    <p className="ellipsis-3">{item.campaign_content}</p>
                  </CampaignTexts>
                </CampaignItem>
              );
            })}

            <CampaignItem>
              <Link to="/latest-activities">
                <ImageFigure ratio="3 / 2">
                  <img
                    src={activityList?.data?.[0].image_url}
                    alt="지난 활동"
                  />
                </ImageFigure>

                <CampaignTexts>
                  <CampaignTitle>지난 활동</CampaignTitle>

                  <p className="ellipsis-3">
                    세이브더얼스의 지난 활동을 확인해보세요.
                  </p>
                </CampaignTexts>
              </Link>
            </CampaignItem>
          </Slider>
        </CampaignWrapper>

        <IsDefault>
          <DotList
            goToSlide={goToSlide}
            campaignArr={campaignList}
            currentIdx={currentIdx}
          />
        </IsDefault>
      </CommonContainer>
    </>
  );
};

export default HomeSection02;

import React, { useCallback, useRef, useState } from "react";
import styled from "@emotion/styled";
import Slider from "react-slick";

import { image } from "@/theme";
import { CommonContainer } from "@/components/ui/container";
import { Flex } from "antd";
import { IsDefault, IsDesktop, mq } from "@/libs/react-responsive/mediaQuery";
import { ImageFigure } from "@/components/ui/image";
import { Link, useNavigate } from "react-router-dom";

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
      {campaignArr.map((item, idx) => {
        return (
          <Dot
            onClick={() => goToSlide(idx)}
            key={item.id}
            on={currentIdx === idx ? "true" : "false"}
          />
        );
      })}
    </DotWrapper>
  );
};
const HomeSection02 = () => {
  const navigate = useNavigate();

  const [currentIdx, setCurrentIdx] = useState(0);
  const [dragging, setDragging] = useState(false);

  const dotRef = useRef(null);

  const handleBeforeChange = useCallback(() => {
    setDragging(true);
  }, [setDragging]);

  const handleAfterChange = useCallback(() => {
    setDragging(false);
  }, [setDragging]);

  const onClickCard = useCallback(
    path => e => {
      if (dragging) {
        e.stopPropagation();
        return;
      }

      navigate(path);
    },
    [dragging, navigate],
  );

  const campaignArr = [
    {
      id: 1,
      title: "깨끗한 연안 만들기",
      description:
        "‘깨끗한 연안 만들기 그리고, 공존’은 해양 및 연안 환경을 보호하고 해양 쓰레기 문제에 대응하는데 핵심적인 ",
      src: image.homeCampaign01,
      linkTo: "/clean-shore",
    },
    {
      id: 2,
      title: "숲과 환경",
      description:
        "숲과 환경 그리고 둘레길 정화’는 자연 환경보전 활동과 환경 교육을 결합하여 참석자들은 숲 생태계의 중요성",
      src: image.homeCampaign02,
      linkTo: "/forest",
    },
    {
      id: 3,
      title: "환경 보존",
      description:
        "세이브더얼스 ‘환경보존 ; 불필요한 물건 바꿔쓰기’는 소비와 환경 부담을 줄이고, 친환경적인 생활 습관을 촉진",
      src: image.homeCampaign03,
      linkTo: "/environment",
    },
    {
      id: 4,
      title: "지난 활동",
      description: "세이브더얼스의 지난 활동을 확인해보세요.",
      src: image.homeCampaign01,
      linkTo: "/latest-activities",
    },
  ];

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
    centerMode: false,
    draggable: true,
    beforeChange: handleBeforeChange,
    afterChange: handleAfterChange,
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
              campaignArr={campaignArr}
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
            {campaignArr.map(item => {
              return (
                <CampaignItem
                  key={item.id}
                  onClick={() => onClickCard(item.linkTo)}
                >
                  <ImageFigure ratio="3 / 2">
                    <img src={item.src} alt={item.title} />
                  </ImageFigure>

                  <CampaignTexts>
                    <CampaignTitle>{item.title}</CampaignTitle>

                    <p>{item.description}</p>
                  </CampaignTexts>
                </CampaignItem>
              );
            })}
          </Slider>
        </CampaignWrapper>

        <IsDefault>
          <DotList
            goToSlide={goToSlide}
            campaignArr={campaignArr}
            currentIdx={currentIdx}
          />
        </IsDefault>
      </CommonContainer>
    </>
  );
};

export default HomeSection02;

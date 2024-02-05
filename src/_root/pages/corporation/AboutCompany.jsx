import React from "react";
import styled from "@emotion/styled";
import { Flex } from "antd";

import { image } from "@/theme";
import {
  CommonContainer,
  CommonPageContainer,
} from "@/components/ui/container";
import { CommonTitleFour } from "@/components/ui/fonts/Fonts";
import { mq } from "@/lib/react-responsive/mediaQuery";
import NaverMap from "@/_root/pages/NaverMap";
import { SnsList } from "@/components/shared/item";

const Container = styled(Flex)(() => ({
  flexDirection: "column",

  [mq("desktop")]: {
    flexDirection: "row",
  },
}));

const InfoList = styled(Flex)(({ theme }) => ({
  margin: "4rem 0",
  padding: "1rem 0",
  borderTop: `1px solid ${theme.color.black01}`,
  borderBottom: `1px solid ${theme.color.black01}`,
  fontSize: "2.4rem",

  [mq("desktop")]: {
    margin: "5rem 0",
    padding: "2.4rem 0",
  },
}));

const Logo = styled.img(() => ({
  width: "28rem",

  [mq("desktop")]: {
    width: "45rem",
  },
}));

const InfoItem = styled.div(({ theme }) => ({
  padding: "1.6rem 0",
  fontSize: "1.5rem",

  ":not(:last-of-type)": {
    borderBottom: `1px solid ${theme.color.grey04}`,
  },

  [mq("desktop")]: {
    fontSize: "2.4rem",
  },
}));

const Map = styled.div(() => ({
  width: "100%",
  maxWidth: "53rem",
}));

const MapWrapper = styled.div(({ theme }) => ({
  padding: "3rem 0",
  borderTop: `1px solid ${theme.color.black01}`,
  borderBottom: `1px solid ${theme.color.black01}`,
}));

const AboutCompany = () => {
  const companeyInfoArr = [
    { id: 1, title: "대표자", content: "정미혜" },
    { id: 2, title: "전화번호", content: "02-1234-1234" },
    { id: 3, title: "Email", content: "hazel@thecedor.com" },
    {
      id: 4,
      title: "주소",
      content: (
        <div>
          경기도 고양시 덕양구 북한산로 424-7 <small>(우편번호 : 10582)</small>
        </div>
      ),
    },
    { id: 5, title: "고유번호", content: "602-82-09690" },
  ];

  return (
    <CommonPageContainer>
      <CommonContainer>
        <Container gap="7rem 12rem" align="center">
          <Flex vertical align="center">
            <Logo src={image.footerLogo.default} alt="사단법인 세이브더얼스" />

            <InfoList vertical>
              {companeyInfoArr.map(info => {
                return (
                  <InfoItem key={info.id}>
                    {info.title} : {info.content}
                  </InfoItem>
                );
              })}
            </InfoList>

            <SnsList big />
          </Flex>

          <Map>
            <CommonTitleFour>오시는 길</CommonTitleFour>

            <MapWrapper>
              <NaverMap />
            </MapWrapper>
          </Map>
        </Container>
      </CommonContainer>
    </CommonPageContainer>
  );
};

export default AboutCompany;

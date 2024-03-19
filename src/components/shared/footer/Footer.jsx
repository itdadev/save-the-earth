import React from "react";
import { Link } from "react-router-dom";
import styled from "@emotion/styled";
import { Flex } from "antd";

import { image } from "@/theme";
import { IsDefault, mq } from "@/libs/react-responsive/mediaQuery";
import { DONATE_BUTTON_Z_INDEX } from "@/constants/zIndex";
import { SnsList } from "@/components/shared/item";

const Container = styled(Flex)(() => ({
  textAlign: "center",
  padding: "5rem 2rem 8rem",
  fontSize: "1.1rem",

  [mq("desktop")]: {
    fontSize: "1.6rem",
    padding: "5rem 0",
  },
}));

const FooterImage = styled.img(() => ({
  width: "24rem",

  [mq("desktop")]: {
    width: "42rem",
  },
}));

const StyledLink = styled(Link)(({ theme }) => ({
  ":not(:last-of-type)": {
    borderRight: `1px solid ${theme.color.black01}`,
    paddingRight: "1rem",
    marginRight: "1rem",
  },
}));

const DonateButton = styled.button(({ theme }) => ({
  position: "fixed",
  bottom: 0,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  gap: "0 0.4rem",
  width: "100svw",
  height: "6.6rem",
  color: "white",
  fontSize: "2.2rem",
  fontWeight: theme.fontWeight.bold,
  background: theme.color.tertiary,
  zIndex: DONATE_BUTTON_Z_INDEX,
}));
const Footer = () => {
  const footerNavArr = [
    { id: 1, title: "개인정보 보호정책", url: "/privacy-policy" },
    { id: 2, title: "고유번호증", url: "/" },
    { id: 3, title: "국세청 바로가기", outerLink: "https://www.nts.go.kr/" },
  ];

  return (
    <Container vertical align="center" justify="center" gap="1.6rem 0">
      <IsDefault>
        <DonateButton type="button">
          <img
            src={image.heartIcon.default}
            alt="하트 아이콘"
            width={30}
            height={30}
          />
          후원하기
        </DonateButton>
      </IsDefault>

      <FooterImage src={image.footerLogo.default} alt="사단법인 세이브더얼스" />

      <Flex vertical align="center" justify="center" gap="0.5rem 0">
        <p>
          대표자 : 정미혜 | 주소 : 경기도 고양시 덕양구 북한산로 424-7(우편번호
          : 10582) | 고유번호 : 602-82-09690
        </p>

        <Flex align="center">
          <StyledLink to="/privacy-policy">개인정보 보호정책</StyledLink>

          <StyledLink to="/">고유번호증</StyledLink>

          <a href="https://www.nts.go.kr/" target="_blank" rel="noreferrer">
            국세청 바로가기
          </a>
        </Flex>
      </Flex>

      <SnsList />
    </Container>
  );
};

export default Footer;

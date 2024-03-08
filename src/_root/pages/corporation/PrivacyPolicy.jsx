import React from "react";
import { Collapse, Flex } from "antd";
import { CaretRightOutlined } from "@ant-design/icons";
import styled from "@emotion/styled";

import {
  CommonContainer,
  CommonPageContainer,
} from "@/components/ui/container";
import { CommonTitleTwo } from "@/components/ui/fonts/Fonts";
import { PRIVACY_POLICY_ARR } from "@/constants/staticInformation";
import { TermsContainer } from "@/_root/pages/corporation/TermsOfUse";
import { mq } from "@/libs/react-responsive/mediaQuery";

const Wrapper = styled(Flex)(({ theme }) => ({
  gap: "1rem 0",
  maxWidth: "90rem",
  margin: "8rem auto 3.6rem",
  padding: "1rem 2rem",
  border: `1px solid ${theme.color.grey02}`,
  borderRadius: "0.5rem",
  fontSize: "1.4rem",
  fontFamily: theme.fontFamily.secondary,

  [mq("desktop")]: {
    padding: "1rem 6rem",
  },
}));
const PrivacyPolicy = () => {
  return (
    <CommonPageContainer>
      <CommonContainer>
        <CommonTitleTwo>개인정보 취급방침</CommonTitleTwo>

        <Wrapper vertical>
          <p>
            사단법인 세이브더얼스(Save the Earth Foundation, 이하
            ‘세이브더얼스’라 함)은 이용자에게 개인정보보호법 제30조에 따라
            정보주체의 개인정보를 보호하고 이와 관련된 고충을 신속하고 원활하게
            처리할 수 있도록 다음과 같이 개인정보취급방침을 수립ㆍ공개합니다.
          </p>

          <p>
            ‘세이브더얼스’는 이용자의 개인정보를 중요하게 여기고, ‘정보통신망
            이용촉진 및 정보보호에 관한 법률’ 및 ‘개인정보보호법’,
            ‘전기통신사업법’, ‘통신비밀보호법’ 등 정보통신서비스 제공자가
            준수하여야 할 개인정보와 관련된 법령상의 개인정보보호규정 및
            방송통신위원회가 제정한 개인정보 보호지침을 준수하고 있습니다.
          </p>

          <p>
            ‘세이브더얼스’는 홈페이지에 공개된 개인정보취급방침을 통하여
            이용자가 제공하는 개인정보가 어떠한 용도와 방식으로 이용되고 있으며,
            개인정보 보호를 위하여 어떠한 조치가 취해지고 있는지 알려드립니다.
            본 개인정보취급방침은 2023년 11월 18일에 재정되었으며 정부의 법령 및
            지침의 재ㆍ개정 또는 보다 나은 서비스를 제공하기 위하여 그 내용이
            변경될 수 있으니 사이트 방문 시 수시로 그 내용을 확인하여 주시기
            바랍니다.
          </p>

          <p>
            ‘세이브더얼스’는 개인정보취급방침을 개정하는 경우 웹사이트 공지사항
            떠는 회원 개별공지를 통하여 공지할 것입니다
          </p>
        </Wrapper>

        <TermsContainer>
          <Collapse
            defaultActiveKey={["1"]}
            ghost
            destroyInactivePanel
            items={PRIVACY_POLICY_ARR}
            accordion
            expandIconPosition="end"
            expandIcon={({ isActive }) => (
              <CaretRightOutlined rotate={isActive ? 90 : 0} />
            )}
          />
        </TermsContainer>
      </CommonContainer>
    </CommonPageContainer>
  );
};

export default PrivacyPolicy;

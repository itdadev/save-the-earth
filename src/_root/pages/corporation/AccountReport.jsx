import React from "react";
import styled from "@emotion/styled";

import { image, color } from "@/theme";
import {
  CommonContainer,
  CommonPageContainer,
} from "@/components/ui/container";
import { CommonTitleTwo } from "@/components/ui/fonts/Fonts";
import { PrimaryButton } from "@/components/ui/buttons";
import { Flex } from "antd";
import { mq } from "@/lib/react-responsive/mediaQuery";

const Container = styled(Flex)(({ theme }) => ({
  flexDirection: "column",
  flexWrap: "wrap",
  marginTop: "8rem",
  borderTop: `1px solid ${theme.color.black01}`,

  [mq("desktop")]: {
    flexDirection: "row",
    borderBottom: `1px solid ${theme.color.black01}`,
  },
}));

const ReportItem = styled(Flex)(({ theme }) => ({
  width: "100%",
  minHeight: "11rem",
  fontSize: "1.8rem",
  borderBottom: `1px solid ${theme.color.black01}`,

  [mq("desktop")]: {
    width: "50%",
    minHeight: "18rem",
    paddingRight: "5rem",
    fontSize: "3rem",

    ":nth-of-type(3)": {
      border: "none",
    },
  },
}));

const Icon = styled(Flex)(({ theme }) => ({
  minWidth: "5rem",
  height: "5rem",
  borderRadius: "50%",
  background: theme.color.grey03,

  img: {
    width: "3rem",
  },

  [mq("desktop")]: {
    minWidth: "8rem",
    height: "8rem",

    img: {
      width: "5rem",
    },
  },
}));

const Title = styled.header(({ theme }) => ({
  flex: 1,
  textAlign: "center",
  margin: "2rem",

  b: {
    fontWeight: theme.fontWeight.bold,
    fontSize: "2.4rem",
  },

  [mq("desktop")]: {
    margin: "4rem",

    b: {
      fontSize: "3.6rem",
    },
  },
}));

const Notice = styled.div(({ theme }) => ({
  color: theme.color.secondary01,
  fontSize: "1.6rem",
  marginTop: "2rem",

  [mq("desktop")]: {
    marginTop: 0,
    fontSize: "2.2rem",
  },
}));

const AccountReport = () => {
  const reportArr = [
    {
      id: 1,
      title: "정관",
      year: 2024,
      file: "",
      icon: image.reportIcon01.default,
      type: 1,
    },
    {
      id: 2,
      title: "정관",
      year: 2023,
      file: "",
      icon: image.reportIcon01.default,
      type: 1,
    },
    {
      id: 3,
      title: "회계보고서",
      year: 2024,
      file: "",
      icon: image.reportIcon02.default,
      type: 2,
    },
  ];

  return (
    <CommonPageContainer>
      <CommonContainer>
        <CommonTitleTwo>정관/회계 보고서</CommonTitleTwo>

        <Container align="center" justify="space-between">
          {reportArr.map((report, idx) => {
            return (
              <ReportItem key={report.id} align="center">
                <Icon align="center" justify="center">
                  <img src={report.icon} alt="파일 아이콘" />
                </Icon>

                <Title>
                  {report.title} <b>{report.year}</b>
                </Title>

                <PrimaryButton
                  type="button"
                  bgColor={
                    report.type === 1 ? color.primary02 : color.secondary01
                  }
                >
                  다운로드
                </PrimaryButton>
              </ReportItem>
            );
          })}

          <Notice>
            <p>*2023년 회계감사보고서는</p>

            <p>2024년 회계감사완료 후 부터 확인이 가능합니다.</p>
          </Notice>
        </Container>
      </CommonContainer>
    </CommonPageContainer>
  );
};

export default AccountReport;

import React from "react";
import styled from "@emotion/styled";
import { useQuery } from "@tanstack/react-query";

import { image, color } from "@/theme";
import {
  CommonContainer,
  CommonPageContainer,
} from "@/components/ui/container";
import { CommonTitleTwo } from "@/components/ui/fonts/Fonts";
import { PrimaryButton } from "@/components/ui/buttons";
import { Flex } from "antd";
import { mq } from "@/libs/react-responsive/mediaQuery";
import { ACCOUNT_REPORT_LIST_QUERY_KEY } from "@/constants/queryKeys";
import {
  ACCOUNT_REPORT_API_URL,
  FILE_DOWNLOAD_API_URL,
} from "@/constants/apiUrls";
import axios from "axios";

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

const ReportItem = styled(Flex)(({ theme, islastodd }) => ({
  width: "100%",
  minHeight: "11rem",
  fontSize: "1.8rem",
  borderBottom: `1px solid ${theme.color.black01}`,

  [mq("desktop")]: {
    width: "50%",
    minHeight: "18rem",
    paddingRight: "5rem",
    fontSize: "3rem",
    ...(islastodd === "true" && {
      borderBottom: "none",
    }),
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
    minHeight: "20rem",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",

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
    maxWidth: "44.4rem",
  },
}));

const AccountReport = () => {
  const { data: accountReportList } = useQuery({
    queryKey: [ACCOUNT_REPORT_LIST_QUERY_KEY],
    queryFn: async () => await axios.get(`${ACCOUNT_REPORT_API_URL}`),

    select: data => {
      return data?.data?.data;
    },
  });
  const { data: accountReportNotice } = useQuery({
    queryKey: ["accountReportNotice"],
    queryFn: async () => await axios.get(`${ACCOUNT_REPORT_API_URL}`),

    select: data => {
      return data?.data.notice;
    },
  });

  console.log(accountReportNotice);

  const downloadReport = async (seq, originalFile, serverFile, uploadPath) => {
    try {
      const res = await axios.get(
        `${FILE_DOWNLOAD_API_URL}?original_file_name=${originalFile}&server_file_name=${serverFile}&upload_path=${uploadPath}`,
        { responseType: "blob" },
      );
      const blob = new Blob([res.data], { type: res.headers["content-type"] });

      // Blob을 URL로 변환합니다.
      const fileUrl = window.URL.createObjectURL(blob);

      // 링크 엘리먼트를 생성합니다.
      const link = document.createElement("a");
      link.href = fileUrl;
      link.setAttribute("download", originalFile); // 다운로드할 파일의 원래 이름을 설정합니다.

      // 링크를 클릭하여 다운로드를 시작합니다.
      link.click();

      // 더 이상 필요하지 않은 요소들을 제거합니다.
      window.URL.revokeObjectURL(fileUrl);
      link.remove();
      // console.log(fileUrl);
    } catch (error) {
      console.error("Error downloading report:", error);
      // 에러 처리
    }
  };
  return (
    <CommonPageContainer>
      <CommonContainer>
        <CommonTitleTwo>정관/회계 보고서</CommonTitleTwo>

        <Container align="center" justify="space-between">
          {accountReportList
            ?.sort((a, b) => b.report_title - a.report_title)
            .sort((a, b) => a.report_type_value - b.report_type_value)
            .map((report, idx, array) => {
              const isLastOdd = idx === array.length - 1 && idx % 2 === 0;

              return (
                <ReportItem
                  key={report.report_seq}
                  align="center"
                  islastodd={isLastOdd ? "true" : "false"}
                >
                  <Icon align="center" justify="center">
                    <img
                      src={
                        report.report_type_value === "01"
                          ? image.reportIcon01.default
                          : image.reportIcon02.default
                      }
                      alt="파일 아이콘"
                    />
                  </Icon>

                  <Title>
                    {report.report_type_name} <b>{report.report_title}</b>
                  </Title>

                  <PrimaryButton
                    type="button"
                    bgColor={
                      report.report_type_value === "01"
                        ? color.primary02
                        : color.secondary01
                    }
                    clickEvent={() =>
                      downloadReport(
                        report.report_seq,
                        report.original_file_name,
                        report.server_file_name,
                        report.upload_path,
                      )
                    }
                  >
                    다운로드
                  </PrimaryButton>
                </ReportItem>
              );
            })}

          <Notice>
            <p>{accountReportNotice}</p>
          </Notice>
        </Container>
      </CommonContainer>
    </CommonPageContainer>
  );
};

export default AccountReport;

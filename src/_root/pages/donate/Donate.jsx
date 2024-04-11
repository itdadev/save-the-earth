import React from "react";
import styled from "@emotion/styled";
import { useTheme } from "@emotion/react";

import {
  CommonContainer,
  CommonPageContainer,
} from "@/components/ui/container";
import { ProjectList, TitleTag } from "@/components/shared/item";
import { mq } from "@/libs/react-responsive/mediaQuery";

const Container = styled.div(() => ({
  maxWidth: "84rem",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  margin: "0 auto",
}));

const PageTitle = styled.div(({ theme }) => ({
  margin: "2rem 0 3rem",
  fontSize: "2.6rem",
  fontWeight: theme.fontWeight.bold,
  textAlign: "center",

  [mq("desktop")]: {
    fontSize: "3.8rem",
  },
}));

const AccountList = styled.ul(() => ({
  width: "100%",
  marginTop: "5rem",
  fontSize: "2.4rem",
}));

const AccountItem = styled.ul(({ theme }) => ({
  display: "flex",
  padding: "1.5rem",
  fontSize: "1.6rem",
  borderBottom: `1px solid ${theme.color.grey04}`,

  ":first-of-type": {
    borderTop: `1px solid ${theme.color.grey04}`,
  },

  [mq("desktop")]: {
    padding: "1rem 8rem",
    fontSize: "2.4rem",
  },
}));

const AccountTitle = styled.header(() => ({
  width: "10rem",
  letterSpacing: "0.2rem",
  marginRight: "0.4rem",
}));

const Donate = () => {
  const theme = useTheme();

  const accountInfoArr = [
    { id: 1, title: "후원계좌", content: "사단법인 세이브더얼스" },
    {
      id: 2,
      title: `은\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0행`,
      content: "신한은행",
    },
    { id: 3, title: "계좌번호", content: "140-014-240740" },
  ];

  return (
    <CommonPageContainer>
      <CommonContainer>
        <Container>
          <TitleTag title="SUPPORT US" bgColor={theme.color.secondary01} />

          <PageTitle>
            여러분의 정성으로 지속가능한 미래를 만들어갑니다.
          </PageTitle>

          <ProjectList big />

          <AccountList>
            {accountInfoArr.map(info => {
              return (
                <AccountItem key={info.title}>
                  <AccountTitle>{info.title}</AccountTitle>

                  <p>: {info.content}</p>
                </AccountItem>
              );
            })}
          </AccountList>
        </Container>
      </CommonContainer>
    </CommonPageContainer>
  );
};

export default Donate;

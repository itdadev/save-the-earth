import React from "react";
import { Collapse } from "antd";
import { CaretRightOutlined } from "@ant-design/icons";
import styled from "@emotion/styled";

import {
  CommonContainer,
  CommonPageContainer,
} from "@/components/ui/container";
import { CommonTitleTwo } from "@/components/ui/fonts/Fonts";
import { TERMS_OF_USE_ARR } from "@/constants/staticInformation";

export const TermsContainer = styled.header(({ theme }) => ({
  maxWidth: "90rem",
  margin: "8rem auto 0",
  fontFamily: theme.fontFamily.secondary,
  fontWeight: theme.fontWeight.bold,

  ".ant-collapse-header": {
    borderBottom: `1px solid ${theme.color.black01}`,
    borderRadius: "0 !important",
  },
}));

export const TermsDescription = styled.div(({ theme }) => ({
  color: theme.color.grey06,
  lineHeight: 1.8,

  ul: {
    margin: "1rem 0",
    paddingLeft: "2rem",

    li: {
      listStyle: "disc",
    },
  },

  a: {
    color: theme.color.primary01,
  },

  table: {
    width: "100%",
    margin: "1rem 0",
    borderCollapse: "collapse",
    border: `1px solid ${theme.color.black01}`,

    tr: {
      border: `1px solid ${theme.color.black01}`,

      th: {
        padding: "0.6rem 0",
        border: `1px solid ${theme.color.black01}`,
      },

      td: {
        padding: "0.6rem 0",
        textAlign: "center",
        border: `1px solid ${theme.color.black01}`,
      },
    },
  },
}));

const TermsOfUse = () => {
  return (
    <CommonPageContainer>
      <CommonContainer>
        <CommonTitleTwo>이용약관</CommonTitleTwo>

        <TermsContainer>
          <Collapse
            defaultActiveKey={["1"]}
            ghost
            destroyInactivePanel
            items={TERMS_OF_USE_ARR}
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

export default TermsOfUse;

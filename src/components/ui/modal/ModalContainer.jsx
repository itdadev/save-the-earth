import React from "react";
import { Modal } from "antd";

import styled from "@emotion/styled";

const Container = styled(Modal)(() => ({
  minWidth: "80vw",

  "&>div": {
    margin: 0,
    overflow: "scroll",
  },
}));

const ModalContainer = ({ children, ...props }) => {
  const modalStyles = {
    mask: {
      zIndex: 500,
    },
  };

  return (
    <Container
      {...props}
      styles={modalStyles}
      zIndex={5000}
      centered
      cancelText={props.cancelText ? props.cancelText : "취소"}
      wrapClassName="antd-modal-wrapper"
      destroyOnClose={true}
    >
      {children}
    </Container>
  );
};

export default ModalContainer;

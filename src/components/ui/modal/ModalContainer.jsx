import React from "react";
import { Modal } from "antd";

import styled from "@emotion/styled";
import { useMediaQuery } from "react-responsive";

const Container = styled(Modal)(() => ({
  minWidth: "80svw",

  "&>div": {
    margin: 0,
  },
}));

const ModalContainer = ({ children, ...props }) => {
  const isDesktop = useMediaQuery({ minWidth: 1024 });

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

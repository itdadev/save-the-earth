import React, { useMemo } from "react";

import ModalContainer from "./ModalContainer";
import { PrivacyPolicy, TermsOfUse } from "@/_root/pages/corporation";

const TermModal = ({ onCancel, termModalOpen }) => {
  const modalContents = useMemo(() => {
    switch (termModalOpen) {
      case "use_term":
        return <TermsOfUse />;

      case "privacy_policy":
        return <PrivacyPolicy />;

      default:
        return null;
    }
  }, [termModalOpen]);

  return (
    <ModalContainer
      open={termModalOpen !== ""}
      onCancel={onCancel}
      footer={null}
    >
      {modalContents}
    </ModalContainer>
  );
};

export default TermModal;

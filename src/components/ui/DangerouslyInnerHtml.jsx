import React from "react";

const DangerouslyInnerHtml = ({ value }) => {
  return (
    <div
      dangerouslySetInnerHTML={{
        __html: value,
      }}
    />
  );
};

export default DangerouslyInnerHtml;

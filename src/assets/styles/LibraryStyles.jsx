import { css, Global } from "@emotion/react";
import { color } from "@/theme";
import { mq } from "@/libs/react-responsive/mediaQuery";

const style = css`
  //  NOTE: Fullcalendar styling customization
  .fc-day-today {
    background-color: transparent !important;
  }

  .fc-daygrid-dot-event {
    :hover {
      transition: all 0.3s;
      background-color: ${color.peach};
    }
  }

  .fc-toolbar {
    flex-wrap: wrap;
  }

  .fc-h-event {
    background-color: ${color.peach};
    border: 1px solid ${color.peach};
    margin-bottom: 3px;
  }

  .fc-daygrid-event {
    white-space: break-spaces;
  }

  .slick-slide > div {
    margin: 0 20px;
  }
  .slick-list {
    margin: 0 -20px;
  }

  .ant-pagination-options {
    display: none !important;
  }

  .ant-input-outlined {
    padding: 0 !important;
    border-width: 2px !important;
  }

  .ant-input-suffix {
    margin-right: 1.6rem;
  }

  .ant-input-lg {
    padding: 1rem 1.1rem 0.7rem !important;
  }

  .ant-input-lg,
  .ant-input-affix-wrapper-lg {
    border-radius: 8px !important;
    line-height: 0.8;
  }

  .ant-modal-body {
    & > div {
      margin: 0;
    }
  }

  .ant-checkbox-inner {
    border-radius: 0 !important;
  }

  .ant-modal-content {
    max-height: 80svh;
    overflow-x: hidden !important;
  }

  .ant-checkbox-wrapper {
    align-items: flex-end !important;
  }

  .ant-input-group-addon {
    border: none !important;
    background: none !important;
    padding-left: 0.4rem !important;
    padding-right: 0 !important;
  }
`;

function LibraryStyles() {
  return <Global styles={style} />;
}

export default LibraryStyles;

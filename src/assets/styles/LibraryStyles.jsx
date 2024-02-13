import { css, Global } from "@emotion/react";
import { color } from "@/theme";

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

  .slick-slide > div {
    margin: 0 20px;
  }
  .slick-list {
    margin: 0 -20px;
  }
`;

function LibraryStyles() {
  return <Global styles={style} />;
}

export default LibraryStyles;

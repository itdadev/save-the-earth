import styled from "@emotion/styled";
import { Flex } from "antd";

import { mq } from "@/lib/react-responsive/mediaQuery";

export const CommonTitleOne = styled.h2(({ theme, align = "center" }) => ({
  fontWeight: theme.fontWeight.bold,
  fontSize: "3rem",
  textAlign: align,

  [mq("tablet")]: {
    fontSize: "3.6rem",
  },

  [mq("desktop")]: {
    fontSize: "6.4rem",
  },
}));

export const CommonTitleTwo = styled.h3(({ theme, align = "center" }) => ({
  fontWeight: theme.fontWeight.bold,
  fontSize: "2.6rem",
  textAlign: align,

  [mq("tablet")]: {
    fontSize: "3.2rem",
  },

  [mq("desktop")]: {
    fontSize: "4.8rem",
  },
}));

export const CommonTitleThree = styled.h4(({ theme, textColor }) => ({
  fontWeight: theme.fontWeight.bold,
  fontSize: "3.2rem",
  color: textColor ? textColor : theme.color.black01,

  [mq("tablet")]: {
    fontSize: "3.6rem",
  },

  [mq("desktop")]: {
    fontSize: "3.8rem",
  },
}));

export const CommonTitleFour = styled.h5(({ theme, textColor }) => ({
  fontWeight: theme.fontWeight.bold,
  fontSize: "2.2rem",
  color: textColor ? textColor : theme.color.black01,

  [mq("tablet")]: {
    fontSize: "2.4rem",
  },

  [mq("desktop")]: {
    fontSize: "3rem",
  },
}));

export const CommonDescriptionOne = styled(Flex)(
  ({ theme, weight = "regular" }) => ({
    flexDirection: "column",
    gap: "1rem 0",
    fontSize: "1.5rem",
    fontWeight: theme.fontWeight[weight],

    [mq("tablet")]: {
      fontSize: "2rem",
    },

    [mq("desktop")]: {
      fontSize: "2.6rem",
    },
  }),
);

export const CommonDescriptionTwo = styled.div(() => ({
  fontSize: "1.8rem",

  [mq("tablet")]: {
    fontSize: "2rem",
  },

  [mq("desktop")]: {
    fontSize: "2.2rem",
  },
}));

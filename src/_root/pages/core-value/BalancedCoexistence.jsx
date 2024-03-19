import React from "react";
import { useMediaQuery } from "react-responsive";
import styled from "@emotion/styled";
import { Flex } from "antd";

import { color, image } from "@/theme";
import { ImageFigure } from "@/components/ui/image";
import {
  CommonDescriptionOne,
  CommonTitleTwo,
  CommonTitleThree,
} from "@/components/ui/fonts/Fonts";
import { CORE_VALUE_ARR } from "@/constants/staticInformation";
import { CommonContainer } from "@/components/ui/container";
import { mq } from "@/libs/react-responsive/mediaQuery";

const Container = styled.div(() => ({
  [mq("desktop")]: {
    margin: "14.6rem 0 0",
    padding: "9rem 0",
  },
}));

const Wrapper = styled.div(() => ({
  [mq("desktop")]: {
    margin: "0 auto",
    maxWidth: "120rem",
  },
}));

const Title = styled(CommonTitleTwo)(() => ({
  margin: "5rem 0 2rem",

  [mq("desktop")]: {
    margin: "7rem 0 5rem",
  },
}));

const CoreValueList = styled(Flex)(({ theme }) => ({
  flexDirection: "column",
  marginTop: "5rem",
  gap: "5rem 0",
  justifyContent: "center",

  [mq("desktop")]: {
    flexDirection: "row",
    padding: "6rem 5rem",
    borderTop: `1px solid ${theme.color.black01}`,
    borderBottom: `1px solid ${theme.color.black01}`,
  },
}));

const CoreValueItem = styled(Flex)(() => ({
  flex: 1,
  textAlign: "center",
  gap: "1rem 0",

  [mq("desktop")]: {
    gap: "3rem 0",
  },
}));

const CoreValueImage = styled.img(() => ({
  width: "6rem",

  [mq("desktop")]: {
    width: "16rem",
  },
}));

const BalancedCoexistence = () => {
  const isDesktop = useMediaQuery({ minWidth: 1240 });

  return (
    <Container>
      <Wrapper>
        <ImageFigure ratio={isDesktop ? "12 / 5" : "4 / 3"}>
          <img src={image.balancedCoexistence} alt="나무를 잡고 있는 손" />
        </ImageFigure>

        <CommonContainer>
          <Title>자연과 인간의 균형있는 공존</Title>

          <CommonDescriptionOne>
            <p>
              우리의 삶은 자연에서 시작되며, 자연의 다양성과 생태계는 우리
              생존과 번영의 기반입니다. 그러나 인간의 활동으로 인해 자연에 대한
              부담이 커지고 있으며 이는 기후변화, 생태계 파괴, 종 다양성 감소와
              같은 문제를 야기합니다. 우리는 이러한 문제에 대한 인식과 조치가
              필요하며, 자연을 보호하고 지속 가능한 방식으로 자원을 이용해야
              합니다.
            </p>

            <p>
              자연의 경계를 존중하며, 인간의 발전과 자연의 복원을 조화롭게
              이루어 낼 때 우리는 균형있는 공존을 할 수 있을 것입니다.사단법인
              세이브더얼스는 지속 가능한 미래를 위해 위해 움직이고, 행동하며,
              실천하여 자연과 인간의 조화로운 공존을 추구하고 더 나은 세상을
              만들어 나가도록 노력할 것입니다.
            </p>
          </CommonDescriptionOne>

          <CoreValueList>
            {CORE_VALUE_ARR.map(value => {
              return (
                <CoreValueItem
                  align="center"
                  justify="center"
                  vertical
                  key={value.id}
                >
                  <CoreValueImage src={value.src} alt={value.title} />

                  <CommonTitleThree textColor={color.primary02}>
                    {value.title}
                  </CommonTitleThree>

                  <CommonDescriptionOne>
                    {value.description}
                  </CommonDescriptionOne>
                </CoreValueItem>
              );
            })}
          </CoreValueList>
        </CommonContainer>
      </Wrapper>
    </Container>
  );
};

export default BalancedCoexistence;

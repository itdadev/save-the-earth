import React from "react";
import { image } from "@/theme";
import styled from "@emotion/styled";
import { Flex } from "antd";

import {
  CommonDescriptionOne,
  CommonTitleOne,
  CommonTitleTwo,
} from "@/components/ui/fonts/Fonts";
import {
  CommonContainer,
  CommonPageContainer,
} from "@/components/ui/container";
import { mq } from "@/libs/react-responsive/mediaQuery";

const Wrapper = styled(Flex)(() => ({
  marginBottom: "4.2rem",
  flexDirection: "column",

  [mq("desktop")]: {
    flexDirection: "row",
  },
}));

const FooterImage = styled.img(() => ({
  width: "20rem",

  [mq("desktop")]: {
    width: "45rem",
  },
}));

const PageImage = styled.img(() => ({
  width: "15rem",
  textAlign: "right",
  alignSelf: "flex-end",

  [mq("desktop")]: {
    width: "38rem",
    alignSelf: "flex-start",
  },
}));

const PageTitle = styled(CommonTitleOne)(({ theme }) => ({
  color: theme.color.secondary01,
}));

const DirectionWrapper = styled.div(({ theme }) => ({
  marginTop: "11rem",
  padding: "8rem 0",
  background: theme.color.primary01,
  color: "white",
}));

const DirectionList = styled(Flex)(() => ({
  flexWrap: "wrap",
  gap: "4rem",
  marginTop: "6rem",
  alignItems: "center",
  justifyContent: "center",
}));

const DirectionItem = styled(Flex)(({ theme }) => ({
  position: "relative",
  width: "100%",
  alignItems: "center",
  justifyContent: "center",
  padding: "3rem 2rem 2rem",
  background: "white",
  borderRadius: "1rem",
  color: theme.color.black01,
  textAlign: "center",

  [mq("desktop")]: {
    width: "calc(50% - 2rem)",
    padding: "5rem 3rem 3rem",
    borderRadius: "2rem",
  },
}));

const DirectionTag = styled.div(({ theme }) => ({
  position: "absolute",
  left: "50%",
  top: "-1rem",
  padding: "0 3rem",
  borderRadius: "8rem",
  transform: "translateX(-50%)",
  fontSize: "1.6rem",
  color: "white",
  background: theme.color.black01,

  [mq("desktop")]: {
    top: "-2rem",
    fontSize: "2.4rem",
  },
}));

const DeclarationEstablishment = () => {
  const directionArr = [
    {
      id: 1,
      title: "첫째",
      description: "환경보전과 탄소중립에 관한 시민운동 캠페인 및 홍보사업",
    },
    {
      id: 2,
      title: "둘째",
      description: "환경보전과 탄소중립에 관한 교육 세미나 및 연구사업",
    },
    {
      id: 3,
      title: "셋째",
      description: "환경 관련 컨텐츠 제작 및 간행물 등의 발간사업",
    },
    {
      id: 4,
      title: "넷째",
      description: "국내외 관련 단체와의 협력 및 연대사업",
    },
    {
      id: 5,
      title: "다섯째",
      description: "기타 본회의 목적을 달성하는데 필요한 사업",
    },
  ];

  return (
    <CommonPageContainer>
      <CommonContainer>
        <Wrapper justify="space-between">
          <div>
            <FooterImage
              src={image.footerLogo.default}
              alt="사단법인 세이브 더 얼스"
            />

            <PageTitle>설립 선언문</PageTitle>
          </div>

          <PageImage src={image.declarationEstablishment} alt="" />
        </Wrapper>

        <CommonDescriptionOne weight="light">
          <p>
            ‘세이브더얼스’는 시민 각자의 작은 실천을 통해 탄소중립을 실현하고,
            지구환경의 보다 나은 미래를 만들어가기 위하여 설립되었습니다.
          </p>
          <p>
            우리가 당면한 환경문제들의 중요성과 심각성을 인식하고, 더 나은
            방향으로 이끌어가기 위해 행동하고 실천하고자 하는 의지와 열정을 가진
            사람들이 모여 활동할 수 있는 기반을 마련하고자 합니다.
          </p>
          <p>
            땅속은 쓰레기들로 채워졌고, 바다속은 플라스틱들로 가득하고, 동물들과
            곤충들이 사라지고, 수풀이 사막으로 변모한 이유는 추워야 할 곳이
            더워지고, 더워야 할 곳은 뜨거워졌기 때문입니다. 폭염과 폭설, 태풍과
            해일이 몰려올 때도 우리는 그저 걱정만 하고 있고, 자연을 탓하며
            분노했고, 재해를 탓하며 안타까워만 했습니다. 이제는 그 모든 원인이
            자구가 병들어 아프다고 비명을 지르고 있기 때문이라는 것을 알게
            되었습니다.
          </p>
          <p>
            우리는 지구환경의 위기에 대해 모르지 않는다. 그럼에도 직구를 위해,
            우리의 미래를 위해 무엇을 해야 할지 물었을 때, 명확하게 대답하기
            쉽지 않습니다. 어쩌면 지구와의 공존을 위해 함께 해 달라는
            ‘세이브더얼스’가 거창해 보일지도 모르지만 서두르지 않으려 합니다.
          </p>
          <p>
            작은 한걸음이 미래를 바꾸듯 조금씩 천천히, 하지만 명확하게
            ‘작은행동실천’을 만들어가려 합니다.
          </p>

          <p>
            ‘자연과 인간의 균형 있는 공존’을 위한 실천방안에 대하여 연구하고,
            이를 실행하기 위한 다양한 실천안을 만들고 전파하여 더 많은 사람들이
            동참하게 하도록 할 것입니다.
          </p>
        </CommonDescriptionOne>
      </CommonContainer>

      <DirectionWrapper>
        <CommonContainer>
          <CommonTitleTwo align="left">사업목적 및 방향성</CommonTitleTwo>

          <CommonDescriptionOne>
            ‘세이브더얼스’는 자연환경보전 탄소중립 실천을 위한 지속적인 환경보
            호 활동과 캠페인 시민운동 및 환경교육을 실행하며 시민 환경 의식을
            증진시키고 자연과 인간의 균형적 공존을 이루어 후손에게 맑고 깨끗한
            환경을 물려주기 위하여 다음과 같은 사업방향을 설정하였습니다.
          </CommonDescriptionOne>

          <DirectionList>
            {directionArr.map(direction => {
              return (
                <DirectionItem key={direction.id}>
                  <DirectionTag>{direction.title}</DirectionTag>

                  <CommonDescriptionOne>
                    {direction.description}
                  </CommonDescriptionOne>
                </DirectionItem>
              );
            })}
          </DirectionList>
        </CommonContainer>
      </DirectionWrapper>
    </CommonPageContainer>
  );
};

export default DeclarationEstablishment;

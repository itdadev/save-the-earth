import React from "react";
import { image } from "@/theme";
import CampaignActivity from "@/_root/pages/campaign-activity/CampaignActivity";

const Environment = () => {
  const ActivityArr = [
    {
      id: 1,
      title: "행사일",
      description: <div>2023년 11월 22일 수요일, 25일 토요일 (2일)</div>,
    },
    {
      id: 2,
      title: "장소",
      description: (
        <div>
          <p>북한산 세이버더얼스 사무실(캠비움힐스)</p>
        </div>
      ),
    },
    {
      id: 3,
      title: "참여대상",
      description: (
        <div>
          <p>지역주민 그리고 참여희망 국민 모두</p>
        </div>
      ),
    },
  ];

  const planArr = [
    {
      id: 1,
      description:
        "행사 3주 전부터 온라인채널(지구살리기TV)을 통한 행사 공지 및 전파",
    },
    { id: 2, description: "자차 이동을 지양하고 대중교통 이용하기 권장" },
    {
      id: 3,
      description: "기부된 물건 중 각자 필요한 물건을 찾아 교환",
    },
    {
      id: 4,
      description: "교환되지 않고 남은 물품은 아름다운가게에 기부",
    },
    {
      id: 5,
      description: "모든 과정을 영상 콘텐츠로 제작하여 온라인을 통한 2차 홍보",
    },
  ];
  return (
    <CampaignActivity
      title="환경보존 , 불필요한 물건 바꿔 쓰기"
      mainImage={image.campaign03}
      activityArr={ActivityArr}
      planArr={planArr}
    >
      <p>
        세이브더얼스 ‘환경보존 ; 불필요한 물건 바꿔쓰기’는 소비와 환경 부담을
        줄이고, 친환경적인 생활 습관을 촉진하는 목적을 갖고 있으며 개인물품
        교환을 통해 물건의 수명을 연장하고 자원을 절약하며, 동시에 불필요한
        소비를 줄여 환경에 미치는 부정적인 영향을 감소시킵니다. 또한 공유와
        협력을 촉진하며 소비 주도의 사회에서 소비와 생산의 순환을 재고하고자
        하는 새로운 의식을 확산시키는 역할을 통해 지속 가능한 소비와 환경 보호
        의식을 높이며, 개인과 지역사회의 지속 가능한 미래를 만들어가기 위한
        행사입니다.
      </p>
    </CampaignActivity>
  );
};

export default Environment;

import React from "react";

import CampaignActivity from "@/_root/pages/campaign-activity/CampaignActivity";
import { image } from "@/theme";

const CleanShore = () => {
  const activityArr = [
    {
      id: 1,
      title: "행사일",
      description: <div>2023년 10월 14일 토요일</div>,
    },
    {
      id: 2,
      title: "장소",
      description: (
        <div>
          <p>영종도 마시안해변</p>
        </div>
      ),
    },
    {
      id: 3,
      title: "참여대상",
      description: (
        <div>
          <p>세이브더얼스 회원 및 일반 참여 희망자</p>
        </div>
      ),
    },
  ];

  const planArr = [
    { id: 1, description: "행사 3주 전부터 행사 공지 및 전파" },
    { id: 2, description: "자차 이동을 지양하고 대중교통 이용하기 권장" },
    {
      id: 3,
      description:
        "연안 쓰레기 줍기 활동을 하며 여행객 등에게 홍보 및 참여 유도",
    },
    {
      id: 4,
      description: "분리수거 후 영상 콘텐츠로 제작하여 온라인을 통한 2차 홍보",
    },
  ];

  return (
    <CampaignActivity
      title="‘ 깨끗한 연안 만들기 그리고, 공존 ’"
      mainImage={image.campaign01}
      activityArr={activityArr}
      planArr={planArr}
    >
      <p>
        ‘깨끗한 연안 만들기 그리고, 공존’은 해양 및 연안 환경을 보호하고 해양
        쓰레기 문제에 대응하는 데 핵심적인 역할을 하기 위한 행사입니다. 2020년
        국제 연안 정화의 날 행사에서 수집된 데이터에 따르면 전 세계적으로 약
        1,200만 개 이상의 쓰레기 아이템이 수거되었고, 이 중 약 97만 개는
        플라스틱 쓰레기였습니다. 이러한 수치는 플로깅이 얼마나 많은 플라스틱
        쓰레기를 해양 환경에서 제거하고 그 영향을 줄이는 데 기여하는지를
        보여줍니다.
      </p>

      <p>
        또한, 환경 교육 및 인식을 증가시키는 데도 도움이 될 것이며, 이는 지속
        가능한 소비 습관을 촉진하는 데 도움이 됩니다. 이 활동을 통해 참여자들은
        자연 환경 보호의 중요성을 실제로 경험하고, 플라스틱 사용 및 폐기에 대한
        자신의 행동을 반성할 기회를 갖게 됩니다. 이러한 인식을 높이는 과정은
        장기적으로 지속 가능한 소비 및 환경적 책임감을 증가시키는 데 도움이
        됩니다.
      </p>
    </CampaignActivity>
  );
};

export default CleanShore;

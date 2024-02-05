import React from "react";
import { image } from "@/theme";
import CampaignActivity from "@/_root/pages/campaign-activity/CampaignActivity";

const Forest = () => {
  const ActivityArr = [
    {
      id: 1,
      title: "행사일",
      description: <div>2023년 09월 16일 토요일 (국제 연안 정화의 날)</div>,
    },
    {
      id: 2,
      title: "장소",
      description: (
        <div>
          <p>북한산 둘레 길 10구간(내시묘역길)</p>
        </div>
      ),
    },
    {
      id: 3,
      title: "참여대상",
      description: (
        <div>
          <p>숲 생태계 및 지역사회 그리고, 북한산 둘레길 방문자</p>
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
    {
      id: 2,
      description: "자차 이동을 지양하고 대중교통 이용하기 권장",
    },
    {
      id: 3,
      description: "숲 치료사 김태호선생의 숲 해설 강의",
    },
    {
      id: 4,
      description: "강의 후 둘레길 정화활동을 하며 등산객 등에게 홍보",
    },
    {
      id: 5,
      description:
        "분리수거 후 참여자 전원 캠비움힐스로 이동하여 야채비빔밥으로 점심",
    },
    {
      id: 6,
      description: "모든 과정을 영상 콘텐츠로 제작하여 온라인을 통한 2차 홍보",
    },
  ];

  return (
    <CampaignActivity
      title="숲과 환경 그리고 둘레길 정화"
      mainImage={image.campaign02}
      activityArr={ActivityArr}
      planArr={planArr}
    >
      <p>
        ‘숲과 환경 그리고 둘레길 정화’는 자연 환경보전 활동과 환경 교육을
        결합하여 참석자들은 숲 생태계의 중요성과 가치를 깨닫게 하고, 지구 환경에
        대한 인식을 개선하기 위함입니다.
      </p>

      <p>
        또한 둘레길 정화활동을 통해 실제 환경 문제에 직접 참여하고, 숲과 자연
        환경을 쾌적하게 유지하기 위한 행동을 즉각적으로 실천합니다. 이러한
        경험을 통해 참석자들은 환경 보호와 지속 가능한 라이프스타일의 중요성을
        이해하며, 개인과 지역사회 차원에서 환경에 대한 책임을 더욱 심각하게
        받아들이는 계기가 될 것입니다.
      </p>
    </CampaignActivity>
  );
};

export default Forest;

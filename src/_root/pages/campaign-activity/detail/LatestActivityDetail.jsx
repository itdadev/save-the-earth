import React from "react";

import { image } from "@/theme";
import CampaignActivity from "@/_root/pages/campaign-activity/CampaignActivity";

const LatestActivityDetail = () => {
  const latestActivityArr = [
    {
      id: 1,
      title: "국제 연안 정화의 날 연안 정화 활동",
      date: "2023년 09월 16일",
      place: "영종도 마시안해변",
      src: image.latestActivities01,
      linkTo: "/international-coastal-cleanup-day",
    },
    {
      id: 2,
      title: "후쿠시마 오염수 방류 반대 서명",
      date: "2023년 06월 06일, 14일~15일",
      place: "북한산 등산로 입구",
      src: image.latestActivities02,
      linkTo: "/discharging-fukushima-contaminated-water",
    },
  ];

  const activityArr = [
    {
      id: 1,
      title: "행사일",
      description: <div>2023년 09월 16일</div>,
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
          <p>세이브더얼스 회원 및 일반 참가자</p>
        </div>
      ),
    },
  ];

  return (
    <CampaignActivity
      title="국제 연안 정화의 날 연안 정화 활동"
      mainImage={image.latestActivities01_1}
      activityArr={activityArr}
      pageTitle="지난활동"
    >
      <p>
        연안정화활동을 통하여 환경 교육 및 인식을 증가시키는 데도 도움이 될
        것이며, 이는 지속 가능한 소비 습관을 촉진하는 데 도움이 됩니다. 이
        활동을 통해 참여자들은 자연 환경 보호의 중요성을 실제로 경험하고,
        플라스틱 사용 및 폐기에 대한 자신의 행동을 반성할 기회를 갖게 됩니다.
        이러한 인식을 높이는 과정은 장기적으로 지속 가능한 소비 및 환경적
        책임감을 증가시키는 데 도움이 됩니다.
      </p>

      <ul>
        <li>- 행사내용 : 연안정화활동</li>

        <li>- 참여인원 : 16명</li>
      </ul>
    </CampaignActivity>
  );
};

export default LatestActivityDetail;

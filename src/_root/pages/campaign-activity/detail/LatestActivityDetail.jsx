import React from "react";

import { image } from "@/theme";
import CampaignActivity from "@/_root/pages/campaign-activity/CampaignActivity";
import { useQuery } from "@tanstack/react-query";
import {
  ACTIVITY_DETAIL_QUERY_KEY,
  ACTIVITY_LIST_QUERY_KEY,
  LOAD_SIZE_4,
} from "@/constants/queryKeys";
import axios from "axios";
import { ACTIVITY_API_URL } from "@/constants/apiUrls";
import { useParams } from "react-router-dom";

const LatestActivityDetail = () => {
  const activityId = useParams().activityId;

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

  const { data: activityDetail } = useQuery({
    queryKey: [ACTIVITY_DETAIL_QUERY_KEY, activityId],
    queryFn: async () => await axios.get(`${ACTIVITY_API_URL}/${activityId}`),
    enabled: !!activityId,
    select: data => {
      return data?.data?.data;
    },
  });

  console.log(activityDetail, "ddd");

  return (
    <CampaignActivity
      title="국제 연안 정화의 날 연안 정화 활동"
      mainImage={image.latestActivities01}
      activityArr={activityArr}
      pageTitle="지난활동"
    >
      {/*<p>*/}
      {/*  연안정화활동을 통하여 환경 교육 및 인식을 증가시키는 데도 도움이 될*/}
      {/*  것이며, 이는 지속 가능한 소비 습관을 촉진하는 데 도움이 됩니다. 이*/}
      {/*  활동을 통해 참여자들은 자연 환경 보호의 중요성을 실제로 경험하고,*/}
      {/*  플라스틱 사용 및 폐기에 대한 자신의 행동을 반성할 기회를 갖게 됩니다.*/}
      {/*  이러한 인식을 높이는 과정은 장기적으로 지속 가능한 소비 및 환경적*/}
      {/*  책임감을 증가시키는 데 도움이 됩니다.*/}
      {/*</p>*/}

      {/*<ul>*/}
      {/*  <li>- 행사내용 : 연안정화활동</li>*/}

      {/*  <li>- 참여인원 : 16명</li>*/}
      {/*</ul>*/}
    </CampaignActivity>
  );
};

export default LatestActivityDetail;

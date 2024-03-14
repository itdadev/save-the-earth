import { image } from "@/theme";
import React from "react";
import { TermsDescription } from "@/_root/pages/corporation/TermsOfUse";

// NOTE: BalancedCoexistence.jsx
export const CORE_VALUE_ARR = [
  {
    id: 1,
    title: "존중",
    description: "자연을 존중하며 조화롭게 공존합니다",
    src: image.coreValue01.default,
  },
  {
    id: 2,
    title: "지속성",
    description: "자원을 지속 가능하게 관리하여 미래를 보호합니다",
    src: image.coreValue02.default,
  },
  {
    id: 3,
    title: "보존",
    description: "생태계와 생물 다양성을 보호하고 유지합니다",
    src: image.coreValue03.default,
  },
];

// NOTE: 메뉴 리스트
export const MENU_LIST = [
  {
    id: 1,
    title: "Youtube 캠페인",
    url: "/youtube-campaign",
  },
  {
    id: 2,
    title: "캠페인 & 활동",
    subMenus: [{ id: 5, title: "지난활동", url: "/latest-activities" }],
  },
  {
    id: 3,
    title: "핵심가치",
    subMenus: [
      { id: 1, title: "균형있는 공존", url: "/balanced-coexistence" },
      { id: 2, title: "작은 행동 실천", url: "/take-action" },
    ],
  },
  {
    id: 4,
    title: "환경 달력",
    url: "/environment-calendar",
  },
  {
    id: 5,
    title: "사단법인 소개",
    subMenus: [
      { id: 1, title: "설립선언문", url: "/declaration-establishment" },
      { id: 2, title: "임원진", url: "/executives" },
      { id: 3, title: "연혁 및 주요활동", url: "/history" },
      { id: 4, title: "미디어", url: "/media" },
      { id: 5, title: "이용약관", url: "/terms-of-use" },
      { id: 6, title: "개인정보취급방침", url: "/privacy-policy" },
      { id: 7, title: "정관/회계보고서", url: "/account-report" },
      { id: 8, title: "회사소개", url: "/about-company" },
    ],
  },
];

// NOTE: History.jsx - 연혁
export const OFFLINE_HISTORY_ARR = [
  {
    id: 1,
    year: "2023",
    months: [
      {
        id: 1,
        month: 10,
        events: [
          {
            id: 1,
            title: "‘숲의 날’ 그리고 ‘세계 채식인의 날’ 행사",
            description: "“Forest Day” and “World Vegetarian Day” events",
          },
        ],
      },
      {
        id: 2,
        month: 9,
        events: [
          {
            id: 1,
            title: "‘국제 연안정화의 날’ 연안정화활동",
            description:
              "“International Coastal Pruification Day” Coastal Purification Activities",
          },
        ],
      },
      {
        id: 3,
        month: 6,
        events: [
          {
            id: 1,
            title: "후쿠시마 오염수 방류 반대서명",
            description:
              "Fukushima Signs Against Discharge of Contaminated Water",
          },
          {
            id: 2,
            title: "사단법인 세이브더얼스 설립인가",
            description:
              "Is it the establishment of a corporation called Save the Earth",
          },
        ],
      },
      {
        id: 4,
        month: 4,
        events: [
          {
            id: 1,
            title: "사단법인 세이브더얼스 창립총회",
            description: "Save the Earth’s Foundation General Meeting",
          },
        ],
      },
    ],
  },
  {
    id: 2,
    year: "2022",
    months: [
      {
        id: 1,
        month: 10,
        events: [
          {
            id: 1,
            title: "사단법인 설립 준비 시작",
            description:
              "Preparations for the establishment of a corporation began",
          },
        ],
      },
    ],
  },
  {
    id: 3,
    year: "2021",
    months: [
      {
        id: 1,
        month: 10,
        events: [
          {
            id: 1,
            title: "저소득층 노인대상 무료요가센터",
            description: "Free Yoga center for low-income seniors",
          },
        ],
      },
      {
        id: 2,
        month: 5,
        events: [
          {
            id: 1,
            title: "환경유튜브채널 지구살리기TV 시작",
            description: "Environment YouTube Channel ‘Earth Saving TV” Starts",
          },
        ],
      },
    ],
  },
  {
    id: 4,
    year: "2020",
    months: [
      {
        id: 1,
        month: 10,
        events: [
          {
            id: 1,
            title: "고양시 사회복지시설 KF94 마스크 기부",
            description:
              "KF94 Mask Donation to Korea Federation of Small and Medium Business Organizations",
          },
          {
            id: 2,
            title: "중소상공인단체 안전중앙회 KF94 마스크 기부",
            description:
              "KF94 Mask Donation to Korea Federation of Small and Medium Business Organizations",
          },
          {
            id: 3,
            title: "카톨릭대학교 은평성모병원 KF94 마스크 기부",
            description:
              "Kardolic University Eunpyeong St. Mary’s Hospital KF94 Mask Donated",
          },
          {
            id: 4,
            title: "서울특별시 노동조합 KF94 마스크 기부",
            description: "Seoul Trade Union KF94 Mask Donation",
          },
        ],
      },
    ],
  },
  {
    id: 5,
    year: "2015",
    months: [
      {
        id: 1,
        month: 10,
        events: [
          {
            id: 1,
            title: "‘오퍼레이션스마일’ 베트남 채리티옥션 후원",
            description:
              "“Operation Smile” sponsored by Charity Auction in Vietnam",
          },
        ],
      },
      {
        id: 2,
        month: 7,
        events: [
          {
            id: 1,
            title: "서울국제여성협회 ‘SIWA’ 후원",
            description:
              "Sponsored by the Seoul International Women’s Association ‘SIWA’",
          },
          {
            id: 2,
            title: "중소기업연합과 함께하는 ‘로뎀의집’ 나눔봉사",
            description:
              "Sharing Service of “Rodem’s House” with the Federation of Small and Medium Businesses",
          },
        ],
      },
    ],
  },
];

export const ONLINE_HISTORY_ARR = [
  {
    id: 1,
    year: "2023",
    months: [
      {
        id: 1,
        month: 10,
        events: [
          {
            id: 1,
            title: "‘숲의 날’ 그리고 ‘세계 채식인의 날’ 행사",
            description: "“Forest Day” and “World Vegetarian Day” events",
          },
        ],
      },
      {
        id: 2,
        month: 9,
        events: [
          {
            id: 1,
            title: "‘국제 연안정화의 날’ 연안정화활동",
            description:
              "“International Coastal Pruification Day” Coastal Purification Activities",
          },
        ],
      },
      {
        id: 3,
        month: 6,
        events: [
          {
            id: 1,
            title: "후쿠시마 오염수 방류 반대서명",
            description:
              "Fukushima Signs Against Discharge of Contaminated Water",
          },
          {
            id: 2,
            title: "사단법인 세이브더얼스 설립인가",
            description:
              "Is it the establishment of a corporation called Save the Earth",
          },
        ],
      },
      {
        id: 4,
        month: 4,
        events: [
          {
            id: 1,
            title: "사단법인 세이브더얼스 창립총회",
            description: "Save the Earth’s Foundation General Meeting",
          },
        ],
      },
    ],
  },
  {
    id: 2,
    year: "2022",
    months: [
      {
        id: 1,
        month: 10,
        events: [
          {
            id: 1,
            title: "사단법인 설립 준비 시작",
            description:
              "Preparations for the establishment of a corporation began",
          },
        ],
      },
    ],
  },
  {
    id: 3,
    year: "2021",
    months: [
      {
        id: 1,
        month: 10,
        events: [
          {
            id: 1,
            title: "저소득층 노인대상 무료요가센터",
            description: "Free Yoga center for low-income seniors",
          },
        ],
      },
      {
        id: 2,
        month: 5,
        events: [
          {
            id: 1,
            title: "환경유튜브채널 지구살리기TV 시작",
            description: "Environment YouTube Channel ‘Earth Saving TV” Starts",
          },
        ],
      },
    ],
  },
  {
    id: 4,
    year: "2020",
    months: [
      {
        id: 1,
        month: 10,
        events: [
          {
            id: 1,
            title: "고양시 사회복지시설 KF94 마스크 기부",
            description:
              "KF94 Mask Donation to Korea Federation of Small and Medium Business Organizations",
          },
          {
            id: 2,
            title: "중소상공인단체 안전중앙회 KF94 마스크 기부",
            description:
              "KF94 Mask Donation to Korea Federation of Small and Medium Business Organizations",
          },
          {
            id: 3,
            title: "카톨릭대학교 은평성모병원 KF94 마스크 기부",
            description:
              "Kardolic University Eunpyeong St. Mary’s Hospital KF94 Mask Donated",
          },
          {
            id: 4,
            title: "서울특별시 노동조합 KF94 마스크 기부",
            description: "Seoul Trade Union KF94 Mask Donation",
          },
        ],
      },
    ],
  },
  {
    id: 5,
    year: "2015",
    months: [
      {
        id: 1,
        month: 10,
        events: [
          {
            id: 1,
            title: "‘오퍼레이션스마일’ 베트남 채리티옥션 후원",
            description:
              "“Operation Smile” sponsored by Charity Auction in Vietnam",
          },
        ],
      },
      {
        id: 2,
        month: 7,
        events: [
          {
            id: 1,
            title: "서울국제여성협회 ‘SIWA’ 후원",
            description:
              "Sponsored by the Seoul International Women’s Association ‘SIWA’",
          },
          {
            id: 2,
            title: "중소기업연합과 함께하는 ‘로뎀의집’ 나눔봉사",
            description:
              "Sharing Service of “Rodem’s House” with the Federation of Small and Medium Businesses",
          },
        ],
      },
    ],
  },
];

// NOTE: TermsOfUse.jsx - 이용약관
export const TERMS_OF_USE_ARR = [
  {
    key: "1",
    label: "제1조 목적",
    children: (
      <TermsDescription>
        이 이용약관(이하 ‘약관‘)은 사단법인 세이브더얼스(Save the Earth
        Foundation, 이하 ‘세이브더얼스’라 함)가 환경 보호 의식개선, 작은행동실천
        홍보, 환경 보호 사업의 발전을 전개하는데 있어 이를 지원하는 후원자(이하
        “회원”)에게 제공하는 서비스의 내용과 당사자의 권리 의무 및 책임사항을
        규정하는 것을 목적으로 합니다.
      </TermsDescription>
    ),
  },
  {
    key: "2",
    label: "제2조 용어의 정의",
    children: (
      <TermsDescription>
        <p>이 약관에서 사용하는 용어의 정의는 다음과 같습니다</p>

        <p>
          1. ‘회원’은 ‘세이브더얼스’에 개인정보를 제공하고 ‘세이브더얼스’의
          정관에 명시된 목적과 공익적 사업취지에 찬성, 동의하여 기부금 납부를
          통해 ‘세이브더얼스’의 사업을 지원하는 개인을 말합니다. 회원은 정기적인
          후원을 약정한 정기후원자와 일시후원금을 기탁한 일시후원자 모두를
          포함합니다.
        </p>

        <p>
          2. ‘서비스’란 ‘세이브더얼스’가 회원에게 제공하는 일체의 온/오프라인
          서비스(기부, 배분 및 관련 온/오프라인 행사 안내, 온라인 시스템,
          기부영수증 등 각종 증빙 발행 등)를 말합니다.
        </p>
      </TermsDescription>
    ),
  },
  {
    key: "3",
    label: "제3조 후원의 성립 및 후원접수",
    children: (
      <TermsDescription>
        <p>
          1. 후원은 후원자의 약관에 대한 동의 및 후원신청 또는 기부금 납부에
          대한 ‘세이브더얼스’의 승낙으로 성립됩니다.
        </p>
        <p>
          2. 약관에 대한 동의는 기부금의 납부 또는 후원신청시 동의버튼을
          누르거나 신청서에 자필서명, 전화통화로 가입신청 시 동의하시는 것으로
          간주됩니다.
        </p>
        <p>
          3. 지속적인 후원으로 ‘세이브더얼스’의 사업을 지원하고자 하는 후원자는
          ‘세이브더얼스’에서 요청하는 정보를 제공하여야 하며 제공한 정보는
          개인정보보호정책 및 개인정보보호법 등 관계 법령에 따라 관리됩니다.
        </p>
        <p>
          4. 후원자는 본인의 실명으로 후원할 수 있으며 ‘세이브더얼스’는 후원자의
          실명확인을 요구할 수 있습니다.
        </p>
        <p>
          5. 미성년자가 본인의 이름으로 후원을 신청하고자 할 때에는 관련 법령에
          따른 법정대리인의 개인정보 제공동의 및 후원가입 동의가 필요합니다.
        </p>
        <p>
          6. 부모 또는 법정대리인이 미성년 자녀의 이름으로 후원을 신청하고자 할
          경우 재단은 부모 또는 법정대리인의 실명확인을 요구할 수 있습니다.
        </p>
        <p>
          7. 타인의 명의를 당사자의 동의를 구하지 않고 도용하여 후원신청을 한
          정보는 ‘세이브더얼스’가 임의로 박탈할 수 있습니다. 이 경우 타인의
          명의를 도용한 자는 일체의 권리를 주장할 수 없고 관계법령에 따라 처벌을
          받을 수 있습니다.{" "}
        </p>
        <p>
          8. ‘세이브더얼스’는 다음의 각 호에 해당하는 후원신청 또는 기부금
          제공에 대해서는 수령 또는 접수를 거부할 수 있습니다.
        </p>
        <ul>
          <li>후원신청서의 내용을 허위로 기재하는 경우</li>

          <li>
            사회의 안녕과 질서 또는 미풍양속을 저해할 목적으로 신청하였을 때
          </li>
          <li>
            ‘세이브더얼스’와 협의되지 않은 영리행위를 목적으로 후원을 신청한
            경우
          </li>
          <li>
            타인의 명의를 당사자의 동의를 구하지 않고 이용하여 신청할 경우
          </li>
          <li>기타 본 약관에 규정된 제반사항을 위반하여 신청한 경우</li>
        </ul>
        <p>
          9. 후원신청 또는 기부금의 접수는 다음 각 호에 해당할 경우, 제한 사유가
          해소될 때까지 승낙을 유보될 수 있습니다.
        </p>
        <ul>
          <li>‘세이브더얼스’의 시스템 등에 장애가 발생한 경우</li>
          <li>
            ‘세이브더얼스’의 설비 또는 운영인력 부족으로 업무가 지연되는 경우
          </li>
          <li>
            기타 ‘세이브더얼스’의 귀책사유로 인해 가입 접수완료가 곤란한 경우
          </li>
        </ul>
        <p>
          10. ‘세이브더얼스’는 물가 상승률에 기반한 연간 후원금 자동 인상 조항에
          동의한 회원에 대해 매년 말 다음연도에 적용될 후원금액을 회원에게
          안내합니다. 안내된 후원금액은 다음연도 1월부터 적용되어 출금됩니다.
        </p>
        <p>
          11. 회원은 ‘세이브더얼스’가 제공하는 후원자 홈페이지 또는 전자메일 등
          ‘세이브더얼스’가 제시하는 방법을 통해 후원금 자동 인상에 대한 동의 및
          철회여부를 선택할 수 있으며, 회원이 동의를 철회한 경우
          ‘세이브더얼스’는 해당연도의 후원금액과 동일한 금액으로 다음연도
          후원금을 출금합니다.
        </p>
      </TermsDescription>
    ),
  },
  {
    key: "4",
    label: "제4조 이용약관의 효력 및 변경",
    children: (
      <TermsDescription>
        <p>
          1. 이 약관은 온라인, 기타 서면 신청서, 전화 등을 통해 기부금 납부
          의사를 밝힌 회원에게 적용되며 ‘세이브더얼스’의 웹사이트에 공시함으로써
          효력이 발생됩니다.
        </p>
        <p>
          2. 합리적 사유가 발생할 경우 ‘세이브더얼스’는 관계법령에 위배되지 않는
          범위 내에서 본 약관을 개정. 변경할 수 있으며, 개정. 변경된 약관은
          적용일 전 7일간 온라인 상의 공지나 전자 우편 등의 방법을 통해 회원에게
          공지되고 적용 일에 효력이 발생됩니다.
        </p>
        <p>
          3. 회원은 변경된 약관에 동의하지 않을 경우, 서비스 이용을 중단하고
          탈퇴할 수 있으며 약관이 변경된 이후에도 계속적으로 서비스를 이용하는
          경우에는 회원이 약관의 변경 사항에 동의한 것으로 간주됩니다.
        </p>
        <p>
          4. 회원이 본 약관의 내용에 동의하는 경우 ‘세이브더얼스’의 서비스 제공
          행위 및 회원의 서비스 이용과 기부활동 및 기부금 납입에 대하여는 본
          약관이 우선적으로 적용됩니다. 본 약관에 명시되어 있지 않은 사항은 관계
          법령에 규정되어 있을 경우 그 규정에 따르며, 그렇지 않은 경우 일반적인
          관례에 따릅니다.
        </p>
      </TermsDescription>
    ),
  },
  {
    key: "5",
    label: "제5조 세이브더얼스의 권리와 의무",
    children: (
      <TermsDescription>
        <p>
          1. ‘세이브더얼스’는 회원에 대해 다음과 같은 권리와 의무를 가집니다.
        </p>
        <p>
          2. ‘세이브더얼스’는 기부금의 적립과 배분 내역을 ‘세이브더얼스’
          웹사이트와 사업보고서를 통해 공고하거나 우편 발송함으로써 회원에게
          공지합니다.
        </p>
        <p>
          3. ‘세이브더얼스’는 회원과 관련된 제반 사업에 대해 정보제공과 더불어
          행사 등에 참여의 기회를 제공합니다.
        </p>
        <p>
          4. ‘세이브더얼스’는 회원에게 관련 법규에 따라 기부금에 대한 영수증을
          발행합니다.
        </p>
        <p>
          5. ‘세이브더얼스’는 서비스의 운영과 관리와 관련한 회원의 의견에 대하여
          적절한 절차를 거쳐 처리하여야 합니다.
        </p>
        <p>
          6. ‘세이브더얼스’는 개인정보처리방침에 따라 회원의 개인정보를
          보호합니다.
        </p>
      </TermsDescription>
    ),
  },
  {
    key: "6",
    label: "제6조 회원의 권리와 의무",
    children: (
      <TermsDescription>
        <p>
          1. 회원은 ‘세이브더얼스’가 수행하는 제반 사업에 대한 정보를 제공받을
          수 있습니다.
        </p>
        <p>
          2. 회원은 기부하고자 하는 기금과 그 배분의 내용에 대한 안내를 받을 수
          있습니다.
        </p>
        <p>
          3. 회원은 ‘세이브더얼스’가 제공하는 기부 및 배분 관련 행사 등 활동에
          참여할 수 있습니다.
        </p>
        <p>
          4. 회원은 ‘세이브더얼스’ 고유목적사업 수행을 위해 전문성 제공 등
          서비스를 통해 기부할 수 있습니다.
        </p>
        <p>
          5. 회원은 ‘세이브더얼스’가 제공하는 다양한 결제 시스템(CMS, 신용카드,
          무통장입금, 직접자동이체, 휴대폰 등)을 통해 기부금을 납부할 수
          있습니다.
        </p>
        <p>
          6. 회원은 ‘세이브더얼스’와의 사전 동의 없이 ‘세이브더얼스’의 브랜드 및
          로고, 서비스를 이용하여 사적인 영리, 영업활동을 할 수 없으며, 그
          활동의 결과에 대해 ‘세이브더얼스’는 책임지지 않습니다. 또한 이와 같은
          활동으로 인해 ‘세이브더얼스’에 손해가 발생하거나 발생할 것으로
          예상되는 경우 회원은 ‘세이브더얼스’에 대해 손해배상의 의무를 지며,
          ‘세이브더얼스’는 해당 회원의 서비스 이용을 제한하고 적법한 절차를 통해
          손해배상을 청구할 수 있습니다.
        </p>
      </TermsDescription>
    ),
  },
  {
    key: "7",
    label: "제7조 회원자격의 상실",
    children: (
      <TermsDescription>
        <p>회원의 자격은 다음의 경우에 상실됩니다.</p>

        <p>1. 회원이 회원 탈퇴의 의사표시를 한 경우</p>
        <p>
          2. 사회적 공익을 저해할 목적으로 서비스 이용을 계획 또는 실행할 경우
        </p>
        <p>3. 타인의 명의를 도용한 경우</p>
        <p>
          4. 기타 관련법령이나 ‘세이브더얼스’가 정한 사업조건 및 이용조건에
          위배되는 경우
        </p>
      </TermsDescription>
    ),
  },
  {
    key: "8",
    label: "제8조 개인정보처리",
    children: (
      <TermsDescription>
        <p>
          1. ‘세이브더얼스’는 회원의 개인정보를 보호하며, 그 내용을
          ‘세이브더얼스’ 웹사이트의 메인 화면과 개인정보관리 페이지에
          ‘개인정보취급방침‘이란 이름으로 공지합니다.
        </p>
        <p>
          2. ‘ 개인정보취급방침‘에서 언급하고 있는 주요 내용은 다음과 같습니다.
        </p>
        <ul>
          <li>개인정보관리 책임자 및 담당자</li>
          <li>개인정보 수집방법 및 수집내용</li>
          <li>개인정보 수입이유 및 사용목적</li>
          <li>개인정보 보유 및 이용기간</li>
          <li>개인정보를 제3자에게 제공하는 경우</li>
          <li>개인정보의 열람, 수정 및 탈퇴</li>
          <li>기타 개인정보보호에 대한 그 밖의 사항</li>
        </ul>
      </TermsDescription>
    ),
  },
  {
    key: "9",
    label: "제9조 서비스의 변경 및 중단",
    children: (
      <TermsDescription>
        <p>
          ‘세이브더얼스’는 특별한 사정이 없는 한 회원이 서비스를 계속적이고
          안정적으로 이용할 수 있도록 합니다.
        </p>
        <p>
          서비스는 ‘세이브더얼스’의 사정으로 인해 일부 내용이 변경 또는 중단될
          수 있습니다.
        </p>
        <p>
          ‘세이브더얼스’는 서비스의 중단 등 중대한 변화가 있을 경우 회원에게 그
          사실을 고지합니다.
        </p>
      </TermsDescription>
    ),
  },
  {
    key: "10",
    label: "제10조 면책조항",
    children: (
      <TermsDescription>
        <p>
          ‘세이브더얼스’는 다음의 경우 회원에 대한 서비스 제공 책임이
          면제됩니다.
        </p>

        <p>
          1. 천재지변, 전쟁 및 기타 이에 준하는 불가항력으로 인하여
          ‘세이브더얼스’가 서비스를 제공할 수 없는 경우
        </p>
        <p>
          2. 기간통신사업자가 전기 및 통신서비스, 교통 서비스를 중단하거나
          정상적으로 제공하지 아니한 경우
        </p>
        <p>
          3. 서비스용 설비의 보수, 교체, 정기점검, 공사 등의 사유로 정상적인
          업무수행이 어려운 경우
        </p>
        <p>4. 회원의 귀책사유로 인한 서비스 이용 장애</p>
        <p>5. 회원이 부정확한 후원자 정보를 제공한 경우</p>
      </TermsDescription>
    ),
  },
  {
    key: "11",
    label: "제11조 후원금의 반환",
    children: (
      <TermsDescription>
        <p>
          회원이 ‘세이브더얼스’에 기부한 후원금은 ‘세이브더얼스’의 귀책사유 또는
          주무관청으로부터 반환 명령을 받는 등의 예외적인사유가 있는 경우를
          제외하고는 후원자의 귀책 또는 단순 변심으로 인한 반환은 불가능합니다.
        </p>

        <p>1. ‘세이브더얼스’의 귀책 (예시)</p>
        <ul>
          <li>
            회원의 후원금 납부 과정에서 ‘세이브더얼스’가 회원의 개인정보,
            금융정보, 약정 금액 또는 출금일 등에 대한 표기오류를 범한 경우
          </li>
          <li>
            ‘세이브더얼스’가 회원에게 미납후원금의 재출금에 대한 안내를 누락한
            경우
          </li>
          <li>
            ‘세이브더얼스’가 후원금 출금 과정에서 약정 금액 또는 출금일에 대해
            오류를 범한 경우
          </li>
          <li>‘세이브더얼스’가 회원의 후원취소 요청 접수를 누락한 경우</li>
        </ul>
        <p>2. 후원자의 귀책 (예시)</p>
        <ul>
          <li>
            회원이 페이인포(Payinfo) 시스템을 통해 CMS 계좌정보를 업데이트하여
            자동으로 후원금 출금이 재개되는 경우
          </li>
          <li>
            회원이 경제사정 변화, 캠페인 불만, 단순 변심을 이유로 기납부한
            후원금의 환불을 요청하는 경우
          </li>
        </ul>
      </TermsDescription>
    ),
  },
  {
    key: "12",
    label: "제12조 분쟁의 해결 및 관할법원",
    children: (
      <TermsDescription>
        <p>
          본 약관에 대해 분쟁 혹은 이의가 발생하거나, 본 약관을 해지 또는
          해제하고자 하는 경우 쌍방은 이를 우호적으로 해결하기 위해 최선의
          노력을 기울여야 합니다.
        </p>
        <p>
          상호 합의를 통해 분쟁을 원만하게 해결할 수 없는 경우 쌍방은
          ‘세이브더얼스’의 소재지를 관할하는 법원을 관할법원으로 하여 대한민국
          법률에 따라 소송을 통해 분쟁을 해결합니다.
        </p>
      </TermsDescription>
    ),
  },
  {
    key: "13",
    label: "[부칙]",
    children: (
      <TermsDescription>
        <p>본 약관은 2023년 11월 13일부터 적용됩니다</p>
      </TermsDescription>
    ),
  },
];

// NOTE: PrivacyPolicy.jsx - 개인정보 처리방침
export const PRIVACY_POLICY_ARR = [
  {
    key: "1",
    label: "제1조 개인정보의 처리목적",
    children: (
      <TermsDescription>
        <p>
          ‘세이브더얼스’는 다음의 목적을 위하여 개인정보를 처리합니다. 처리하고
          있는 개인정보는 다음의 목적 이외의 용도로는 이용되지 않으며,
          이용목적이 변경되는 경우 개인정보보호법 제18조에 따라 별도의 동의를
          받는 등 필요한 조치를 이행할 예정입니다.
        </p>
        <p>1. 기부금 관리</p>
        <p>
          기부금 출금, 기부금영수증 발행, 기부내역 관리, 기부금사용 보고 및
          행사참여 등의 안내 서비스, 회원공지 및 뉴스레터, 콘텐츠 제공
        </p>
        <p>2. 회원 가입 및 관리</p>
        <p>
          본인확인식별, 기부/배분 등 참여내역 및 회원정보 관리, 가입 및 탈퇴
          의사 확인
        </p>
        <p>3. 기부성향 분석</p>
        <p>
          기부문화 활성화를 위한 성향 분석 및 통계, 접속 빈도 파악을 통한 서비스
          개선
        </p>
        <p>
          신규서비스 개발 및 캠페인 홍보, 광고에의 활용 신규서비스 개발 및 맞춤
          서비스 제공, 통계학적 특성에 따른 서비스 제공 및 광고게재, 서비스의
          유효성 확인, 이벤트 및 광고성 정보 제공 및 참여기회 제공, 서명자의
          후원회원 전환 권유, 후원금 증액 권유, 탈퇴회원에 대한 후원재개 권유,
          접속빈도 파악, 서비스 이용에 대한 통계
        </p>
      </TermsDescription>
    ),
  },
  {
    key: "2",
    label: "제2조 수집하는 개인정보의 항목 및 수집 방법",
    children: (
      <TermsDescription>
        <p>1. 기본정보 수집 항목</p>
        <p>
          이름, 주민등록번호, 로그인ID, 비밀번호, 생년월일, 자택전화번호,
          자택주소, 휴대전화번호, 이메일, 직업, 가입동기, 접속로그기록, 서비스
          이용기록, 만 14세 미만의 경우 법정대리인 정보
        </p>
        <p>(후원 신청 시) 결제정보</p>
        <p>– 자동이체 : 은행명, 계좌번호, 예금주명, 예금주 생년월일</p>

        <p>
          – 신용카드 : 카드명, 카드번호, 유효기간, 카드주 명, 카드주의 주민번호,
          (일시 후원 시) 비밀번호 앞 2자리
        </p>

        <p>2. 개인정보 수집방법</p>
        <ul>
          <li>홈페이지 회원가입 및 후원신청, 상담문의</li>
          <li>서면신청서</li>
          <li>전화상담</li>
          <li>이메일/팩스</li>
          <li>서비스 이용 및 서명페이지 서명 등</li>
        </ul>
      </TermsDescription>
    ),
  },
  {
    key: "3",
    label: "제3조 개인정보의 처리 및 보유기간",
    children: (
      <TermsDescription>
        <p>
          이용자가 개인정보는 원칙적으로 개인 정보 수집 및 이용목적이 달성이
          종료된 후에는 지체 없이 파기합니다. 단, 기부금영수증 발행 등
          관계법령의 규정에 의하여 보존할 필요가 있는 경우 및 탈퇴회원에 대한
          후원재개요청의 목적에 한하여 아래와 같이 관계법령에서 정한 기간 동안
          이용자정보를 보관합니다.
        </p>
        <p>1. 보존근거</p>
        <ul>
          <li>전자상거래 등에서의 소비자보호에 관한 법률</li>
        </ul>
        <p>2. 보존기간</p>
        <ul>
          <li>
            계약 또는 청약철회 등에 관한 기록 : 5년(전자상거래 등에서의
            소비자보호에 관한 법률)
          </li>
          <li>
            대금 결제 및 재화 등의 공급에 관한 기록 : 5년(전자상거래 등에서의
            소비자 보호에 관한 법률)
          </li>
          <li>
            소비자의 불만 또는 분쟁처리에 관한 기록: 3년(전자상거래 등에서의
            소비자보호에 관한 법률)
          </li>
          <li>
            본인확인에 관한 기록: 6개월(정보통신망 이용촉진 및 정보보호 등에
            관한
          </li>
          <li>
            법률) 웹사이트 방문기록: 3개월 (통신비밀보호법) 후원재개 요청을 위한
          </li>
          <li>개인정보 이용기간: 5년</li>
        </ul>
      </TermsDescription>
    ),
  },
  {
    key: "4",
    label: "제4조 개인정보의 파기절차 및 방법",
    children: (
      <TermsDescription>
        <p>1. 파기절차</p>
        <ul>
          <li>
            이용자의 정보는 목적이 달성된 후 별도의 DB로 옮겨져(종이의 경우
            별도의 서류함) 내부 방침 및 기타 관련 법령에 의한 정보보호 사유에
            따라(보유 및 이용기간 참조) 일정 기간 저장된 후 파기되어집니다.
          </li>
          <li>
            별도 DB로 옮겨진 개인정보는 제3조 및 법률에 의한 경우가 아니고는
            보유되어지는 이외의 다른 목적으로 이용되지 않습니다.
          </li>
        </ul>
        <p>2. 파기방법</p>
        <ul>
          <li>
            파일형태로 저장된 개인정보는 기록을 재생할 수 없는 기술적 방법을
            사용하여 삭제합니다.
          </li>
          <li>
            종이에 출력된 개인정보는 분쇄기로 분쇄하거나 소각을 통하여
            파기합니다.
          </li>
        </ul>
      </TermsDescription>
    ),
  },
  {
    key: "5",
    label: "제5조 개인정보의 제3자 제공",
    children: (
      <TermsDescription>
        <p>
          1. ‘세이브더얼스’는 이용자의 개인정보를 원칙적으로 외부에 제공하지
          않습니다.
        </p>
        <ul>
          <li>
            정보주체의 개인정보를 제1조(개인정보의 처리목적)에서 명시한 범위
            내에서만 처리하며, 정보주체의 동의, 법률의 특별한 규정 등
            개인정보보호법 제17조 및 제18조에 해당하는 경우에만 개인정보를
            제3자에게 제공합니다.
          </li>
        </ul>
        <p>
          2. ‘세이브더얼스’는 아래의 경우 개인정보를 제3자에게 제공하고
          있습니다.
        </p>
        <ul>
          <li>‘세이브더얼스’의 요청에 따라 이용자들이 사전에 동의한 경우</li>
          <li>
            법령의 규정에 의거하거나, 수사 목적으로 법령에 정해진 절차와 방법에
            따라 수사기관의 요구가 있는 경우
          </li>
          <li>
            행정안전부 및 그 소속청 소관 비영리법인의 설립 및 감독에 관한
            규칙(동법 제8조) 주무관청은 「민법」 제37조에 따른 비영리법인 사무의
            검사 및 감독을 위하여 불가피한 경우에는 관계 서류·장부 또는 그 밖의
            참고자료 제출을 명하거나 사무 및 재산 상황 검사할 수 있음
          </li>
          <li>
            결산에 관한 서류 및 공익법인 출연재산 등에 대한 보고서 (상증세법
            시행령 제41조)
          </li>
          <li>
            외부회계감사를 받아야 할 의무 (상증세법 제50조, 주식회사의
            외부감사에 관한법률 제3조)
          </li>
          <li>결산서류 공시의무 (상증세법 제50조)</li>
          <li>기부금영수증 발급내역 작성, 보관, 제출의무 (법인세법 제112조)</li>
        </ul>
      </TermsDescription>
    ),
  },
  {
    key: "6",
    label: "제6조 수집한 개인정보의 위탁",
    children: (
      <TermsDescription>
        <p>
          1. ‘세이브더얼스’는 기부금 입출금 서비스 및 회원으로서의 권리 이행,
          이용자에 대한 신규 서비스 제공, 캠페인 홍보를 위해 전문업체가 필요한
          경우 아래와 같이 외부 전문업체에 개인정보를 위탁하여 운영할 수
          있습니다.
        </p>

        <p>
          2. ‘세이브더얼스’는 위탁계약 체결 시 개인정보 보호법 제25조에 따라
          위탁업무 수행목적 외 개인정보 처리금지, 기술적·관리적 보호조치, 재
          위탁제한, 수탁자에 대한 관리·감독, 손해배상 등 책임에 관한 사항을
          계약서 등 문서에 명시하고, 수탁자가 개인정보를 안전하게 처리하는지를
          감독하고 있습니다. 위탁업무의 내용이나 수탁자가 변경될 경우 지체 없이
          본 개인정보 처리방침을 통하여 공개하도록 하겠습니다.
        </p>

        <p>3. 개인정보 취급 위탁업체</p>

        <ul>
          <li>
            회원서비스/이메일 발송/서명수집 업무를 위해 전문업체에 위탁하는 경우
          </li>

          <p>– 개인정보를 제공받는 자 :</p>
          <p>
            – 제공받는 자의 개인정보 이용목적: 회원정보 및 기부금 결제정보 관리,
            이메일 발송 및 서명수집
          </p>
          <p>– 제공하는 개인정보 항목: 회원정보 및 기부금 결제정보</p>
        </ul>

        <ul>
          <li>
            기부결제 승인ㆍ정산을 위해 PG업체에 위탁하는 경우
            <p>– 개인정보를 제공받는 자 : (주)케이지이니시스</p>
            <p>
              – 제공받는 자의 개인정보 이용목적: 신용카드/계좌이체 방식의
              기부결제 승인ㆍ정산
            </p>
            <p>
              – 제공하는 개인정보 항목: 이름, 카드명, 카드번호, 카드 소지자
              생년월일
            </p>
            <p>– 개인정보를 제공받는 자 : (주)나이스페이먼츠</p>
            <p>
              – 제공받는 자의 개인정보 이용목적: CMS(자동이체)/신용카드 방식의
              기부결제 승인ㆍ정산
            </p>
            <p>
              – 제공하는 개인정보 항목: 이름, 은행명, 계좌번호, 예금주 생년월일
              혹은 이름, 카드명, 카드번호, 카드 소지자 생년월일
            </p>
          </li>
        </ul>

        <ul>
          <li>
            기부금영수증, 연간보고서 외 기타 후원자용 우편물 발송을 위해
            위탁하는 경우
            <p>– 개인정보를 제공받는 자 :</p>
            <p>– 제공받는 자의 개인정보 이용목적: 대량 우편물 발송</p>
            <p>– 제공하는 개인정보 항목: 이름, 주소</p>
          </li>
        </ul>

        <ul>
          <li>
            텔레마케팅 업무를 위해 전문업체에 위탁하는 경우
            <p>– 개인정보를 제공받는 자 :</p>
            <p>– 제공받는 자의 개인정보 이용목적 : 텔레마케팅</p>
            <p>– 제공하는 개인정보 항목: 회원정보 및 기부금 결제정보</p>
          </li>
        </ul>

        <ul>
          <li>
            DM 메시지 발송업무를 위해 전문업체에 위탁하는 경우
            <p>– 개인정보를 제공받는 자 :</p>
            <p>
              – 제공받는 자의 개인정보 이용목적: 카카오 메시지 발송 및 메시지
              발송이력 제공
            </p>
          </li>
        </ul>
      </TermsDescription>
    ),
  },
  {
    key: "7",
    label: "제7조 개인정보관리(열람, 정정, 삭제 등)에 관한 사항",
    children: (
      <TermsDescription>
        <p>
          1. 이용자 및 법정 대리인은 언제든지 등록되어 있는 자신 혹은 당해 만
          14세 미만 아동의 개인정보를 열람하거나 정정할 수 있으며 가입 해지 또는
          삭제를 요청할 수도 있습니다.
        </p>

        <p>
          2. 이용자 혹은 만 14세 미만 아동의 개인정보 열람•정정을 위해서는
          “이용자가용자정보조회” 및 “기본정보수정”을, 가입해지(동의철회)를
          위해서는 “회원탈퇴요청”을 클릭하여 본인 확인 절차를 거치신 후 직접
          열람, 정정 또는 탈퇴가 가능합니다. 혹은 개인정보관리책임자에게 서면,
          전화 또는 이메일로 연락하시면 지체없이 조치하겠습니다.
        </p>

        <p>
          3. 이용자가 개인정보의 오류에 대해 정정을 요청한 경우에는 지체 없이
          조치합니다. 또한 잘못된 개인정보를 제3자에게 이미 제공한 경우에는 정정
          처리결과를 제3자에게 지체없이 통지하여 정정이 이루어지도록 하겠습니다.
        </p>

        <p>
          4. 이와 같은 권리 행사는 14세 미만 아동의 법정대리인이나
          정보주체로부터 위임을 받은 자 등 대리인을 통하여 할 수 있습니다. 이
          경우 개인정보 보호법 시행규칙 별지 제11호 서식에 따른 위임장을
          제출해야 합니다.
        </p>

        <p>
          5. 재단은 이용자 혹은 그의 법정 대리인의 요청에 의해 해지 또는 삭제된
          개인정보는 “사단법인 세이브더얼스(Save the Earth Foundation)가
          수집하는 개인정보의 보유 및 이용기간”에 명시된 바에 따라 처리하고 그
          외의 용도로 열람 또는 이용할 수 없도록 처리하고 있습니다.
        </p>

        <p>
          6. 개인정보 열람, 정정, 가입 해지 또는 삭제 요구는 관련 법령 규정에
          따라 제한될 수 있으며, 제한되는 경우 개인정보관리책임자를 통하여
          재단이 요청을 받은 후 10일 이내에 통지합니다.
        </p>
      </TermsDescription>
    ),
  },
  {
    key: "8",
    label: "제8조 개인정보 자동수집 장치의 설치, 운영 및 그 거부에 관한 사항",
    children: (
      <TermsDescription>
        <p>
          ‘세이브더얼스’는 이용자의 정보를 수시로 저장하고 찾아내는
          ‘쿠키(cookie)’ 등을 운용합니다. 쿠키란 ‘세이브더얼스’의 웹사이트를
          운영하는데 이용되는 서버가 귀하의 브라우저에 보내는 소량의 정보이며
          이용자의 컴퓨터 하드디스크에 저장되기도 합니다. ‘세이브더얼스’는
          다음과 같은 목적을 위해 쿠키를 사용합니다.
        </p>

        <p>1. 쿠키 등 사용 목적</p>
        <p>
          회원과 비회원의 접속 빈도나 방문 시간 등을 분석, 이용자의 취향과
          관심분야를 파악 및 자취 추적, 각종 이벤트 참여 정도 및 방문 회수 등을
          파악합니다.
        </p>

        <p>2. 쿠키의 설치/운영 및 거부</p>
        <p>
          이용자는 쿠키 설치에 대한 선택권을 가지고 있습니다. 따라서
          웹브라우저에서 옵션을 설정함으로써 모든 쿠키를 허용하거나, 쿠키가
          저장될 때마다 확인을 거치거나, 아니면 모든 쿠키의 저장을 거부할 수도
          있습니다.
        </p>
      </TermsDescription>
    ),
  },
  {
    key: "9",
    label: "제9조 개인정보의 안전성 확보조치에 관한 사항",
    children: (
      <TermsDescription>
        <p>
          ‘세이브더얼스’는 개인정보의 안전성 확보를 위해 다음과 같은 조치를
          취하고 있습니다.
        </p>

        <p>
          1. 관리적 조치 : 내부관리계획 수립ㆍ시행, 정기적 개인정보보호교육 등
        </p>

        <p>
          2. 기술적 조치 : 개인정보처리시스템 등의 접근권한 관리, 보안메일,
          개인인증서 및 특정프로그램을 통한 외부로부터의 무단접근 통제,
          고유식별정보 등의 암호화 사내 PC 보안프로그램(ESET)의 설치
        </p>

        <p>
          3. 물리적 조치 : 전산실, 자료보관실 등의 출입 통제(접근권한 관리) 및
          잠금장치 설치
        </p>
      </TermsDescription>
    ),
  },
  {
    key: "10",
    label: "제10조 개인정보관리 책임자 및 연락처",
    children: (
      <TermsDescription>
        <p>
          ‘세이브더얼스’는 이용자의 개인정보를 보호하고 개인정보와 관련한 불만을
          처리하기 위하여 아래와 같이 관련 부서 및 개인정보관리책임자를 지정하고
          있습니다.
        </p>
        <table>
          <thead>
            <tr>
              <th colSpan={2}>▶ 개인정보보호 책임자</th>
              <th colSpan={2}>▶ 개인정보보호 담당부서</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>성 명</td>
              <td>박 현 정</td>
              <td>부서명</td>
              <td>운영관리팀</td>
            </tr>
            <tr>
              <td>직 책</td>
              <td>차 장</td>
              <td>연락처</td>
              <td>02) 373-0447</td>
            </tr>
          </tbody>
        </table>
        <p>
          이용자께서는 ‘세이브더얼스’의 서비스를 이용하시며 발생하는 모든
          개인정보보호 관련 민원을 개인정보관리책임자 혹은 담당부서로 신고하실
          수 있습니다. ‘세이브더얼스’는 이용자의 신고사항에 대해 신속하게 충분한
          답변을 드릴 것입니다.
        </p>
        <p>
          기타 개인정보침해에 대한 신고나 상담이 필요하신 경우에는 아래 기관에
          문의하시기 바랍니다.
        </p>
        <ul>
          <li>
            개인정보침해신고센터 (
            <a
              href="https://privacy.kisa.or.kr"
              target="_blank"
              rel="noreferrer"
            >
              https://privacy.kisa.or.kr
            </a>
            /국번없이118)
          </li>
          <li>
            정보보호마크인증위원회 (
            <a href="http://eprivacy.or.kr" target="_blank" rel="noreferrer">
              http://eprivacy.or.kr
            </a>
            /02-550-9531)
          </li>
          <li>
            대검찰청 온라인민원실 (
            <a href="http://www.spo.go.kr" target="_blank" rel="noreferrer">
              http://www.spo.go.kr
            </a>
            /국번없이1301)
          </li>
          <li>
            경찰청 사이버테러대응센터 (
            <a
              href="http://cyberbureau.police.go.kr"
              target="_blank"
              rel="noreferrer"
            >
              http://cyberbureau.police.go.kr
            </a>
            /국번없이 182)
          </li>
        </ul>
      </TermsDescription>
    ),
  },
];

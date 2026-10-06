// UN 지속가능발전목표(SDGs)와 오토끼의 시간여행.
// 출처: 「2024 K-콘텐츠 IP융·복합 제작지원 사업」 제작계획서 7·11·13쪽
//  - EP.1 푸른고래이야기 = SDG 14 해양생태계 보전, EP.2 모두의 놀이터 = SDG 10 불평등 해소
//  - 다음 제작: SDG 9 디지털 시민성 교육, SDG 10 다문화 이해 교육
//  - 17개 목표별 에피소드 계획표 (아래 roadmap)

export type Goal = { n: number; name: string; theme: string };

// 17개 목표와 목표별 에피소드(교육 주제) 계획
export const goals: Goal[] = [
  { n: 1, name: "빈곤 종식과 사회안전망 강화", theme: "경제교육 (기부, 나눔)" },
  { n: 2, name: "식량안보와 지속가능한 농업", theme: "식습관 교육 (건강한 밥상)" },
  { n: 3, name: "건강하고 행복한 삶", theme: "감성교육 (정서 지원)" },
  { n: 4, name: "모두를 위한 양질의 교육", theme: "질 높은 교육 실현" },
  { n: 5, name: "성평등", theme: "인권교육 (양성평등)" },
  { n: 6, name: "건강하고 안전한 물 관리", theme: "환경교육 (물 절약)" },
  { n: 7, name: "친환경 에너지", theme: "친환경 에너지 이해교육" },
  { n: 8, name: "좋은 일자리와 경제성장", theme: "진로교육 (직업 체험)" },
  { n: 9, name: "산업 성장과 혁신", theme: "디지털 시민성 교육" },
  { n: 10, name: "모든 종류의 불평등 해소", theme: "장애인식개선교육, 다문화교육" },
  { n: 11, name: "지속가능한 도시와 거주지", theme: "이웃과 함께 사는 세상" },
  { n: 12, name: "책임감 있는 소비와 생산", theme: "경제교육 (계획적 소비)" },
  { n: 13, name: "기후변화 대응", theme: "환경교육 (탄소중립)" },
  { n: 14, name: "해양생태계 보전", theme: "환경교육 (해양오염)" },
  { n: 15, name: "육상생태계 보전", theme: "생태교육 (멸종위기 동물)" },
  { n: 16, name: "평화, 정의, 포용", theme: "인권교육 (시민의식)" },
  { n: 17, name: "지구촌 협력 강화", theme: "평화교육 (위인)" },
];

export const goalName = (n: number) => goals.find((g) => g.n === n)?.name ?? "";

export type SdgLink = {
  goal: number;
  role: "기반 목표" | "함께 배우는 목표";
  adult: string; // 어른의 언어
  kid: string; // 아이의 언어 (공연 속 장면)
  act: string; // 실천 (사전·사후 활동)
};

export type EpisodeSdgs = {
  slug: string; // programs.ts 의 slug
  ep: string;
  status: "공연 중" | "제작 예정";
  base: number; // 기반 목표
  story: string; // 명작동화 재해석
  links: SdgLink[];
};

export const episodeSdgs: EpisodeSdgs[] = [
  {
    slug: "environment",
    ep: "EP.1",
    status: "공연 중",
    base: 14,
    story: "오토끼와 피노키오가 함께 바닷속 여행을 떠나 해양 오염 문제를 해결하는 이야기 (세계명작 ‘피노키오의 모험’ 재해석)",
    links: [
      {
        goal: 14,
        role: "기반 목표",
        adult: "해양 오염을 줄이고 바다 생태계를 보전한다",
        kid: "푸른고래가 바닷속 쓰레기 때문에 아파요. 오토끼와 피노키오가 고래를 구하러 가요",
        act: "바다 친구들을 지키는 우리 반 약속 정하기",
      },
      {
        goal: 12,
        role: "함께 배우는 목표",
        adult: "자원을 아껴 쓰고 다시 쓰는 생활 습관을 기른다",
        kid: "분리수거로 모은 것들이 공연 티켓이 돼요",
        act: "D-7 분리수거 티켓 만들기, 도장 5개 모으기",
      },
      {
        goal: 13,
        role: "함께 배우는 목표",
        adult: "탄소중립과 기후변화 대응에 관심을 갖는다",
        kid: "지구가 더워지면 바다 친구들도 힘들어요",
        act: "탄소ZERO 캠페인 참여",
      },
    ],
  },
  {
    slug: "disability",
    ep: "EP.2",
    status: "공연 중",
    base: 10,
    story: "닫혀 있던 정원을 모두에게 연 거인처럼, 모두가 함께 노는 놀이터를 만드는 이야기 (세계명작 ‘거인의 정원’ 재해석)",
    links: [
      {
        goal: 10,
        role: "기반 목표",
        adult: "장애 여부와 관계없이 모든 사람이 차별 없이 어울리는 사회를 만든다",
        kid: "그네, 미끄럼틀, 시소를 모두가 함께 탈 방법을 찾아요",
        act: "‘우리는 모두 사람이니까’ 이야기 나누기",
      },
      {
        goal: 11,
        role: "함께 배우는 목표",
        adult: "이웃과 함께 사는 포용적인 공동체 공간을 생각한다",
        kid: "모두의 놀이터는 어떤 모습일까 상상해요",
        act: "모두의 놀이터 그리기·만들기",
      },
    ],
  },
  {
    slug: "ai",
    ep: "제작 예정",
    status: "제작 예정",
    base: 9,
    story: "화면 속 세상에서 지켜야 할 약속을 배우는 디지털 시민성 이야기",
    links: [],
  },
  {
    slug: "multicultural",
    ep: "제작 예정",
    status: "제작 예정",
    base: 10,
    story: "서로 다른 문화의 친구들과 어깨동무하며 ‘우리’가 되는 다문화 이해 이야기",
    links: [],
  },
];

export const liveGoals = episodeSdgs.filter((e) => e.status === "공연 중").map((e) => e.base); // [14, 10]
export const nextGoals = [9]; // 다음 제작 에피소드의 새 기반 목표 (10번 다문화는 이미 다루는 목표)

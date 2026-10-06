import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, BookOpen, Eye, Hand, Home } from "lucide-react";
import Otoki from "@/components/Otoki";
import Faq from "@/components/Faq";
import FinalCta from "@/components/FinalCta";
import JsonLd from "@/components/JsonLd";
import SdgGrid from "@/components/SdgGrid";
import { breadcrumbLd, faqLd } from "@/lib/jsonld";
import { getProgram } from "@/lib/programs";
import { episodeSdgs, goalName, goals, liveGoals, nextGoals } from "@/lib/sdgs";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "유아 SDGs 교육 공연 | UN 지속가능발전목표를 공연으로 쉽게",
  description:
    "어려운 UN 지속가능발전목표(SDGs)를 유아 눈높이 공연으로. 오토끼의 시간여행은 SDG 14 해양생태계 보전(EP.1 푸른고래이야기)과 SDG 10 불평등 해소(EP.2 모두의 놀이터)를 바탕으로 만든 유치원·어린이집 방문 공연이며, 17개 목표 전체를 에피소드로 만들어 가고 있습니다.",
  keywords: ["유아 SDGs 교육", "지속가능발전교육", "유치원 SDGs", "어린이집 지속가능발전목표", "SDGs 공연", "ESD 유아교육", "세계시민교육 유아"],
  alternates: { canonical: "/sdgs" },
};

const why = [
  {
    Icon: BookOpen,
    t: "이야기로 만나요",
    d: "‘해양 오염’, ‘사회적 포용’ 같은 말 대신 아픈 고래와 닫힌 놀이터라는 이야기로 만납니다. 세계명작 ‘피노키오의 모험’과 ‘거인의 정원’을 다시 써서 아이들이 줄거리를 따라가며 개념을 이해합니다.",
  },
  {
    Icon: Eye,
    t: "눈앞에서 봐요",
    d: "3D 홀로그램과 프로젝션 영상, 움직이는 오토마타 무대가 바닷속 쓰레기와 모두의 놀이터를 실제처럼 보여 줍니다. 보이지 않던 문제가 눈에 보이면 아이들은 질문을 시작합니다.",
  },
  {
    Icon: Hand,
    t: "직접 해 봐요",
    d: "분리수거로 공연 티켓을 만들고, 율동하고, 대답하며 공연에 참여합니다. 내가 직접 한 일은 ‘남의 이야기’가 아니라 ‘내 약속’이 됩니다.",
  },
  {
    Icon: Home,
    t: "집에서 이어가요",
    d: "가정연계활동지, 도장 5개 모으기, 반별 캠페인으로 공연 뒤에도 실천이 이어집니다. 공연을 포함한 13차시 PBL(프로젝트 기반 학습) 구성도 개발하고 있습니다.",
  },
];

const nuri = [
  ["자연탐구", "바다 생물과 환경 오염의 관계를 탐구", "놀이터의 모양과 쓰임 살펴보기"],
  ["사회관계", "함께 지구를 지키는 약속 정하기", "다름을 존중하고 함께 노는 방법 찾기"],
  ["의사소통", "고래에게 보내는 편지·약속 말하기", "친구의 마음을 말로 표현하기"],
  ["신체운동·건강", "분리수거 놀이와 오프닝 율동", "모두가 함께하는 신체 놀이"],
  ["예술경험", "바닷속 장면 감상, 노래와 율동", "모두의 놀이터 그리기·만들기"],
];

const sdgFaqs = [
  {
    q: "유아에게 SDGs(지속가능발전목표) 교육이 필요한가요?",
    a: "환경을 아끼고 다른 사람을 존중하는 태도는 유아기에 가장 자연스럽게 자리 잡습니다. 오토끼의 시간여행은 SDGs의 큰 목표를 ‘분리수거하기’, ‘친구와 함께 놀기’처럼 아이들이 오늘 실천할 수 있는 행동으로 바꿔 전합니다.",
  },
  {
    q: "오토끼의 시간여행은 SDGs 몇 번 목표를 다루나요?",
    a: "환경편 ‘푸른고래이야기’(EP.1)는 SDG 14 해양생태계 보전을, 장애인식개선편 ‘모두의 놀이터’(EP.2)는 SDG 10 모든 종류의 불평등 해소를 기반으로 기획·제작했습니다. 다음 에피소드는 SDG 9 기반의 디지털 시민성 교육과 SDG 10 기반의 다문화 이해 교육으로 제작 예정이며, 17개 목표 모두를 에피소드로 만들어 가는 것이 목표입니다.",
  },
  {
    q: "왜 유아기에 SDGs 교육을 공연으로 하나요?",
    a: "육아정책연구소의 ‘UN SDGs에 따른 아이행복지표’ 연구에서 SDGs 17개 영역은 모두 아이의 행복과 관련해 중요하다고 평가되었지만, 국내 유아 교육 현장에는 SDGs를 다루는 교육 콘텐츠가 부족합니다. 오토끼의 시간여행은 ICT 문화예술 공연으로 이 빈자리를 채웁니다.",
  },
  {
    q: "SDGs를 공연으로 배우면 무엇이 좋은가요?",
    a: "추상적인 개념을 이야기(스토리텔링), 실감형 무대(홀로그램·오토마타), 참여(티켓 만들기·율동·대답), 가정 연계 실천이라는 네 단계로 경험하게 해 유아도 쉽게 이해하고 오래 기억합니다.",
  },
  {
    q: "누리과정과 어떻게 연결되나요?",
    a: "개정 누리과정 5개 영역(신체운동·건강, 의사소통, 사회관계, 예술경험, 자연탐구)과 연결해 구성했으며, 교실에서 이어 쓸 수 있는 활동 자료를 함께 드립니다.",
  },
];

export default function SdgsPage() {
  const live = episodeSdgs.filter((e) => e.status === "공연 중");
  const planned = episodeSdgs.filter((e) => e.status === "제작 예정");

  return (
    <>
      <JsonLd data={breadcrumbLd([{ name: "SDGs 교육", path: "/sdgs" }])} />
      <JsonLd data={faqLd(sdgFaqs)} />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Service",
          name: "오토끼의 시간여행 유아 SDGs 교육 공연",
          serviceType: "유아 지속가능발전교육(ESD) 방문 공연",
          provider: { "@id": `${site.url}/#organization` },
          url: `${site.url}/sdgs`,
          about: live.map((e) => ({ "@type": "Thing", name: `UN 지속가능발전목표 ${e.base}: ${goalName(e.base)}` })),
          audience: { "@type": "EducationalAudience", educationalRole: "유아 (만 3~7세)" },
        }}
      />

      <section className="on-stage bg-stage text-paper">
        <div className="mx-auto grid max-w-[1120px] gap-12 px-5 pb-20 pt-32 md:grid-cols-12 md:pt-40">
          <div className="md:col-span-6">
            <p className="label !text-gold">UN 지속가능발전목표 × 오토끼의 시간여행</p>
            <h1 className="font-serif mt-4 text-[2.3rem] leading-[1.25] sm:text-5xl">
              어려운 지구의 약속,
              <br />
              공연으로 쉽게
            </h1>
            <p className="mt-6 text-[17px] leading-[1.8] text-mist">
              SDGs(지속가능발전목표)는 2030년까지 전 세계가 함께 이루기로 한 17가지 약속입니다. 어른에게도 어려운 이 약속을,
              오토끼의 시간여행은 아이들이 오늘부터 실천할 수 있는 이야기로 바꿉니다.
            </p>
            <dl className="mt-8 grid grid-cols-2 gap-6 border-t border-white/15 pt-6">
              <div>
                <dt className="text-sm text-mist">EP.1 푸른고래이야기</dt>
                <dd className="font-serif mt-1 text-2xl">SDG 14</dd>
                <dd className="text-sm text-mist">해양생태계 보전</dd>
              </div>
              <div>
                <dt className="text-sm text-mist">EP.2 모두의 놀이터</dt>
                <dd className="font-serif mt-1 text-2xl">SDG 10</dd>
                <dd className="text-sm text-mist">모든 종류의 불평등 해소</dd>
              </div>
            </dl>
          </div>
          <div className="md:col-span-5 md:col-start-8 md:self-end">
            <SdgGrid dark compact />
          </div>
        </div>
      </section>

      {/* 왜 SDGs인가 + 세계관 */}
      <section className="mx-auto grid max-w-[1120px] gap-12 px-5 py-24 md:grid-cols-12 md:py-32">
        <div className="md:col-span-5">
          <p className="label">왜 SDGs인가요</p>
          <h2 className="font-serif mt-3 text-[1.75rem] leading-snug sm:text-[2.5rem]">아이의 행복과 맞닿은 17가지 약속</h2>
          <p className="mt-5 text-[17px] leading-[1.8] text-muted">
            육아정책연구소의 ‘UN SDGs에 따른 아이행복지표’ 연구에서 17개 목표는 모두 아이의 행복한 삶과 관련해 중요하다고
            평가되었습니다. 그런데 정작 유아 교육 현장에는 SDGs를 다루는 교육 콘텐츠가 많지 않습니다.
          </p>
          <p className="mt-4 text-[17px] leading-[1.8] text-muted">
            오토끼의 시간여행은 UN SDGs와 개정 누리과정을 연결해, 사회적으로 관심이 높고 교육 정책과 조화를 이루는 주제를 골라
            공연으로 만듭니다.
          </p>
        </div>
        <div className="md:col-span-6 md:col-start-7">
          <div className="grid grid-cols-[1fr_auto] items-end gap-6 border-t-2 border-stage pt-6">
            <div>
              <p className="label">세계관</p>
              <h3 className="font-serif mt-3 text-2xl leading-snug">메타별에서 온 오토끼와 명작동화 친구들</h3>
            </div>
            <Otoki pose="d" className="h-32 w-auto" sizes="100px" />
          </div>
          <p className="mt-4 leading-[1.8]">
            여행 중 지구에 불시착한 ‘메타별’의 시간여행자 오토끼가 피노키오, 피터팬, 헨젤과 그레텔, 백설공주 같은 명작동화
            주인공들을 만나, 함께 여행하며 지구의 17가지 문제를 마주하고 해결해 나갑니다.
          </p>
          <p className="mt-3 leading-[1.8] text-muted">
            아이들에게 익숙한 동화 속 친구가 문제를 함께 풀기 때문에, 처음 듣는 어려운 주제도 낯설지 않게 받아들입니다. 에피소드마다
            하나의 목표를 맡아 17편의 시간여행을 완성하는 것이 오토끼의 꿈입니다.
          </p>
        </div>
      </section>

      {/* 에피소드별 SDGs: 어른의 언어 → 아이의 언어 → 실천 */}
      <section className="mx-auto max-w-[1120px] px-5 py-24 md:py-32">
        <p className="label">에피소드별 SDGs</p>
        <h2 className="font-serif mt-3 text-[1.75rem] leading-snug sm:text-[2.5rem]">SDGs 목표를 아이의 언어로 바꿨습니다</h2>
        <p className="mt-4 max-w-[640px] text-[17px] leading-[1.8] text-muted">
          어른에게는 ‘해양생태계 보전’이지만, 아이에게는 ‘아픈 고래를 구하는 일’입니다. 공연 속 장면과 공연 전후 활동이 목표를 실천으로 잇습니다.
        </p>

        {live.map((e) => {
          const p = getProgram(e.slug)!;
          return (
            <article key={e.slug} className="mt-16">
              <div className="flex flex-wrap items-baseline gap-x-4 gap-y-2 border-b-2 border-stage pb-4">
                <span className="label">{e.ep} · 공연 중</span>
                <h3 className="font-serif text-2xl sm:text-3xl">
                  {p.title} <span className="text-lg text-muted">· {p.name}</span>
                </h3>
                <span className="ml-auto text-sm text-gold-ink">
                  기반 목표 SDG {e.base} {goalName(e.base)}
                </span>
              </div>
              <p className="mt-4 max-w-[760px] leading-[1.8] text-muted">{e.story}</p>
              <div className="overflow-x-auto">
                <table className="w-full min-w-[720px] text-left text-[15px]">
                  <thead>
                    <tr className="border-b border-line text-sm text-muted">
                      <th scope="col" className="w-48 py-3 pr-4 font-semibold">목표</th>
                      <th scope="col" className="py-3 pr-4 font-semibold">어른의 언어</th>
                      <th scope="col" className="py-3 pr-4 font-semibold">아이의 언어 (공연 장면)</th>
                      <th scope="col" className="py-3 font-semibold">실천 (전후 활동)</th>
                    </tr>
                  </thead>
                  <tbody>
                    {e.links.map((l) => (
                      <tr key={l.goal} className="border-b border-line align-top">
                        <th scope="row" className="py-4 pr-4">
                          <span className="font-serif text-xl">{l.goal}</span>{" "}
                          <span className="font-semibold">{goalName(l.goal)}</span>
                          <span className="mt-1 block text-xs font-normal text-gold-ink">{l.role}</span>
                        </th>
                        <td className="py-4 pr-4 leading-relaxed text-muted">{l.adult}</td>
                        <td className="py-4 pr-4 font-semibold leading-relaxed">{l.kid}</td>
                        <td className="py-4 leading-relaxed">{l.act}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <Link href={`/program/${p.slug}`} className="mt-4 inline-flex items-center gap-1.5 text-[15px] text-gold-ink hover:underline">
                {p.title} 자세히 보기 <ArrowRight size={16} strokeWidth={1.75} aria-hidden />
              </Link>
            </article>
          );
        })}

        <div className="mt-16 border-t border-line pt-8">
          <p className="label">다음 제작 에피소드</p>
          <ul className="mt-4 grid gap-6 md:grid-cols-2">
            {planned.map((e) => {
              const p = getProgram(e.slug)!;
              return (
                <li key={e.slug}>
                  <p className="font-serif text-xl">
                    {p.title} <span className="text-base text-muted">· {p.name}</span>
                  </p>
                  <p className="mt-1 text-[15px] text-gold-ink">
                    기반 목표 SDG {e.base} {goalName(e.base)} · 제작 예정
                  </p>
                  <p className="mt-1 text-[15px] leading-relaxed text-muted">{e.story}</p>
                </li>
              );
            })}
          </ul>
        </div>
      </section>

      {/* 어려운 개념이 쉬워지는 이유 */}
      <section className="bg-paper-deep">
        <div className="mx-auto max-w-[1120px] px-5 py-24 md:py-32">
          <p className="label">어떻게 쉬워지나요</p>
          <h2 className="font-serif mt-3 text-[1.75rem] leading-snug sm:text-[2.5rem]">
            어려운 개념이 아이 것이 되는
            <br />
            네 단계
          </h2>
          <ol className="mt-12 grid gap-10 md:grid-cols-4">
            {why.map(({ Icon, t, d }, i) => (
              <li key={t} className="border-t-2 border-stage pt-5">
                <div className="flex items-center justify-between">
                  <span className="font-serif text-xl text-gold-ink">{String(i + 1).padStart(2, "0")}</span>
                  <Icon size={22} strokeWidth={1.5} className="text-gold-ink" aria-hidden />
                </div>
                <h3 className="font-serif mt-3 text-xl">{t}</h3>
                <p className="mt-2 text-[15px] leading-[1.8] text-muted">{d}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* 17개 목표 로드맵 */}
      <section className="mx-auto max-w-[1120px] px-5 pt-24 md:pt-32">
        <p className="label">17편의 시간여행</p>
        <h2 className="font-serif mt-3 text-[1.75rem] leading-snug sm:text-[2.5rem]">17개 목표, 17개의 에피소드 계획</h2>
        <p className="mt-4 max-w-[640px] text-[17px] leading-[1.8] text-muted">
          목표마다 아이 눈높이의 교육 주제를 정해 두었습니다. 현재 2편을 공연 중이며, 나머지는 차례로 제작할 예정입니다.
        </p>
        <div className="mt-10 overflow-x-auto">
          <table className="w-full min-w-[600px] text-left text-[15px]">
            <thead>
              <tr className="border-b-2 border-stage text-sm text-muted">
                <th scope="col" className="w-14 py-3 font-semibold">목표</th>
                <th scope="col" className="py-3 pr-4 font-semibold">UN SDGs</th>
                <th scope="col" className="py-3 pr-4 font-semibold">에피소드 교육 주제</th>
                <th scope="col" className="w-28 py-3 font-semibold">상태</th>
              </tr>
            </thead>
            <tbody>
              {goals.map((g) => {
                const live = liveGoals.includes(g.n);
                const next = nextGoals.includes(g.n) || (g.n === 10 && live);
                return (
                  <tr key={g.n} className={`border-b border-line ${live ? "bg-paper-deep" : ""}`}>
                    <td className="font-serif py-3 pl-2 text-lg">{g.n}</td>
                    <td className="py-3 pr-4">{g.name}</td>
                    <td className="py-3 pr-4 text-muted">{g.theme}</td>
                    <td className={`py-3 text-sm ${live ? "font-semibold text-stage" : next ? "text-gold-ink" : "text-muted"}`}>
                      {g.n === 14 ? "공연 중 (EP.1)" : g.n === 10 ? "공연 중 (EP.2) · 다문화편 제작 예정" : nextGoals.includes(g.n) ? "다음 제작" : "기획"}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </section>

      {/* 누리과정 연계 */}
      <section className="mx-auto max-w-[1120px] px-5 py-24 md:py-32">
        <p className="label">누리과정 연계</p>
        <h2 className="font-serif mt-3 text-[1.75rem] leading-snug sm:text-[2.5rem]">개정 누리과정 5개 영역과 함께</h2>
        <div className="mt-10 overflow-x-auto">
          <table className="w-full min-w-[640px] text-left text-[15px]">
            <thead>
              <tr className="border-b-2 border-stage">
                <th scope="col" className="w-36 py-3 pr-4 font-semibold text-muted">영역</th>
                <th scope="col" className="py-3 pr-4 font-serif text-lg">푸른고래이야기 (EP.1)</th>
                <th scope="col" className="py-3 font-serif text-lg">모두의 놀이터 (EP.2)</th>
              </tr>
            </thead>
            <tbody>
              {nuri.map(([k, a, b]) => (
                <tr key={k} className="border-b border-line">
                  <th scope="row" className="py-4 pr-4 font-semibold text-muted">{k}</th>
                  <td className="py-4 pr-4 leading-relaxed">{a}</td>
                  <td className="py-4 leading-relaxed">{b}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="mt-6 text-xs leading-relaxed text-muted">
          * 오토끼의 시간여행은 UN 지속가능발전목표를 교육 주제로 활용한 공연이며, UN의 공식 승인이나 후원을 받은 프로그램은 아닙니다.
        </p>
      </section>

      <Faq items={sdgFaqs} title="SDGs 교육, 자주 묻는 질문" />
      <FinalCta pose="e" />
    </>
  );
}

import type { Metadata } from "next";
import Link from "next/link";
import JsonLd from "@/components/JsonLd";
import Otoki from "@/components/Otoki";
import { breadcrumbLd } from "@/lib/jsonld";
import { programs } from "@/lib/programs";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "공연 일정·견적 문의 | 유치원·어린이집 방문 공연 신청",
  description: `오토끼의 시간여행 방문 공연 일정과 견적은 전화(${site.phone})로 문의하세요. 희망 날짜와 인원을 알려 주시면 공연 주제, 회차, 견적을 맞춰 안내해 드립니다.`,
  alternates: { canonical: "/contact" },
};

const prepare = [
  { icon: "🏫", t: "기관명과 지역", d: "예) 경기 하남시 햇살유치원" },
  { icon: "📅", t: "희망 날짜 2~3개", d: "오전·오후 선호 시간도 함께" },
  { icon: "👧", t: "예상 인원과 연령", d: "예) 만 4~5세 60명, 2회" },
  { icon: "📐", t: "공연할 공간", d: "강당·유희실 등, 대략적인 크기" },
  { icon: "🎟️", t: "관심 있는 공연 주제", d: "환경, 장애인식개선, 행사 등" },
];

export default function ContactPage() {
  return (
    <div className="bg-dream pt-28 pb-24">
      <JsonLd data={breadcrumbLd([{ name: "문의", path: "/contact" }])} />
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <p className="font-bold text-coral">공연 일정·견적 문의</p>
        <h1 className="font-display mt-3 text-4xl leading-snug sm:text-6xl">
          시간여행 예약,
          <br />
          전화 한 통이면 끝!
        </h1>
        <p className="mt-4 max-w-2xl text-lg leading-relaxed text-ink-soft">
          희망 날짜와 인원만 알려 주세요. 우리 원에 맞는 공연 주제와 회차, 견적까지 바로 안내해 드릴게요.
        </p>

        <div className="bg-night relative mt-10 overflow-hidden rounded-[32px] p-8 text-cream ring-[3px] ring-ink sm:p-12">
          <p className="font-bold text-sun">공연 문의 전화</p>
          <a href={`tel:${site.phone}`} className="font-display mt-2 block text-5xl tracking-wide sm:text-7xl">
            {site.phone}
          </a>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href={`tel:${site.phone}`}
              className="rounded-full bg-sun px-7 py-4 text-lg font-bold text-ink ring-2 ring-ink transition hover:-translate-y-0.5"
            >
              📞 지금 전화 걸기
            </a>
            {site.naverPlace && (
              <a
                href={site.naverPlace}
                target="_blank"
                rel="noopener"
                className="rounded-full bg-[#03C75A] px-7 py-4 text-lg font-bold text-white ring-2 ring-white/40 transition hover:-translate-y-0.5"
              >
                N 네이버 플레이스에서 보기
              </a>
            )}
          </div>
          <p className="mt-6 text-sm text-cream/60">네이버 플레이스 안심번호로 연결됩니다.</p>
          <Otoki pose="hello" className="absolute -bottom-4 right-6 hidden h-[95%] w-auto animate-float md:block" sizes="200px" />
        </div>

        <h2 className="font-display mt-16 text-3xl sm:text-4xl">통화 전에 준비하면 더 빨라요</h2>
        <ul className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {prepare.map((p) => (
            <li key={p.t} className="rounded-2xl bg-white p-5 ring-2 ring-ink/10">
              <p className="text-2xl">{p.icon}</p>
              <p className="mt-2 font-extrabold">{p.t}</p>
              <p className="mt-1 text-sm text-ink-soft">{p.d}</p>
            </li>
          ))}
        </ul>

        <h2 className="mt-14 text-xl font-extrabold">공연 주제를 먼저 살펴보세요</h2>
        <div className="mt-4 flex flex-wrap gap-2">
          {programs.map((p) => (
            <Link key={p.slug} href={`/program/${p.slug}`} className="rounded-full bg-white px-4 py-2 font-bold ring-2 ring-ink/10 hover:ring-ink">
              {p.emoji} {p.title}
              {p.status ? ` (${p.status})` : ""}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

import type { Metadata } from "next";
import { CalendarDays, MapPin, Phone, Ruler, Theater, Users } from "lucide-react";
import JsonLd from "@/components/JsonLd";
import Otoki from "@/components/Otoki";
import { PlaybillList } from "@/components/Playbill";
import { breadcrumbLd } from "@/lib/jsonld";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "공연 일정·견적 문의 | 유치원·어린이집 방문 공연 신청",
  description: `오토끼의 시간여행 방문 공연 일정과 견적은 전화(${site.phone})로 문의하세요. 희망 날짜와 인원을 알려 주시면 공연 주제, 회차, 견적을 맞춰 안내해 드립니다.`,
  alternates: { canonical: "/contact" },
};

const prepare = [
  { Icon: MapPin, t: "기관명과 지역", d: "예) 경기 하남시 햇살유치원" },
  { Icon: CalendarDays, t: "희망 날짜 2~3개", d: "오전·오후 선호 시간도 함께" },
  { Icon: Users, t: "예상 인원과 연령", d: "예) 만 4~5세 60명, 2회" },
  { Icon: Ruler, t: "공연할 공간", d: "강당·유희실 등, 대략적인 크기" },
  { Icon: Theater, t: "관심 있는 공연 주제", d: "환경, 장애인식개선, 행사 등" },
];

export default function ContactPage() {
  return (
    <>
      <JsonLd data={breadcrumbLd([{ name: "문의", path: "/contact" }])} />
      <section className="on-stage bg-stage text-paper">
        <div className="mx-auto grid max-w-[1120px] items-end gap-8 px-5 pt-32 md:grid-cols-12 md:pt-40">
          <div className="pb-16 md:col-span-7 md:pb-20">
            <p className="label !text-gold">공연 일정·견적 문의</p>
            <h1 className="font-serif mt-4 text-4xl leading-[1.25] sm:text-5xl">
              시간여행 예약,
              <br />
              전화 한 통이면 됩니다
            </h1>
            <a href={`tel:${site.phone}`} className="font-serif mt-8 block text-4xl tracking-wide text-gold sm:text-6xl">
              {site.phone}
            </a>
            <p className="mt-3 text-sm text-mist">네이버 플레이스 안심번호로 연결됩니다.</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href={`tel:${site.phone}`} className="inline-flex items-center gap-2 rounded-md bg-gold px-6 py-3.5 font-semibold text-stage hover:bg-paper">
                <Phone size={18} strokeWidth={1.75} aria-hidden /> 지금 전화 걸기
              </a>
              {site.naverPlace && (
                <a href={site.naverPlace} target="_blank" rel="noopener" className="inline-flex items-center rounded-md border border-paper/40 px-6 py-3.5 hover:border-paper">
                  네이버 플레이스에서 보기
                </a>
              )}
            </div>
          </div>
          <div className="hidden justify-end md:col-span-4 md:col-start-9 md:flex">
            <Otoki pose="c" priority className="h-80 w-auto" sizes="240px" />
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-[1120px] gap-10 px-5 py-20 md:grid-cols-12">
        <div className="md:col-span-4">
          <p className="label">통화 전 준비</p>
          <h2 className="font-serif mt-3 text-[1.75rem] leading-snug sm:text-[2.25rem]">이 다섯 가지를 알려 주시면 더 빨라요</h2>
        </div>
        <ul className="md:col-span-8">
          {prepare.map(({ Icon, t, d }) => (
            <li key={t} className="flex gap-4 border-t border-line py-5 last:border-b">
              <Icon size={22} strokeWidth={1.5} className="mt-0.5 shrink-0 text-gold-ink" aria-hidden />
              <div>
                <p className="font-semibold">{t}</p>
                <p className="mt-1 text-[15px] text-muted">{d}</p>
              </div>
            </li>
          ))}
        </ul>
      </section>

      <section className="mx-auto grid max-w-[1120px] gap-10 px-5 pb-24 md:grid-cols-12">
        <div className="md:col-span-4">
          <p className="label">공연 주제</p>
          <h2 className="font-serif mt-3 text-[1.75rem]">먼저 살펴보세요</h2>
        </div>
        <div className="md:col-span-8">
          <PlaybillList />
        </div>
      </section>
    </>
  );
}

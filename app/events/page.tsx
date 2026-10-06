import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Phone } from "lucide-react";
import Faq from "@/components/Faq";
import FinalCta from "@/components/FinalCta";
import JsonLd from "@/components/JsonLd";
import { eventFaqs, eventFormats, eventRecords, plannerReasons, specs, venues } from "@/lib/events";
import { breadcrumbLd, faqLd } from "@/lib/jsonld";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "어린이 체험 행사·체험 부스 운영 | 축제·지자체·기업 가족행사 어린이 공연",
  description:
    "어린이날 축제, 지자체·도서관·복지관 행사, 기업 가족행사, 대학·지역 축제까지. 홀로그램과 오토마타 무대의 메타버스 무빙 씨어터 공연과 체험 부스를 행사 규모에 맞춰 운영합니다. 누적 1,800회 이상 공연.",
  keywords: [
    "어린이 체험 부스",
    "어린이 행사 업체",
    "어린이날 행사 공연",
    "가족축제 체험 부스",
    "지자체 어린이 행사",
    "기업 가족행사 프로그램",
    "메타버스 체험 부스",
    "홀로그램 체험 부스",
    "도서관 어린이 공연",
    "축제 어린이 공연 섭외",
    "ESG 어린이 캠페인 행사",
  ],
  alternates: { canonical: "/events" },
};

export default function EventsPage() {
  return (
    <>
      <JsonLd data={breadcrumbLd([{ name: "어린이 행사·체험 부스", path: "/events" }])} />
      <JsonLd data={faqLd(eventFaqs)} />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Service",
          name: "오토끼의 시간여행 어린이 체험 행사·체험 부스 운영",
          serviceType: "어린이 참여 행사 공연 및 체험 부스 운영",
          description:
            "지자체·도서관·복지관·기업·축제 행사에 메타버스 무빙 씨어터 공연과 메타버스·홀로그램 체험 부스를 운영합니다.",
          provider: { "@id": `${site.url}/#organization` },
          areaServed: { "@type": "Country", name: "대한민국" },
          audience: { "@type": "Audience", audienceType: "지자체·공공기관·기업·축제 행사 기획자와 담당자" },
          url: `${site.url}/events`,
          hasOfferCatalog: {
            "@type": "OfferCatalog",
            name: "행사 운영 형태",
            itemListElement: eventFormats.map((f) => ({ "@type": "Offer", itemOffered: { "@type": "Service", name: f.title, description: f.desc } })),
          },
        }}
      />

      <section className="on-stage relative overflow-hidden bg-stage text-paper">
        <div className="absolute inset-0 md:left-[40%]">
          <Image src="/images/booth.webp" alt="메타버스 실감콘텐츠 체험 부스 행사 현장" fill priority sizes="(max-width: 768px) 100vw, 60vw" className="object-cover opacity-40 md:opacity-100" />
          <div className="absolute inset-0 bg-stage/60 md:bg-[linear-gradient(90deg,var(--color-stage)_0%,rgb(20_50_74/0.3)_45%,rgb(20_50_74/0)_100%)]" />
        </div>
        <div className="relative mx-auto max-w-[1120px] px-5 pb-20 pt-32 md:pt-44">
          <div className="max-w-[560px]">
            <p className="label !text-gold">축제·지자체·기업 행사 담당자님께</p>
            <h1 className="font-serif mt-4 text-[2.3rem] leading-[1.25] sm:text-5xl">
              행사장에
              <br />
              시간여행 극장을 세워 드립니다
            </h1>
            <p className="mt-6 text-[17px] leading-[1.8] text-mist">
              어린이날 축제, 도서관·복지관 문화행사, 기업 가족 행사, 대학·지역 축제 부스까지. 메타버스 무빙 씨어터 공연과 체험 부스를
              행사 규모와 목적에 맞춰 운영합니다.
            </p>
            <a href={`tel:${site.phone}`} className="mt-8 inline-flex items-center gap-2 rounded-md bg-gold px-6 py-3.5 text-[17px] font-semibold text-stage hover:bg-paper">
              <Phone size={18} strokeWidth={1.75} aria-hidden /> 행사 섭외 전화 문의
            </a>
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-[1120px] gap-10 px-5 py-24 md:grid-cols-12 md:py-32">
        <div className="md:col-span-4">
          <p className="label">운영 형태</p>
          <h2 className="font-serif mt-3 text-[1.75rem] leading-snug sm:text-[2.5rem]">행사에 맞춰 고르는 네 가지 방식</h2>
        </div>
        <ol className="md:col-span-8">
          {eventFormats.map((f, i) => (
            <li key={f.title} className="grid grid-cols-[2.5rem_1fr] gap-x-4 border-t border-line py-6 last:border-b">
              <span className="font-serif text-xl text-gold-ink">{String(i + 1).padStart(2, "0")}</span>
              <div>
                <h3 className="font-serif text-xl">
                  {f.title} <span className="ml-1 text-sm font-normal text-gold-ink">{f.tag}</span>
                </h3>
                <p className="mt-2 leading-[1.8] text-muted">{f.desc}</p>
              </div>
            </li>
          ))}
        </ol>
      </section>

      <section className="bg-paper-deep">
        <div className="mx-auto max-w-[1120px] px-5 py-24 md:py-32">
          <p className="label">이런 행사에 찾아갑니다</p>
          <h2 className="font-serif mt-3 text-[1.75rem] leading-snug sm:text-[2.5rem]">유치원 밖에서도, 아이들이 모이는 곳이라면</h2>
          <ul className="mt-10 grid border-t border-line sm:grid-cols-2">
            {venues.map((v) => (
              <li key={v} className="border-b border-line py-4 text-[17px] sm:odd:pr-6 sm:even:pl-6">
                {v}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="mx-auto max-w-[1120px] px-5 py-24 md:py-32">
        <p className="label">기획자가 고르는 이유</p>
        <h2 className="font-serif mt-3 text-[1.75rem] leading-snug sm:text-[2.5rem]">행사의 시선과 명분을 함께</h2>
        <div className="mt-10 grid gap-8 md:grid-cols-4">
          {plannerReasons.map((r) => (
            <div key={r.t} className="border-t-2 border-stage pt-5">
              <h3 className="font-serif text-xl leading-snug">{r.t}</h3>
              <p className="mt-2 text-[15px] leading-[1.8] text-muted">{r.d}</p>
            </div>
          ))}
        </div>
        <p className="mt-8 text-[15px]">
          공익 메시지가 필요한 행사라면{" "}
          <Link href="/sdgs" className="text-gold-ink underline underline-offset-4">
            UN SDGs 기반 에피소드
          </Link>
          를 확인해 보세요.
        </p>
      </section>

      <section className="bg-paper-deep">
        <div className="mx-auto grid max-w-[1120px] gap-10 px-5 py-24 md:grid-cols-12 md:py-32">
          <div className="md:col-span-4">
            <p className="label">운영 사양</p>
            <h2 className="font-serif mt-3 text-[1.75rem] leading-snug sm:text-[2.5rem]">행사 계획서에 바로 옮기세요</h2>
          </div>
          <dl className="md:col-span-8">
            {specs.map(([k, v]) => (
              <div key={k} className="grid grid-cols-[6.5rem_1fr] gap-4 border-t border-line py-4 last:border-b">
                <dt className="text-[15px] font-semibold text-gold-ink">{k}</dt>
                <dd className="text-[15px] leading-relaxed">{v}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section className="mx-auto grid max-w-[1120px] gap-10 px-5 py-24 md:grid-cols-12 md:py-32">
        <div className="md:col-span-4">
          <p className="label">행사 실적</p>
          <h2 className="font-serif mt-3 text-[1.75rem] leading-snug sm:text-[2.5rem]">함께한 행사</h2>
        </div>
        <ul className="md:col-span-8">
          {eventRecords.map((r) => (
            <li key={r} className="border-t border-line py-4 leading-relaxed last:border-b">
              {r}
            </li>
          ))}
        </ul>
      </section>

      <Faq items={eventFaqs} title="행사 담당자 자주 묻는 질문" />
      <FinalCta
        pose="g"
        label="행사 섭외 문의"
        title={
          <>
            행사 날짜와 장소만 알려 주세요
            <br />
            구성안과 견적을 보내 드립니다
          </>
        }
        desc="행사 개요(일정·장소·예상 관람객·실내외 여부)를 알려 주시면 공연 회차와 체험 부스 구성을 제안해 드립니다."
      />
    </>
  );
}

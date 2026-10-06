import Image from "next/image";
import Link from "next/link";
import { Phone } from "lucide-react";
import { site } from "@/lib/site";

const proof = [
  { v: "1,800회+", l: "누적 방문 공연" },
  { v: "전국 40곳", l: "공연 지사망" },
  { v: "만 3–7세", l: "유아 맞춤 구성" },
  { v: "누리과정", l: "UN SDGs 연계 주제" },
];

export default function Hero() {
  return (
    <section className="on-stage relative overflow-hidden bg-stage text-paper">
      {/* 무대 일러스트: 데스크톱은 배경 전체, 모바일은 위쪽 */}
      <div
        className="relative aspect-[16/10] w-full md:absolute md:inset-y-0 md:right-0 md:aspect-auto md:w-[72%]"
      >
        <Image
          src="/images/theater-hero.webp"
          alt="메타버스 무빙 씨어터 무대 앞에 선 오토끼 일러스트"
          fill
          priority
          sizes="100vw"
          className="object-cover object-[50%_30%] md:object-[50%_35%]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-stage via-stage/20 to-transparent md:bg-[linear-gradient(90deg,var(--color-stage)_0%,rgb(20_50_74/0.75)_22%,rgb(20_50_74/0)_55%),linear-gradient(0deg,var(--color-stage)_0%,rgb(20_50_74/0)_30%)]" />
      </div>

      <div className="relative mx-auto max-w-[1120px] px-5 pb-14 md:flex md:min-h-[720px] md:flex-col md:justify-end md:pb-16 md:pt-32">
        <div className="-mt-10 md:mt-0 md:max-w-[560px]">
          <p className="label !text-gold">유치원·어린이집으로 찾아가는 메타버스 체험 공연</p>
          <h1 className="font-serif mt-4 text-[2.4rem] leading-[1.2] sm:text-5xl md:text-[3.5rem]">
            문을 열면,
            <br />
            시간여행이 시작돼요
          </h1>
          <p className="mt-6 text-[17px] leading-[1.8] text-mist">
            홀로그램과 움직이는 오토마타 무대, 배우 오토끼가 함께하는 공연이 우리 원으로 찾아갑니다. 강당 대관도, 버스도
            필요 없어요.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href={`tel:${site.phone}`}
              className="inline-flex items-center gap-2 rounded-md bg-gold px-6 py-3.5 text-[17px] font-semibold text-stage transition-colors hover:bg-paper"
            >
              <Phone size={18} strokeWidth={1.75} aria-hidden /> 공연 일정 전화 문의
            </a>
            <Link
              href="/program"
              className="inline-flex items-center rounded-md border border-paper/40 px-6 py-3.5 text-[17px] transition-colors hover:border-paper"
            >
              공연 주제 보기
            </Link>
          </div>
        </div>
        <dl className="mt-12 grid grid-cols-2 gap-x-6 gap-y-6 border-t border-white/15 pt-8 md:grid-cols-4">
          {proof.map((p) => (
            <div key={p.l}>
              <dt className="sr-only">{p.l}</dt>
              <dd className="font-serif text-2xl md:text-[1.75rem]">{p.v}</dd>
              <dd className="mt-1 text-sm text-mist">{p.l}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}

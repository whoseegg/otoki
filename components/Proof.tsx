import Image from "next/image";
import { site } from "@/lib/site";
import { press } from "@/lib/press";
import Reveal from "./Reveal";

const photos = [
  { src: "/images/group-gwangju.webp", w: 779, h: 514, alt: "경기도 광주시 탄소ZERO 캠페인 공연 후 아이들과 함께한 단체 사진", cap: "광주시 탄소ZERO 캠페인 공연" },
  { src: "/images/stage-audience.webp", w: 894, h: 390, alt: "강당에서 메타버스 무빙 씨어터 공연을 관람하는 아이들", cap: "유치원·초등 대상 공연" },
  { src: "/images/booth.webp", w: 1007, h: 566, alt: "메타버스 기반 실감콘텐츠 체험 부스 행사", cap: "메타버스 실감콘텐츠 체험 행사" },
];

export default function Proof() {
  const row = [...site.partners, ...site.partners];
  return (
    <section id="proof" className="bg-dream overflow-hidden py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal>
          <p className="font-bold text-coral">유치원에서 먼저 자랑하고 추천하는 공연</p>
          <h2 className="font-display mt-3 text-3xl leading-snug sm:text-5xl">
            전국 곳곳에서
            <br />
            시간여행이 펼쳐지고 있어요
          </h2>
        </Reveal>
        <div className="mt-12 grid gap-4 md:grid-cols-3">
          {photos.map((p, i) => (
            <Reveal key={p.src} delay={i * 0.1}>
              <figure className="group overflow-hidden rounded-3xl bg-white p-2 ring-2 ring-ink">
                <div className="overflow-hidden rounded-2xl">
                  <Image
                    src={p.src}
                    width={p.w}
                    height={p.h}
                    alt={p.alt}
                    className="aspect-[4/3] w-full object-cover transition duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 380px"
                  />
                </div>
                <figcaption className="px-2 py-3 text-sm font-bold">{p.cap}</figcaption>
              </figure>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.1}>
          <h3 className="mt-16 text-xl font-extrabold">📰 언론에 소개된 오토끼</h3>
          <ul className="mt-5 grid gap-3 md:grid-cols-2">
            {press.map((n) => (
              <li key={n.title} className="rounded-2xl bg-white p-5 ring-1 ring-ink/10">
                <p className="text-xs font-bold text-grape">{n.media}</p>
                <p className="mt-1 font-bold leading-snug">{n.title}</p>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>

      <div className="mt-16" aria-label="함께한 기관">
        <p className="mb-4 text-center text-sm font-bold text-ink-soft">함께한 기관</p>
        <div className="flex w-max animate-marquee gap-3 [animation-duration:45s]">
          {row.map((p, i) => (
            <span
              key={i}
              aria-hidden={i >= site.partners.length}
              className="whitespace-nowrap rounded-full bg-white px-5 py-2.5 font-bold ring-2 ring-ink/10"
            >
              {p}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

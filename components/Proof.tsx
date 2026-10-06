import Image from "next/image";
import { press } from "@/lib/press";
import { site } from "@/lib/site";
import { SectionHead } from "./Section";

const photos = [
  { src: "/images/stage-audience.webp", w: 894, h: 390, alt: "강당에서 메타버스 무빙 씨어터 공연을 관람하는 아이들", cap: "유치원 강당 공연" },
  { src: "/images/group-gwangju.webp", w: 779, h: 514, alt: "경기도 광주시 탄소ZERO 캠페인 공연 단체 사진", cap: "광주시 탄소ZERO 캠페인 공연" },
  { src: "/images/booth.webp", w: 1007, h: 566, alt: "메타버스 실감콘텐츠 체험 부스 행사", cap: "메타버스 실감콘텐츠 체험 행사" },
];

export default function Proof() {
  return (
    <section id="proof" className="bg-paper-deep py-24 md:py-32">
      <div className="mx-auto max-w-[1120px] px-5">
        <SectionHead label="공연 기록" title="전국 곳곳에서 시간여행이 펼쳐지고 있어요" />
        <div className="mt-12 grid gap-4 md:grid-cols-12">
          <figure className="flex flex-col md:col-span-8">
            <div className="relative aspect-[16/9] md:aspect-auto md:flex-1">
              <Image src={photos[0].src} fill alt={photos[0].alt} className="rounded-md object-cover" sizes="(max-width: 768px) 100vw, 740px" />
            </div>
            <figcaption className="mt-2 text-sm text-muted">{photos[0].cap}</figcaption>
          </figure>
          <div className="flex flex-col gap-4 md:col-span-4">
            {photos.slice(1).map((p) => (
              <figure key={p.src}>
                <Image src={p.src} width={p.w} height={p.h} alt={p.alt} className="aspect-[3/2] w-full rounded-md object-cover" sizes="(max-width: 768px) 100vw, 360px" />
                <figcaption className="mt-2 text-sm text-muted">{p.cap}</figcaption>
              </figure>
            ))}
          </div>
        </div>
        <p className="mt-3 text-xs text-muted">* 아이들의 얼굴은 보호를 위해 흐리게 처리했습니다.</p>

        <div className="mt-20 grid gap-10 md:grid-cols-12">
          <h3 className="font-serif text-2xl md:col-span-4">언론에 소개된 오토끼</h3>
          <ul className="md:col-span-8">
            {press.map((n) => (
              <li key={n.title} className="grid gap-1 border-t border-line py-5 last:border-b sm:grid-cols-[7rem_1fr] sm:gap-4">
                <span className="text-sm text-gold-ink">{n.media}</span>
                {n.url ? (
                  <a href={n.url} target="_blank" rel="noopener" className="leading-relaxed underline-offset-4 hover:underline">
                    {n.title}
                  </a>
                ) : (
                  <span className="leading-relaxed">{n.title}</span>
                )}
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-16 grid gap-10 md:grid-cols-12">
          <h3 className="font-serif text-2xl md:col-span-4">함께한 기관</h3>
          <p className="leading-[2] text-muted md:col-span-8">{site.partners.join(" · ")}</p>
        </div>
      </div>
    </section>
  );
}

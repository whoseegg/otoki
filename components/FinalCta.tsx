import Link from "next/link";
import { site } from "@/lib/site";
import Otoki from "./Otoki";
import Reveal from "./Reveal";

export default function FinalCta() {
  return (
    <section className="px-4 py-20 sm:px-6">
      <Reveal>
        <div className="bg-night relative mx-auto max-w-6xl overflow-hidden rounded-[36px] px-6 py-14 text-cream ring-[3px] ring-ink sm:px-14">
          <div className="relative z-10 max-w-xl">
            <p className="font-bold text-sun">공연 일정은 빨리 마감돼요</p>
            <h2 className="font-display mt-3 text-3xl leading-snug sm:text-5xl">
              &ldquo;오토끼 또 언제 와요?&rdquo;
              <br />
              그 질문을 우리 원에서도 들어 보세요
            </h2>
            <p className="mt-4 text-lg text-cream/80">
              전화 한 통이면 충분해요. 원하는 날짜와 인원만 알려 주시면 주제와 회차, 견적까지 맞춰 안내해 드릴게요.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href={`tel:${site.phone}`}
                className="rounded-full bg-sun px-7 py-4 text-lg font-bold text-ink ring-2 ring-ink transition hover:-translate-y-0.5"
              >
                📞 {site.phone}
              </a>
              <Link href="/contact" className="rounded-full bg-white/10 px-7 py-4 text-lg font-bold ring-2 ring-white/40 hover:bg-white/20">
                문의 안내 보기 →
              </Link>
            </div>
          </div>
          <Otoki
            pose="wave"
            className="absolute -bottom-6 right-4 hidden h-[115%] w-auto animate-float md:block"
            sizes="260px"
          />
        </div>
      </Reveal>
    </section>
  );
}

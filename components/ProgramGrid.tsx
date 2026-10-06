import Link from "next/link";
import { programs } from "@/lib/programs";
import Reveal from "./Reveal";

const tone: Record<string, string> = {
  sun: "bg-sun-soft",
  coral: "bg-coral-soft",
  leaf: "bg-leaf-soft",
  sky: "bg-sky-soft",
  grape: "bg-grape-soft",
  berry: "bg-berry-soft",
};

export default function ProgramGrid({ heading = true }: { heading?: boolean }) {
  return (
    <section id="programs" className="mx-auto max-w-6xl px-4 py-24 sm:px-6">
      {heading && (
        <Reveal>
          <p className="font-bold text-coral">공연 주제 & 프로그램</p>
          <h2 className="font-display mt-3 text-3xl leading-snug sm:text-5xl">
            우리 원에 필요한 시간여행을 골라 보세요
          </h2>
          <p className="mt-4 max-w-2xl text-lg text-ink-soft">
            모든 주제는 개정 누리과정과 UN 지속가능발전목표(SDGs)를 바탕으로 후즈에그가 직접 개발하고 감수합니다.
          </p>
        </Reveal>
      )}
      <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {programs.map((p, i) => (
          <Reveal key={p.slug} delay={(i % 3) * 0.08}>
            <Link
              href={`/program/${p.slug}`}
              className={`group relative flex h-full flex-col rounded-3xl p-7 ring-2 ring-ink/10 transition duration-300 hover:-translate-y-1.5 hover:-rotate-1 hover:shadow-[6px_6px_0_#2a1f5c] hover:ring-ink ${tone[p.color]}`}
            >
              {p.status && (
                <span className="absolute right-5 top-5 rounded-full bg-ink px-3 py-1 text-xs font-bold text-cream">{p.status}</span>
              )}
              <span className="text-5xl transition duration-300 group-hover:scale-125 group-hover:rotate-6">{p.emoji}</span>
              <p className="mt-5 text-sm font-bold text-ink-soft">{p.name}</p>
              <h3 className="font-display mt-1 text-2xl">{p.title}</h3>
              <p className="mt-2 leading-relaxed text-ink-soft">{p.short}</p>
              <span className="mt-auto pt-6 font-bold text-grape">자세히 보기 →</span>
            </Link>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

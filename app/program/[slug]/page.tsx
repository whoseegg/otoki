import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Faq from "@/components/Faq";
import FinalCta from "@/components/FinalCta";
import JsonLd from "@/components/JsonLd";
import Otoki, { type OtokiPose } from "@/components/Otoki";
import Reveal from "@/components/Reveal";
import { faqs } from "@/lib/faq";
import { breadcrumbLd, faqLd, programLd } from "@/lib/jsonld";
import { getProgram, programs } from "@/lib/programs";

export function generateStaticParams() {
  return programs.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const p = getProgram((await params).slug);
  if (!p) return {};
  return {
    title: p.seoTitle,
    description: p.seoDescription,
    keywords: p.keywords,
    alternates: { canonical: `/program/${p.slug}` },
    openGraph: { title: `${p.seoTitle} | 오토끼의 시간여행`, description: p.seoDescription, url: `/program/${p.slug}` },
  };
}

const tone: Record<string, string> = {
  sun: "bg-sun-soft",
  coral: "bg-coral-soft",
  leaf: "bg-leaf-soft",
  sky: "bg-sky-soft",
  grape: "bg-grape-soft",
  berry: "bg-berry-soft",
};
const poses: OtokiPose[] = ["point", "wave", "hello", "wow", "run"];

export default async function ProgramPage({ params }: { params: Promise<{ slug: string }> }) {
  const p = getProgram((await params).slug);
  if (!p) notFound();
  const idx = programs.indexOf(p);
  const pageFaqs = [...p.faq, ...faqs.slice(1, 4)];
  const others = programs.filter((o) => o.slug !== p.slug);

  return (
    <>
      <JsonLd data={programLd(p)} />
      <JsonLd data={breadcrumbLd([{ name: "프로그램", path: "/program" }, { name: p.name, path: `/program/${p.slug}` }])} />
      <JsonLd data={faqLd(pageFaqs)} />

      <section className={`${tone[p.color]} relative overflow-hidden pt-28 pb-16`}>
        <div className="dot-bg absolute inset-0 opacity-50" aria-hidden />
        <div className="relative mx-auto grid max-w-6xl items-center gap-8 px-4 sm:px-6 md:grid-cols-[1.4fr_1fr]">
          <div>
            <nav aria-label="현재 위치" className="text-sm font-bold text-ink-soft">
              <Link href="/" className="hover:text-coral">홈</Link> / <Link href="/program" className="hover:text-coral">프로그램</Link> / {p.name}
            </nav>
            <h1 className="mt-5">
              <span className="block text-lg font-bold text-grape sm:text-xl">
                {p.emoji} 유치원·어린이집 {p.keywords[0].replace(/^(유치원|어린이집|유아|어린이) /, "")}
              </span>
              <span className="font-display mt-2 block text-5xl leading-tight sm:text-7xl">{p.title}</span>
            </h1>
            {p.status && (
              <span className="mt-4 inline-block rounded-full bg-ink px-4 py-1.5 text-sm font-bold text-cream">
                {p.status}
              </span>
            )}
            <p className="font-display mt-6 text-2xl leading-snug sm:text-3xl">{p.hook}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/contact"
                className="rounded-full bg-coral px-7 py-4 text-lg font-bold text-white shadow-[4px_4px_0_#2a1f5c] ring-2 ring-ink transition hover:-translate-y-0.5"
              >
                {p.status ? "출시 일정 문의하기 →" : "이 공연 일정 문의 →"}
              </Link>
            </div>
          </div>
          <div className="relative mx-auto h-72 sm:h-96">
            <div className="absolute inset-x-0 bottom-0 mx-auto aspect-square w-64 rounded-full bg-white/70 ring-4 ring-white sm:w-80" />
            <Otoki pose={poses[idx % poses.length]} priority className="relative h-full w-auto animate-float" sizes="240px" />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-4 py-16 sm:px-6">
        <Reveal>
          <div className="rounded-3xl bg-white p-6 ring-2 ring-ink sm:p-8">
            <h2 className="text-sm font-black tracking-widest text-grape">한 문단으로 보는 {p.title}</h2>
            <p className="mt-3 text-lg leading-relaxed">{p.definition}</p>
          </div>
        </Reveal>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
        <Reveal>
          <h2 className="font-display text-center text-3xl leading-snug sm:text-5xl">{p.headline}</h2>
        </Reveal>
        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {[
            { who: "원장님께", icon: "🏫", t: p.forDirector },
            { who: "선생님께", icon: "🍎", t: p.forTeacher },
            { who: "아이와 학부모님께", icon: "🏡", t: p.forParent },
          ].map((c, i) => (
            <Reveal key={c.who} delay={i * 0.1}>
              <div className="h-full rounded-3xl bg-white p-7 ring-2 ring-ink/10">
                <p className="text-3xl">{c.icon}</p>
                <h3 className="mt-3 font-extrabold text-grape">{c.who}</h3>
                <p className="mt-2 leading-relaxed">{c.t}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <Reveal>
          <h2 className="font-display text-3xl sm:text-4xl">이렇게 진행돼요</h2>
        </Reveal>
        <ol className="mt-10 grid gap-5 md:grid-cols-3">
          {p.flow.map((f, i) => (
            <Reveal key={f.title} delay={i * 0.12}>
              <li className={`relative h-full rounded-3xl p-7 ring-2 ring-ink ${tone[p.color]}`}>
                <span className="font-display absolute -top-5 left-6 grid h-11 w-11 place-items-center rounded-full bg-ink text-xl text-cream">
                  {i + 1}
                </span>
                <h3 className="mt-3 text-xl font-extrabold">{f.title}</h3>
                <p className="mt-2 leading-relaxed text-ink-soft">{f.desc}</p>
              </li>
            </Reveal>
          ))}
        </ol>
        <Reveal delay={0.1}>
          <div className="mt-10 flex flex-wrap items-center gap-2">
            <span className="mr-2 font-bold">이런 걸 길러요</span>
            {p.outcomes.map((o) => (
              <span key={o} className="rounded-full bg-white px-4 py-2 font-bold ring-2 ring-ink">
                🌟 {o}
              </span>
            ))}
          </div>
        </Reveal>
      </section>

      <Faq items={pageFaqs} title={`${p.title} 자주 묻는 질문`} />

      <section className="mx-auto max-w-6xl px-4 pb-8 sm:px-6">
        <h2 className="text-xl font-extrabold">다른 시간여행도 둘러보세요</h2>
        <div className="mt-4 flex flex-wrap gap-2">
          {others.map((o) => (
            <Link key={o.slug} href={`/program/${o.slug}`} className="rounded-full bg-white px-4 py-2 font-bold ring-2 ring-ink/10 hover:ring-ink">
              {o.emoji} {o.title} · {o.name}
            </Link>
          ))}
        </div>
      </section>
      <FinalCta />
    </>
  );
}

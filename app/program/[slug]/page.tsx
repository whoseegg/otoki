import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Phone } from "lucide-react";
import Faq from "@/components/Faq";
import FinalCta from "@/components/FinalCta";
import JsonLd from "@/components/JsonLd";
import Otoki, { type OtokiPose } from "@/components/Otoki";
import { PlaybillList } from "@/components/Playbill";
import { faqs } from "@/lib/faq";
import { breadcrumbLd, faqLd, programLd } from "@/lib/jsonld";
import { getProgram, programs } from "@/lib/programs";
import { site } from "@/lib/site";

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

const poseFor: Record<string, OtokiPose> = {
  performance: "b",
  metaverse: "g",
  environment: "e",
  disability: "f",
  ai: "j",
  multicultural: "c",
  event: "a",
};

export default async function ProgramPage({ params }: { params: Promise<{ slug: string }> }) {
  const p = getProgram((await params).slug);
  if (!p) notFound();
  const pageFaqs = [...p.faq, ...faqs.slice(1, 4)];
  const keyword = p.keywords[0].replace(/^(유치원|어린이집|유아|어린이) /, "");

  return (
    <>
      <JsonLd data={programLd(p)} />
      <JsonLd data={breadcrumbLd([{ name: "공연 주제", path: "/program" }, { name: p.name, path: `/program/${p.slug}` }])} />
      <JsonLd data={faqLd(pageFaqs)} />

      <section className="bg-paper-deep">
        <div className="mx-auto grid max-w-[1120px] items-end gap-8 px-5 pt-28 md:grid-cols-12 md:pt-36">
          <div className="pb-14 md:col-span-7 md:pb-20">
            <nav aria-label="현재 위치" className="text-sm text-muted">
              <Link href="/" className="hover:underline">홈</Link> / <Link href="/program" className="hover:underline">공연 주제</Link> / {p.name}
            </nav>
            <h1 className="mt-6">
              <span className="label block">유치원·어린이집 {keyword}</span>
              <span className="font-serif mt-3 block text-[2.6rem] leading-[1.15] sm:text-6xl">{p.title}</span>
            </h1>
            {p.status && (
              <span className="mt-4 inline-block rounded-full border border-gold-ink px-3 py-1 text-sm text-gold-ink">{p.status}</span>
            )}
            <p className="font-serif mt-6 text-xl leading-[1.5] sm:text-2xl">{p.hook}</p>
            <a
              href={`tel:${site.phone}`}
              className="mt-8 inline-flex items-center gap-2 rounded-md bg-stage px-6 py-3.5 text-[17px] font-semibold text-paper hover:bg-stage-deep"
            >
              <Phone size={18} strokeWidth={1.75} aria-hidden /> {p.status ? "출시 일정 전화 문의" : "이 공연 일정 전화 문의"}
            </a>
          </div>
          <div className="flex justify-center md:col-span-4 md:col-start-9 md:justify-end">
            <Otoki pose={poseFor[p.slug] ?? "f"} priority className="h-56 w-auto sm:h-80" sizes="240px" />
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-[1120px] gap-10 px-5 py-20 md:grid-cols-12">
        <p className="label md:col-span-3">한 문단으로 보기</p>
        <p className="border-l-2 border-gold pl-6 text-lg leading-[1.9] md:col-span-8 md:col-start-5">{p.definition}</p>
      </section>

      <section className="mx-auto max-w-[1120px] px-5 pb-20">
        <h2 className="font-serif text-[1.75rem] leading-snug sm:text-[2.25rem]">{p.headline}</h2>
        <div className="mt-10 grid gap-8 md:grid-cols-3">
          {[
            { who: "원장님께", t: p.forDirector },
            { who: "선생님께", t: p.forTeacher },
            { who: "아이와 학부모님께", t: p.forParent },
          ].map((c) => (
            <div key={c.who} className="border-t-2 border-stage pt-5">
              <h3 className="label">{c.who}</h3>
              <p className="mt-3 leading-[1.8]">{c.t}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-paper-deep">
        <div className="mx-auto grid max-w-[1120px] gap-10 px-5 py-20 md:grid-cols-12">
          <div className="md:col-span-4">
            <p className="label">진행 순서</p>
            <h2 className="font-serif mt-3 text-[1.75rem] sm:text-[2.25rem]">이렇게 진행돼요</h2>
          </div>
          <div className="md:col-span-8">
            <ol>
              {p.flow.map((f, i) => (
                <li key={f.title} className="grid grid-cols-[2.5rem_1fr] gap-x-4 border-t border-line py-6 last:border-b">
                  <span className="font-serif text-xl text-gold-ink">{String(i + 1).padStart(2, "0")}</span>
                  <div>
                    <h3 className="text-lg font-semibold">{f.title}</h3>
                    <p className="mt-1.5 leading-[1.8] text-muted">{f.desc}</p>
                  </div>
                </li>
              ))}
            </ol>
            <p className="mt-8 text-[15px]">
              <span className="font-semibold">기르는 힘</span>
              <span className="text-muted"> · {p.outcomes.join(" · ")}</span>
            </p>
          </div>
        </div>
      </section>

      <Faq items={pageFaqs} title={`${p.title}, 자주 묻는 질문`} />

      <section className="mx-auto grid max-w-[1120px] gap-10 px-5 pb-24 md:grid-cols-12">
        <div className="md:col-span-4">
          <p className="label">다른 공연 주제</p>
          <h2 className="font-serif mt-3 text-[1.75rem]">다른 시간여행도 있어요</h2>
        </div>
        <div className="md:col-span-8">
          <PlaybillList exclude={p.slug} />
        </div>
      </section>
      <FinalCta pose="i" />
    </>
  );
}

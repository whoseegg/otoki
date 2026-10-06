import Image from "next/image";
import Link from "next/link";
import { programs } from "@/lib/programs";
import { site } from "@/lib/site";

export default function Footer() {
  const bizLine = [site.org.name, site.org.ceo && `대표 ${site.org.ceo}`, site.org.bizNumber && `사업자등록번호 ${site.org.bizNumber}`, site.org.address]
    .filter(Boolean)
    .join(" · ");
  return (
    <footer className="on-stage bg-stage-deep pb-24 text-mist md:pb-0">
      <div className="mx-auto grid max-w-[1120px] gap-12 px-5 py-16 md:grid-cols-[1.3fr_1fr_0.8fr]">
        <div>
          <Image src="/brand/otoki-logo.svg" alt="오토끼의 시간여행" width={130} height={88} className="h-16 w-auto" />
          <p className="mt-5 max-w-sm text-sm leading-7">{site.description}</p>
          <p className="mt-6 text-sm">
            공연 문의{" "}
            <a href={`tel:${site.phone}`} className="font-semibold text-gold">
              {site.phone}
            </a>
          </p>
        </div>
        <div>
          <p className="label !text-gold">공연 주제</p>
          <ul className="mt-4 space-y-2.5 text-sm">
            {programs.map((p) => (
              <li key={p.slug}>
                <Link href={`/program/${p.slug}`} className="hover:text-paper">
                  {p.title} · {p.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="label !text-gold">바로가기</p>
          <ul className="mt-4 space-y-2.5 text-sm">
            <li><Link href="/sdgs" className="hover:text-paper">UN SDGs 교육</Link></li>
            <li><Link href="/events" className="hover:text-paper">어린이 행사·체험 부스</Link></li>
            <li><Link href="/faq" className="hover:text-paper">자주 묻는 질문</Link></li>
            <li><Link href="/contact" className="hover:text-paper">공연 문의 안내</Link></li>
            {site.naverPlace && <li><a href={site.naverPlace} className="hover:text-paper" rel="noopener" target="_blank">네이버 플레이스</a></li>}
            {site.blog && <li><a href={site.blog} className="hover:text-paper" rel="noopener" target="_blank">네이버 블로그</a></li>}
            {site.instagram && <li><a href={site.instagram} className="hover:text-paper" rel="noopener" target="_blank">인스타그램</a></li>}
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-[1120px] flex-wrap items-center justify-between gap-4 px-5 py-6 text-xs text-mist/80">
          <p>
            {bizLine} · © {new Date().getFullYear()} {site.org.name}
          </p>
          <Image src="/brand/whoseegg-logo.webp" alt="WhoseEgg" width={800} height={145} className="h-5 w-auto brightness-0 invert opacity-70" />
        </div>
      </div>
    </footer>
  );
}

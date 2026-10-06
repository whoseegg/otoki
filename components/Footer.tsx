import Link from "next/link";
import { programs } from "@/lib/programs";
import { site } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="bg-ink text-cream/80">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <p className="font-display text-2xl text-cream">오토끼의 시간여행</p>
          <p className="mt-3 max-w-sm text-sm leading-relaxed">{site.description}</p>
          <p className="mt-5 text-xs leading-relaxed text-cream/60">
            {[site.org.name, site.org.ceo && `대표 ${site.org.ceo}`, site.org.bizNumber && `사업자등록번호 ${site.org.bizNumber}`, site.org.address]
              .filter(Boolean)
              .join(" · ")}
          </p>
          <p className="mt-3 text-sm">
            공연 문의 <a href={`tel:${site.phone}`} className="text-sun">{site.phone}</a>
          </p>
        </div>
        <div>
          <p className="font-bold text-cream">프로그램</p>
          <ul className="mt-3 space-y-2 text-sm">
            {programs.map((p) => (
              <li key={p.slug}>
                <Link href={`/program/${p.slug}`} className="hover:text-sun">
                  {p.title} · {p.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="font-bold text-cream">바로가기</p>
          <ul className="mt-3 space-y-2 text-sm">
            <li><Link href="/faq" className="hover:text-sun">자주 묻는 질문</Link></li>
            <li><Link href="/contact" className="hover:text-sun">공연 문의 안내</Link></li>
            {site.naverPlace && <li><a href={site.naverPlace} className="hover:text-sun" rel="noopener" target="_blank">네이버 플레이스</a></li>}
            {site.blog && <li><a href={site.blog} className="hover:text-sun" rel="noopener" target="_blank">네이버 블로그</a></li>}
            {site.instagram && <li><a href={site.instagram} className="hover:text-sun" rel="noopener" target="_blank">인스타그램</a></li>}
          </ul>
        </div>
      </div>
      <div className="border-t border-cream/10 py-6 text-center text-xs text-cream/50">
        © {new Date().getFullYear()} {site.org.name}. 오토끼의 시간여행은 {site.org.name}가 개발하고 주관하는 공연입니다.
      </div>
    </footer>
  );
}

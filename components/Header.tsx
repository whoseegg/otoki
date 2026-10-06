"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Menu, Phone, X } from "lucide-react";
import { programs } from "@/lib/programs";
import { site } from "@/lib/site";

const nav = [
  { href: "/#theater", label: "무빙 씨어터" },
  { href: "/#story", label: "진행 방식" },
  { href: "/program", label: "공연 주제" },
  { href: "/faq", label: "자주 묻는 질문" },
];

export default function Header() {
  const pathname = usePathname();
  const overDark = pathname === "/";
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 24);
    on();
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);
  const dark = overDark && !scrolled && !open;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        dark ? "on-stage text-paper" : "border-b border-line bg-paper/95 text-stage backdrop-blur"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-[1120px] items-center justify-between px-5">
        <Link href="/" aria-label="오토끼의 시간여행 홈" className="shrink-0">
          <Image src="/brand/otoki-logo.svg" alt="오토끼의 시간여행" width={86} height={58} priority className="h-12 w-auto" />
        </Link>
        <nav className="hidden items-center gap-8 text-[15px] md:flex" aria-label="주요 메뉴">
          {nav.map((n) => (
            <Link key={n.href} href={n.href} className="underline-offset-8 hover:underline">
              {n.label}
            </Link>
          ))}
          <a
            href={`tel:${site.phone}`}
            className="inline-flex items-center gap-2 rounded-md bg-gold px-4 py-2.5 font-semibold text-stage transition-colors hover:bg-paper-deep"
          >
            <Phone size={16} strokeWidth={1.75} aria-hidden /> 공연 문의
          </a>
        </nav>
        <button
          className="grid h-11 w-11 place-items-center md:hidden"
          onClick={() => setOpen((o) => !o)}
          aria-expanded={open}
          aria-label={open ? "메뉴 닫기" : "메뉴 열기"}
        >
          {open ? <X strokeWidth={1.75} /> : <Menu strokeWidth={1.75} />}
        </button>
      </div>
      {open && (
        <nav className="border-t border-line bg-paper px-5 pb-6 md:hidden" aria-label="모바일 메뉴">
          {nav.map((n) => (
            <Link key={n.href} href={n.href} onClick={() => setOpen(false)} className="block border-b border-line py-3.5 text-lg">
              {n.label}
            </Link>
          ))}
          <p className="label mt-5">공연 주제</p>
          <ul className="mt-2 grid grid-cols-2 gap-x-4">
            {programs.map((p) => (
              <li key={p.slug}>
                <Link href={`/program/${p.slug}`} onClick={() => setOpen(false)} className="block py-2 text-[15px] text-muted">
                  {p.title}
                </Link>
              </li>
            ))}
          </ul>
          <a href={`tel:${site.phone}`} className="mt-5 flex items-center justify-center gap-2 rounded-md bg-gold py-3.5 font-semibold">
            <Phone size={18} strokeWidth={1.75} aria-hidden /> 공연 일정 전화 문의
          </a>
        </nav>
      )}
    </header>
  );
}

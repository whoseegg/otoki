"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { programs } from "@/lib/programs";

const nav = [
  { href: "/#story", label: "진행 방식" },
  { href: "/program", label: "프로그램" },
  { href: "/#theater", label: "무빙 씨어터" },
  { href: "/faq", label: "자주 묻는 질문" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 12);
    on();
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-cream/85 shadow-[0_6px_24px_-12px_rgba(43,33,64,.25)] backdrop-blur-md" : ""
      }`}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        <Link href="/" className="flex items-center gap-2" aria-label="오토끼의 시간여행 홈">
          <Image src="/images/logo-face.png" width={40} height={40} alt="" className="h-10 w-10 rounded-full ring-2 ring-ink" priority />
          <span className="font-display text-xl">오토끼의 시간여행</span>
        </Link>
        <nav className="hidden items-center gap-7 text-[15px] font-semibold md:flex" aria-label="주요 메뉴">
          {nav.map((n) => (
            <Link key={n.href} href={n.href} className="hover:text-coral">
              {n.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="rounded-full bg-ink px-5 py-2.5 text-cream transition hover:-translate-y-0.5 hover:bg-coral"
          >
            일정 문의
          </Link>
        </nav>
        <button
          className="grid h-10 w-10 place-items-center rounded-full ring-2 ring-ink md:hidden"
          onClick={() => setOpen((o) => !o)}
          aria-expanded={open}
          aria-label="메뉴 열기"
        >
          <span className="text-lg">{open ? "✕" : "☰"}</span>
        </button>
      </div>
      {open && (
        <nav className="border-t-2 border-ink/10 bg-cream px-4 pb-6 md:hidden" aria-label="모바일 메뉴">
          {nav.map((n) => (
            <Link key={n.href} href={n.href} onClick={() => setOpen(false)} className="block py-3 font-semibold">
              {n.label}
            </Link>
          ))}
          <div className="grid grid-cols-2 gap-2 py-2">
            {programs.map((p) => (
              <Link
                key={p.slug}
                href={`/program/${p.slug}`}
                onClick={() => setOpen(false)}
                className="rounded-xl bg-white px-3 py-2 text-sm ring-1 ring-ink/10"
              >
                {p.emoji} {p.name}
              </Link>
            ))}
          </div>
          <Link
            href="/contact"
            onClick={() => setOpen(false)}
            className="mt-3 block rounded-full bg-ink py-3 text-center font-bold text-cream"
          >
            우리 원 일정 문의하기
          </Link>
        </nav>
      )}
    </header>
  );
}

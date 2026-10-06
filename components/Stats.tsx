"use client";
import { animate, useInView } from "motion/react";
import { useEffect, useRef, useState } from "react";
import { site } from "@/lib/site";

function Counter({ to, suffix }: { to: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const [v, setV] = useState(0);
  useEffect(() => {
    if (!inView) return;
    const c = animate(0, to, { duration: 1.8, ease: [0.22, 1, 0.36, 1], onUpdate: (x) => setV(Math.round(x)) });
    return () => c.stop();
  }, [inView, to]);
  return (
    <span ref={ref} className="tabular-nums">
      {v.toLocaleString("ko-KR")}
      <span className="text-[0.55em]">{suffix}</span>
    </span>
  );
}

export default function Stats() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6" aria-label="숫자로 보는 오토끼의 시간여행">
      <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
        {site.stats.map((s, i) => (
          <div
            key={s.label}
            className={`rounded-3xl p-6 text-center ring-2 ring-ink ${["bg-grape-soft", "bg-sky-soft", "bg-sun-soft", "bg-leaf-soft"][i]}`}
          >
            <p className="font-display text-4xl sm:text-5xl">
              <Counter to={s.value} suffix={s.suffix} />
            </p>
            <p className="mt-2 font-bold text-ink-soft">{s.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

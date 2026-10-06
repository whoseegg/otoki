import Reveal from "./Reveal";

export default function Faq({ items, title = "자주 묻는 질문" }: { items: { q: string; a: string }[]; title?: string }) {
  return (
    <section id="faq" className="mx-auto max-w-3xl px-4 py-24 sm:px-6">
      <Reveal>
        <h2 className="font-display text-center text-3xl sm:text-5xl">{title}</h2>
      </Reveal>
      <div className="mt-10 space-y-3">
        {items.map((f, i) => (
          <Reveal key={f.q} delay={Math.min(i, 5) * 0.05}>
            <details className="group rounded-2xl bg-white ring-2 ring-ink/10 open:ring-ink" open={i === 0}>
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 p-5 text-lg font-bold [&::-webkit-details-marker]:hidden">
                <h3>
                  <span className="mr-2 text-grape">Q.</span>
                  {f.q}
                </h3>
                <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-grape-soft transition group-open:rotate-45 group-open:bg-sun">
                  +
                </span>
              </summary>
              <p className="px-5 pb-5 leading-relaxed text-ink-soft">{f.a}</p>
            </details>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

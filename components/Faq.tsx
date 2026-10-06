import { Plus } from "lucide-react";

export default function Faq({ items, title = "자주 묻는 질문", label = "FAQ" }: { items: { q: string; a: string }[]; title?: string; label?: string }) {
  return (
    <section id="faq" className="mx-auto grid max-w-[1120px] gap-10 px-5 py-24 md:grid-cols-12 md:py-32">
      <div className="md:col-span-4">
        <p className="label">{label}</p>
        <h2 className="font-serif mt-3 text-[1.75rem] leading-snug sm:text-[2.5rem]">{title}</h2>
      </div>
      <div className="md:col-span-8">
        {items.map((f, i) => (
          <details key={f.q} className="group border-t border-line last:border-b" open={i === 0}>
            <summary className="flex cursor-pointer list-none items-start justify-between gap-6 py-5 [&::-webkit-details-marker]:hidden">
              <h3 className="text-[17px] font-semibold leading-relaxed">{f.q}</h3>
              <Plus size={20} strokeWidth={1.75} className="mt-1 shrink-0 text-gold-ink transition-transform group-open:rotate-45" aria-hidden />
            </summary>
            <p className="pb-6 pr-10 leading-[1.8] text-muted">{f.a}</p>
          </details>
        ))}
      </div>
    </section>
  );
}

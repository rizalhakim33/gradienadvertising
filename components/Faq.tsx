import { ChevronDownIcon } from "@/components/icons";

type FaqProps = {
  items: { question: string; answer: string }[];
};

export default function Faq({ items }: FaqProps) {
  return (
    <div className="divide-y divide-ink/10 border-y border-ink/10">
      {items.map((item) => (
        <details key={item.question} className="group">
          <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-5 [&::-webkit-details-marker]:hidden">
            <h3 className="font-display text-xl font-semibold uppercase tracking-wide text-ink sm:text-2xl">
              {item.question}
            </h3>
            <span className="flex h-9 w-9 shrink-0 items-center justify-center border border-ink/15 text-brand transition-transform group-open:rotate-180">
              <ChevronDownIcon className="h-4 w-4" />
            </span>
          </summary>
          <p className="pb-6 leading-relaxed text-ink-soft">{item.answer}</p>
        </details>
      ))}
    </div>
  );
}
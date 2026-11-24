import { ChevronDown, HelpCircle } from "lucide-react";
import { t, type CopyKey, type Lang } from "@/lib/i18n";

const QUESTIONS: Array<{ q: CopyKey; a: CopyKey }> = [
  { q: "faqOneQ", a: "faqOneA" },
  { q: "faqTwoQ", a: "faqTwoA" },
  { q: "faqThreeQ", a: "faqThreeA" },
];

export default function Faq({ lang }: { lang: Lang }) {
  return (
    <section className="bg-cloud py-14 sm:py-20">
      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        <div className="mb-8 text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-1.5 text-xs font-bold text-emerald-700 shadow-sm">
            <HelpCircle className="size-3.5" /> {t(lang, "faqKicker")}
          </span>
          <h2 className="mt-3 text-2xl font-black text-ink sm:text-3xl">{t(lang, "faqTitle")}</h2>
        </div>

        <div className="space-y-3">
          {QUESTIONS.map((item, index) => (
            <details className="group overflow-hidden rounded-2xl border border-slate-200 bg-white" key={item.q} open={index === 0}>
              <summary className="flex cursor-pointer items-center justify-between gap-3 px-5 py-4 text-sm font-black text-ink">
                {t(lang, item.q)}
                <ChevronDown className="size-5 shrink-0 text-emerald-600 transition-transform group-open:rotate-180" />
              </summary>
              <p className="px-5 pb-5 text-sm leading-7 text-slate-600">{t(lang, item.a)}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

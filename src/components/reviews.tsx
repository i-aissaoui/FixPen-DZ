import { BadgeCheck, Quote, Star } from "lucide-react";
import { t, type Lang } from "@/lib/i18n";
import type { CopyKey } from "@/lib/i18n";

const REVIEWS: Array<{ name: string; city: string; review: CopyKey; shade: string }> = [
  { name: "Karim B.", city: "Alger", review: "reviewOne", shade: "#07" },
  { name: "Meriem S.", city: "Oran", review: "reviewTwo", shade: "#08 · #19" },
  { name: "Yacine M.", city: "Sétif", review: "reviewThree", shade: "#09" },
  { name: "Nadia K.", city: "Constantine", review: "reviewFour", shade: "#17" },
];

export default function Reviews({ lang }: { lang: Lang }) {
  return (
    <section className="bg-white py-14 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-8 flex flex-col items-center gap-3 text-center">
          <span className="rounded-full bg-amber-50 px-4 py-1.5 text-xs font-bold text-amber-700">
            {t(lang, "reviewsKicker")}
          </span>
          <h2 className="text-2xl font-black text-ink sm:text-4xl">{t(lang, "reviewsTitle")}</h2>
          <div className="flex items-center gap-2 rounded-full bg-cloud px-4 py-2">
            <div className="flex text-amber-500">
              {Array.from({ length: 5 }).map((_, index) => (
                <Star className="size-4 fill-current" key={index} />
              ))}
            </div>
            <span className="text-sm font-black text-ink">{t(lang, "ratingSummary")}</span>
          </div>
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {REVIEWS.map((item) => (
            <article className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-lg" key={item.name}>
              <Quote className="size-6 text-emerald-200" />
              <p className="mt-3 text-sm leading-7 text-slate-700">{t(lang, item.review)}</p>
              <div className="mt-5 flex items-center justify-between border-t border-slate-100 pt-4">
                <div>
                  <p dir="ltr" className="num text-xs font-black text-ink">{item.name}</p>
                  <p className="text-[10px] text-slate-500">{item.city}</p>
                </div>
                <div className="flex flex-col items-end gap-1">
                  <span className="flex items-center gap-1 text-[10px] font-bold text-emerald-700">
                    <BadgeCheck className="size-3" /> {t(lang, "verified")}
                  </span>
                  <span dir="ltr" className="num rounded-full bg-cloud px-2 py-0.5 text-[10px] font-bold text-slate-600">
                    {item.shade}
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

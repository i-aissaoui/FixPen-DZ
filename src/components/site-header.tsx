"use client";

import { ArrowLeft, Globe2, PenLine, Truck } from "lucide-react";
import { t, type Lang } from "@/lib/i18n";

type Props = {
  lang: Lang;
  onToggleLang: () => void;
  onOrder: () => void;
};

export default function SiteHeader({ lang, onToggleLang, onOrder }: Props) {
  return (
    <header className="sticky top-0 z-40 border-b border-slate-100 bg-white/95 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-3 px-4 sm:px-6 lg:px-8">
        <div className="flex min-w-0 items-center gap-2.5">
          <span className="flex size-10 items-center justify-center rounded-xl bg-emerald-600 text-white shadow-md">
            <PenLine className="size-5" />
          </span>
          <div className="leading-tight">
            <p dir="ltr" className="num text-sm font-black text-ink">{t(lang, "brandName")}</p>
            <p className="hidden text-[10px] font-bold text-emerald-700 sm:block">{t(lang, "brandAr")}</p>
          </div>
        </div>

        <span className="hidden items-center gap-1.5 rounded-full bg-emerald-50 px-3 py-1.5 text-xs font-bold text-emerald-700 md:flex">
          <Truck className="size-3.5" /> {t(lang, "fastDelivery")}
        </span>

        <div className="flex items-center gap-2">
          <button
            aria-label={lang === "ar" ? "Passer en français" : "التبديل للعربية"}
            className="flex shrink-0 items-center gap-1 rounded-xl border border-slate-200 bg-white px-2.5 py-2 text-xs font-bold text-slate-700 transition hover:border-emerald-300 hover:text-emerald-700"
            onClick={onToggleLang}
            type="button"
          >
            <Globe2 className="size-3.5" />
            <span dir="ltr">{lang === "ar" ? "FR" : "AR"}</span>
          </button>
          <button
            className="flex shrink-0 items-center gap-1.5 rounded-xl bg-emerald-600 px-3 py-2.5 text-xs font-black text-white transition hover:bg-emerald-700 sm:px-5 sm:text-sm"
            onClick={onOrder}
            type="button"
          >
            <span>{t(lang, "orderNow")}</span>
            <ArrowLeft className="size-4" />
          </button>
        </div>
      </div>
    </header>
  );
}

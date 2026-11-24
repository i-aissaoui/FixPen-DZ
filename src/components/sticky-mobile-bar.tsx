"use client";

import { ArrowLeft, ShoppingBag } from "lucide-react";
import { t, type Lang } from "@/lib/i18n";
import { formatDA } from "@/lib/pricing";

type Props = {
  lang: Lang;
  total: number;
  penCount: number;
  onOrder: () => void;
};

export default function StickyMobileBar({ lang, total, penCount, onOrder }: Props) {
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 border-t border-slate-200 bg-white/95 px-4 pb-[calc(env(safe-area-inset-bottom)+0.6rem)] pt-2.5 shadow-[0_-10px_30px_-20px_rgba(15,23,42,0.5)] backdrop-blur lg:hidden">
      <div className="flex items-center gap-3">
        <span className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-emerald-50 text-emerald-700">
          <ShoppingBag className="size-5" />
        </span>
        <div className="min-w-0 flex-1">
          <p dir="ltr" className="num text-base font-black leading-5 text-ink">{formatDA(total, lang)}</p>
          <p className="text-[10px] font-bold text-slate-500">
            {penCount} {lang === "ar" ? "قلم · الدفع عند الاستلام" : "pen(s) · Cash on Delivery"}
          </p>
        </div>
        <button
          className="flex items-center gap-1.5 rounded-xl bg-emerald-600 px-4 py-3 text-xs font-black text-white transition hover:bg-emerald-700"
          onClick={onOrder}
          type="button"
        >
          {t(lang, "stickyOrder")} <ArrowLeft className="size-3.5" />
        </button>
      </div>
    </div>
  );
}

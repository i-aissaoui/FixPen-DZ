"use client";

import { CheckCircle2, Printer, X } from "lucide-react";
import { getShade } from "@/lib/colors";
import { t, type Lang } from "@/lib/i18n";
import { formatDA } from "@/lib/pricing";
import type { Order } from "@/lib/types";

type Props = {
  lang: Lang;
  order: Order;
  onClose: () => void;
};

export default function Confirmation({ lang, order, onClose }: Props) {
  return (
    <div className="fixed inset-0 z-[70] flex items-center justify-center bg-slate-950/70 p-4 backdrop-blur-sm">
      <div className="relative max-h-[92vh] w-full max-w-lg overflow-y-auto rounded-3xl bg-white p-6 text-center shadow-2xl sm:p-9">
        <button
          aria-label="close"
          className="absolute left-4 top-4 flex size-8 items-center justify-center rounded-full bg-cloud text-slate-500 transition hover:bg-slate-200"
          onClick={onClose}
          type="button"
        >
          <X className="size-4" />
        </button>

        <span className="mx-auto flex size-16 items-center justify-center rounded-full bg-emerald-100 text-emerald-700">
          <CheckCircle2 className="size-9" />
        </span>
        <h2 className="mt-4 text-2xl font-black text-ink">{t(lang, "confirmationTitle")}</h2>
        <p className="mx-auto mt-2 max-w-sm text-sm leading-7 text-slate-600">
          {t(lang, "confirmationMessage")}
        </p>

        <div className="mt-6 rounded-2xl border border-slate-200 bg-cloud p-5 text-right">
          <div className="flex items-center justify-between gap-3 border-b border-dashed border-slate-200 pb-3">
            <span className="text-xs font-bold text-slate-500">{t(lang, "orderNumber")}</span>
            <span dir="ltr" className="num text-sm font-black text-ink">{order.id}</span>
          </div>
          <div className="py-3">
            <p className="mb-2 text-xs font-bold text-slate-500">{t(lang, "chosenColors")}</p>
            <div className="flex flex-wrap gap-2">
              {order.shadeIds.map((id, index) => {
                const shade = getShade(id);
                return (
                  <span className="flex items-center gap-2 rounded-full bg-white px-2.5 py-1.5 shadow-sm" key={`${id}-${index}`}>
                    <span
                      className="size-5 rounded-full"
                      style={{ backgroundColor: shade?.hex ?? "#E2E8F0" }}
                    />
                    <span dir="ltr" className="num text-xs font-bold text-slate-800">{shade?.code ?? id}</span>
                  </span>
                );
              })}
            </div>
          </div>
          <div className="flex items-center justify-between gap-3 border-t border-dashed border-slate-200 pt-3">
            <span className="text-xs font-bold text-slate-500">{t(lang, "total")}</span>
            <span dir="ltr" className="num text-lg font-black text-emerald-700">{formatDA(order.grandTotal, lang)}</span>
          </div>
        </div>

        <div className="mt-6 flex flex-col gap-2 sm:flex-row">
          <button
            className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-emerald-600 px-4 py-3 text-sm font-black text-white transition hover:bg-emerald-700"
            onClick={onClose}
            type="button"
          >
            <CheckCircle2 className="size-4" /> {t(lang, "newOrder")}
          </button>
          <button
            className="flex items-center justify-center gap-2 rounded-xl border border-slate-200 px-4 py-3 text-sm font-bold text-slate-700 transition hover:bg-cloud"
            onClick={() => window.print()}
            type="button"
          >
            <Printer className="size-4" /> {t(lang, "printing")}
          </button>
        </div>
      </div>
    </div>
  );
}

"use client";

import { Check, Minus, PackageX, Plus, Sparkles } from "lucide-react";
import { isShadeAvailable, type Shade } from "@/lib/colors";
import type { Lang } from "@/lib/i18n";
import { t } from "@/lib/i18n";
import { MAX_PENS } from "@/lib/pricing";
import type { Selection } from "@/lib/selection";
import { getSelectionCount } from "@/lib/selection";
import type { StockMap } from "@/lib/types";

type Props = {
  lang: Lang;
  shades: Shade[];
  selection: Selection;
  previewId: string | null;
  stock: StockMap;
  activeCount: number;
  onPreview: (id: string) => void;
  onChangeQuantity: (id: string, delta: number) => void;
};

export default function ShadeSelector({
  lang,
  shades,
  selection,
  previewId,
  stock,
  activeCount,
  onPreview,
  onChangeQuantity,
}: Props) {
  const preview = shades.find((shade) => shade.id === previewId && isShadeAvailable(shade, stock))
    ?? shades.find((shade) => isShadeAvailable(shade, stock));
  const totalSelected = getSelectionCount(selection);

  return (
    <section id="shades" className="scroll-mt-28 bg-cloud py-14 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-8 flex flex-col gap-4 text-center">
          <span className="mx-auto inline-flex items-center gap-2 rounded-full bg-emerald-100 px-4 py-1.5 text-xs font-bold text-emerald-800">
            <Sparkles className="size-3.5" /> {t(lang, "shadeKicker")}
          </span>
          <h2 className="text-2xl font-black leading-snug text-ink sm:text-4xl">{t(lang, "shadeTitle")}</h2>
          <p className="mx-auto max-w-2xl text-sm leading-7 text-slate-600 sm:text-base">{t(lang, "shadeSubtitle")}</p>
          <div className="flex flex-wrap items-center justify-center gap-2">
            <span className="rounded-full bg-white px-3 py-1.5 text-xs font-bold text-slate-700 shadow-sm">
              {t(lang, "shadeCountNote")}: <span dir="ltr" className="num text-emerald-700">{activeCount}</span>
            </span>
            <span className="rounded-full bg-emerald-50 px-3 py-1.5 text-xs font-bold text-emerald-700">
              {t(lang, "multiHint")} · <span dir="ltr" className="num">{totalSelected}/{MAX_PENS}</span>
            </span>
          </div>
        </div>

        <div className="grid gap-6 lg:grid-cols-[1fr_360px]">
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
            {shades.map((shade) => {
              const available = isShadeAvailable(shade, stock);
              const quantity = selection[shade.id] ?? 0;
              const isPreview = preview?.id === shade.id;

              return (
                <div
                  aria-label={`${shade.code} ${lang === "ar" ? shade.nameAr : shade.nameFr}`}
                  className={`group relative flex min-h-44 flex-col rounded-2xl border bg-white p-3 text-right transition-all duration-200 sm:min-h-48 ${
                    quantity > 0
                      ? "border-emerald-500 ring-2 ring-emerald-200"
                      : isPreview
                        ? "border-slate-400 shadow-md"
                        : "border-slate-200 hover:-translate-y-0.5 hover:border-emerald-300 hover:shadow-lg"
                  } ${available ? "cursor-pointer" : "cursor-not-allowed opacity-55"}`}
                  key={shade.id}
                  onClick={() => available && onPreview(shade.id)}
                  onKeyDown={(event) => {
                    if (available && (event.key === "Enter" || event.key === " ")) {
                      event.preventDefault();
                      onPreview(shade.id);
                    }
                  }}
                  role="button"
                  tabIndex={available ? 0 : -1}
                >
                  <div className="flex items-start justify-between gap-1">
                    <span dir="ltr" className="num rounded-md bg-slate-100 px-1.5 py-1 text-[10px] font-bold text-slate-700">
                      {shade.code}
                    </span>
                    {quantity > 0 && (
                      <span dir="ltr" className="flex min-w-6 items-center justify-center rounded-full bg-emerald-600 px-1.5 py-0.5 text-[11px] font-black text-white">
                        ×{quantity}
                      </span>
                    )}
                  </div>

                  <div className="mx-auto my-3 flex size-16 items-center justify-center sm:size-20">
                    <span className="block size-full rounded-full border border-slate-200" style={{ backgroundColor: shade.hex }} />
                  </div>

                  <p className="text-xs font-bold leading-5 text-slate-800">
                    {lang === "ar" ? shade.nameAr : shade.nameFr}
                  </p>
                  <p dir="ltr" className="num mt-1 truncate text-left text-[10px] text-slate-400">
                    {shade.hex}
                  </p>

                  <div className="mt-auto flex items-center justify-between gap-2 pt-2">
                    <span
                      className={`inline-flex items-center gap-1 rounded-full px-2 py-1 text-[10px] font-bold ${
                        available ? "bg-emerald-50 text-emerald-700" : "bg-slate-100 text-slate-500"
                      }`}
                    >
                      {available ? <Check className="size-3" /> : <PackageX className="size-3" />}
                      {available ? t(lang, "inStock") : t(lang, "soldOut")}
                    </span>
                    {available && (
                      <div onClick={(event) => event.stopPropagation()}>
                        <QuantityControl lang={lang} onChange={(delta) => onChangeQuantity(shade.id, delta)} quantity={quantity} />
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>

          <div className="lg:sticky lg:top-28 lg:self-start">
            {preview && (
              <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-[0_20px_60px_-30px_rgba(15,23,42,0.4)]">
                <div className="relative h-36 overflow-hidden" style={{ backgroundColor: preview.hex }}>
                  <span dir="ltr" className="num absolute left-3 top-3 rounded-lg bg-slate-950 px-2.5 py-1 text-xs font-bold text-white">
                    {preview.code} · {preview.hex}
                  </span>
                </div>
                <div className="p-5">
                  <p className="text-xs font-bold text-emerald-700">{t(lang, "previewTitle")}</p>
                  <h3 className="mt-2 text-base font-black leading-7 text-ink">
                    {lang === "ar" ? preview.nameAr : preview.nameFr}
                  </h3>
                  <p dir="ltr" className="num mt-1 text-left text-xs text-slate-500">{preview.nameFr}</p>

                  <div className="mt-4 rounded-2xl bg-cloud p-3">
                    <p className="text-xs font-bold text-slate-500">{t(lang, "previewSurface")}</p>
                    <p className="mt-1 text-sm font-semibold leading-6 text-slate-800">
                      {lang === "ar" ? preview.surfacesAr : preview.surfacesFr}
                    </p>
                  </div>

                  <div className="mt-5 flex items-center justify-between gap-3 rounded-2xl bg-cloud px-4 py-3">
                    <span className="text-xs font-bold text-slate-600">{t(lang, "quantity")}</span>
                    <QuantityControl
                      lang={lang}
                      onChange={(delta) => onChangeQuantity(preview.id, delta)}
                      quantity={selection[preview.id] ?? 0}
                    />
                  </div>
                  {(selection[preview.id] ?? 0) > 0 && (
                    <p className="mt-2 text-center text-[11px] font-bold text-emerald-700">{t(lang, "addedColor")}</p>
                  )}
                  {totalSelected >= MAX_PENS && (
                    <p className="mt-2 text-center text-[11px] font-bold text-amber-600">{t(lang, "maxPens")}</p>
                  )}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

function QuantityControl({
  quantity,
  onChange,
  lang,
}: {
  quantity: number;
  onChange: (delta: number) => void;
  lang: Lang;
}) {
  if (quantity === 0) {
    return (
      <button
        aria-label={t(lang, "addColor")}
        className="flex size-7 items-center justify-center rounded-full bg-emerald-600 text-white transition hover:bg-emerald-700"
        onClick={() => onChange(1)}
        type="button"
      >
        <Plus className="size-3.5" />
      </button>
    );
  }

  return (
    <div className="flex items-center gap-1.5" dir="ltr">
      <button
        aria-label={t(lang, "decrease")}
        className="flex size-7 items-center justify-center rounded-full bg-slate-200 text-slate-700 transition hover:bg-slate-300"
        onClick={() => onChange(-1)}
        type="button"
      >
        <Minus className="size-3.5" />
      </button>
      <span className="num min-w-4 text-center text-sm font-black text-slate-900">{quantity}</span>
      <button
        aria-label={t(lang, "increase")}
        className="flex size-7 items-center justify-center rounded-full bg-emerald-600 text-white transition hover:bg-emerald-700"
        onClick={() => onChange(1)}
        type="button"
      >
        <Plus className="size-3.5" />
      </button>
    </div>
  );
}

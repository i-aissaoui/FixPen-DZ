"use client";

import { Building2, Check, CircleAlert, Home, LoaderCircle, MapPin, PackageCheck, Phone, Trash2, UserRound } from "lucide-react";
import { ACTIVE_SHADES, isShadeAvailable } from "@/lib/colors";
import { getCommunes, WILAYAS, getWilayaLabel } from "@/lib/algeria";
import { t, type Lang } from "@/lib/i18n";
import { calculateTotals, formatDA, getProductSubtotal, MAX_PENS } from "@/lib/pricing";
import type { SelectedLine } from "@/lib/selection";
import type { OrderDraft, StockMap, StoreSettings } from "@/lib/types";

type Totals = ReturnType<typeof calculateTotals>;

type Props = {
  lang: Lang;
  draft: OrderDraft;
  selectedLines: SelectedLine[];
  stock: StockMap;
  settings: StoreSettings;
  totals: Totals;
  error: string;
  submitting: boolean;
  onDraftChange: (patch: Partial<OrderDraft>) => void;
  onChangeQuantity: (id: string, delta: number) => void;
  onRemove: (id: string) => void;
  onQuickAdd: (id: string) => void;
  onInitiateCheckout: () => void;
  onSubmit: () => void;
};

export default function OrderForm({
  lang,
  draft,
  selectedLines,
  stock,
  settings,
  totals,
  error,
  submitting,
  onDraftChange,
  onChangeQuantity,
  onRemove,
  onQuickAdd,
  onInitiateCheckout,
  onSubmit,
}: Props) {
  const communes = getCommunes(draft.wilayaId);
  const penCount = selectedLines.reduce((total, line) => total + line.quantity, 0);
  const unselected = ACTIVE_SHADES.filter(
    (shade) => !selectedLines.some((line) => line.shade.id === shade.id) && isShadeAvailable(shade, stock),
  );
  const tariff = settings.tariffs[draft.wilayaId] ?? { stopDesk: 400, home: 600 };
  const tierLabels = [1, 2, 3, 4, 5].map((count) => {
    const price = formatDA(getProductSubtotal(count, settings.prices), lang);
    if (lang === "ar") {
      const noun = count === 1 ? "قلم واحد" : count === 2 ? "قلمان" : `${count} أقلام`;
      return `${noun}: ${price}`;
    }
    return `${count} ${count === 1 ? "pen" : "pens"}: ${price}`;
  });
  const savedFor = (count: number) =>
    formatDA(Math.max(0, count * settings.prices.one - getProductSubtotal(count, settings.prices)), lang);
  const tierBadges = [
    undefined,
    lang === "ar" ? `وفر ${savedFor(2)}` : `-${savedFor(2)}`,
    t(lang, "freeBadge"),
    lang === "ar" ? `وفر ${savedFor(4)}` : `-${savedFor(4)}`,
    lang === "ar" ? "أفضل سعر" : "BEST PRICE",
  ];

  return (
    <section id="order" className="scroll-mt-28 bg-cloud py-14 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-8 text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-emerald-100 px-4 py-1.5 text-xs font-bold text-emerald-800">
            <PackageCheck className="size-3.5" /> {t(lang, "formKicker")}
          </span>
          <h2 className="mt-3 text-2xl font-black text-ink sm:text-4xl">{t(lang, "formTitle")}</h2>
          <p className="mt-2 text-sm text-slate-600 sm:text-base">{t(lang, "formSubtitle")}</p>
        </div>

        <div className="grid items-start gap-6 lg:grid-cols-[1.25fr_0.75fr]">
          <form
            className="rounded-3xl border border-slate-200 bg-white p-4 shadow-[0_20px_60px_-35px_rgba(15,23,42,0.4)] sm:p-7"
            onSubmit={(event) => {
              event.preventDefault();
              onSubmit();
            }}
          >
            <div className="mb-6 grid grid-cols-2 gap-2 sm:grid-cols-5 sm:gap-3">
              {tierLabels.map((label, index) => (
                <TierCard
                  active={penCount === index + 1}
                  badge={tierBadges[index]}
                  key={label}
                  label={label}
                />
              ))}
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <Field label={t(lang, "fullName")} icon={<UserRound className="size-4" />}>
                <input
                  autoComplete="name"
                  className="w-full bg-transparent text-sm font-semibold text-ink outline-none placeholder:text-slate-400"
                  onFocus={onInitiateCheckout}
                  onChange={(event) => onDraftChange({ fullName: event.target.value })}
                  placeholder={t(lang, "fullNamePlaceholder")}
                  required
                  type="text"
                  value={draft.fullName}
                />
              </Field>

              <Field label={t(lang, "phone")} icon={<Phone className="size-4" />}>
                <input
                  autoComplete="tel"
                  className="num w-full bg-transparent text-right text-sm font-semibold text-ink outline-none placeholder:text-slate-400"
                  dir="ltr"
                  inputMode="numeric"
                  maxLength={10}
                  onFocus={onInitiateCheckout}
                  onChange={(event) => onDraftChange({ phone: event.target.value.replace(/\D/g, "").slice(0, 10) })}
                  pattern="0[567][0-9]{8}"
                  placeholder={t(lang, "phonePlaceholder")}
                  required
                  type="tel"
                  value={draft.phone}
                />
              </Field>

              <Field label={t(lang, "wilaya")} icon={<MapPin className="size-4" />}>
                <select
                  className="w-full bg-transparent text-sm font-semibold text-ink outline-none"
                  required
                  onChange={(event) => onDraftChange({ wilayaId: event.target.value, commune: "" })}
                  value={draft.wilayaId}
                >
                  <option value="">{t(lang, "wilayaPlaceholder")}</option>
                  {WILAYAS.map((wilaya) => (
                    <option key={wilaya.id} value={wilaya.id}>
                      {getWilayaLabel(wilaya.id, lang)}
                    </option>
                  ))}
                </select>
              </Field>

              <Field label={t(lang, "commune")} icon={<MapPin className="size-4" />}>
                <input
                  className="w-full bg-transparent text-sm font-semibold text-ink outline-none placeholder:text-slate-400"
                  disabled={!draft.wilayaId}
                  list="communes-list"
                  onChange={(event) => onDraftChange({ commune: event.target.value })}
                  placeholder={t(lang, "communePlaceholder")}
                  required
                  type="text"
                  value={draft.commune}
                />
                <datalist id="communes-list">
                  {communes.map((commune) => (
                    <option key={commune.id} value={lang === "ar" ? commune.nameAr : commune.nameFr} />
                  ))}
                </datalist>
              </Field>
            </div>

            <p className="mt-2 text-[11px] font-semibold text-slate-500">
              {draft.wilayaId
                ? lang === "ar"
                  ? `${communes.length} بلدية متوفرة في ${getWilayaLabel(draft.wilayaId, lang)}`
                  : `${communes.length} communes in ${getWilayaLabel(draft.wilayaId, lang)}`
                : t(lang, "phoneHint")}
            </p>

            <div className="mt-6">
              <p className="mb-3 text-sm font-black text-ink">{t(lang, "deliveryType")}</p>
              <div className="grid gap-3 sm:grid-cols-2">
                <DeliveryCard
                  active={draft.deliveryType === "stopDesk"}
                  badge={t(lang, "mostPopular")}
                  fee={totals.hasFreeStopDesk ? 0 : tariff.stopDesk}
                  icon={<Building2 className="size-5" />}
                  lang={lang}
                  note={t(lang, "stopDeskNote")}
                  title={t(lang, "stopDesk")}
                  onClick={() => onDraftChange({ deliveryType: "stopDesk" })}
                />
                <DeliveryCard
                  active={draft.deliveryType === "home"}
                  fee={tariff.home}
                  icon={<Home className="size-5" />}
                  lang={lang}
                  note={t(lang, "homeNote")}
                  title={t(lang, "home")}
                  onClick={() => onDraftChange({ deliveryType: "home" })}
                />
              </div>
            </div>

            <div className="mt-6 rounded-2xl border border-slate-200 bg-cloud/70 p-4">
              <div className="mb-3 flex items-center justify-between gap-2">
                <p className="text-sm font-black text-ink">{t(lang, "selectedColors")}</p>
                <span dir="ltr" className="num rounded-full bg-white px-2.5 py-1 text-xs font-bold text-emerald-700 shadow-sm">
                  {penCount}/{MAX_PENS}
                </span>
              </div>

              {selectedLines.length === 0 ? (
                <p className="rounded-xl border border-dashed border-slate-300 bg-white p-3 text-xs leading-6 text-slate-500">
                  {t(lang, "noColors")}
                </p>
              ) : (
                <div className="flex flex-wrap gap-2">
                  {selectedLines.map((line) => (
                    <span className="flex items-center gap-2 rounded-full border border-slate-200 bg-white py-1 pl-1 pr-2 shadow-sm" key={line.shade.id}>
                      <span
                        className="size-7 rounded-full border border-slate-200"
                        style={{ backgroundColor: line.shade.hex }}
                      />
                      <span dir="ltr" className="num text-xs font-bold text-slate-800">{line.shade.code}</span>
                      <span className="flex items-center gap-1" dir="ltr">
                        <button
                          aria-label={t(lang, "decrease")}
                          className="flex size-5 items-center justify-center rounded-full bg-slate-100 text-slate-600 transition hover:bg-slate-200"
                          onClick={() => onChangeQuantity(line.shade.id, -1)}
                          type="button"
                        >
                          −
                        </button>
                        <span className="num min-w-3 text-center text-xs font-black text-emerald-700">{line.quantity}</span>
                        <button
                          aria-label={t(lang, "increase")}
                          className="flex size-5 items-center justify-center rounded-full bg-emerald-100 text-emerald-700 transition hover:bg-emerald-200 disabled:opacity-40"
                          disabled={penCount >= MAX_PENS}
                          onClick={() => onChangeQuantity(line.shade.id, 1)}
                          type="button"
                        >
                          +
                        </button>
                      </span>
                      <button
                        aria-label={`${t(lang, "remove")} ${line.shade.code}`}
                        className="flex size-5 items-center justify-center rounded-full bg-slate-100 text-slate-500 transition hover:bg-rose-100 hover:text-rose-600"
                        onClick={() => onRemove(line.shade.id)}
                        type="button"
                      >
                        <Trash2 className="size-3" />
                      </button>
                    </span>
                  ))}
                </div>
              )}

              {penCount >= MAX_PENS && (
                <p className="mt-3 text-center text-[11px] font-bold text-amber-600">{t(lang, "maxPens")}</p>
              )}
              {unselected.length > 0 && penCount < MAX_PENS && (
                <div className="mt-3">
                  <label className="mb-1 block text-[11px] font-bold text-slate-500" htmlFor="quick-add">
                    {t(lang, "quickAdd")}
                  </label>
                  <select
                    className="w-full rounded-xl border border-slate-200 bg-white px-3 py-2 text-xs font-semibold text-slate-700 outline-none focus:border-emerald-500"
                    id="quick-add"
                    onChange={(event) => {
                      if (event.target.value) onQuickAdd(event.target.value);
                      event.target.value = "";
                    }}
                    value=""
                  >
                    <option value="">{t(lang, "quickAddPlaceholder")}</option>
                    {unselected.map((shade) => (
                      <option key={shade.id} value={shade.id}>
                        {shade.code} · {lang === "ar" ? shade.nameAr : shade.nameFr}
                      </option>
                    ))}
                  </select>
                </div>
              )}
            </div>

            <label className="mt-4 flex cursor-pointer items-start gap-3 rounded-2xl border border-emerald-200 bg-emerald-50/60 p-3">
              <input
                checked={draft.needHelp}
                className="mt-0.5 size-4 accent-emerald-600"
                onChange={(event) => onDraftChange({ needHelp: event.target.checked })}
                type="checkbox"
              />
              <span>
                <span className="block text-sm font-bold text-emerald-900">{t(lang, "needHelp")}</span>
                <span className="mt-0.5 block text-xs leading-5 text-emerald-800">{t(lang, "needHelpHint")}</span>
              </span>
            </label>

            <div className="mt-5">
              <label className="mb-2 block text-sm font-black text-ink" htmlFor="order-notes">
                {t(lang, "orderNote")}
              </label>
              <textarea
                  className="w-full resize-none rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm text-ink outline-none focus:border-emerald-500"
                  id="order-notes"
                  onChange={(event) => onDraftChange({ notes: event.target.value })}
                  placeholder={t(lang, "orderNotePlaceholder")}
                  rows={2}
                  value={draft.notes}
              />
            </div>

            {error && (
              <p className="mt-4 flex items-center gap-2 rounded-xl bg-rose-50 px-3 py-2 text-sm font-bold text-rose-700">
                <CircleAlert className="size-4" /> {error}
              </p>
            )}

            <button
              className="pulse-cta mt-6 flex w-full items-center justify-center gap-2 rounded-2xl bg-emerald-600 px-4 py-4 text-sm font-black text-white transition hover:bg-emerald-700 disabled:cursor-not-allowed disabled:opacity-70 sm:text-base"
              disabled={submitting}
              type="submit"
            >
              {submitting ? <LoaderCircle className="size-5 animate-spin" /> : <Check className="size-5" />}
              {submitting ? t(lang, "submitting") : t(lang, "submit")}
            </button>
            <p className="mt-3 text-center text-[11px] font-bold text-slate-500">{t(lang, "codBadge")}</p>
          </form>

          <aside className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm lg:sticky lg:top-28">
            <p className="text-sm font-black text-ink">{lang === "ar" ? "ملخص الطلبية" : "Order summary"}</p>
            <div className="mt-5 space-y-3">
              <SummaryRow label={t(lang, "productSubtotal")} value={formatDA(totals.productSubtotal, lang)} />
              <SummaryRow
                label={t(lang, "deliveryFee")}
                value={totals.deliveryFee === 0 ? t(lang, "free") : formatDA(totals.deliveryFee, lang)}
                accent={totals.deliveryFee === 0}
              />
              {totals.savedVsSingle > 0 && (
                <SummaryRow
                  label={lang === "ar" ? "وفّرت" : "You save"}
                  value={formatDA(totals.savedVsSingle, lang)}
                  accent
                />
              )}
            </div>
            <div className="mt-5 border-t border-dashed border-slate-200 pt-5">
              <p className="text-xs font-bold text-slate-500">{t(lang, "grandTotal")}</p>
              <p dir="ltr" className="num mt-1 text-left text-3xl font-black text-emerald-700">
                {formatDA(totals.grandTotal, lang)}
              </p>
            </div>
            <div className="mt-5 space-y-2 rounded-2xl bg-cloud p-3 text-xs font-semibold text-slate-600">
              <p className="flex items-center gap-2"><Check className="size-3.5 text-emerald-600" /> {t(lang, "trustFour")}</p>
              <p className="flex items-center gap-2"><Check className="size-3.5 text-emerald-600" /> {t(lang, "fastDelivery")}</p>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}

function Field({ label, icon, children }: { label: string; icon: React.ReactNode; children: React.ReactNode }) {
  return (
    <label className="block rounded-xl border border-slate-200 bg-white px-3 py-2.5 transition focus-within:border-emerald-500 focus-within:ring-2 focus-within:ring-emerald-100">
      <span className="mb-1 flex items-center gap-1.5 text-[11px] font-bold text-slate-500">
        {icon} {label}
      </span>
      {children}
    </label>
  );
}

function TierCard({ active, badge, label }: { active: boolean; badge?: string; label: string }) {
  return (
    <div className={`relative rounded-2xl border p-3 text-center ${active ? "border-emerald-500 bg-emerald-50" : "border-slate-200 bg-white"}`}>
      {badge && (
        <span className="absolute -top-2 right-2 rounded-full bg-amber-500 px-2 py-0.5 text-[9px] font-black text-white">
          {badge}
        </span>
      )}
      <p className="text-[11px] font-bold leading-5 text-slate-700">{label}</p>
    </div>
  );
}

function DeliveryCard({
  active,
  badge,
  fee,
  icon,
  lang,
  note,
  title,
  onClick,
}: {
  active: boolean;
  badge?: string;
  fee: number;
  icon: React.ReactNode;
  lang: Lang;
  note: string;
  title: string;
  onClick: () => void;
}) {
  return (
    <button
      className={`relative rounded-2xl border p-4 text-right transition ${
        active ? "border-emerald-600 bg-emerald-50/70 ring-2 ring-emerald-100" : "border-slate-200 bg-white hover:border-emerald-300"
      }`}
      onClick={onClick}
      type="button"
    >
      {badge && (
        <span className="absolute -top-2 left-3 rounded-full bg-orange-500 px-2 py-0.5 text-[9px] font-black text-white">
          {badge}
        </span>
      )}
      <div className="flex items-start gap-3">
        <span
          className={`flex size-10 shrink-0 items-center justify-center rounded-xl ${active ? "bg-emerald-600 text-white" : "bg-cloud text-slate-600"}`}
        >
          {icon}
        </span>
        <div className="min-w-0">
          <p className="text-sm font-black text-ink">{title}</p>
          <p className="mt-0.5 truncate text-[10px] text-slate-500">{note}</p>
        </div>
      </div>
      <p dir="ltr" className="num mt-3 text-left text-sm font-black text-emerald-700">
        {fee === 0 ? t(lang, "free") : formatDA(fee, lang)}
      </p>
    </button>
  );
}

function SummaryRow({ label, value, accent }: { label: string; value: string; accent?: boolean }) {
  return (
    <div className="flex items-center justify-between gap-3 text-sm">
      <span className="text-slate-600">{label}</span>
      <span dir="ltr" className={`num font-bold ${accent ? "text-emerald-700" : "text-ink"}`}>{value}</span>
    </div>
  );
}

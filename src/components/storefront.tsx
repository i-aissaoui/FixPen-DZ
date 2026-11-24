"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { ArrowLeft, ShieldCheck, Sparkles, Star, Truck } from "lucide-react";
import Confirmation from "./confirmation";
import HeroMedia from "./hero-media";
import OrderForm from "./order-form";
import Reviews from "./reviews";
import ShadeSelector from "./shade-selector";
import SiteFooter from "./site-footer";
import SiteHeader from "./site-header";
import StickyMobileBar from "./sticky-mobile-bar";
import { getWilaya } from "@/lib/algeria";
import { ACTIVE_SHADES, getShade, isShadeAvailable } from "@/lib/colors";
import { t, type Lang } from "@/lib/i18n";
import { pixelEvents } from "@/lib/meta-pixel";
import { calculateTotals, DEFAULT_SETTINGS, getProductSubtotal } from "@/lib/pricing";
import {
  buildSelectedLines,
  changeSelection,
  expandSelection,
  getSelectionCount,
  type Selection,
} from "@/lib/selection";
import { loadLang, loadSettings, loadStock, saveLang, saveOrder } from "@/lib/storage";
import { createOrderId, type Order, type OrderDraft, type StockMap, type StoreSettings } from "@/lib/types";

const INITIAL_DRAFT: OrderDraft = {
  fullName: "",
  phone: "",
  wilayaId: "",
  commune: "",
  deliveryType: "stopDesk",
  needHelp: false,
  notes: "",
};

export default function Storefront() {
  const [lang, setLang] = useState<Lang>("ar");
  const [hydrated, setHydrated] = useState(false);
  const [selection, setSelection] = useState<Selection>({});
  const [previewId, setPreviewId] = useState("01");
  const [stock, setStock] = useState<StockMap>({});
  const [settings, setSettings] = useState<StoreSettings>(DEFAULT_SETTINGS);
  const [draft, setDraft] = useState<OrderDraft>(INITIAL_DRAFT);
  const [error, setError] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [confirmation, setConfirmation] = useState<Order | null>(null);
  const checkoutTracked = useRef(false);

  useEffect(() => {
    queueMicrotask(() => {
      setLang(loadLang());
      setStock(loadStock());
      setSettings(loadSettings());
      setHydrated(true);
    });
    pixelEvents.pageView();
  }, []);

  useEffect(() => {
    if (!hydrated) return;
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
    saveLang(lang);
  }, [hydrated, lang]);

  const selectedLines = useMemo(
    () =>
      buildSelectedLines(selection).filter((line) => isShadeAvailable(line.shade, stock)),
    [selection, stock],
  );
  const penCount = selectedLines.reduce((total, line) => total + line.quantity, 0);
  const expanded = useMemo(() => expandSelection(selection), [selection]);

  const activeCount = useMemo(
    () => ACTIVE_SHADES.filter((shade) => isShadeAvailable(shade, stock)).length,
    [stock],
  );

  const totals = useMemo(
    () =>
      calculateTotals({
        penCount,
        wilayaId: draft.wilayaId || "16",
        deliveryType: draft.deliveryType,
        settings,
      }),
    [draft.deliveryType, draft.wilayaId, penCount, settings],
  );

  function scrollTo(id: string) {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  function handlePreview(id: string) {
    const shade = getShade(id);
    if (!shade || !isShadeAvailable(shade, stock)) return;
    setPreviewId(id);
    pixelEvents.viewContent([shade.code]);
  }

  function handleChangeQuantity(id: string, delta: number) {
    const shade = getShade(id);
    if (!shade || !isShadeAvailable(shade, stock)) return;
    const next = changeSelection(selection, id, delta);
    setPreviewId(id);
    if (!next) {
      setError(t(lang, "maxPens"));
      return;
    }
    setSelection(next);
    setError("");
    if (delta > 0) {
      const nextExpanded = expandSelection(next);
      pixelEvents.addToCart(
        nextExpanded.codes,
        getProductSubtotal(getSelectionCount(next), settings.prices),
      );
    }
  }

  function handleQuickAdd(id: string) {
    handleChangeQuantity(id, 1);
  }

  function handleInitiateCheckout() {
    if (checkoutTracked.current) return;
    checkoutTracked.current = true;
    pixelEvents.initiateCheckout(expanded.codes, totals.productSubtotal);
  }

  function handleSubmit() {
    setError("");

    if (penCount === 0 || draft.fullName.trim().length < 2 || draft.commune.trim().length < 2) {
      setError(t(lang, "validationError"));
      scrollTo("order");
      return;
    }

    if (!/^0[567]\d{8}$/.test(draft.phone)) {
      setError(t(lang, "phoneError"));
      return;
    }

    if (!draft.wilayaId) {
      setError(t(lang, "validationError"));
      return;
    }

    const orderSelection = Object.fromEntries(
      selectedLines.map((line) => [line.shade.id, line.quantity]),
    );
    const orderExpanded = expandSelection(orderSelection);

    const order: Order = {
      id: createOrderId(),
      createdAt: new Date().toISOString(),
      fullName: draft.fullName.trim(),
      phone: draft.phone,
      wilayaId: draft.wilayaId,
      wilayaName: getWilaya(draft.wilayaId)?.nameFr ?? draft.wilayaId,
      commune: draft.commune.trim(),
      deliveryType: draft.deliveryType,
      shadeIds: orderExpanded.ids,
      shadeCodes: orderExpanded.codes,
      shadeQuantities: selectedLines.map((line) => ({
        id: line.shade.id,
        code: line.shade.code,
        quantity: line.quantity,
      })),
      penCount,
      productSubtotal: totals.productSubtotal,
      deliveryFee: totals.deliveryFee,
      grandTotal: totals.grandTotal,
      status: "new",
      needHelp: draft.needHelp,
      notes: draft.notes.trim() || undefined,
    };

    setSubmitting(true);
    saveOrder(order);
    pixelEvents.purchase(order.id, order.shadeCodes, order.grandTotal);

    void fetch("/api/orders", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(order),
    }).catch(() => null);

    setConfirmation(order);
    setSubmitting(false);
  }

  function handleNewOrder() {
    setConfirmation(null);
    setSelection({});
    setDraft(INITIAL_DRAFT);
    setError("");
    checkoutTracked.current = false;
  }

  return (
    <>
      <div className="flex items-center justify-center bg-slate-950 px-3 py-2 text-center text-xs font-bold leading-5 text-white">
        {t(lang, "announcement")}
      </div>

      <SiteHeader
        lang={lang}
        onOrder={() => scrollTo("order")}
        onToggleLang={() => setLang((current) => (current === "ar" ? "fr" : "ar"))}
      />

      <main className="pb-20 lg:pb-0">
        <section className="relative overflow-hidden bg-white pb-14 pt-10 sm:pb-20 sm:pt-16">
          <div className="pointer-events-none absolute -left-32 top-10 size-80 rounded-full bg-emerald-100/50 blur-3xl" />
          <div className="pointer-events-none absolute -right-32 bottom-0 size-80 rounded-full bg-amber-100/40 blur-3xl" />
          <div className="relative mx-auto grid max-w-7xl items-center gap-10 px-4 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:px-8">
            <div className="min-w-0">
              <span className="inline-flex max-w-full items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-3.5 py-1.5 text-center text-xs font-black leading-5 text-emerald-800">
                <Sparkles className="size-3.5 shrink-0" /> {t(lang, "heroBadge")}
              </span>
              <h1 className="mt-5 max-w-full break-words text-2xl font-black leading-9 text-ink sm:text-4xl sm:leading-tight lg:text-[2.6rem]">
                {t(lang, "heroTitle")}
              </h1>
              <p className="mt-4 max-w-full break-words text-sm leading-7 text-slate-600 sm:text-base sm:leading-8">{t(lang, "heroSubtitle")}</p>

              <div className="mt-7 flex flex-wrap gap-3">
                <button
                  className="flex items-center gap-2 rounded-xl bg-emerald-600 px-5 py-3.5 text-sm font-black text-white shadow-lg transition hover:bg-emerald-700"
                  onClick={() => scrollTo("shades")}
                  type="button"
                >
                  {t(lang, "heroCta")} <ArrowLeft className="size-4" />
                </button>
              </div>

              <div className="mt-7 grid gap-2.5 sm:grid-cols-2">
                <TrustItem icon={<Star className="size-4 fill-current" />} text={t(lang, "trustThree")} />
                <TrustItem icon={<ShieldCheck className="size-4" />} text={t(lang, "trustFour")} />
              </div>

              <div className="mt-7 flex flex-wrap items-center gap-4 rounded-2xl border border-slate-100 bg-cloud p-4">
                <div className="flex items-center gap-2 text-emerald-700">
                  <Truck className="size-5" />
                  <span className="text-xs font-black">{t(lang, "fastDelivery")}</span>
                </div>
                <span className="hidden h-5 w-px bg-slate-200 sm:block" />
                <p className="text-xs font-bold text-slate-600">{t(lang, "codBadge")}</p>
              </div>
            </div>

            <div id="demo" className="min-w-0 scroll-mt-28">
              <HeroMedia lang={lang} onExploreColors={() => scrollTo("shades")} />
            </div>
          </div>
        </section>

        <ShadeSelector
          lang={lang}
          shades={ACTIVE_SHADES}
          selection={selection}
          previewId={previewId}
          stock={stock}
          activeCount={activeCount}
          onPreview={handlePreview}
          onChangeQuantity={handleChangeQuantity}
        />

        <OrderForm
          lang={lang}
          draft={draft}
          selectedLines={selectedLines}
          stock={stock}
          settings={settings}
          totals={totals}
          error={error}
          submitting={submitting}
          onDraftChange={(patch) => setDraft((current) => ({ ...current, ...patch }))}
          onChangeQuantity={handleChangeQuantity}
          onRemove={(id) => handleChangeQuantity(id, -(selection[id] ?? 0))}
          onQuickAdd={handleQuickAdd}
          onInitiateCheckout={handleInitiateCheckout}
          onSubmit={handleSubmit}
        />

        <Reviews lang={lang} />
      </main>

      <SiteFooter lang={lang} />

      <StickyMobileBar
        lang={lang}
        total={totals.grandTotal}
        penCount={penCount}
        onOrder={() => scrollTo("order")}
      />

      {confirmation && <Confirmation lang={lang} order={confirmation} onClose={handleNewOrder} />}
    </>
  );
}

function TrustItem({ icon, text }: { icon: React.ReactNode; text: string }) {
  return (
    <div className="flex items-start gap-2 rounded-xl bg-cloud p-2.5">
      <span className="mt-0.5 flex size-6 shrink-0 items-center justify-center rounded-lg bg-emerald-100 text-emerald-700">
        {icon}
      </span>
      <p className="text-[11px] font-bold leading-5 text-slate-700 sm:text-xs">{text}</p>
    </div>
  );
}

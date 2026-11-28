"use client";

import Image from "next/image";
import { useEffect, useMemo, useRef, useState, type FormEvent } from "react";
import { getWilaya, getWilayaLabel, WILAYAS } from "@/lib/algeria";
import { ACTIVE_SHADES, isShadeAvailable } from "@/lib/colors";
import { pixelEvents } from "@/lib/meta-pixel";
import { calculateTotals, DEFAULT_SETTINGS, formatDA, MAX_PENS } from "@/lib/pricing";
import { mergeSettings } from "@/lib/settings";
import { createOrderId, type Order, type StockMap, type StoreSettings } from "@/lib/types";
import type { DeliveryType } from "@/lib/wilayas";

type Draft = {
  fullName: string;
  phone: string;
  wilayaId: string;
  commune: string;
  deliveryType: DeliveryType;
};

const INITIAL_DRAFT: Draft = {
  fullName: "",
  phone: "",
  wilayaId: "",
  commune: "",
  deliveryType: "stopDesk",
};

const PRODUCT_IMAGES: Record<string, string> = {
  "01": "/images/product-01.webp",
  "02": "/images/product-02.webp",
  "03": "/images/product-03.webp",
  "04": "/images/product-04.webp",
  "05": "/images/product-05.webp",
  "06": "/images/product-06.webp",
  "07": "/images/product-07.webp",
};

export default function SimpleStorefront() {
  const [draft, setDraft] = useState<Draft>(INITIAL_DRAFT);
  const [shadeId, setShadeId] = useState("01");
  const [quantity, setQuantity] = useState(1);
  const [stock, setStock] = useState<StockMap>({});
  const [settings, setSettings] = useState<StoreSettings>(DEFAULT_SETTINGS);
  const [error, setError] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [orderId, setOrderId] = useState("");
  const checkoutTracked = useRef(false);

  const shades = useMemo(
    () => ACTIVE_SHADES.filter((shade) => isShadeAvailable(shade, stock)),
    [stock],
  );
  const selectedShade = shades.find((shade) => shade.id === shadeId) ?? shades[0];
  const totals = calculateTotals({
    penCount: quantity,
    wilayaId: draft.wilayaId,
    deliveryType: draft.deliveryType,
    settings,
  });

  useEffect(() => {
    void fetch("/api/settings", { cache: "no-store" })
      .then((response) => response.json())
      .then((data: { settings?: Partial<StoreSettings> }) => {
        if (data.settings) setSettings(mergeSettings(data.settings));
      })
      .catch(() => undefined);
    void fetch("/api/stock", { cache: "no-store" })
      .then((response) => response.json())
      .then((data: { stock?: StockMap }) => {
        if (data.stock) setStock(data.stock);
      })
      .catch(() => undefined);
  }, []);

  function update(patch: Partial<Draft>) {
    setDraft((current) => ({ ...current, ...patch }));
  }

  function chooseShade(id: string) {
    setShadeId(id);
    pixelEvents.viewContent([id]);
  }

  function trackCheckout() {
    if (checkoutTracked.current) return;
    checkoutTracked.current = true;
    pixelEvents.initiateCheckout([selectedShade?.code ?? "#01"], totals.productSubtotal);
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError("");

    if (!selectedShade) {
      setError("اختار اللون أولاً.");
      return;
    }

    if (draft.fullName.trim().length < 2 || draft.commune.trim().length < 2) {
      setError("اكتب الاسم والبلدية.");
      return;
    }

    if (!/^0[567]\d{8}$/.test(draft.phone)) {
      setError("رقم الهاتف غير صحيح.");
      return;
    }

    if (!draft.wilayaId) {
      setError("اختار الولاية.");
      return;
    }

    const id = createOrderId();
    const eventId =
      typeof crypto !== "undefined" && typeof crypto.randomUUID === "function"
        ? crypto.randomUUID()
        : `${id}-${Date.now()}`;

    const order: Order = {
      id,
      createdAt: new Date().toISOString(),
      fullName: draft.fullName.trim(),
      phone: draft.phone,
      wilayaId: draft.wilayaId,
      wilayaName: getWilaya(draft.wilayaId)?.nameFr ?? draft.wilayaId,
      commune: draft.commune.trim(),
      deliveryType: draft.deliveryType,
      shadeIds: Array(quantity).fill(selectedShade.id),
      shadeCodes: Array(quantity).fill(selectedShade.code),
      shadeQuantities: [{ id: selectedShade.id, code: selectedShade.code, quantity }],
      penCount: quantity,
      productSubtotal: totals.productSubtotal,
      deliveryFee: totals.deliveryFee,
      grandTotal: totals.grandTotal,
      status: "new",
    };

    setSubmitting(true);
    try {
      const response = await fetch("/api/orders", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...order, pixelEventId: eventId }),
      });
      if (!response.ok) throw new Error("Order rejected");
      pixelEvents.purchase({
        orderId: id,
        shadeCodes: order.shadeCodes,
        value: order.grandTotal,
        quantity,
        eventId,
      });
      setOrderId(id);
    } catch {
      setError("ما تمش الطلب. حاول مرة أخرى.");
    } finally {
      setSubmitting(false);
    }
  }

  const productImage = PRODUCT_IMAGES[selectedShade?.id ?? "01"] ?? "/images/product-01.webp";

  return (
    <>
      <header className="border-b border-slate-100 bg-white">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-4 sm:px-6">
          <p className="text-lg font-semibold text-emerald-700">FixPen DZ</p>
          <a
            href="#order"
            className="rounded-xl bg-emerald-600 px-4 py-2 text-sm font-semibold text-white transition duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] hover:bg-emerald-700 active:scale-[0.98] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-600"
          >
            اطلب الآن
          </a>
        </div>
      </header>

      <main id="main" className="bg-white pb-16">
        <section className="mx-auto grid max-w-5xl items-center gap-8 px-4 py-10 sm:px-6 lg:grid-cols-2 lg:py-16">
          <div className="text-center lg:text-right">
            <h1 className="text-balance text-4xl font-semibold leading-tight text-slate-900">
              قلم تصليح الخدوش والطلاء المائي
            </h1>
            <p className="mt-4 text-base text-slate-600">
              اختار اللون، حدد الكمية، ووصلنا بطلبك.
            </p>
            <p className="mt-2 text-sm text-emerald-700">الدفع عند الاستلام</p>
          </div>

          <div className="relative aspect-square overflow-hidden rounded-3xl border border-slate-100 bg-slate-50">
            <Image
              alt={`صورة قلم تصليح اللون ${selectedShade?.code ?? "#01"}`}
              className="object-cover"
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 50vw"
              src={productImage}
            />
          </div>
        </section>

        <section id="order" className="bg-slate-50 py-12">
          <div className="mx-auto grid max-w-5xl gap-6 px-4 sm:px-6 lg:grid-cols-[1fr_1fr]">
            <div className="rounded-3xl border border-slate-200 bg-white p-5 sm:p-6">
              <h2 className="text-2xl font-semibold text-slate-900">اختار اللون والكمية</h2>

              <div className="mt-5 grid grid-cols-5 gap-3 sm:grid-cols-7">
                {shades.map((shade) => (
                  <button
                    aria-label={`اللون ${shade.code}`}
                    className={`aspect-square rounded-full border-2 transition duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-600 ${
                      shade.id === selectedShade?.id
                        ? "border-emerald-600 scale-105"
                        : "border-transparent hover:border-slate-300"
                    }`}
                    key={shade.id}
                    onClick={() => chooseShade(shade.id)}
                    style={{ backgroundColor: shade.hex }}
                    type="button"
                  />
                ))}
              </div>

              <label className="mt-6 block text-sm font-medium text-slate-700">
                الكمية
                <select
                  className="mt-2 w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-base outline-none focus:border-emerald-600 focus:ring-2 focus:ring-emerald-600/20"
                  onChange={(event) => setQuantity(Number(event.target.value))}
                  value={quantity}
                >
                  {Array.from({ length: MAX_PENS }, (_, index) => (
                    <option key={index + 1} value={index + 1}>
                      {index + 1}
                    </option>
                  ))}
                </select>
              </label>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-white p-5 sm:p-6">
              <h2 className="text-2xl font-semibold text-slate-900">بيانات الطلب</h2>

              {orderId ? (
                <div className="mt-6 rounded-2xl border border-emerald-200 bg-emerald-50 p-5">
                  <p className="text-lg font-semibold text-emerald-800">تم استلام الطلب</p>
                  <p className="mt-2 text-sm text-emerald-700">رقم الطلب {orderId}</p>
                </div>
              ) : (
                <form className="mt-5 grid gap-4" onSubmit={handleSubmit}>
                  <label className="text-sm font-medium text-slate-700">
                    الاسم
                    <input
                      autoComplete="name"
                      className="mt-2 w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-base outline-none focus:border-emerald-600 focus:ring-2 focus:ring-emerald-600/20"
                      onChange={(event) => update({ fullName: event.target.value })}
                      onFocus={trackCheckout}
                      required
                      value={draft.fullName}
                    />
                  </label>

                  <label className="text-sm font-medium text-slate-700">
                    رقم الهاتف
                    <input
                      autoComplete="tel"
                      className="mt-2 w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-base outline-none focus:border-emerald-600 focus:ring-2 focus:ring-emerald-600/20"
                      dir="ltr"
                      inputMode="numeric"
                      maxLength={10}
                      onChange={(event) => update({ phone: event.target.value.replace(/\D/g, "").slice(0, 10) })}
                      onFocus={trackCheckout}
                      pattern="0[567][0-9]{8}"
                      placeholder="0550000000"
                      required
                      type="tel"
                      value={draft.phone}
                    />
                  </label>

                  <label className="text-sm font-medium text-slate-700">
                    الولاية
                    <select
                      className="mt-2 w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-base outline-none focus:border-emerald-600 focus:ring-2 focus:ring-emerald-600/20"
                      onChange={(event) => update({ wilayaId: event.target.value, commune: "" })}
                      required
                      value={draft.wilayaId}
                    >
                      <option value="">اختار الولاية</option>
                      {WILAYAS.map((wilaya) => (
                        <option key={wilaya.id} value={wilaya.id}>
                          {getWilayaLabel(wilaya.id, "ar")}
                        </option>
                      ))}
                    </select>
                  </label>

                  <label className="text-sm font-medium text-slate-700">
                    البلدية
                    <input
                      className="mt-2 w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-base outline-none focus:border-emerald-600 focus:ring-2 focus:ring-emerald-600/20"
                      onChange={(event) => update({ commune: event.target.value })}
                      required
                      value={draft.commune}
                    />
                  </label>

                  <label className="text-sm font-medium text-slate-700">
                    الاستلام
                    <select
                      className="mt-2 w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-base outline-none focus:border-emerald-600 focus:ring-2 focus:ring-emerald-600/20"
                      onChange={(event) => update({ deliveryType: event.target.value as DeliveryType })}
                      value={draft.deliveryType}
                    >
                      <option value="stopDesk">مكتب البريد</option>
                      <option value="home">للمنزل</option>
                    </select>
                  </label>

                  <div className="rounded-xl bg-slate-50 p-4">
                    <p className="text-sm text-slate-600">الإجمالي</p>
                    <p className="text-2xl font-semibold text-emerald-700">{formatDA(totals.grandTotal, "ar")}</p>
                  </div>

                  {error && <p className="text-sm font-medium text-red-600">{error}</p>}

                  <button
                    className="rounded-xl bg-emerald-600 px-5 py-3 text-base font-semibold text-white transition duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] hover:bg-emerald-700 active:scale-[0.98] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-600 disabled:cursor-not-allowed disabled:bg-emerald-300"
                    disabled={submitting}
                    type="submit"
                  >
                    {submitting ? "جاري الإرسال..." : "تأكيد الطلب"}
                  </button>
                </form>
              )}
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

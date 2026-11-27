"use client";

import { useEffect, useMemo, useState } from "react";
import {
  AlertCircle,
  Check,
  CheckCircle2,
  Copy,
  Download,
  Eye,
  EyeOff,
  Lock,
  LogOut,
  Package,
  Palette,
  RotateCcw,
  Save,
  Search,
  Settings2,
  ShieldCheck,
  ShoppingBag,
  TrendingUp,
} from "lucide-react";
import { WILAYAS } from "@/lib/algeria";
import { SHADES } from "@/lib/colors";
import { downloadCsv } from "@/lib/csv";
import { DEFAULT_SETTINGS, formatDA } from "@/lib/pricing";
import { mergeSettings } from "@/lib/settings";
import type { Order, OrderStatus, StockMap, StoreSettings } from "@/lib/types";

type Tab = "orders" | "inventory" | "pricing";

const STATUS_LABELS: Record<OrderStatus, string> = {
  new: "جديدة",
  confirmed: "مؤكدة",
  shipped: "أُرسلت",
  delivered: "تم التوصيل",
  cancelled: "ملغاة",
};

function sortOrders(orders: Order[]) {
  return [...orders].sort((a, b) => b.createdAt.localeCompare(a.createdAt));
}

export default function AdminDashboard() {
  const [checking, setChecking] = useState(true);
  const [authenticated, setAuthenticated] = useState(false);
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loginError, setLoginError] = useState("");
  const [loggingIn, setLoggingIn] = useState(false);
  const [tab, setTab] = useState<Tab>("orders");
  const [orders, setOrders] = useState<Order[]>([]);
  const [stock, setStock] = useState<StockMap>({});
  const [settings, setSettings] = useState<StoreSettings>(DEFAULT_SETTINGS);
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState<OrderStatus | "all">("all");
  const [tariffQuery, setTariffQuery] = useState("");
  const [saved, setSaved] = useState(false);
  const [todayKey, setTodayKey] = useState("");

  async function loadData() {
    setTodayKey(new Date().toISOString().slice(0, 10));

    const settingsResponse = await fetch("/api/settings", { cache: "no-store" }).catch(() => null);
    if (settingsResponse?.ok) {
      const data = (await settingsResponse.json().catch(() => null)) as { settings?: Partial<StoreSettings> } | null;
      if (data?.settings) setSettings(mergeSettings(data.settings));
    }

    const stockResponse = await fetch("/api/stock", { cache: "no-store" }).catch(() => null);
    if (stockResponse?.ok) {
      const data = (await stockResponse.json().catch(() => null)) as { stock?: StockMap } | null;
      if (data?.stock) setStock(data.stock);
    }

    try {
      const response = await fetch("/api/admin/orders", { cache: "no-store" });
      if (response.ok) {
        const data = (await response.json()) as { orders?: Order[] };
        setOrders(sortOrders(data.orders ?? []));
        return;
      }
    } catch {
      setOrders([]);
      return;
    }

    setOrders([]);
  }

  useEffect(() => {
    let active = true;
    fetch("/api/admin/session")
      .then((response) => response.json())
      .then((data: { authenticated: boolean }) => {
        if (!active) return;
        setAuthenticated(Boolean(data.authenticated));
        if (data.authenticated) void loadData();
        setChecking(false);
      })
      .catch(() => {
        if (!active) return;
        setChecking(false);
      });
    return () => {
      active = false;
    };
  }, []);

  async function handleLogin(event: React.FormEvent) {
    event.preventDefault();
    setLoggingIn(true);
    setLoginError("");
    try {
      const response = await fetch("/api/admin/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ password }),
      });
      const data = (await response.json()) as { ok: boolean; error?: string };
      if (!response.ok || !data.ok) {
        setLoginError(data.error ?? "تعذر تسجيل الدخول");
        return;
      }
      setAuthenticated(true);
      setPassword("");
      void loadData();
    } catch {
      setLoginError("تعذر الاتصال بالخادم");
    } finally {
      setLoggingIn(false);
    }
  }

  async function handleLogout() {
    await fetch("/api/admin/logout", { method: "POST" });
    setAuthenticated(false);
    setOrders([]);
  }

  const filteredOrders = useMemo(() => {
    const query = search.trim().toLowerCase();
    return orders.filter((order) => {
      if (statusFilter !== "all" && order.status !== statusFilter) return false;
      if (!query) return true;
      return [order.id, order.fullName, order.phone, order.wilayaName, order.commune, ...order.shadeCodes]
        .join(" ")
        .toLowerCase()
        .includes(query);
    });
  }, [orders, search, statusFilter]);

  const stats = useMemo(() => {
    return {
      total: orders.length,
      today: orders.filter((order) => order.createdAt.slice(0, 10) === todayKey).length,
      revenue: orders.reduce((sum, order) => sum + order.grandTotal, 0),
      pending: orders.filter((order) => order.status === "new").length,
    };
  }, [orders, todayKey]);

  async function updateStatus(id: string, status: OrderStatus) {
    setOrders((current) =>
      sortOrders(current.map((order) => (order.id === id ? { ...order, status } : order))),
    );

    try {
      const response = await fetch("/api/admin/orders", {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id, status }),
      });
      if (!response.ok) return;
      const data = (await response.json()) as { orders?: Order[] };
      if (data.orders) setOrders(sortOrders(data.orders));
    } catch {
      return;
    }
  }

  async function toggleStock(id: string) {
    const shade = SHADES.find((item) => item.id === id);
    if (!shade) return;
    const next = { ...stock, [id]: !(stock[id] ?? shade.inStock) };
    setStock(next);
    try {
      await fetch("/api/stock", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ stock: next }),
      });
    } catch {
      return;
    }
  }

  function updatePrice(key: keyof StoreSettings["prices"], value: number) {
    setSettings((current) => ({
      ...current,
      prices: { ...current.prices, [key]: Math.max(0, value) },
    }));
  }

  function updateTariff(wilayaId: string, type: "stopDesk" | "home", value: number) {
    setSettings((current) => ({
      ...current,
      tariffs: {
        ...current.tariffs,
        [wilayaId]: {
          ...(current.tariffs[wilayaId] ?? { stopDesk: 400, home: 600 }),
          [type]: Math.max(0, value),
        },
      },
    }));
  }

  async function handleSaveSettings() {
    try {
      const response = await fetch("/api/settings", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ settings }),
      });
      if (!response.ok) return;
      const data = (await response.json()) as { settings?: StoreSettings };
      if (data.settings) setSettings(mergeSettings(data.settings));
      setSaved(true);
      window.setTimeout(() => setSaved(false), 2200);
    } catch {
      return;
    }
  }

  async function handleResetSettings() {
    if (!window.confirm("إرجاع الأسعار والتعريفات للقيم الافتراضية؟")) return;
    setSettings(DEFAULT_SETTINGS);
    try {
      await fetch("/api/settings", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ settings: DEFAULT_SETTINGS }),
      });
    } catch {
      return;
    }
  }

  if (checking) {
    return (
      <div dir="rtl" className="flex min-h-screen items-center justify-center bg-cloud">
        <div className="flex items-center gap-2 text-sm font-bold text-slate-500">
          <ShieldCheck className="size-5 animate-pulse text-emerald-600" /> جاري التحقق…
        </div>
      </div>
    );
  }

  if (!authenticated) {
    return (
      <div dir="rtl" className="flex min-h-screen items-center justify-center bg-[radial-gradient(circle_at_top,#ecfdf5,#f8fafc_55%)] p-4">
        <form
          className="w-full max-w-md rounded-3xl border border-slate-200 bg-white p-7 shadow-[0_30px_80px_-40px_rgba(15,23,42,0.5)] sm:p-9"
          onSubmit={handleLogin}
        >
          <span className="mx-auto flex size-14 items-center justify-center rounded-2xl bg-emerald-100 text-emerald-700">
            <Lock className="size-7" />
          </span>
          <h1 className="mt-5 text-center text-2xl font-black text-slate-900">لوحة تحكم FixPen DZ</h1>
          <p className="mt-2 text-center text-sm leading-7 text-slate-500">
            هذه صفحة الطلبات والمخزون. أدخل كلمة المرور للوصول.
          </p>

          <label className="mt-7 block">
            <span className="mb-2 block text-xs font-black text-slate-700">كلمة المرور</span>
            <span className="flex items-center gap-2 rounded-xl border border-slate-200 px-3 py-3 focus-within:border-emerald-500 focus-within:ring-2 focus-within:ring-emerald-100">
              <input
                autoFocus
                className="flex-1 bg-transparent text-sm outline-none"
                onChange={(event) => setPassword(event.target.value)}
                placeholder="••••••••"
                required
                type={showPassword ? "text" : "password"}
                value={password}
              />
              <button
                aria-label="show password"
                className="text-slate-400 transition hover:text-slate-700"
                onClick={() => setShowPassword((current) => !current)}
                type="button"
              >
                {showPassword ? <EyeOff className="size-4" /> : <Eye className="size-4" />}
              </button>
            </span>
          </label>

          {loginError && (
            <p className="mt-3 flex items-center gap-2 rounded-xl bg-rose-50 px-3 py-2 text-xs font-bold text-rose-700">
              <AlertCircle className="size-4" /> {loginError}
            </p>
          )}

          <button
            className="mt-5 flex w-full items-center justify-center gap-2 rounded-xl bg-emerald-600 px-4 py-3.5 text-sm font-black text-white transition hover:bg-emerald-700 disabled:opacity-60"
            disabled={loggingIn}
            type="submit"
          >
            <Lock className="size-4" /> دخول
          </button>

          {process.env.NODE_ENV !== "production" && (
            <p dir="ltr" className="num mt-4 text-center text-[10px] text-slate-400">
              local password: ismail0202
            </p>
          )}
        </form>
      </div>
    );
  }

  return (
    <div dir="rtl" className="min-h-screen bg-cloud">
      <header className="sticky top-0 z-40 border-b border-slate-200 bg-white/95 backdrop-blur">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-3 px-4 py-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3">
            <span className="flex size-10 items-center justify-center rounded-xl bg-emerald-600 text-white">
              <ShieldCheck className="size-5" />
            </span>
            <div>
              <p dir="ltr" className="num text-sm font-black text-slate-900">FixPen DZ Admin</p>
              <p className="text-[10px] font-bold text-emerald-700">الطلبات · المخزون · الأسعار</p>
            </div>
          </div>
          <button
            className="flex items-center gap-2 rounded-xl border border-slate-200 px-3 py-2 text-xs font-bold text-slate-600 transition hover:border-rose-200 hover:text-rose-600"
            onClick={handleLogout}
            type="button"
          >
            <LogOut className="size-4" /> خروج
          </button>
        </div>
      </header>

      <main className="mx-auto max-w-7xl px-4 py-7 sm:px-6 lg:px-8">
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          <StatCard icon={<ShoppingBag className="size-5" />} label="إجمالي الطلبات" value={String(stats.total)} />
          <StatCard icon={<TrendingUp className="size-5" />} label="طلبات اليوم" value={String(stats.today)} />
          <StatCard icon={<CheckCircle2 className="size-5" />} label="طلبات جديدة" value={String(stats.pending)} />
          <StatCard icon={<Package className="size-5" />} label="إجمالي المبيعات" value={formatDA(stats.revenue)} />
        </div>

        <div className="no-scrollbar mt-6 flex gap-2 overflow-x-auto">
          <TabButton active={tab === "orders"} icon={<ShoppingBag className="size-4" />} label="الطلبات" onClick={() => setTab("orders")} />
          <TabButton active={tab === "inventory"} icon={<Palette className="size-4" />} label="المخزون والألوان" onClick={() => setTab("inventory")} />
          <TabButton active={tab === "pricing"} icon={<Settings2 className="size-4" />} label="الأسعار والتوصيل" onClick={() => setTab("pricing")} />
        </div>

        {tab === "orders" && (
          <section className="mt-5 rounded-3xl border border-slate-200 bg-white p-4 shadow-sm sm:p-6">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <h2 className="text-lg font-black text-slate-900">الطلبات الواردة</h2>
                <p className="mt-1 text-xs text-slate-500">التصدير بصيغة CSV جاهز للرفع على Yalidine أو ZR Express.</p>
              </div>
              <button
                className="flex items-center justify-center gap-2 rounded-xl bg-emerald-600 px-4 py-2.5 text-xs font-black text-white transition hover:bg-emerald-700 disabled:opacity-50"
                disabled={filteredOrders.length === 0}
                onClick={() => downloadCsv(filteredOrders, `fixpendz-orders-${new Date().toISOString().slice(0, 10)}.csv`)}
                type="button"
              >
                <Download className="size-4" /> تصدير الطلبات CSV
              </button>
            </div>

            <div className="mt-5 flex flex-col gap-2 sm:flex-row">
              <label className="flex flex-1 items-center gap-2 rounded-xl border border-slate-200 px-3 py-2">
                <Search className="size-4 text-slate-400" />
                <input
                  className="w-full bg-transparent text-sm outline-none"
                  onChange={(event) => setSearch(event.target.value)}
                  placeholder="ابحث بالاسم، الهاتف، رقم الطلب أو اللون…"
                  type="text"
                  value={search}
                />
              </label>
              <select
                className="rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm font-bold text-slate-700 outline-none"
                onChange={(event) => setStatusFilter(event.target.value as OrderStatus | "all")}
                value={statusFilter}
              >
                <option value="all">كل الحالات</option>
                {(Object.keys(STATUS_LABELS) as OrderStatus[]).map((status) => (
                  <option key={status} value={status}>{STATUS_LABELS[status]}</option>
                ))}
              </select>
            </div>

            {filteredOrders.length === 0 ? (
              <div className="mt-8 rounded-2xl border border-dashed border-slate-300 bg-cloud p-10 text-center">
                <Package className="mx-auto size-10 text-slate-300" />
                <p className="mt-3 text-sm font-bold text-slate-600">ما كاينش طلبات هنا حتى الآن.</p>
                <p className="mt-1 text-xs text-slate-500">الطلبات تظهر تلقائياً بعد ما العميل يؤكد الطلبية من صفحة البيع.</p>
              </div>
            ) : (
              <div className="mt-5 overflow-x-auto rounded-2xl border border-slate-200">
                <table className="min-w-[1050px] w-full text-right text-sm">
                  <thead className="bg-cloud text-[11px] font-black text-slate-500">
                    <tr>
                      <th className="px-4 py-3">رقم الطلب</th>
                      <th className="px-4 py-3">العميل</th>
                      <th className="px-4 py-3">الولاية / البلدية</th>
                      <th className="px-4 py-3">الألوان</th>
                      <th className="px-4 py-3">التوصيل</th>
                      <th className="px-4 py-3">المجموع</th>
                      <th className="px-4 py-3">الحالة</th>
                      <th className="px-4 py-3">نسخ الهاتف</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    {filteredOrders.map((order) => (
                      <tr className="hover:bg-cloud/60" key={order.id}>
                        <td className="px-4 py-3">
                          <p dir="ltr" className="num text-xs font-black text-slate-900">{order.id}</p>
                          <p dir="ltr" className="num mt-1 text-[10px] text-slate-400">
                            {new Date(order.createdAt).toLocaleString("fr-DZ")}
                          </p>
                        </td>
                        <td className="px-4 py-3">
                          <p className="text-xs font-black text-slate-800">{order.fullName}</p>
                          <p dir="ltr" className="num mt-1 text-[11px] text-slate-500">{order.phone}</p>
                        </td>
                        <td className="px-4 py-3 text-xs text-slate-700">
                          <p className="font-bold">{order.wilayaName}</p>
                          <p className="mt-1 text-slate-500">{order.commune}</p>
                        </td>
                        <td className="px-4 py-3">
                          <div className="flex flex-wrap gap-1">
                            {order.shadeCodes.map((code, index) => {
                              const shade = SHADES.find((item) => item.code === code || item.id === code.replace("#", ""));
                              const quantity = order.shadeQuantities?.find((item) => item.code === code)?.quantity;
                              return (
                                <span className="flex items-center gap-1 rounded-md bg-slate-100 px-1.5 py-1 text-[10px] font-bold text-slate-700" key={`${code}-${index}`}>
                                  <span
                                    className="size-3 rounded-full border border-slate-300"
                                    style={{ backgroundColor: shade?.hex ?? "#FFFFFF" }}
                                  />
                                  <span dir="ltr" className="num">{code}</span>
                                  {quantity ? <span dir="ltr" className="num text-slate-500">×{quantity}</span> : null}
                                </span>
                              );
                            })}
                          </div>
                          {order.needHelp && (
                            <p className="mt-1 rounded-md bg-amber-50 px-1.5 py-1 text-[10px] font-bold text-amber-700">يحتاج مساعدة في اللون</p>
                          )}
                        </td>
                        <td className="px-4 py-3 text-xs text-slate-700">
                          <p className="font-bold">{order.deliveryType === "stopDesk" ? "المكتب" : "المنزل"}</p>
                          <p dir="ltr" className="num mt-1 text-[10px] text-slate-500">{formatDA(order.deliveryFee)}</p>
                        </td>
                        <td className="px-4 py-3">
                          <span dir="ltr" className="num text-sm font-black text-emerald-700">{formatDA(order.grandTotal)}</span>
                        </td>
                        <td className="px-4 py-3">
                          <select
                            className="rounded-lg border border-slate-200 bg-white px-2 py-1.5 text-xs font-bold outline-none"
                            onChange={(event) => updateStatus(order.id, event.target.value as OrderStatus)}
                            value={order.status}
                          >
                            {(Object.keys(STATUS_LABELS) as OrderStatus[]).map((status) => (
                              <option key={status} value={status}>{STATUS_LABELS[status]}</option>
                            ))}
                          </select>
                        </td>
                        <td className="px-4 py-3">
                          <button
                            aria-label="copy phone"
                            className="flex size-8 items-center justify-center rounded-lg bg-cloud text-slate-500 transition hover:bg-emerald-50 hover:text-emerald-700"
                            onClick={() => void navigator.clipboard?.writeText(order.phone)}
                            type="button"
                          >
                            <Copy className="size-4" />
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </section>
        )}

        {tab === "inventory" && (
          <section className="mt-5 rounded-3xl border border-slate-200 bg-white p-4 shadow-sm sm:p-6">
            <h2 className="text-lg font-black text-slate-900">مخزون الألوان</h2>
            <p className="mt-1 text-xs text-slate-500">اضغط مرة واحدة لتغيير اللون بين متوفر ونفذت الكمية. التغيير يُحفظ مباشرة.</p>
            <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
              {SHADES.map((shade) => {
                const available = stock[shade.id] ?? shade.inStock;
                return (
                  <div className={`rounded-2xl border p-3 ${available ? "border-emerald-200 bg-emerald-50/40" : "border-slate-200 bg-white"}`} key={shade.id}>
                    <div className="flex items-center gap-3">
                      <span
                        className="size-11 shrink-0 rounded-full border border-slate-200"
                        style={{ backgroundColor: shade.hex }}
                      />
                      <div className="min-w-0">
                        <p dir="ltr" className="num text-xs font-black text-slate-900">{shade.code}</p>
                        <p className="truncate text-[10px] text-slate-500">{shade.factory}</p>
                      </div>
                    </div>
                    <p className="mt-3 line-clamp-2 text-[11px] font-bold leading-5 text-slate-700">{shade.nameAr}</p>
                    <button
                      className={`mt-3 flex w-full items-center justify-center gap-1.5 rounded-lg px-2 py-2 text-[11px] font-black transition ${
                        available
                          ? "bg-emerald-600 text-white hover:bg-emerald-700"
                          : "bg-slate-200 text-slate-600 hover:bg-slate-300"
                      }`}
                      onClick={() => toggleStock(shade.id)}
                      type="button"
                    >
                      {available ? <Check className="size-3.5" /> : <Package className="size-3.5" />}
                      {available ? "متوفر" : "نفذت الكمية"}
                    </button>
                  </div>
                );
              })}
            </div>
          </section>
        )}

        {tab === "pricing" && (
          <section className="mt-5 space-y-5">
            <div className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <div>
                  <h2 className="text-lg font-black text-slate-900">أسعار الأقلام</h2>
                  <p className="mt-1 text-xs text-slate-500">التوصيل للمكتب مجاني تلقائياً ابتداءً من 3 أقلام.</p>
                </div>
                <div className="flex gap-2">
                  <button
                    className="flex items-center gap-2 rounded-xl border border-slate-200 px-3 py-2 text-xs font-bold text-slate-600 transition hover:bg-cloud"
                    onClick={handleResetSettings}
                    type="button"
                  >
                    <RotateCcw className="size-4" /> إرجاع
                  </button>
                  <button
                    className="flex items-center gap-2 rounded-xl bg-emerald-600 px-4 py-2 text-xs font-black text-white transition hover:bg-emerald-700"
                    onClick={handleSaveSettings}
                    type="button"
                  >
                    <Save className="size-4" /> حفظ التغييرات
                  </button>
                </div>
              </div>
              {saved && (
                <p className="mt-3 flex items-center gap-2 rounded-xl bg-emerald-50 px-3 py-2 text-xs font-bold text-emerald-700">
                  <CheckCircle2 className="size-4" /> تم الحفظ
                </p>
              )}
              <div className="mt-5 grid gap-4 sm:grid-cols-3 lg:grid-cols-5">
                <PriceInput label="قلم واحد (DA)" value={settings.prices.one} onChange={(value) => updatePrice("one", value)} />
                <PriceInput label="قلمان (DA)" value={settings.prices.two} onChange={(value) => updatePrice("two", value)} />
                <PriceInput label="3 أقلام (DA)" value={settings.prices.three} onChange={(value) => updatePrice("three", value)} />
                <PriceInput label="4 أقلام (DA)" value={settings.prices.four} onChange={(value) => updatePrice("four", value)} />
                <PriceInput label="5 أقلام (DA)" value={settings.prices.five} onChange={(value) => updatePrice("five", value)} />
              </div>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
              <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <h2 className="text-lg font-black text-slate-900">تعريفات التوصيل – 69 ولاية</h2>
                  <p className="mt-1 text-xs text-slate-500">التعريفات بالدينار الجزائري حسب نوع التوصيل.</p>
                </div>
                <label className="flex items-center gap-2 rounded-xl border border-slate-200 px-3 py-2">
                  <Search className="size-4 text-slate-400" />
                  <input
                    className="w-48 bg-transparent text-sm outline-none"
                    onChange={(event) => setTariffQuery(event.target.value)}
                    placeholder="ابحث عن ولاية…"
                    type="text"
                    value={tariffQuery}
                  />
                </label>
              </div>

              <div className="mt-5 overflow-x-auto rounded-2xl border border-slate-200">
                <table className="min-w-[620px] w-full text-right text-sm">
                  <thead className="bg-cloud text-[11px] font-black text-slate-500">
                    <tr>
                      <th className="px-4 py-3">الولاية</th>
                      <th className="px-4 py-3">المكتب (DA)</th>
                      <th className="px-4 py-3">المنزل (DA)</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    {WILAYAS.filter((wilaya) =>
                      `${wilaya.id} ${wilaya.nameFr} ${wilaya.nameAr}`.toLowerCase().includes(tariffQuery.trim().toLowerCase()),
                    ).map((wilaya) => {
                      const tariff = settings.tariffs[wilaya.id] ?? { stopDesk: 400, home: 600 };
                      return (
                        <tr key={wilaya.id}>
                          <td className="px-4 py-2">
                            <span dir="ltr" className="num ml-2 text-[11px] font-bold text-slate-400">{wilaya.id}</span>
                            <span className="text-xs font-bold text-slate-800">{wilaya.nameAr}</span>
                          </td>
                          <td className="px-4 py-2">
                            <input
                              className="num w-24 rounded-lg border border-slate-200 px-2 py-1.5 text-left text-xs outline-none focus:border-emerald-500"
                              min={0}
                              onChange={(event) => updateTariff(wilaya.id, "stopDesk", Number(event.target.value))}
                              type="number"
                              value={tariff.stopDesk}
                            />
                          </td>
                          <td className="px-4 py-2">
                            <input
                              className="num w-24 rounded-lg border border-slate-200 px-2 py-1.5 text-left text-xs outline-none focus:border-emerald-500"
                              min={0}
                              onChange={(event) => updateTariff(wilaya.id, "home", Number(event.target.value))}
                              type="number"
                              value={tariff.home}
                            />
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          </section>
        )}
      </main>
    </div>
  );
}

function StatCard({ icon, label, value }: { icon: React.ReactNode; label: string; value: string }) {
  return (
    <div className="flex items-center justify-between rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
      <div>
        <p className="text-[11px] font-bold text-slate-500">{label}</p>
        <p dir="ltr" className="num mt-1 text-xl font-black text-slate-900">{value}</p>
      </div>
      <span className="flex size-10 items-center justify-center rounded-xl bg-emerald-50 text-emerald-700">{icon}</span>
    </div>
  );
}

function TabButton({ active, icon, label, onClick }: { active: boolean; icon: React.ReactNode; label: string; onClick: () => void }) {
  return (
    <button
      className={`flex shrink-0 items-center gap-2 rounded-xl px-4 py-2.5 text-xs font-black transition ${
        active ? "bg-slate-900 text-white" : "border border-slate-200 bg-white text-slate-600 hover:border-emerald-300"
      }`}
      onClick={onClick}
      type="button"
    >
      {icon} {label}
    </button>
  );
}

function PriceInput({ label, value, onChange }: { label: string; value: number; onChange: (value: number) => void }) {
  return (
    <label className="block rounded-2xl border border-slate-200 bg-cloud p-4">
      <span className="mb-2 block text-xs font-black text-slate-600">{label}</span>
      <input
        className="num w-full rounded-xl border border-slate-200 bg-white px-3 py-2 text-left text-lg font-black text-slate-900 outline-none focus:border-emerald-500"
        min={0}
        onChange={(event) => onChange(Number(event.target.value))}
        type="number"
        value={value}
      />
    </label>
  );
}

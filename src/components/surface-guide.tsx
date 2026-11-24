"use client";

import { AppWindow, CarFront, DoorOpen, Refrigerator } from "lucide-react";
import type { SurfaceGroup } from "@/lib/colors";
import type { Lang } from "@/lib/i18n";
import { t } from "@/lib/i18n";

type Props = {
  lang: Lang;
  active: SurfaceGroup | "all";
  onSelect: (filter: SurfaceGroup | "all") => void;
};

const ITEMS: Array<{
  key: SurfaceGroup;
  icon: typeof DoorOpen;
  title: "woodGuideTitle" | "applianceGuideTitle" | "aluminumGuideTitle" | "carGuideTitle";
  text: "woodGuideText" | "applianceGuideText" | "aluminumGuideText" | "carGuideText";
}> = [
  { key: "wood", icon: DoorOpen, title: "woodGuideTitle", text: "woodGuideText" },
  { key: "appliance", icon: Refrigerator, title: "applianceGuideTitle", text: "applianceGuideText" },
  { key: "aluminum", icon: AppWindow, title: "aluminumGuideTitle", text: "aluminumGuideText" },
  { key: "car", icon: CarFront, title: "carGuideTitle", text: "carGuideText" },
];

export default function SurfaceGuide({ lang, active, onSelect }: Props) {
  return (
    <section className="bg-white py-14 sm:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-8 text-center">
          <span className="inline-block rounded-full bg-amber-50 px-4 py-1.5 text-xs font-bold text-amber-700">
            {t(lang, "guideKicker")}
          </span>
          <h2 className="mt-3 text-2xl font-black text-ink sm:text-3xl">{t(lang, "guideTitle")}</h2>
          <p className="mt-2 text-sm text-slate-600">{t(lang, "guideSubtitle")}</p>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {ITEMS.map((item) => {
            const Icon = item.icon;
            const selected = active === item.key;
            return (
              <button
                className={`group rounded-2xl border p-5 text-right transition-all duration-200 ${
                  selected
                    ? "border-emerald-500 bg-emerald-50/70 shadow-lg"
                    : "border-slate-200 bg-white hover:-translate-y-1 hover:border-emerald-300 hover:shadow-lg"
                }`}
                key={item.key}
                onClick={() => onSelect(item.key)}
                type="button"
              >
                <span
                  className={`flex size-12 items-center justify-center rounded-xl ${
                    selected ? "bg-emerald-600 text-white" : "bg-cloud text-slate-700 group-hover:bg-emerald-100 group-hover:text-emerald-700"
                  }`}
                >
                  <Icon className="size-6" />
                </span>
                <h3 className="mt-4 text-sm font-black text-ink sm:text-base">{t(lang, item.title)}</h3>
                <p className="mt-2 text-xs leading-6 text-slate-600 sm:text-sm">{t(lang, item.text)}</p>
                <span className={`mt-4 inline-block text-xs font-bold ${selected ? "text-emerald-700" : "text-slate-400"}`}>
                  {selected ? "✓ " : ""}
                  {t(lang, "filter" + item.key.charAt(0).toUpperCase() + item.key.slice(1) as "filterWood").replace(/^\S+\s/, "")}
                </span>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}

"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, Sparkles } from "lucide-react";
import { t, type Lang } from "@/lib/i18n";
import {
  DEMO_GIF_ALT_AR,
  DEMO_GIF_ALT_FR,
  DEMO_GIF_HEIGHT,
  DEMO_GIF_SRC,
  DEMO_GIF_WIDTH,
  MEDIA_IMAGES,
} from "@/lib/media";

type Props = {
  lang: Lang;
  onExploreColors: () => void;
};

export default function HeroMedia({ lang, onExploreColors }: Props) {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const timer = window.setTimeout(() => {
      setActive((current) => (current + 1) % MEDIA_IMAGES.length);
    }, 3500);
    return () => window.clearTimeout(timer);
  }, [active]);

  function moveSlide(direction: number) {
    setActive((current) => (current + direction + MEDIA_IMAGES.length) % MEDIA_IMAGES.length);
  }

  return (
    <div className="relative">
      <div className="relative w-full overflow-hidden rounded-[1.5rem] border border-slate-200 bg-slate-950 shadow-[0_30px_80px_-35px_rgba(15,23,42,0.65)] sm:rounded-[2rem]">
        <PhotoSlide lang={lang} media={MEDIA_IMAGES[active]} priority={active === 0} />

        <button
          aria-label="previous slide"
          className="absolute right-2 top-1/2 z-20 flex size-9 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-slate-900 shadow-lg transition hover:bg-white sm:size-10"
          onClick={() => moveSlide(-1)}
          type="button"
        >
          <ChevronRight className="size-5" />
        </button>
        <button
          aria-label="next slide"
          className="absolute left-2 top-1/2 z-20 flex size-9 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-slate-900 shadow-lg transition hover:bg-white sm:size-10"
          onClick={() => moveSlide(1)}
          type="button"
        >
          <ChevronLeft className="size-5" />
        </button>

        <div className="absolute bottom-3 right-3 z-20 rounded-full bg-emerald-600 px-3 py-1 text-[11px] font-black text-white shadow-lg">
          {active + 1} / {MEDIA_IMAGES.length}
        </div>
      </div>

      <div className="no-scrollbar mt-3 flex gap-2 overflow-x-auto pb-1">
        {MEDIA_IMAGES.map((media, index) => (
          <button
            aria-label={lang === "ar" ? media.altAr : media.altFr}
            className={`relative flex size-14 shrink-0 items-center justify-center overflow-hidden rounded-xl border-2 bg-slate-900 transition ${
              active === index ? "border-emerald-500" : "border-transparent opacity-65 hover:opacity-100"
            }`}
            key={media.src}
            onClick={() => setActive(index)}
            type="button"
          >
            <Image
              alt=""
              className="max-h-full max-w-full object-contain"
              height={media.height}
              src={media.src}
              width={media.width}
            />
          </button>
        ))}
      </div>

      <div className="mt-3 flex items-center justify-center overflow-hidden rounded-2xl border border-slate-800 bg-slate-950 p-2">
        <Image
          alt={lang === "ar" ? DEMO_GIF_ALT_AR : DEMO_GIF_ALT_FR}
          className="h-auto max-h-[520px] w-auto max-w-full object-contain"
          height={DEMO_GIF_HEIGHT}
          src={DEMO_GIF_SRC}
          unoptimized
          width={DEMO_GIF_WIDTH}
        />
      </div>

      <button
        className="mt-3 flex w-full items-center justify-center gap-2 rounded-xl bg-emerald-50 py-2 text-xs font-black text-emerald-700 transition hover:bg-emerald-100"
        onClick={onExploreColors}
        type="button"
      >
        <Sparkles className="size-3.5" /> {t(lang, "shadeKicker")}
      </button>
    </div>
  );
}

function PhotoSlide({
  media,
  priority,
  lang,
}: {
  media: (typeof MEDIA_IMAGES)[number];
  priority: boolean;
  lang: Lang;
}) {
  return (
    <div className="flex flex-col bg-slate-950">
      <div className="flex min-h-[240px] items-center justify-center p-2 sm:min-h-[360px]">
        <Image
          alt={lang === "ar" ? media.altAr : media.altFr}
          className="h-auto max-h-[60vh] w-full object-contain"
          height={media.height}
          priority={priority}
          sizes="100vw"
          src={media.src}
          width={media.width}
        />
      </div>
      <div className="bg-slate-900 px-3 py-2 text-center text-xs font-bold leading-5 text-white">
        {lang === "ar" ? media.labelAr : media.labelFr}
      </div>
    </div>
  );
}

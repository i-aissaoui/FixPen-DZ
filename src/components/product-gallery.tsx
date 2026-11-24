"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Camera, X } from "lucide-react";
import { t, type Lang } from "@/lib/i18n";
import { DEMO_GIF_ALT_AR, DEMO_GIF_ALT_FR, DEMO_POSTER_SRC, MEDIA_IMAGES } from "@/lib/media";

type Props = { lang: Lang };

type GalleryItem = { src: string; alt: string; wide?: boolean; gif?: boolean };

export default function ProductGallery({ lang }: Props) {
  const [openItem, setOpenItem] = useState<GalleryItem | null>(null);

  useEffect(() => {
    if (!openItem) return;
    function handleKey(event: KeyboardEvent) {
      if (event.key === "Escape") setOpenItem(null);
    }
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [openItem]);

  const items: GalleryItem[] = [
    ...MEDIA_IMAGES.map((media, index) => ({
      src: media.src,
      alt: lang === "ar" ? media.altAr : media.altFr,
      wide: index === 5,
    })),
    {
      src: DEMO_POSTER_SRC,
      alt: lang === "ar" ? DEMO_GIF_ALT_AR : DEMO_GIF_ALT_FR,
      gif: true,
    },
  ];

  return (
    <section className="bg-white py-14 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-8 text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-emerald-100 px-4 py-1.5 text-xs font-bold text-emerald-800">
            <Camera className="size-3.5" /> {t(lang, "galleryKicker")}
          </span>
          <h2 className="mt-3 text-2xl font-black text-ink sm:text-4xl">{t(lang, "galleryTitle")}</h2>
          <p className="mt-2 text-sm text-slate-600 sm:text-base">{t(lang, "gallerySubtitle")}</p>
        </div>

        <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
          {items.map((item, index) => (
            <button
              aria-label={item.alt}
              className={`group relative overflow-hidden rounded-2xl border border-slate-200 bg-cloud ${
                item.wide ? "col-span-2 aspect-[16/9] sm:col-span-2" : "aspect-square"
              } ${item.gif ? "col-span-2 sm:col-span-1" : ""}`}
              key={item.src}
              onClick={() => setOpenItem(item)}
              type="button"
            >
              <Image
                alt={item.alt}
                className="object-cover transition duration-500 group-hover:scale-105"
                fill
                sizes={item.wide ? "(max-width: 640px) 100vw, 50vw" : "(max-width: 640px) 50vw, 25vw"}
                src={item.src}
                unoptimized={item.gif}
              />
              <span className="absolute inset-0 bg-slate-950/0 transition group-hover:bg-slate-950/10" />
              <span dir="ltr" className="num absolute bottom-2 right-2 rounded-lg bg-slate-950/60 px-2 py-1 text-[10px] font-bold text-white backdrop-blur">
                {String(index + 1).padStart(2, "0")}
              </span>
            </button>
          ))}
        </div>
      </div>

      {openItem && (
        <div
          className="fixed inset-0 z-[80] flex items-center justify-center bg-slate-950/90 p-4 backdrop-blur"
          onClick={() => setOpenItem(null)}
          role="presentation"
        >
          <button
            aria-label="close"
            className="absolute left-4 top-4 z-10 flex size-10 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-white/20"
            onClick={() => setOpenItem(null)}
            type="button"
          >
            <X className="size-5" />
          </button>
          <div className="relative h-full max-h-[88vh] w-full max-w-5xl" onClick={(event) => event.stopPropagation()}>
            <Image
              alt={openItem.alt}
              className="object-contain"
              fill
              sizes="100vw"
              src={openItem.src}
              unoptimized={openItem.gif}
            />
          </div>
        </div>
      )}
    </section>
  );
}

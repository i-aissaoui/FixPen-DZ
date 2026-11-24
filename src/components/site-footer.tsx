import Link from "next/link";
import { PenLine } from "lucide-react";
import { t, type Lang } from "@/lib/i18n";

export default function SiteFooter({ lang }: { lang: Lang }) {
  return (
    <footer className="border-t border-slate-100 bg-white py-8">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-4 text-center sm:flex-row sm:px-6 lg:px-8">
        <div className="flex items-center gap-2">
          <span className="flex size-8 items-center justify-center rounded-lg bg-emerald-600 text-white">
            <PenLine className="size-4" />
          </span>
          <span dir="ltr" className="num text-sm font-black text-ink">FixPen DZ</span>
        </div>
        <p className="text-xs text-slate-500">© 2026 FixPen DZ. {t(lang, "footerRights")} · 69 ولاية 🇩🇿</p>
        <Link className="text-xs font-bold text-slate-500 underline-offset-4 hover:text-emerald-700 hover:underline" href="/admin">
          {t(lang, "adminLink")}
        </Link>
      </div>
    </footer>
  );
}

import type { Metadata } from "next";
import { Cairo, Inter } from "next/font/google";
import "./globals.css";

const cairo = Cairo({
  variable: "--font-cairo",
  subsets: ["arabic", "latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "FixPen DZ | قلم تصليح الخدوش والطلاء المائي",
  description:
    "قلم تصليح الطلاء المائي الأصلي بـ 20 لوناً جاهزاً. توصيل 69 ولاية والدفع عند الاستلام.",
  keywords: [
    "قلم تصليح الخدوش",
    "طلاء مائي",
    "FixPen DZ",
    "الدفع عند الاستلام",
    "تصليح الأثاث",
    "ريتوش السيارة",
  ],
  openGraph: {
    title: "FixPen DZ | قلم تصليح الخدوش والطلاء المائي",
    description: "20 لوناً دقيقاً جاهزاً، توصيل 69 ولاية، الدفع عند الاستلام.",
    locale: "ar_DZ",
    type: "website",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="ar" dir="rtl" className={`${cairo.variable} ${inter.variable} h-full antialiased`}>
      <body className="min-h-full bg-white text-slate-900">{children}</body>
    </html>
  );
}

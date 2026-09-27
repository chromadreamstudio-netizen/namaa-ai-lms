import type { Metadata } from "next";
import { Cairo } from "next/font/google";
import "./globals.css";

// استخدام خط كايرو ليعطي طابعاً عربياً احترافياً
const cairo = Cairo({ subsets: ["arabic"] });

export const metadata: Metadata = {
  title: "منصة نماء الذكية | Namaa AI LMS",
  description: "الجيل القادم من التعليم الإلكتروني بالذكاء الاصطناعي",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl">
      <body className={`${cairo.className} bg-slate-50 text-slate-900`}>
        {children}
      </body>
    </html>
  );
}
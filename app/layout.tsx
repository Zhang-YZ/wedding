import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "林屿 & 言初｜我们的婚礼",
  description: "记录爱与承诺的婚礼影像集。",
  icons: { icon: "/favicon.svg" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="zh-CN"><body>{children}</body></html>;
}

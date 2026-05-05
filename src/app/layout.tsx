import type { Metadata } from "next";
import {
  Anton,
  Bebas_Neue,
  JetBrains_Mono,
  Noto_Sans_Thai,
  Shippori_Mincho,
  Zen_Kaku_Gothic_New,
} from "next/font/google";
import "./globals.css";
import ChromeShell from "@/components/layout/ChromeShell";

const anton = Anton({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-anton",
  display: "swap",
});
const bebas = Bebas_Neue({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-bebas",
  display: "swap",
});
const mono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-mono",
  display: "swap",
});
const mincho = Shippori_Mincho({
  subsets: ["latin"],
  weight: ["500", "700", "800"],
  variable: "--font-mincho",
  display: "swap",
});
const zen = Zen_Kaku_Gothic_New({
  subsets: ["latin"],
  weight: ["400", "500", "700", "900"],
  variable: "--font-zen",
  display: "swap",
});
const thai = Noto_Sans_Thai({
  subsets: ["thai", "latin"],
  weight: ["400", "700"],
  variable: "--font-thai",
  display: "swap",
});

export const metadata: Metadata = {
  title: "JNX03 — Portfolio ／ Home",
  description:
    "Portfolio of Chawabhon Netisingha (JNX03) — creative developer working at the intersection of AI, accessibility, security, and design.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${anton.variable} ${bebas.variable} ${mono.variable} ${mincho.variable} ${zen.variable} ${thai.variable}`}
    >
      <body>
        <ChromeShell>{children}</ChromeShell>
      </body>
    </html>
  );
}

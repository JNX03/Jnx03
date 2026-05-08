import type { Metadata, Viewport } from "next";
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
import JsonLd from "@/components/seo/JsonLd";
import { SITE } from "@/lib/data";
import {
  ALTERNATE_LOCALES,
  BACKGROUND_COLOR,
  DEFAULT_DESCRIPTION,
  DEFAULT_TITLE,
  KEYWORDS,
  LOCALE,
  SITE_NAME,
  SITE_URL,
  THEME_COLOR,
} from "@/lib/seo";

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
  metadataBase: new URL(SITE_URL),
  title: {
    default: DEFAULT_TITLE,
    template: "%s ／ JNX03",
  },
  description: DEFAULT_DESCRIPTION,
  applicationName: SITE_NAME,
  authors: [{ name: SITE.fullName, url: SITE_URL }],
  creator: SITE.fullName,
  publisher: SITE.fullName,
  keywords: KEYWORDS,
  category: "portfolio",
  formatDetection: {
    email: false,
    telephone: false,
    address: false,
  },
  alternates: {
    canonical: "/",
    languages: {
      en: "/",
      "x-default": "/",
    },
  },
  openGraph: {
    type: "profile",
    siteName: SITE_NAME,
    title: DEFAULT_TITLE,
    description: DEFAULT_DESCRIPTION,
    url: SITE_URL,
    locale: LOCALE,
    alternateLocale: ALTERNATE_LOCALES,
    firstName: "Chawabhon",
    lastName: "Netisingha",
    username: "JNX03",
  },
  twitter: {
    card: "summary_large_image",
    title: DEFAULT_TITLE,
    description: DEFAULT_DESCRIPTION,
    creator: "@JNX03",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },
  manifest: "/manifest.webmanifest",
  referrer: "origin-when-cross-origin",
};

export const viewport: Viewport = {
  themeColor: THEME_COLOR,
  colorScheme: "light dark",
  width: "device-width",
  initialScale: 1,
};

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: SITE.fullName,
  alternateName: [SITE.name, SITE.nickEn, SITE.thaiName, SITE.thaiNick],
  givenName: "Chawabhon",
  familyName: "Netisingha",
  url: SITE_URL,
  image: `${SITE_URL}/opengraph-image`,
  description: DEFAULT_DESCRIPTION,
  email: "contact@jnx03.xyz",
  jobTitle: "Creative Developer",
  nationality: { "@type": "Country", name: "Thailand" },
  affiliation: [
    {
      "@type": "EducationalOrganization",
      name: "The Prince Royal's College",
    },
    {
      "@type": "Organization",
      name: SITE.startup.name,
      url: SITE.startup.url,
    },
  ],
  knowsAbout: [
    "Artificial Intelligence",
    "Accessibility",
    "Security Research",
    "Vulnerability Disclosure",
    "Swift",
    "SwiftUI",
    "Web Development",
    "Robotics",
    "Design",
  ],
  sameAs: SITE.socials
    .filter((s) => s.href.startsWith("http"))
    .map((s) => s.href),
};

const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: SITE_NAME,
  alternateName: SITE.fullName,
  url: SITE_URL,
  description: DEFAULT_DESCRIPTION,
  inLanguage: ["en", "th", "ja"],
  author: {
    "@type": "Person",
    name: SITE.fullName,
    url: SITE_URL,
  },
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
        <JsonLd id="ld-person" data={personJsonLd} />
        <JsonLd id="ld-website" data={websiteJsonLd} />
        <ChromeShell>{children}</ChromeShell>
      </body>
    </html>
  );
}

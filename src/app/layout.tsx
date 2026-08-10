import type { Metadata, Viewport } from "next";
import { Geist, Noto_Sans_Thai } from "next/font/google";
import { SITE, SOCIALS } from "@/lib/data";
import "./globals.css";

const geist = Geist({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-geist",
});

const thai = Noto_Sans_Thai({
  subsets: ["thai"],
  display: "swap",
  variable: "--font-thai",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: `${SITE.fullName} — ${SITE.name}`,
    template: `%s — ${SITE.name}`,
  },
  description: `${SITE.role} from ${SITE.base}. AI, security, accessibility and design. Founder of Dekport, Apple Swift Student Challenge Distinguished Winner.`,
  keywords: [
    "JNX03",
    "Chawabhon Netisingha",
    "Jean",
    "Dekport",
    "Swift Student Challenge",
    "Neuralia",
    "Syntaxia",
    "Eibraille",
  ],
  authors: [{ name: SITE.fullName, url: SITE.url }],
  creator: SITE.fullName,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    siteName: SITE.name,
    url: SITE.url,
    locale: "en_US",
  },
  twitter: { card: "summary_large_image" },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#fafafa",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: SITE.fullName,
  alternateName: [SITE.name, SITE.nick, SITE.thaiName],
  url: SITE.url,
  email: SITE.email,
  jobTitle: SITE.role,
  address: { "@type": "PostalAddress", addressLocality: SITE.base },
  sameAs: SOCIALS.filter((s) => s.href.startsWith("http")).map((s) => s.href),
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${geist.variable} ${thai.variable}`}>
      <body>
        <main>{children}</main>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </body>
    </html>
  );
}

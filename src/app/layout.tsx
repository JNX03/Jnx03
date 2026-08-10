import type { Metadata, Viewport } from "next";
import { Geist, Noto_Sans_Thai } from "next/font/google";
import JsonLd from "@/components/JsonLd";
import EasterEgg from "@/components/EasterEgg";
import { AWARDS, SITE, SOCIALS } from "@/lib/data";
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
  alternates: {
    canonical: "/",
    types: { "application/atom+xml": "/atom.xml" },
  },
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

const person = {
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": `${SITE.url}#person`,
  name: SITE.fullName,
  alternateName: [SITE.name, SITE.nick, SITE.thaiName],
  url: SITE.url,
  email: SITE.email,
  jobTitle: SITE.role,
  nationality: "Thai",
  address: { "@type": "PostalAddress", addressLocality: SITE.base, addressCountry: "TH" },
  alumniOf: { "@type": "EducationalOrganization", name: "The Prince Royal's College" },
  worksFor: { "@type": "Organization", name: "Dekport", url: "https://dekport.com" },
  knowsAbout: [
    "Artificial intelligence",
    "Machine learning",
    "Security research",
    "Accessibility",
    "Swift",
    "Robotics",
  ],
  award: AWARDS.slice(0, 6).map((a) => `${a.title} — ${a.place}`),
  sameAs: SOCIALS.filter((s) => s.href.startsWith("http")).map((s) => s.href),
};

const website = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${SITE.url}#website`,
  url: SITE.url,
  name: `${SITE.fullName} — ${SITE.name}`,
  inLanguage: "en",
  publisher: { "@id": `${SITE.url}#person` },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${geist.variable} ${thai.variable}`}>
      <body>
        <div className="bg" aria-hidden="true" />
        <main>{children}</main>
        <EasterEgg />
        <JsonLd data={[person, website]} />
      </body>
    </html>
  );
}

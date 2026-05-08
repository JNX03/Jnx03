import type { Metadata } from "next";
import SocialList from "@/components/sections/SocialList";
import JsonLd from "@/components/seo/JsonLd";
import { SITE } from "@/lib/data";
import { SITE_URL, ogImage } from "@/lib/seo";

const CONTACT_DESCRIPTION =
  "Get in touch with Chawabhon Netisingha (JNX03). Open to commissions, collaborations, internships, and global competitions — especially around AI, accessibility, security, or design. Reply within 24 hours.";

export const metadata: Metadata = {
  title: "Contact",
  description: CONTACT_DESCRIPTION,
  alternates: { canonical: "/contact" },
  openGraph: {
    type: "website",
    title: "Contact ／ JNX03",
    description: CONTACT_DESCRIPTION,
    url: "/contact",
    images: ogImage({ path: "/contact/opengraph-image" }),
  },
  twitter: {
    title: "Contact ／ JNX03",
    description: CONTACT_DESCRIPTION,
    images: ogImage({ path: "/contact/opengraph-image" }),
  },
};

const contactJsonLd = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  name: "Contact JNX03",
  url: `${SITE_URL}/contact`,
  description: CONTACT_DESCRIPTION,
  mainEntity: {
    "@type": "Person",
    name: SITE.fullName,
    alternateName: [SITE.name, SITE.nickEn],
    url: SITE_URL,
    email: "contact@jnx03.xyz",
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "professional",
      email: "contact@jnx03.xyz",
      availableLanguage: ["English", "Thai", "Japanese"],
    },
    sameAs: SITE.socials
      .filter((s) => s.href.startsWith("http"))
      .map((s) => s.href),
  },
};

export default function ContactPage() {
  return (
    <section className="contact" style={{ padding: "160px 0 140px" }}>
      <JsonLd id="ld-contact" data={contactJsonLd} />
      <div className="container">
        <div
          className="crumb f-mono"
          style={{
            color: "#fff",
            opacity: 0.7,
            letterSpacing: "0.3em",
            fontSize: 11,
            display: "flex",
            gap: 14,
            marginBottom: 24,
          }}
        >
          <span>JNX03</span>
          <span>／</span>
          <span style={{ color: "var(--accent)" }}>CH.06</span>
          <span>／</span>
          <span>FINAL CONTACT</span>
        </div>

        <div className="contact-cta reveal">
          <div>
            <div className="big">
              <span>LET&apos;S MAKE</span>
              <br />
              <span className="outline">SOMETHING</span>
              <br />
              <span className="accent">EPIC</span>
              <span>.</span>
            </div>
            <p>
              I&apos;m a high-school developer in Thailand. Open to commissions, collaborations, internships,
              and global competitions — especially around AI, accessibility, security, or design. Reach out
              via any channel below.
            </p>
            <div
              style={{
                marginTop: 20,
                display: "flex",
                gap: 14,
                flexWrap: "wrap",
                fontFamily: "var(--font-mono), monospace",
                fontSize: 11,
                letterSpacing: "0.25em",
                opacity: 0.7,
              }}
            >
              <span>● AVAILABLE</span>
              <span>REPLY ＜ 24H</span>
              <span>EN ／ TH ／ JP (LIMITED)</span>
            </div>
          </div>
          <SocialList />
        </div>
      </div>
    </section>
  );
}

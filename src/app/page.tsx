import type { Metadata } from "next";
import Hero from "@/components/home/Hero";
import FeaturedAwards from "@/components/home/FeaturedAwards";
import FeaturedWorks from "@/components/home/FeaturedWorks";
import DividerMarquee from "@/components/home/DividerMarquee";
import NavLink from "@/components/layout/NavLink";
import JsonLd from "@/components/seo/JsonLd";
import { SITE } from "@/lib/data";
import { DEFAULT_DESCRIPTION, DEFAULT_TITLE, SITE_URL, ogImage } from "@/lib/seo";

export const metadata: Metadata = {
  title: {
    absolute: DEFAULT_TITLE,
  },
  description: DEFAULT_DESCRIPTION,
  alternates: { canonical: "/" },
  openGraph: {
    title: DEFAULT_TITLE,
    description: DEFAULT_DESCRIPTION,
    url: "/",
    images: ogImage(),
  },
  twitter: {
    title: DEFAULT_TITLE,
    description: DEFAULT_DESCRIPTION,
    images: ogImage(),
  },
};

const homeJsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfilePage",
  name: DEFAULT_TITLE,
  url: SITE_URL,
  description: DEFAULT_DESCRIPTION,
  mainEntity: {
    "@type": "Person",
    name: SITE.fullName,
    alternateName: SITE.name,
    url: SITE_URL,
  },
};

export default function HomePage() {
  return (
    <>
      <JsonLd id="ld-home" data={homeJsonLd} />
      <Hero />

      <section className="section-pad" style={{ background: "var(--paper)" }}>
        <div className="container">
          <div className="section-head reveal">
            <div>
              <div className="num">#01 / OVERVIEW</div>
              <h2>
                <span className="jp">主要受賞</span>HEADLINE
              </h2>
            </div>
            <div className="meta">
              FEATURED ／ 4 AWARDS
              <br />
              2024 — 2026
            </div>
          </div>

          <FeaturedAwards />

          <div style={{ textAlign: "center", marginTop: 48 }}>
            <NavLink
              href="/awards"
              className="f-anton"
              style={{
                fontSize: 18,
                letterSpacing: "0.25em",
                borderBottom: "2px solid var(--accent)",
                paddingBottom: 6,
              }}
            >
              SEE ALL 18 AWARDS →
            </NavLink>
          </div>
        </div>
      </section>

      <DividerMarquee />

      <section className="works section-pad">
        <div className="container">
          <div className="section-head reveal">
            <div>
              <div className="num" style={{ background: "var(--navy-deep)" }}>
                #02 / WORKS
              </div>
              <h2>
                <span className="jp">代表作</span>SELECTED WORKS
              </h2>
            </div>
            <div className="meta">FEATURED 3 ／ SEE ALL →</div>
          </div>

          <FeaturedWorks />

          <div style={{ textAlign: "center", marginTop: 48 }}>
            <NavLink
              href="/works"
              className="f-anton"
              style={{
                fontSize: 18,
                letterSpacing: "0.25em",
                color: "#fff",
                borderBottom: "2px solid var(--accent)",
                paddingBottom: 6,
              }}
            >
              VIEW ALL PROJECTS →
            </NavLink>
          </div>
        </div>
      </section>
    </>
  );
}

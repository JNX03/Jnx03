import type { Metadata } from "next";
import PageHead from "@/components/page/PageHead";
import CveCard from "@/components/sections/CveCard";
import JsonLd from "@/components/seo/JsonLd";
import { CVES, SITE } from "@/lib/data";
import { SITE_URL, ogImage } from "@/lib/seo";

const RESEARCH_DESCRIPTION =
  "Published security research and academic work by Chawabhon Netisingha (JNX03). 7 CVEs assigned in 2026, plus a peer-reviewed paper on Zenodo with permanent DOI.";

export const metadata: Metadata = {
  title: "Research",
  description: RESEARCH_DESCRIPTION,
  alternates: { canonical: "/research" },
  openGraph: {
    type: "website",
    title: "Research ／ JNX03",
    description: RESEARCH_DESCRIPTION,
    url: "/research",
    images: ogImage({ path: "/research/opengraph-image" }),
  },
  twitter: {
    title: "Research ／ JNX03",
    description: RESEARCH_DESCRIPTION,
    images: ogImage({ path: "/research/opengraph-image" }),
  },
};

const cveListJsonLd = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Published CVEs by JNX03",
  description: RESEARCH_DESCRIPTION,
  url: `${SITE_URL}/research`,
  numberOfItems: CVES.length,
  itemListElement: CVES.map((c, i) => ({
    "@type": "ListItem",
    position: i + 1,
    item: {
      "@type": "TechArticle",
      headline: c.id,
      identifier: c.id,
      description: c.desc,
      url: `https://www.cve.org/CVERecord?id=${c.id}`,
      author: {
        "@type": "Person",
        name: SITE.fullName,
        url: SITE_URL,
      },
    },
  })),
};

const paperJsonLd = {
  "@context": "https://schema.org",
  "@type": "ScholarlyArticle",
  headline: "Published academic research (Zenodo)",
  identifier: "10.5281/zenodo.19472287",
  url: "https://doi.org/10.5281/zenodo.19472287",
  datePublished: "2026",
  author: {
    "@type": "Person",
    name: SITE.fullName,
    url: SITE_URL,
  },
  publisher: { "@type": "Organization", name: "Zenodo" },
};

export default function ResearchPage() {
  return (
    <>
      <JsonLd id="ld-research-cves" data={cveListJsonLd} />
      <JsonLd id="ld-research-paper" data={paperJsonLd} />
      <PageHead
        num="05"
        label="RESEARCH"
        jpLabel="研究・脆弱性"
        ep="05"
        epLabel="CLASSIFIED FILES"
        lede="Published security research (CVEs) and academic work. 7 CVEs assigned in 2026 — see classified files below."
      />

      <section className="research section-pad">
        <div className="container">
          <div className="section-head reveal">
            <div>
              <div className="num">#01 / CVE</div>
              <h2>
                <span className="jp">脆弱性報告</span>CVE LEDGER
              </h2>
            </div>
            <div className="meta">7 PUBLISHED ／ 2026</div>
          </div>

          <div className="cve-grid">
            {CVES.map((c) => (
              <CveCard key={c.id} c={c} />
            ))}
          </div>

          <div className="research-paper reveal">
            <div>
              <span
                className="f-mono"
                style={{ color: "var(--accent)", fontSize: 11, letterSpacing: "0.25em" }}
              >
                PEER-REVIEWED ／ ZENODO
              </span>
              <h3>Published academic research</h3>
              <p>
                An archived research paper on Zenodo with permanent DOI. Details research conducted alongside
                competition and product work.
              </p>
              <a
                className="doi"
                href="https://doi.org/10.5281/zenodo.19472287"
                target="_blank"
                rel="noopener"
              >
                DOI: 10.5281/zenodo.19472287 ↗
              </a>
            </div>
            <div className="stamp-box">
              <div className="big">DOI</div>
              <div className="small">VERIFIED ／ ZENODO</div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

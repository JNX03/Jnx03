import type { Metadata } from "next";
import PageHead from "@/components/page/PageHead";
import WorkRow from "@/components/sections/WorkRow";
import JsonLd from "@/components/seo/JsonLd";
import { PROJECTS, SITE } from "@/lib/data";
import { SITE_URL, ogImage } from "@/lib/seo";

const WORKS_DESCRIPTION =
  "Selected works by Chawabhon Netisingha (JNX03): apps, tools, and a startup. Across SwiftUI, web, robotics tooling, and Thai language input — including Neuralia, Syntaxia, Eibraille, and Dekport.com.";

export const metadata: Metadata = {
  title: "Works",
  description: WORKS_DESCRIPTION,
  alternates: { canonical: "/works" },
  openGraph: {
    type: "website",
    title: "Works ／ JNX03",
    description: WORKS_DESCRIPTION,
    url: "/works",
    images: ogImage({ path: "/works/opengraph-image" }),
  },
  twitter: {
    title: "Works ／ JNX03",
    description: WORKS_DESCRIPTION,
    images: ogImage({ path: "/works/opengraph-image" }),
  },
};

const worksJsonLd = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Selected works by Chawabhon Netisingha (JNX03)",
  description: WORKS_DESCRIPTION,
  url: `${SITE_URL}/works`,
  numberOfItems: PROJECTS.length,
  itemListElement: PROJECTS.map((p, i) => ({
    "@type": "ListItem",
    position: i + 1,
    item: {
      "@type": "CreativeWork",
      name: p.title,
      alternateName: p.jp,
      description: p.desc,
      keywords: p.tags.join(", "),
      dateCreated: p.year,
      ...(p.href ? { url: p.href } : {}),
      creator: {
        "@type": "Person",
        name: SITE.fullName,
        url: SITE_URL,
      },
    },
  })),
};

export default function WorksPage() {
  return (
    <>
      <JsonLd id="ld-works" data={worksJsonLd} />
      <PageHead
        num="04"
        label="WORKS"
        jpLabel="制作実績"
        ep="04"
        epLabel="SELECTED WORKS"
        lede="Apps, tools, and a startup. Across SwiftUI, Web, robotics tooling, and Thai language input."
      />

      <section className="works section-pad">
        <div className="container">
          <div className="section-head reveal">
            <div>
              <div className="num" style={{ background: "var(--navy-deep)" }}>
                #01 / PROJECTS
              </div>
              <h2>
                <span className="jp">プロジェクト</span>PROJECTS
              </h2>
            </div>
            <div className="meta">7 PROJECTS ／ CLICK A ROW</div>
          </div>
          <div className="work-list">
            {PROJECTS.map((w) => (
              <WorkRow key={w.n} w={w} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

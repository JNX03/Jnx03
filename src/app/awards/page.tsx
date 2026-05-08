import type { Metadata } from "next";
import PageHead from "@/components/page/PageHead";
import AwardCard from "@/components/sections/AwardCard";
import TimelineRow from "@/components/sections/TimelineRow";
import JsonLd from "@/components/seo/JsonLd";
import { AWARDS, SITE, TIMELINE } from "@/lib/data";
import { SITE_URL, ogImage } from "@/lib/seo";

const AWARDS_DESCRIPTION =
  "18 awards across AI, software, robotics, accessibility, and security — from local Thai championships to Apple's Swift Student Challenge Distinguished Winner. Earned by Chawabhon Netisingha (JNX03).";

export const metadata: Metadata = {
  title: "Awards",
  description: AWARDS_DESCRIPTION,
  alternates: { canonical: "/awards" },
  openGraph: {
    type: "website",
    title: "Awards ／ JNX03",
    description: AWARDS_DESCRIPTION,
    url: "/awards",
    images: ogImage({ path: "/awards/opengraph-image" }),
  },
  twitter: {
    title: "Awards ／ JNX03",
    description: AWARDS_DESCRIPTION,
    images: ogImage({ path: "/awards/opengraph-image" }),
  },
};

const awardsItemListJsonLd = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Awards earned by Chawabhon Netisingha (JNX03)",
  description: AWARDS_DESCRIPTION,
  url: `${SITE_URL}/awards`,
  numberOfItems: AWARDS.length,
  itemListElement: AWARDS.map((a, i) => ({
    "@type": "ListItem",
    position: i + 1,
    item: {
      "@type": "Award",
      name: a.title,
      description: a.desc,
      awardedBy: a.sub,
      dateAwarded: a.yr,
      ...(a.link ? { url: a.link } : {}),
      recipient: {
        "@type": "Person",
        name: SITE.fullName,
        url: SITE_URL,
      },
    },
  })),
};

const collectionJsonLd = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  name: "Awards ／ JNX03",
  url: `${SITE_URL}/awards`,
  description: AWARDS_DESCRIPTION,
  hasPart: TIMELINE.map((t) => ({
    "@type": "Event",
    name: t.title,
    startDate: t.yr,
    description: t.desc,
  })),
};

export default function AwardsPage() {
  return (
    <>
      <JsonLd id="ld-awards-list" data={awardsItemListJsonLd} />
      <JsonLd id="ld-awards-collection" data={collectionJsonLd} />
      <PageHead
        num="03"
        label="AWARDS"
        jpLabel="受賞歴"
        ep="03"
        epLabel="TROPHY ROOM"
        lede="18 awards across AI, software, robotics, accessibility, and security — from local Thai championships to Apple's Swift Student Challenge."
      />

      <section className="awards section-pad">
        <div className="container">
          <div className="section-head reveal">
            <div>
              <div className="num">#01 / FULL LIST</div>
              <h2>
                <span className="jp">全受賞一覧</span>ALL 18
              </h2>
            </div>
            <div className="meta">2023 — 2026 ／ 18 ENTRIES</div>
          </div>

          <div className="award-grid">
            {AWARDS.map((a) => (
              <AwardCard key={a.title} a={a} />
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad" style={{ background: "#fff" }}>
        <div className="container">
          <div className="section-head reveal">
            <div>
              <div className="num" style={{ background: "#fff" }}>
                #02 / TIMELINE
              </div>
              <h2>
                <span className="jp">年表</span>TIMELINE
              </h2>
            </div>
            <div className="meta">CAREER TIMELINE</div>
          </div>
          <div className="tl-list">
            {TIMELINE.map((t) => (
              <TimelineRow key={t.title} t={t} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

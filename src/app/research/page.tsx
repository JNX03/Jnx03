import type { Metadata } from "next";
import PageHead from "@/components/page/PageHead";
import CveCard from "@/components/sections/CveCard";
import { CVES } from "@/lib/data";

export const metadata: Metadata = {
  title: "JNX03 — Research",
};

export default function ResearchPage() {
  return (
    <>
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

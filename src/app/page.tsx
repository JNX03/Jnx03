import Hero from "@/components/home/Hero";
import FeaturedAwards from "@/components/home/FeaturedAwards";
import FeaturedWorks from "@/components/home/FeaturedWorks";
import DividerMarquee from "@/components/home/DividerMarquee";
import NavLink from "@/components/layout/NavLink";

export default function HomePage() {
  return (
    <>
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

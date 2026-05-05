import type { Metadata } from "next";
import PageHead from "@/components/page/PageHead";
import WorkRow from "@/components/sections/WorkRow";
import { PROJECTS } from "@/lib/data";

export const metadata: Metadata = {
  title: "JNX03 — Works",
};

export default function WorksPage() {
  return (
    <>
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

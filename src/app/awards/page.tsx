import type { Metadata } from "next";
import PageHead from "@/components/page/PageHead";
import AwardCard from "@/components/sections/AwardCard";
import TimelineRow from "@/components/sections/TimelineRow";
import { AWARDS, TIMELINE } from "@/lib/data";

export const metadata: Metadata = {
  title: "JNX03 — Awards",
};

export default function AwardsPage() {
  return (
    <>
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

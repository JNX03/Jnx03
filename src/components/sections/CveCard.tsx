import type { Cve } from "@/lib/data";

export default function CveCard({ c }: { c: Cve }) {
  return (
    <article className="cve-card reveal">
      <div className="head">
        <span className="id">{c.id}</span>
        <span className="sev">{c.sev}</span>
      </div>
      <div className="desc">{c.desc}</div>
      <div className="meta">JNX03 ／ SECURITY RESEARCH</div>
    </article>
  );
}

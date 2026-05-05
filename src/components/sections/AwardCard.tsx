import type { Award } from "@/lib/data";

export default function AwardCard({ a }: { a: Award }) {
  return (
    <article className={`award-card ${a.featured ? "featured" : ""} reveal`}>
      <div className="badge">
        <span className="yr">{a.yr}</span>
        <span>AWARD</span>
      </div>
      <div className="body">
        <span className="place">{a.place}</span>
        <h3>{a.title}</h3>
        <p>{a.sub}</p>
        <p style={{ opacity: 0.7 }}>{a.desc}</p>
        <div className="meta">
          <span>{a.tag}</span>
          {a.link ? (
            <a href={a.link} target="_blank" rel="noopener">
              ↗ VIEW
            </a>
          ) : null}
        </div>
      </div>
    </article>
  );
}

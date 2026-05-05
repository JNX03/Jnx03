import { PROJECTS } from "@/lib/data";

export default function FeaturedWorks() {
  const top3 = PROJECTS.slice(0, 3);
  return (
    <div className="work-list">
      {top3.map((w) => (
        <a
          key={w.n}
          className="work-row reveal"
          href={w.href ?? "#"}
          target={w.href ? "_blank" : undefined}
          rel={w.href ? "noopener" : undefined}
        >
          <div className="num">{w.n}</div>
          <div className="title">
            {w.title}
            <span className="jp">{w.jp}</span>
          </div>
          <div className="desc">
            {w.desc}
            <div className="tags">
              {w.tags.map((t) => (
                <span key={t} className="tag">
                  {t}
                </span>
              ))}
            </div>
          </div>
          <div className="arrow">{w.year} →</div>
        </a>
      ))}
    </div>
  );
}

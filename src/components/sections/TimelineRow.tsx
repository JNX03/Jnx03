import type { TimelineEntry } from "@/lib/data";

export default function TimelineRow({ t }: { t: TimelineEntry }) {
  return (
    <div className={`tl-row ${t.featured ? "featured" : ""} reveal`}>
      <div className="when">
        {t.yr}
        <span className="yr-jp">{t.jp}</span>
      </div>
      <div className="what">
        <h4>{t.title}</h4>
        <p>{t.desc}</p>
        <span className="tag">{t.tag}</span>
      </div>
    </div>
  );
}

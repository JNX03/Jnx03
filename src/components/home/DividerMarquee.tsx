const PHRASES = [
  "PORTFOLIO ／ JNX03",
  "EPISODE 02",
  "SELECTED WORKS",
  "制作実績",
  "NOW SHOWING",
  "✦ ON AIR ✦",
];

export default function DividerMarquee() {
  const tripled = [...PHRASES, ...PHRASES, ...PHRASES];
  return (
    <div className="divider-marquee" aria-hidden="true">
      <div className="track">
        {tripled.map((p, i) => (
          <span key={`${p}-${i}`}>{p}</span>
        ))}
      </div>
    </div>
  );
}

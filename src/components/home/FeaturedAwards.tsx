type Featured = {
  yr: string;
  brand: string;
  place: string;
  title: string;
  desc: string;
};

const FEATURED: Featured[] = [
  {
    yr: "2026",
    brand: "APPLE",
    place: "DISTINGUISHED WINNER",
    title: "Swift Student Challenge 2026 — Neuralia",
    desc: "Top tier at Apple's flagship student challenge. Distinguished Winner for Neuralia.",
  },
  {
    yr: "2025",
    brand: "APPLE",
    place: "WINNER",
    title: "Swift Student Challenge 2025 — Syntaxia",
    desc: "One of 350 winners worldwide for Syntaxia, an educational SwiftUI playground.",
  },
  {
    yr: "2024",
    brand: "CMKL",
    place: "1ST PLACE",
    title: "CMKL AI Innovator Award — Eibraille",
    desc: "Won 1st for Eibraille, an AI-driven Braille assistive tool.",
  },
  {
    yr: "2025",
    brand: "NIA",
    place: "TOP 20 FINALIST",
    title: "Thailand Innovation Awards 2025",
    desc: "Selected nationally among the top 20 innovators.",
  },
];

export default function FeaturedAwards() {
  return (
    <div
      className="featured-grid"
      style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 24 }}
    >
      {FEATURED.map((f) => (
        <div key={f.title} className="award-card featured reveal">
          <div className="badge">
            <span className="yr">{f.yr}</span>
            <span>{f.brand}</span>
          </div>
          <div className="body">
            <span className="place">{f.place}</span>
            <h3>{f.title}</h3>
            <p style={{ opacity: 0.75 }}>{f.desc}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

type Theme = "on-light" | "on-dark";

export default function Rails({ theme }: { theme: Theme }) {
  const cls = theme === "on-dark" ? "light" : "";
  return (
    <>
      <aside className="rail left" aria-hidden="true">
        <div className={`vtext ${cls}`}>PORTFOLIO ／ 2025 — 2026</div>
        <div className={`stamp ${cls}`}>
          JNX
          <br />
          03
        </div>
        <div className={`vtext en ${cls}`}>SCROLL ▼ TO EXPLORE</div>
      </aside>
      <aside className="rail right" aria-hidden="true">
        <div className={`vtext ${cls}`}>公式ポートフォリオ・サイト</div>
        <div className={`stamp ${cls}`} style={{ transform: "rotate(8deg)" }}>
          VOL
          <br />
          01
        </div>
        <div className={`vtext en ${cls}`}>SINCE / 2024</div>
      </aside>
    </>
  );
}

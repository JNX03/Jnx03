export const OG_SIZE = { width: 1200, height: 630 } as const;
export const OG_CONTENT_TYPE = "image/png";

const NAVY = "#0a1228";
const NAVY_DEEP = "#050917";
const PAPER = "#f4f5f7";
const ACCENT = "#1f5cff";
const ACCENT_HOT = "#ff2d3a";
const ACCENT_YELLOW = "#ffd400";

export type OgTemplateProps = {
  title: string;
  jp: string;
  sub?: string;
  ep?: string;
};

export function ogTemplate({ title, jp, sub, ep = "EP.00" }: OgTemplateProps) {
  return (
    <div
      style={{
        height: "100%",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        background: `linear-gradient(135deg, ${NAVY_DEEP} 0%, ${NAVY} 60%, #122050 100%)`,
        color: PAPER,
        fontFamily: "sans-serif",
        position: "relative",
        padding: "56px 72px",
        justifyContent: "space-between",
      }}
    >
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
          display: "flex",
        }}
      />

      <div
        style={{
          position: "absolute",
          right: -120,
          top: -120,
          width: 420,
          height: 420,
          borderRadius: 9999,
          background: `radial-gradient(circle at center, ${ACCENT}55 0%, transparent 70%)`,
          display: "flex",
        }}
      />

      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          fontSize: 18,
          letterSpacing: "0.35em",
          color: "#9aa6c8",
          fontFamily: "monospace",
        }}
      >
        <div style={{ display: "flex", gap: 18, alignItems: "center" }}>
          <div
            style={{
              width: 12,
              height: 12,
              borderRadius: 9999,
              background: ACCENT_HOT,
              display: "flex",
            }}
          />
          <span>JNX03 ／ PORTFOLIO</span>
        </div>
        <div style={{ display: "flex", gap: 14 }}>
          <span>{ep}</span>
          <span>／</span>
          <span style={{ color: ACCENT_YELLOW }}>2026</span>
        </div>
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
        <div
          style={{
            display: "flex",
            fontSize: 28,
            letterSpacing: "0.5em",
            color: ACCENT_YELLOW,
            fontFamily: "monospace",
          }}
        >
          {jp}
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 132,
            fontWeight: 900,
            lineHeight: 1,
            letterSpacing: "-0.02em",
            color: PAPER,
          }}
        >
          {title}
        </div>
        {sub ? (
          <div
            style={{
              display: "flex",
              fontSize: 28,
              color: "#c2cbe8",
              maxWidth: 980,
              lineHeight: 1.35,
            }}
          >
            {sub}
          </div>
        ) : null}
      </div>

      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          fontSize: 18,
          fontFamily: "monospace",
          color: "#9aa6c8",
          letterSpacing: "0.25em",
        }}
      >
        <div style={{ display: "flex", gap: 18, alignItems: "center" }}>
          <span style={{ color: ACCENT }}>●</span>
          <span>WWW.JNX03.XYZ</span>
        </div>
        <div style={{ display: "flex", gap: 14 }}>
          <span>CHAWABHON NETISINGHA</span>
          <span>／</span>
          <span style={{ color: PAPER }}>JEAN</span>
        </div>
      </div>
    </div>
  );
}

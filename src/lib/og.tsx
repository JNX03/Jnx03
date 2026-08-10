import { ImageResponse } from "next/og";
import { SITE } from "./data";

export const OG_SIZE = { width: 1200, height: 630 };
export const OG_CONTENT_TYPE = "image/png";

/** One card design for every route, so shared links stay recognisable. */
export function renderOg(title: string, subtitle: string) {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          background: "#fafafa",
          padding: 56,
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            background: "#ffffff",
            border: "1px solid #f3f3f3",
            borderRadius: 16,
            padding: 64,
          }}
        >
          <div style={{ display: "flex", fontSize: 26, color: "#9b9b9b" }}>
            {SITE.fullName}
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
            <div style={{ display: "flex", fontSize: 66, color: "#4e4e4e", fontWeight: 500 }}>
              {title}
            </div>
            <div style={{ display: "flex", fontSize: 30, color: "#9b9b9b" }}>{subtitle}</div>
          </div>

          <div style={{ display: "flex", fontSize: 26, color: "#9b9b9b" }}>
            {SITE.url.replace("https://", "")}
          </div>
        </div>
      </div>
    ),
    OG_SIZE,
  );
}

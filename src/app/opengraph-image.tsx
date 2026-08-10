import { ImageResponse } from "next/og";
import { SITE } from "@/lib/data";

export const alt = `${SITE.fullName} — ${SITE.name}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
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
          <div style={{ display: "flex", fontSize: 26, color: "#9b9b9b" }}>{SITE.url}</div>

          <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
            <div style={{ display: "flex", fontSize: 66, color: "#4e4e4e", fontWeight: 500 }}>
              {SITE.fullName}
            </div>
            <div style={{ display: "flex", fontSize: 32, color: "#9b9b9b" }}>
              {SITE.role} — AI, security, accessibility
            </div>
          </div>

          <div style={{ display: "flex", fontSize: 26, color: "#9b9b9b" }}>
            {SITE.name} — {SITE.base}
          </div>
        </div>
      </div>
    ),
    size,
  );
}

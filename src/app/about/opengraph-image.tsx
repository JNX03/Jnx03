import { ImageResponse } from "next/og";
import { OG_CONTENT_TYPE, OG_SIZE, ogTemplate } from "@/lib/og-template";

export const alt = "About JNX03 — Chawabhon Netisingha. High-school developer from Thailand.";
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;

export default async function OpengraphImage() {
  return new ImageResponse(
    ogTemplate({
      title: "ABOUT",
      jp: "人物紹介",
      sub: "High-school developer from Thailand. AI, accessibility, security research, and design — all in one workflow.",
      ep: "EP.02",
    }),
    { ...size },
  );
}

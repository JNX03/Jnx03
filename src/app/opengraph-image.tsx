import { ImageResponse } from "next/og";
import { OG_CONTENT_TYPE, OG_SIZE, ogTemplate } from "@/lib/og-template";

export const alt = "JNX03 — Chawabhon Netisingha. Creative developer. AI · Security · Accessibility · Design.";
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;

export default async function OpengraphImage() {
  return new ImageResponse(
    ogTemplate({
      title: "JNX03",
      jp: "ジェイ ・ エヌ ・ エックス ・ 〇 ・ 三",
      sub: "Chawabhon Netisingha ／ creative developer working at the intersection of AI, accessibility, security, and design.",
      ep: "EP.01",
    }),
    { ...size },
  );
}

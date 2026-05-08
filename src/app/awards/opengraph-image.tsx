import { ImageResponse } from "next/og";
import { OG_CONTENT_TYPE, OG_SIZE, ogTemplate } from "@/lib/og-template";

export const alt = "Awards — 18 awards across AI, software, robotics, accessibility, and security.";
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;

export default async function OpengraphImage() {
  return new ImageResponse(
    ogTemplate({
      title: "AWARDS",
      jp: "受賞歴",
      sub: "18 awards across AI, software, robotics, accessibility, and security — including Apple Swift Student Challenge Distinguished Winner.",
      ep: "EP.03",
    }),
    { ...size },
  );
}

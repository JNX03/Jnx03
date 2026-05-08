import { ImageResponse } from "next/og";
import { OG_CONTENT_TYPE, OG_SIZE, ogTemplate } from "@/lib/og-template";

export const alt = "Works — selected projects across SwiftUI, web, robotics, and Thai language input.";
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;

export default async function OpengraphImage() {
  return new ImageResponse(
    ogTemplate({
      title: "WORKS",
      jp: "制作実績",
      sub: "Apps, tools, and a startup. Across SwiftUI, web, robotics tooling, and Thai language input.",
      ep: "EP.04",
    }),
    { ...size },
  );
}

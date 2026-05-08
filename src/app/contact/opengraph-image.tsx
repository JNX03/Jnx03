import { ImageResponse } from "next/og";
import { OG_CONTENT_TYPE, OG_SIZE, ogTemplate } from "@/lib/og-template";

export const alt = "Contact JNX03 — open to commissions, collaborations, internships, and competitions.";
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;

export default async function OpengraphImage() {
  return new ImageResponse(
    ogTemplate({
      title: "CONTACT",
      jp: "通信",
      sub: "Open to commissions, collaborations, internships, and global competitions — especially around AI, accessibility, security, or design.",
      ep: "EP.06",
    }),
    { ...size },
  );
}

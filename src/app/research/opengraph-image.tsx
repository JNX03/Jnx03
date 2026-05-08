import { ImageResponse } from "next/og";
import { OG_CONTENT_TYPE, OG_SIZE, ogTemplate } from "@/lib/og-template";

export const alt = "Research — 7 published CVEs and peer-reviewed academic work on Zenodo.";
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;

export default async function OpengraphImage() {
  return new ImageResponse(
    ogTemplate({
      title: "RESEARCH",
      jp: "研究・脆弱性",
      sub: "7 published CVEs and peer-reviewed academic research with permanent DOI on Zenodo.",
      ep: "EP.05",
    }),
    { ...size },
  );
}

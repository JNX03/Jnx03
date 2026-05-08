import { SITE } from "@/lib/data";

export const SITE_URL = "https://www.jnx03.xyz";
export const SITE_NAME = "JNX03";
export const SITE_TAGLINE =
  "Chawabhon Netisingha — creative developer ／ AI · Security · Accessibility · Design";

export const DEFAULT_TITLE = "JNX03 ／ Chawabhon Netisingha — Portfolio";

export const DEFAULT_DESCRIPTION =
  "Portfolio of Chawabhon Netisingha (JNX03) — 17, Thailand. Creative developer working at the intersection of AI, accessibility, security research, and design. 18 awards. 7 published CVEs. Apple Swift Student Challenge Distinguished Winner.";

export const KEYWORDS = [
  "JNX03",
  "Jnx03",
  "Chawabhon Netisingha",
  "ชวภณ เนติสิงหะ",
  "Jean",
  "portfolio",
  "creative developer",
  "AI",
  "accessibility",
  "security research",
  "CVE",
  "Swift Student Challenge",
  "Apple WWDC",
  "Dekport",
  "Thailand",
  "high school developer",
  "Eibraille",
  "Neuralia",
  "Syntaxia",
];

export const LOCALE = "en_US";
export const ALTERNATE_LOCALES = ["th_TH", "ja_JP"];

export const THEME_COLOR = "#0a1228";
export const BACKGROUND_COLOR = "#f4f5f7";

export type OgImageInput = {
  path?: string;
  alt?: string;
};

export function ogImage({ path = "/opengraph-image", alt = SITE_TAGLINE }: OgImageInput = {}) {
  return [
    {
      url: path,
      width: 1200,
      height: 630,
      alt,
      type: "image/png" as const,
    },
  ];
}

export function absoluteUrl(path: string) {
  if (path.startsWith("http")) return path;
  return `${SITE_URL}${path.startsWith("/") ? "" : "/"}${path}`;
}

export { SITE };

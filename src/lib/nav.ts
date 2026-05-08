export type NavKey = "home" | "about" | "awards" | "works" | "research" | "contact";

export type NavEntry = {
  num: string;
  label: string;
  href: string;
  key: NavKey;
};

export const NAV: NavEntry[] = [
  { num: "01", label: "HOME", href: "/", key: "home" },
  { num: "02", label: "ABOUT", href: "/about", key: "about" },
  { num: "03", label: "AWARDS", href: "/awards", key: "awards" },
  { num: "04", label: "WORKS", href: "/works", key: "works" },
  { num: "05", label: "RESEARCH", href: "/research", key: "research" },
  { num: "06", label: "CONTACT", href: "/contact", key: "contact" },
];

export const JP_LABELS: Record<NavKey, string> = {
  home: "― 表紙 ―",
  about: "― 人物紹介 ―",
  awards: "― 受賞歴 ―",
  works: "― 制作実績 ―",
  research: "― 研究 ―",
  contact: "― 連絡先 ―",
};

export const CHAPTER_KANJI: Record<NavKey, string> = {
  home: "序",
  about: "人",
  awards: "賞",
  works: "作",
  research: "研",
  contact: "信",
};

export const RAIL_THEME: Record<NavKey, "on-light" | "on-dark"> = {
  home: "on-light",
  about: "on-light",
  awards: "on-light",
  works: "on-dark",
  research: "on-light",
  contact: "on-dark",
};

export function pathToKey(pathname: string): NavKey {
  if (pathname === "/" || pathname === "") return "home";
  const seg = pathname.split("/")[1];
  if (seg === "about" || seg === "awards" || seg === "works" || seg === "research" || seg === "contact") {
    return seg;
  }
  return "home";
}

export function keyToNav(key: NavKey): NavEntry {
  return NAV.find((n) => n.key === key) ?? NAV[0];
}

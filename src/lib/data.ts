export type Social = { name: string; handle: string; href: string };

export type Award = {
  yr: string;
  place: string;
  title: string;
  sub: string;
  desc: string;
  tag: string;
  link?: string;
  featured?: boolean;
};

export type Cve = { id: string; desc: string; sev: string };

export type Project = {
  n: string;
  title: string;
  jp: string;
  desc: string;
  tags: string[];
  year: string;
  href?: string;
};

export type TimelineEntry = {
  yr: string;
  jp: string;
  title: string;
  desc: string;
  tag: string;
  featured?: boolean;
};

export type TickerItem = {
  ep: string;
  en: string;
  jp: string;
  img: string;
  href: string;
};

export const SITE = {
  name: "JNX03",
  fullName: "Chawabhon Netisingha",
  thaiName: "ชวภณ เนติสิงหะ",
  thaiNick: "จีน",
  nickEn: "Jean",
  age: 17,
  base: "Thailand",
  startup: { name: "Dekport.com", url: "https://dekport.com" },
  socials: [
    { name: "EMAIL", handle: "contact@jnx03.xyz", href: "mailto:contact@jnx03.xyz" },
    { name: "GITHUB", handle: "@JNX03", href: "https://github.com/JNX03" },
    { name: "INSTAGRAM", handle: "@jxxn03z", href: "https://www.instagram.com/jxxn03z/" },
    { name: "LINKEDIN", handle: "chawabhon-netisingha", href: "https://www.linkedin.com/in/chawabhon-netisingha/" },
    { name: "YOUTUBE", handle: "@Jnx03", href: "https://www.youtube.com/@Jnx03" },
    { name: "KAGGLE", handle: "jxxn03x", href: "https://www.kaggle.com/jxxn03x" },
    { name: "HUGGINGFACE", handle: "Jnx03", href: "https://huggingface.co/Jnx03" },
  ] satisfies Social[],
};

export const AWARDS: Award[] = [
  {
    yr: "2026",
    place: "DISTINGUISHED WINNER",
    title: "Swift Student Challenge 2026",
    sub: "Apple — for project Neuralia",
    desc: "Recognized as a Distinguished Winner — Apple's top tier — for Neuralia, an app playground built with Swift.",
    link: "https://github.com/JNX03/Neuralia",
    tag: "APPLE / WWDC",
    featured: true,
  },
  {
    yr: "2025",
    place: "WINNER",
    title: "Swift Student Challenge 2025",
    sub: "Apple — for project Syntaxia",
    desc: "Selected among 350 winners worldwide for Syntaxia, an innovative educational app built with SwiftUI.",
    link: "https://github.com/JNX03/Syntaxia",
    tag: "APPLE / WWDC",
    featured: true,
  },
  {
    yr: "2024",
    place: "1ST PLACE",
    title: "CMKL AI Innovator Award 2024",
    sub: "CMKL University — for Eibraille",
    desc: "Won 1st place for Eibraille, an AI-driven assistive technology project for the visually impaired.",
    tag: "AI / ASSISTIVE",
    featured: true,
  },
  {
    yr: "2025",
    place: "WINNER",
    title: "MiT Moodeng AI Challenge",
    sub: "National AI competition",
    desc: "Took the top prize at the MiT Moodeng AI Challenge.",
    tag: "AI",
    featured: true,
  },
  {
    yr: "2025",
    place: "20 FINALISTS",
    title: "Thailand Innovation Awards (TIA) 2025",
    sub: "NIA — National Innovation Agency",
    desc: "Selected as one of the top 20 finalists nationally for innovation impact.",
    tag: "INNOVATION",
  },
  {
    yr: "2025",
    place: "NATIONAL ROUND",
    title: "National Software Contest (NSC) 2025",
    sub: "NECTEC — รอบประเทศ",
    desc: "Advanced to the national round of Thailand's flagship software competition.",
    tag: "SOFTWARE",
  },
  {
    yr: "2023",
    place: "MERIT",
    title: "Asia Pacific ICT Alliance (APICTA) 2023",
    sub: "International ICT awards",
    desc: "Merit Award at the regional APICTA awards — recognized across the Asia-Pacific.",
    tag: "INTERNATIONAL",
  },
  {
    yr: "2023",
    place: "MERIT",
    title: "Thailand ICT Awards 2023",
    sub: "National qualifier for APICTA",
    desc: "Merit award at the national ICT awards in Thailand.",
    tag: "NATIONAL",
  },
  {
    yr: "2025",
    place: "TOP 3 FINALIST",
    title: "Intel® AI Global Impact Festival",
    sub: "Thailand top 3",
    desc: "Top 3 finalist of Thailand at Intel's global AI festival.",
    tag: "AI / INTEL",
  },
  {
    yr: "2025",
    place: "FINALIST",
    title: "Thailand Cyber Talent 2025",
    sub: "Member of Team Kernel",
    desc: "Honorable achievement, finalist as a member of team Kernel.",
    tag: "CYBERSEC",
  },
  {
    yr: "2025",
    place: "FINALIST",
    title: "YUVAi — Global Youth Challenge",
    sub: "India AI Global Impact Challenge",
    desc: "Finalist; participated at the India AI Global Impact Challenge.",
    tag: "GLOBAL",
  },
  {
    yr: "2025",
    place: "INSPIRE 3RD",
    title: "FIRST Tech Challenge Thailand 2025 — Decode",
    sub: "Team PRCGCMinerva Gen 3",
    desc: "Inspire Award — 3rd place at FTC Thailand Decode season.",
    tag: "ROBOTICS",
  },
  {
    yr: "2024",
    place: "PRESENT AWARD",
    title: "The 6th Kibo Robot Programming Challenge",
    sub: "JAXA / international",
    desc: "Present Award at the international Kibo Robot Programming Challenge run from the ISS.",
    tag: "ROBOTICS / JAXA",
  },
  {
    yr: "2023",
    place: "3RD PLACE",
    title: "Kamalasai AI Robotics Thailand Championship #7",
    sub: "National",
    desc: "3rd place finish at Kamalasai's AI Robotics championship.",
    tag: "ROBOTICS",
  },
  {
    yr: "2024",
    place: "HONORARY MENTION",
    title: "Kamalasai AI & Technology Thailand Championship #8",
    sub: "National",
    desc: "Honorary Mention at the 8th edition.",
    tag: "AI",
  },
  {
    yr: "2023",
    place: "SILVER MEDAL",
    title: "PIM Robotics Playground 2023",
    sub: "เหรียญเงิน",
    desc: "Silver medal at PIM Robotics Playground.",
    tag: "ROBOTICS",
  },
  {
    yr: "2023",
    place: "QUALITY AWARD",
    title: "FIRST LEGO League Thailand 2023 — Powerplay",
    sub: "National",
    desc: "Quality Award at FLL Thailand Powerplay season.",
    tag: "ROBOTICS",
  },
  {
    yr: "2024",
    place: "HONORED",
    title: "รางวัลเชิดชูเกียรติ — โครงงานวิทยาศาสตร์",
    sub: "สาขาวิทยาศาสตร์ประยุกต์ (Eibraille)",
    desc: "Honored science-project award in applied science for Eibraille.",
    tag: "SCIENCE",
  },
];

export const CVES: Cve[] = [
  { id: "CVE-2026-5694", desc: "Vulnerability disclosure — assigned and published.", sev: "CVE" },
  { id: "CVE-2026-34891", desc: "Vulnerability disclosure — assigned and published.", sev: "CVE" },
  { id: "CVE-2026-3581", desc: "Vulnerability disclosure — assigned and published.", sev: "CVE" },
  { id: "CVE-2026-4032", desc: "Vulnerability disclosure — assigned and published.", sev: "CVE" },
  { id: "CVE-2026-4087", desc: "Vulnerability disclosure — assigned and published.", sev: "CVE" },
  { id: "CVE-2026-4607", desc: "Vulnerability disclosure — assigned and published.", sev: "CVE" },
  { id: "CVE-2026-1291", desc: "Vulnerability disclosure — assigned and published.", sev: "CVE" },
];

export const PROJECTS: Project[] = [
  {
    n: "PJ.01",
    title: "Neuralia",
    jp: "ニューラリア",
    desc: "Swift Student Challenge 2026 Distinguished Winner. Neural-network-themed Swift app playground exploring how AI thinks.",
    tags: ["SWIFT", "AI", "WWDC26"],
    year: "2026",
    href: "https://github.com/JNX03/Neuralia",
  },
  {
    n: "PJ.02",
    title: "Syntaxia",
    jp: "シンタクシア",
    desc: "Swift Student Challenge 2025 Winner. Educational app playground built with SwiftUI to teach programming fundamentals.",
    tags: ["SWIFT", "EDU", "WWDC25"],
    year: "2025",
    href: "https://github.com/JNX03/Syntaxia",
  },
  {
    n: "PJ.03",
    title: "Eibraille",
    jp: "エイブレイル",
    desc: "AI-driven assistive technology for the visually impaired — translates between print and Braille. CMKL AI Innovator 1st Place.",
    tags: ["AI", "ASSISTIVE", "CV"],
    year: "2024",
  },
  {
    n: "PJ.04",
    title: "Dekport.com",
    jp: "デクポート",
    desc: "Founder. A startup platform for Thai students — portfolios, opportunities, and community.",
    tags: ["STARTUP", "WEB", "EDU"],
    year: "2024 — Now",
    href: "https://dekport.com",
  },
  {
    n: "PJ.05",
    title: "VingVis",
    jp: "ヴィングヴィス",
    desc: "Active side project under GCMinerva. Visualization tooling for FTC robotics teams.",
    tags: ["ROBOTICS", "VIZ", "FTC"],
    year: "Active",
    href: "https://github.com/GCMinerva/VingVis",
  },
  {
    n: "PJ.06",
    title: "ThaiFlickKeyboard",
    jp: "タイフリック",
    desc: "Custom flick-style keyboard input method for the Thai language, inspired by Japanese flick input.",
    tags: ["IME", "THAI", "MOBILE"],
    year: "Active",
    href: "https://github.com/JNX03/ThaiFlickKeyboard",
  },
  {
    n: "PJ.07",
    title: "Flowtake",
    jp: "フロウテイク",
    desc: "Active side project — a flow-based productivity / capture tool.",
    tags: ["PRODUCTIVITY", "TOOL"],
    year: "Active",
    href: "https://github.com/JNX03/Flowtake",
  },
];

export const TIMELINE: TimelineEntry[] = [
  {
    yr: "2014",
    jp: "入学",
    title: "Entered The Prince Royal's College",
    desc: "Started at PRC — Gifted Computer & Gifted Math program.",
    tag: "EDUCATION",
    featured: false,
  },
  {
    yr: "2023",
    jp: "英国",
    title: "Brighton, United Kingdom",
    desc: "Language studies at Brighton Language College — March / April 2023.",
    tag: "OVERSEAS",
    featured: false,
  },
  {
    yr: "2023",
    jp: "受賞",
    title: "APICTA 2023 — Merit (international)",
    desc: "First major international recognition.",
    tag: "AWARD",
    featured: true,
  },
  {
    yr: "2024",
    jp: "創業",
    title: "Founded Dekport.com & won CMKL 1st",
    desc: "Launched startup; won 1st place at CMKL AI Innovator Award for Eibraille.",
    tag: "STARTUP",
    featured: true,
  },
  {
    yr: "2025",
    jp: "飛躍",
    title: "Swift Student Challenge — Winner",
    desc: "Selected among 350 worldwide for Syntaxia.",
    tag: "APPLE",
    featured: true,
  },
  {
    yr: "2026",
    jp: "現在",
    title: "Distinguished Winner — SSC 2026 ／ NOW",
    desc: "Top tier at Apple's Swift Student Challenge for Neuralia. Currently in M.6, looking ahead.",
    tag: "CURRENT",
    featured: true,
  },
];

export const TICKER_ITEMS: TickerItem[] = [
  { ep: "CH.01", en: "FIRST CONTACT", jp: "初接触", img: "/assets/band-1.png", href: "/" },
  { ep: "CH.02", en: "CHARACTER SHEET", jp: "人物紹介", img: "/assets/band-2.png", href: "/about" },
  { ep: "CH.03", en: "TROPHY ROOM", jp: "受賞歴", img: "/assets/band-3.png", href: "/awards" },
  { ep: "CH.04", en: "SELECTED WORKS", jp: "制作実績", img: "/assets/band-4.png", href: "/works" },
  { ep: "CH.05", en: "FIELD NOTES", jp: "研究記録", img: "/assets/band-6.png", href: "/research" },
  { ep: "CH.06", en: "TRANSMISSION", jp: "通信", img: "/assets/band-5.png", href: "/contact" },
];

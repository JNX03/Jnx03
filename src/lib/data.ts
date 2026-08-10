export const SITE = {
  name: "JNX03",
  fullName: "Chawabhon Netisingha",
  thaiName: "ชวภณ เนติสิงหะ",
  nick: "Jean",
  role: "Creative developer",
  base: "Chiang Mai, Thailand",
  url: "https://jnx03.xyz",
  email: "contact@jnx03.xyz",
  timezone: "Asia/Bangkok",
} as const;

export type Social = { name: string; href: string };

export const SOCIALS: Social[] = [
  { name: "Email", href: "mailto:contact@jnx03.xyz" },
  { name: "GitHub", href: "https://github.com/JNX03" },
  { name: "LinkedIn", href: "https://www.linkedin.com/in/chawabhon-netisingha/" },
  { name: "Instagram", href: "https://www.instagram.com/jxxn03z/" },
  { name: "YouTube", href: "https://www.youtube.com/@Jnx03" },
];

export type Row = {
  title: string;
  sub: string;
  meta: string;
  href?: string;
};

export const EXPERIENCE: Row[] = [
  {
    title: "Dekport",
    sub: "Founder. Opportunity platform for Thai students",
    meta: "2024 - Now",
    href: "https://dekport.com",
  },
  {
    title: "Swift Student Challenge",
    sub: "Distinguished Winner, Apple. Project Neuralia",
    meta: "2025 - 2026",
    href: "/awards",
  },
  {
    title: "Security research",
    sub: "Seven published CVEs and disclosures",
    meta: "2026",
    href: "/research",
  },
  {
    title: "GCMinerva",
    sub: "FTC robotics. Build VingVis tooling",
    meta: "2023 - Now",
    href: "https://github.com/GCMinerva/VingVis",
  },
  {
    title: "The Prince Royal's College",
    sub: "Gifted Computer and Gifted Math",
    meta: "2014 - Now",
  },
];

export type Project = {
  title: string;
  desc: string;
  tags: string[];
  year: string;
  href?: string;
};

export const PROJECTS: Project[] = [
  {
    title: "Neuralia",
    desc: "Swift Student Challenge 2026 Distinguished Winner. A neural-network-themed app playground exploring how a model actually thinks.",
    tags: ["Swift", "AI", "WWDC26"],
    year: "2026",
    href: "https://github.com/JNX03/Neuralia",
  },
  {
    title: "Syntaxia",
    desc: "Swift Student Challenge 2025 Winner. An educational playground built with SwiftUI that teaches programming fundamentals.",
    tags: ["Swift", "Education", "WWDC25"],
    year: "2025",
    href: "https://github.com/JNX03/Syntaxia",
  },
  {
    title: "Eibraille",
    desc: "AI-driven assistive technology for the visually impaired, translating between print and Braille. CMKL AI Innovator 1st Place.",
    tags: ["AI", "Assistive", "Computer vision"],
    year: "2024",
  },
  {
    title: "Dekport",
    desc: "A startup platform for Thai students. Portfolios, opportunities and a community, built and run end to end.",
    tags: ["Startup", "Web", "Education"],
    year: "2024 - Now",
    href: "https://dekport.com",
  },
  {
    title: "VingVis",
    desc: "Visualization tooling for FTC robotics teams, built under GCMinerva and used across the season.",
    tags: ["Robotics", "Visualization", "FTC"],
    year: "Active",
    href: "https://github.com/GCMinerva/VingVis",
  },
  {
    title: "ThaiFlickKeyboard",
    desc: "A flick-style input method for the Thai language, borrowing the ergonomics of Japanese flick input.",
    tags: ["IME", "Thai", "Mobile"],
    year: "Active",
    href: "https://github.com/JNX03/ThaiFlickKeyboard",
  },
  {
    title: "Flowtake",
    desc: "A flow-based productivity and capture tool. An ongoing side project.",
    tags: ["Productivity", "Tooling"],
    year: "Active",
    href: "https://github.com/JNX03/Flowtake",
  },
];

export type Award = {
  title: string;
  place: string;
  sub: string;
  year: string;
  href?: string;
};

export const AWARDS: Award[] = [
  {
    title: "Swift Student Challenge 2026",
    place: "Distinguished Winner",
    sub: "Apple, for project Neuralia",
    year: "2026",
    href: "https://github.com/JNX03/Neuralia",
  },
  {
    title: "Swift Student Challenge 2025",
    place: "Winner",
    sub: "Apple, one of 350 worldwide, for Syntaxia",
    year: "2025",
    href: "https://github.com/JNX03/Syntaxia",
  },
  {
    title: "CMKL AI Innovator Award 2024",
    place: "1st Place",
    sub: "CMKL University, for Eibraille",
    year: "2024",
  },
  {
    title: "MiT Moodeng AI Challenge",
    place: "Winner",
    sub: "National AI competition",
    year: "2025",
  },
  {
    title: "Thailand Innovation Awards",
    place: "Top 20 Finalist",
    sub: "National Innovation Agency",
    year: "2025",
  },
  {
    title: "National Software Contest",
    place: "National Round",
    sub: "NECTEC, Thailand's flagship software contest",
    year: "2025",
  },
  {
    title: "Intel AI Global Impact Festival",
    place: "Top 3 Finalist",
    sub: "Thailand national top three",
    year: "2025",
  },
  {
    title: "Thailand Cyber Talent 2025",
    place: "Finalist",
    sub: "Member of team Kernel",
    year: "2025",
  },
  {
    title: "YUVAi Global Youth Challenge",
    place: "Finalist",
    sub: "India AI Global Impact Challenge",
    year: "2025",
  },
  {
    title: "FIRST Tech Challenge Thailand, Decode",
    place: "Inspire Award, 3rd",
    sub: "Team PRCGCMinerva Gen 3",
    year: "2025",
  },
  {
    title: "Kibo Robot Programming Challenge",
    place: "Present Award",
    sub: "JAXA, 6th edition, run from the ISS",
    year: "2024",
  },
  {
    title: "Kamalasai AI and Technology Championship",
    place: "Honorary Mention",
    sub: "8th national edition",
    year: "2024",
  },
  {
    title: "โครงงานวิทยาศาสตร์ประยุกต์",
    place: "รางวัลเชิดชูเกียรติ",
    sub: "Applied science project, for Eibraille",
    year: "2024",
  },
  {
    title: "Asia Pacific ICT Alliance",
    place: "Merit",
    sub: "APICTA international ICT awards",
    year: "2023",
  },
  {
    title: "Thailand ICT Awards",
    place: "Merit",
    sub: "National qualifier for APICTA",
    year: "2023",
  },
  {
    title: "Kamalasai AI Robotics Championship",
    place: "3rd Place",
    sub: "7th national edition",
    year: "2023",
  },
  {
    title: "PIM Robotics Playground",
    place: "Silver Medal",
    sub: "เหรียญเงิน",
    year: "2023",
  },
  {
    title: "FIRST LEGO League Thailand, Powerplay",
    place: "Quality Award",
    sub: "National",
    year: "2023",
  },
];

export const CVES = [
  "CVE-2026-1291",
  "CVE-2026-3581",
  "CVE-2026-4032",
  "CVE-2026-4087",
  "CVE-2026-4607",
  "CVE-2026-5694",
  "CVE-2026-34891",
];

export const PAPER = {
  title: "Zenodo publication",
  doi: "10.5281/zenodo.19472287",
  href: "https://doi.org/10.5281/zenodo.19472287",
};

export const SITE = {
  name: "JNX03",
  fullName: "Chawabhon Netisingha",
  thaiName: "ชวภณ เนติสิงหะ",
  nick: "Jean",
  role: "Creative developer",
  age: 17,
  base: "Chiang Mai, Thailand",
  url: "https://jnx03.xyz",
  email: "contact@jnx03.xyz",
  timezone: "Asia/Bangkok",
} as const;

export type Social = { name: string; handle: string; href: string };

export const SOCIALS: Social[] = [
  { name: "Email", handle: "contact@jnx03.xyz", href: "mailto:contact@jnx03.xyz" },
  { name: "GitHub", handle: "@JNX03", href: "https://github.com/JNX03" },
  {
    name: "LinkedIn",
    handle: "chawabhon-netisingha",
    href: "https://www.linkedin.com/in/chawabhon-netisingha/",
  },
  { name: "Instagram", handle: "@jxxn03z", href: "https://www.instagram.com/jxxn03z/" },
  { name: "YouTube", handle: "@Jnx03", href: "https://www.youtube.com/@Jnx03" },
  { name: "Kaggle", handle: "jxxn03x", href: "https://www.kaggle.com/jxxn03x" },
  { name: "Hugging Face", handle: "Jnx03", href: "https://huggingface.co/Jnx03" },
];

/** Home-page index. Also drives the sitemap. */
export const PAGES: { title: string; sub: string; href: string }[] = [
  { title: "Selected Works", sub: "Seven projects, and what each one taught me", href: "/works" },
  { title: "Recognition", sub: "Eighteen awards across AI, robotics and software", href: "/awards" },
  { title: "Research", sub: "Seven published CVEs and a Zenodo paper", href: "/research" },
  { title: "Blog", sub: "Longer write-ups, starting with three days at Apple Park", href: "/blog" },
  { title: "About", sub: "The longer version, and a timeline", href: "/about" },
  { title: "Stack", sub: "What I actually build with", href: "/stack" },
  { title: "Contact", sub: "Email, and everywhere else I am", href: "/contact" },
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
  /** Screenshot or illustration, relative to /public. */
  shot?: string;
  /** Alt text for `shot`. Required whenever `shot` is set. */
  alt?: string;
};

export const PROJECTS: Project[] = [
  {
    title: "Neuralia",
    desc: "Swift Student Challenge 2026 Distinguished Winner. A neural-network-themed app playground exploring how a model actually thinks.",
    tags: ["Swift", "AI", "WWDC26"],
    year: "2026",
    href: "https://github.com/JNX03/Neuralia",
    shot: "/assets/works/neuralia.webp",
    alt: "GitHub repository card for JNX03/Neuralia, the WWDC26 Swift Student Challenge Distinguished Winner submission",
  },
  {
    title: "Syntaxia",
    desc: "Swift Student Challenge 2025 Winner. An educational playground built with SwiftUI that teaches programming fundamentals.",
    tags: ["Swift", "Education", "WWDC25"],
    year: "2025",
    href: "https://github.com/JNX03/Syntaxia",
    shot: "/assets/works/syntaxia.webp",
    alt: "GitHub repository card for JNX03/Syntaxia, the WWDC25 Swift Student Challenge winning submission",
  },
  {
    title: "Eibraille",
    desc: "AI-driven assistive technology for the visually impaired, translating between print and Braille. CMKL AI Innovator 1st Place.",
    tags: ["AI", "Assistive", "Computer vision"],
    year: "2024",
    shot: "/assets/works/eibraille.svg",
    alt: "Line icon of an eye beside a braille cell, representing Eibraille's print-to-braille translation",
  },
  {
    title: "Dekport",
    desc: "A startup platform for Thai students. Portfolios, opportunities and a community, built and run end to end.",
    tags: ["Startup", "Web", "Education"],
    year: "2024 - Now",
    href: "https://dekport.com",
    shot: "/assets/works/dekport.webp",
    alt: "Screenshot of the DekPort.com homepage, an opportunity platform for Thai students",
  },
  {
    title: "VingVis",
    desc: "Visualization tooling for FTC robotics teams, built under GCMinerva and used across the season.",
    tags: ["Robotics", "Visualization", "FTC"],
    year: "Active",
    href: "https://github.com/GCMinerva/VingVis",
    shot: "/assets/works/vingvis.webp",
    alt: "GitHub repository card for GCMinerva/VingVis, a path-follower and robot management tool for FTC robotics",
  },
  {
    title: "ThaiFlickKeyboard",
    desc: "A flick-style input method for the Thai language, borrowing the ergonomics of Japanese flick input.",
    tags: ["IME", "Thai", "Mobile"],
    year: "Active",
    href: "https://github.com/JNX03/ThaiFlickKeyboard",
    shot: "/assets/works/thaiflickkeyboard.webp",
    alt: "GitHub repository card for JNX03/ThaiFlickKeyboard, a flick-style keyboard layout for Thai",
  },
  {
    title: "Flowtake",
    desc: "A flow-based productivity and capture tool. An ongoing side project.",
    tags: ["Productivity", "Tooling"],
    year: "Active",
    href: "https://github.com/JNX03/Flowtake",
    shot: "/assets/works/flowtake.webp",
    alt: "GitHub repository card for JNX03/Flowtake, an open-source local-first screen recorder and timeline editor",
  },
  {
    title: "ImaginativeLab",
    desc: "???",
    tags: ["Coming soon"],
    year: "Soon",
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

export type TimelineEntry = {
  year: string;
  title: string;
  desc: string;
};

export const TIMELINE: TimelineEntry[] = [
  {
    year: "2014",
    title: "Entered The Prince Royal's College",
    desc: "Started in the Gifted Computer and Gifted Math programme.",
  },
  {
    year: "2023",
    title: "Brighton, United Kingdom",
    desc: "Language studies at Brighton Language College, March to April.",
  },
  {
    year: "2023",
    title: "APICTA Merit, international",
    desc: "First recognition outside Thailand, at the Asia Pacific ICT Alliance awards.",
  },
  {
    year: "2024",
    title: "Founded Dekport and won CMKL 1st",
    desc: "Launched the startup, and took first place at the CMKL AI Innovator Award for Eibraille.",
  },
  {
    year: "2025",
    title: "Swift Student Challenge Winner",
    desc: "Selected among 350 winners worldwide for Syntaxia.",
  },
  {
    year: "2026",
    title: "Distinguished Winner, and now",
    desc: "Apple's top tier for Neuralia. Currently in M.6, looking at what comes after.",
  },
];

export type StackGroup = { group: string; items: string[] };

export const STACK: StackGroup[] = [
  { group: "Languages", items: ["Swift", "Python", "TypeScript", "Rust", "C++"] },
  { group: "AI", items: ["PyTorch", "TensorFlow", "Hugging Face", "scikit-learn"] },
  { group: "Web", items: ["Next.js", "React", "Tailwind CSS", "Node.js"] },
  { group: "Apple", items: ["SwiftUI", "Swift Playgrounds", "Xcode"] },
  { group: "Tooling", items: ["Linux", "Docker", "Git", "nginx"] },
];

export type Post = {
  slug: string;
  title: string;
  /** Used on the index, in search results and as the page description. */
  desc: string;
  /** ISO date, so the feed and sitemap can sort without re-parsing the label. */
  date: string;
  dateLabel: string;
};

export const POSTS: Post[] = [
  {
    slug: "apple-park",
    title: "Distinguished Winner experience at Apple Park",
    desc: "Three days at Apple Park as one of fifty Swift Student Challenge Distinguished Winners: meeting Tim Cook, the WWDC26 keynote, and a room full of Apple engineers.",
    date: "2026-06-09",
    dateLabel: "June 2026",
  },
];

export const PAPER = {
  title: "Zenodo publication",
  doi: "10.5281/zenodo.19472287",
  href: "https://doi.org/10.5281/zenodo.19472287",
};

const PATHS = {
  clock: ["M3 12a9 9 0 1 0 18 0a9 9 0 0 0-18 0", "M12 7v5l3 3"],
  arrowLeft: ["M5 12l14 0", "M5 12l4 4", "M5 12l4-4"],
  mail: [
    "M3 7a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-14a2 2 0 0 1-2-2z",
    "M3 7l9 6l9-6",
  ],
  github: [
    "M9 19c-4.3 1.4-4.3-2.5-6-3m12 5v-3.5c0-1 .1-1.4-.5-2c2.8-.3 5.5-1.4 5.5-6a4.6 4.6 0 0 0-1.3-3.2a4.2 4.2 0 0 0-.1-3.2s-1.1-.3-3.5 1.3a12.3 12.3 0 0 0-6.2 0c-2.4-1.6-3.5-1.3-3.5-1.3a4.2 4.2 0 0 0-.1 3.2a4.6 4.6 0 0 0-1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6.6-.6 1.2-.5 2v3.5",
  ],
  linkedin: [
    "M4 4m0 4a4 4 0 0 1 4-4h8a4 4 0 0 1 4 4v8a4 4 0 0 1-4 4h-8a4 4 0 0 1-4-4z",
    "M8 11v5",
    "M8 8v.01",
    "M12 16v-5",
    "M16 16v-3a2 2 0 1 0-4 0",
  ],
  instagram: [
    "M4 4m0 4a4 4 0 0 1 4-4h8a4 4 0 0 1 4 4v8a4 4 0 0 1-4 4h-8a4 4 0 0 1-4-4z",
    "M9 12a3 3 0 1 0 6 0a3 3 0 0 0-6 0",
    "M16.5 7.5v.01",
  ],
  youtube: [
    "M2 8a4 4 0 0 1 4-4h12a4 4 0 0 1 4 4v8a4 4 0 0 1-4 4h-12a4 4 0 0 1-4-4z",
    "M10 9l5 3l-5 3z",
  ],
  kaggle: ["M7 3v18", "M17 5l-8 8l8 8"],
  huggingface: [
    "M12 3a9 9 0 1 0 0 18a9 9 0 0 0 0-18",
    "M9 10v.01",
    "M15 10v.01",
    "M8.5 14a4 4 0 0 0 7 0",
  ],
  search: ["M11 19a8 8 0 1 0 0-16a8 8 0 0 0 0 16", "M21 21l-4.35-4.35"],
  file: ["M6 2h9l5 5v13a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2z", "M14 2v5h5"],
  box: ["M21 8l-9-5-9 5 9 5 9-5z", "M3 8v8l9 5 9-5V8", "M12 13v8"],
  arrowRight: ["M5 12l14 0", "M15 12l-4 4", "M15 12l-4-4"],
  users: [
    "M9 7m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0",
    "M3 21v-2a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v2",
    "M16 3.13a4 4 0 0 1 0 7.75",
    "M21 21v-2a4 4 0 0 0-3-3.85",
  ],
  deviceDesktop: [
    "M3 5m0 1a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1h-16a1 1 0 0 1-1-1z",
    "M7 20h10",
    "M9 16v4",
    "M15 16v4",
  ],
  messageCircle: ["M3 20l1.3-3.9a9 8 0 1 1 3.4 2.9L3 20"],
} as const;

export type IconName = keyof typeof PATHS;

export default function Icon({
  name,
  size = "1.1rem",
  className,
}: {
  name: IconName;
  size?: string;
  className?: string;
}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      aria-hidden="true"
      className={className}
    >
      {PATHS[name].map((d) => (
        <path key={d} d={d} />
      ))}
    </svg>
  );
}

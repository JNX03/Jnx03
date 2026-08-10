import Link from "next/link";
import { PAGES } from "@/lib/data";

// Shorter labels than the page titles, so the whole nav fits one line.
const SHORT: Record<string, string> = {
  "Selected Works": "Works",
  Recognition: "Awards",
};

const ITEMS = [
  { label: "Home", href: "/" },
  ...PAGES.map((p) => ({ label: SHORT[p.title] ?? p.title, href: p.href })),
];

export default function Nav({ current }: { current?: string }) {
  return (
    <nav className="nav" aria-label="Primary">
      {ITEMS.map((i) => (
        <Link
          key={i.href}
          href={i.href}
          aria-current={i.href === current ? "page" : undefined}
        >
          {i.label}
        </Link>
      ))}
    </nav>
  );
}

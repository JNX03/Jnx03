import { SITE } from "@/lib/data";

export default function SocialList() {
  return (
    <div className="socials">
      {SITE.socials.map((s) => (
        <a
          key={s.name}
          href={s.href}
          target={s.href.startsWith("http") ? "_blank" : undefined}
          rel={s.href.startsWith("http") ? "noopener" : undefined}
        >
          <span>{s.name}</span>
          <span className="handle">{s.handle}</span>
          <span className="arr">↗</span>
        </a>
      ))}
    </div>
  );
}

import Icon, { type IconName } from "./Icon";
import { SITE } from "@/lib/data";

const LINKS: { name: string; icon: IconName; href: string }[] = [
  { name: "Email", icon: "mail", href: `mailto:${SITE.email}` },
  { name: "GitHub", icon: "github", href: "https://github.com/JNX03" },
  {
    name: "LinkedIn",
    icon: "linkedin",
    href: "https://www.linkedin.com/in/chawabhon-netisingha/",
  },
  { name: "Instagram", icon: "instagram", href: "https://www.instagram.com/jxxn03z/" },
  { name: "YouTube", icon: "youtube", href: "https://www.youtube.com/@Jnx03" },
];

export default function Footer({ bare = false }: { bare?: boolean }) {
  return (
    <section id="footer">
      <div className={bare ? undefined : "container"}>
        <div className="footer-bar">
          <div className="fi">
            &copy; {new Date().getFullYear()} {SITE.fullName}
          </div>
          <nav className="socials" aria-label="Social links">
            {LINKS.map((l) => {
              const external = l.href.startsWith("http");
              return (
                <a
                  key={l.name}
                  href={l.href}
                  aria-label={l.name}
                  {...(external && { target: "_blank", rel: "me noreferrer" })}
                >
                  <Icon name={l.icon} />
                </a>
              );
            })}
          </nav>
        </div>
      </div>
    </section>
  );
}

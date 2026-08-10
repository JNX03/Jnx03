import Icon, { type IconName } from "./Icon";
import { SITE, SOCIALS } from "@/lib/data";

const ICONS: Record<string, IconName> = {
  Email: "mail",
  GitHub: "github",
  LinkedIn: "linkedin",
  Instagram: "instagram",
  YouTube: "youtube",
  Kaggle: "kaggle",
  "Hugging Face": "huggingface",
};

export default function Footer({ bare = false }: { bare?: boolean }) {
  return (
    <section id="footer">
      <div className={bare ? undefined : "container"}>
        <div className="footer-bar">
          <div className="fi">
            &copy; {new Date().getFullYear()} {SITE.fullName}
          </div>
          <nav className="socials" aria-label="Social links">
            {SOCIALS.map((s) => {
              const external = s.href.startsWith("http");
              return (
                <a
                  key={s.name}
                  href={s.href}
                  aria-label={s.name}
                  title={s.name}
                  {...(external && { target: "_blank", rel: "me noreferrer" })}
                >
                  <Icon name={ICONS[s.name]} />
                </a>
              );
            })}
          </nav>
        </div>
      </div>
    </section>
  );
}

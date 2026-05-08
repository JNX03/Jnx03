import type { Metadata } from "next";
import PageHead from "@/components/page/PageHead";
import ProfileCard from "@/components/sections/ProfileCard";
import JsonLd from "@/components/seo/JsonLd";
import { SITE } from "@/lib/data";
import { SITE_URL, ogImage } from "@/lib/seo";

const ABOUT_DESCRIPTION =
  "About Chawabhon Netisingha (JNX03) — high-school developer from Thailand, M.6 at The Prince Royal's College. AI, accessibility, security research, and design — all in one workflow.";

export const metadata: Metadata = {
  title: "About",
  description: ABOUT_DESCRIPTION,
  alternates: { canonical: "/about" },
  openGraph: {
    type: "profile",
    title: "About ／ JNX03",
    description: ABOUT_DESCRIPTION,
    url: "/about",
    images: ogImage({ path: "/about/opengraph-image" }),
  },
  twitter: {
    title: "About ／ JNX03",
    description: ABOUT_DESCRIPTION,
    images: ogImage({ path: "/about/opengraph-image" }),
  },
};

const aboutJsonLd = {
  "@context": "https://schema.org",
  "@type": "AboutPage",
  name: "About JNX03",
  url: `${SITE_URL}/about`,
  description: ABOUT_DESCRIPTION,
  mainEntity: {
    "@type": "Person",
    name: SITE.fullName,
    alternateName: [SITE.name, SITE.nickEn],
    url: SITE_URL,
    nationality: { "@type": "Country", name: "Thailand" },
    alumniOf: {
      "@type": "EducationalOrganization",
      name: "The Prince Royal's College",
    },
    worksFor: {
      "@type": "Organization",
      name: SITE.startup.name,
      url: SITE.startup.url,
    },
    sameAs: SITE.socials
      .filter((s) => s.href.startsWith("http"))
      .map((s) => s.href),
  },
};

export default function AboutPage() {
  return (
    <>
      <JsonLd id="ld-about" data={aboutJsonLd} />
      <PageHead
        num="02"
        label="ABOUT ME"
        jpLabel="人物紹介"
        ep="02"
        epLabel="CHARACTER SHEET"
        lede="High-school developer from Thailand. AI, accessibility, security research, and design — all in one workflow."
      />

      <section className="about section-pad">
        <div className="container">
          <div className="section-head reveal">
            <div>
              <div className="num">#01 / PROFILE</div>
              <h2>
                <span className="jp">基本情報</span>PROFILE
              </h2>
            </div>
            <div className="meta">UPDATED 2026.05 ／ M.6 STUDENT</div>
          </div>

          <div className="grid">
            <ProfileCard />

            <div className="about-copy reveal">
              <h3>
                สวัสดีครับ — I&apos;m <span className="hi">Jean (JNX03)</span>.
                <br />
                A 17-year-old developer building at the intersection of AI, accessibility, and security.
              </h3>
              <p>
                I&apos;m a Thai high-school student (M.6) at <strong>The Prince Royal&apos;s College</strong>,
                in the Gifted Computer &amp; Gifted Math program. I build software that solves real problems —
                Eibraille for the visually impaired, Syntaxia &amp; Neuralia for Apple&apos;s Swift Student Challenge,
                and Dekport, a startup helping Thai students surface opportunities.
              </p>
              <p>
                Outside of products, I do offensive security research — seven CVEs published to date — and
                compete in robotics (FTC, FLL, Kibo, PIM, Kamalasai) and AI competitions (Intel AI Festival,
                YUVAi, MiT Moodeng, NSC, TIA, APICTA, Thailand Cyber Talent).
              </p>

              <div className="quote">
                Build what you wish existed. Then ship it before anyone tells you it&apos;s hard.
              </div>

              <div className="data-grid">
                <div>
                  <div className="k">FULL NAME</div>
                  <div className="v">Chawabhon Netisingha ／ ชวภณ เนติสิงหะ</div>
                </div>
                <div>
                  <div className="k">NICKNAME</div>
                  <div className="v">Jean ／ จีน ／ JNX03</div>
                </div>
                <div>
                  <div className="k">BASE</div>
                  <div className="v">Thailand</div>
                </div>
                <div>
                  <div className="k">SCHOOL</div>
                  <div className="v">The Prince Royal&apos;s College — Gifted Comp &amp; Math</div>
                </div>
                <div>
                  <div className="k">FOUNDER</div>
                  <div className="v">Dekport.com — student opportunity platform</div>
                </div>
                <div>
                  <div className="k">FOCUS</div>
                  <div className="v">AI · Accessibility · Security · Design</div>
                </div>
                <div>
                  <div className="k">SECURITY</div>
                  <div className="v">7 published CVEs (2026)</div>
                </div>
                <div>
                  <div className="k">STATUS</div>
                  <div className="v" style={{ color: "var(--accent)" }}>
                    ● Open for collaborations
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-pad" style={{ background: "#fff" }}>
        <div className="container">
          <div className="section-head reveal">
            <div>
              <div className="num" style={{ background: "#fff" }}>
                #02 / EDUCATION
              </div>
              <h2>
                <span className="jp">学歴</span>EDUCATION
              </h2>
            </div>
            <div className="meta">2 INSTITUTIONS ／ TH × UK</div>
          </div>

          <div className="edu-grid">
            <div className="edu-card reveal">
              <div className="when">2014 — PRESENT</div>
              <h4>The Prince Royal&apos;s College</h4>
              <div className="where">Thailand</div>
              <p>
                High school — Gifted Computer &amp; Gifted Math programs. Currently in M.6 (final year).
                Active member of the student council and tech / robotics competition teams.
              </p>
            </div>
            <div className="edu-card reveal">
              <div className="when">MAR — APR 2023</div>
              <h4>Brighton Language College</h4>
              <div className="where">Brighton, United Kingdom</div>
              <p>
                Intensive English language studies. A short overseas stint that broadened the lens — and
                directly informed how I approach product, communication, and global competitions.
              </p>
            </div>
          </div>

          <div className="section-head reveal" style={{ marginTop: 80 }}>
            <div>
              <div className="num" style={{ background: "#fff" }}>
                #03 / EXTRACURRICULAR
              </div>
              <h2>
                <span className="jp">課外活動</span>EXTRA
              </h2>
            </div>
            <div className="meta">ROLES &amp; COMMUNITY</div>
          </div>

          <div className="edu-grid">
            <div className="edu-card reveal">
              <div className="when">ROLE</div>
              <h4>Founder — Dekport.com</h4>
              <div className="where">Startup ／ EdTech</div>
              <p>Founded a Thai-student platform for portfolios, opportunities, and community.</p>
            </div>
            <div className="edu-card reveal">
              <div className="when">ROLE</div>
              <h4>Student Council Member</h4>
              <div className="where">The Prince Royal&apos;s College</div>
              <p>Representing peers and organizing school-wide initiatives.</p>
            </div>
            <div className="edu-card reveal">
              <div className="when">2023</div>
              <h4>Staff — Stellar&apos;23</h4>
              <div className="where">School flagship event</div>
              <p>Staff member helping run the Stellar&apos;23 program.</p>
            </div>
            <div className="edu-card reveal">
              <div className="when">SIDE</div>
              <h4>Music / Translation</h4>
              <div className="where">Vocaloid community translations</div>
              <p>
                Helped translate Vocaloid songs incl. <em>目撃！テト31世</em> &amp; <em>DREAMMODE</em> on
                YouTube.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

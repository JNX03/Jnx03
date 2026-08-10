import SubPage from "@/components/SubPage";
import JsonLd from "@/components/JsonLd";
import Row from "@/components/Row";
import { SITE, SOCIALS } from "@/lib/data";
import { breadcrumbs, pageMeta } from "@/lib/seo";

const TITLE = "Contact";
const PATH = "/contact";
const DESCRIPTION = `Reach ${SITE.fullName} by email at ${SITE.email}, or find him on GitHub, LinkedIn, Instagram, YouTube, Kaggle and Hugging Face.`;

export const metadata = pageMeta({ title: TITLE, description: DESCRIPTION, path: PATH });

export default function Contact() {
  return (
    <SubPage current={PATH}>
      <div className="card card-prose">
        <p>
          <span className="ft">Email is the surest way</span> to reach me, and I answer inside a
          day. I am open to collaborations, research, and anything involving accessibility.
        </p>
      </div>

      <div className="card card-list">
        <div>
          {SOCIALS.map((s) => (
            <Row key={s.name} title={s.name} sub={s.handle} href={s.href} />
          ))}
        </div>
      </div>

      <JsonLd data={breadcrumbs(TITLE, PATH)} />
    </SubPage>
  );
}

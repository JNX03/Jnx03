import SubPage from "@/components/SubPage";
import JsonLd from "@/components/JsonLd";
import Row from "@/components/Row";
import { SITE, STACK } from "@/lib/data";
import { breadcrumbs, pageMeta } from "@/lib/seo";

const TITLE = "Stack";
const PATH = "/stack";
const DESCRIPTION = `The languages, frameworks and tools ${SITE.fullName} builds with, across AI, web, Apple platforms and security work.`;

export const metadata = pageMeta({ title: TITLE, description: DESCRIPTION, path: PATH });

export default function Stack() {
  return (
    <SubPage current={PATH}>
      <div className="card card-prose">
        <p>
          <span className="ft">What I actually reach for.</span> Not everything I have touched,
          just the things I would be comfortable shipping on a deadline.
        </p>
      </div>

      <div className="card card-list">
        <div>
          {STACK.map((s) => (
            <Row key={s.group} title={s.group} sub={s.items.join(", ")} />
          ))}
        </div>
      </div>

      <JsonLd data={breadcrumbs(TITLE, PATH)} />
    </SubPage>
  );
}

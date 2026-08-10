import SubPage from "@/components/SubPage";
import JsonLd from "@/components/JsonLd";
import Row from "@/components/Row";
import { SITE, TIMELINE } from "@/lib/data";
import { breadcrumbs, pageMeta } from "@/lib/seo";

const TITLE = "About";
const PATH = "/about";
const DESCRIPTION = `Who ${SITE.fullName} is: a ${SITE.age}-year-old developer from ${SITE.base} working on AI, security research and accessibility, and the founder of Dekport.`;

export const metadata = pageMeta({ title: TITLE, description: DESCRIPTION, path: PATH });

export default function About() {
  return (
    <SubPage current={PATH}>
      <div className="card card-prose">
        <p>
          <span className="ft">My name is Chawabhon Netisingha</span> — ชวภณ เนติสิงหะ, though
          almost everyone calls me Jean. I am {SITE.age}, I live in {SITE.base}, and I have
          been writing software since well before I was any good at it.
        </p>
        <p>
          I work in three directions that keep turning out to be the same direction. AI, because
          I want to know how the thing decides. Security research, because I want to know where
          it breaks. Accessibility, because a tool that only works for some people is a tool
          that is still unfinished.
        </p>
        <p>
          That is roughly how Eibraille happened, and Dekport after it, and the two Swift
          Student Challenge projects after that. I am finishing M.6 now and working out what
          comes next.
        </p>
      </div>

      <div className="card card-list">
        <div>
          {TIMELINE.map((t) => (
            <Row key={`${t.year}-${t.title}`} title={t.title} sub={t.desc} meta={t.year} />
          ))}
        </div>
      </div>

      <JsonLd data={breadcrumbs(TITLE, PATH)} />
    </SubPage>
  );
}

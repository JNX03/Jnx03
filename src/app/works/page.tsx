import SubPage from "@/components/SubPage";
import ProjectList from "@/components/ProjectList";
import JsonLd from "@/components/JsonLd";
import { PROJECTS } from "@/lib/data";
import { breadcrumbs, itemList, pageMeta } from "@/lib/seo";

const TITLE = "Selected Works";
const PATH = "/works";
const DESCRIPTION =
  "Projects by Chawabhon Netisingha: Neuralia, Syntaxia, Eibraille, Dekport, VingVis, ThaiFlickKeyboard and Flowtake.";

export const metadata = pageMeta({ title: TITLE, description: DESCRIPTION, path: PATH });

const items = PROJECTS.map((p) => ({
  title: p.title,
  desc: p.desc,
  href: p.href,
}));

export default function Works() {
  return (
    <SubPage current={PATH}>
      <ProjectList projects={PROJECTS} />
      <section className="card card-prose" aria-labelledby="dekport-student-resources">
        <h2 id="dekport-student-resources" className="ft">Student resources from DekPort</h2>
        <p>
          Free Thai-language worksheets and guides from the DekPort editorial team,
          for students preparing competition submissions. Start with the editable,
          printable workbook, then explore the guides for business cases and project files.
        </p>
        <ul className="stack-sm">
          <li>
            <a className="tu" href="https://dekport.com/resources/competition-workbook" target="_blank" rel="noreferrer">
              Competition planning workbook (Thai)
            </a>
          </li>
          <li>
            <a className="tu" href="https://dekport.com/articles/business-case-competition-beginners" target="_blank" rel="noreferrer">
              Business case competition: a beginner’s guide (Thai)
            </a>
          </li>
          <li>
            <a className="tu" href="https://dekport.com/articles/project-competition-proposal-checklist" target="_blank" rel="noreferrer">
              Project proposal and submission checklist (Thai)
            </a>
          </li>
        </ul>
      </section>
      <JsonLd data={[breadcrumbs(TITLE, PATH), itemList(TITLE, items)]} />
    </SubPage>
  );
}

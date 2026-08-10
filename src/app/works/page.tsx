import SubPage from "@/components/SubPage";
import { ItemList } from "@/components/ListPage";
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
  meta: p.year,
  href: p.href,
}));

export default function Works() {
  return (
    <SubPage>
      <ItemList items={items} />
      <JsonLd data={[breadcrumbs(TITLE, PATH), itemList(TITLE, items)]} />
    </SubPage>
  );
}

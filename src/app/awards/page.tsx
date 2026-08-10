import SubPage from "@/components/SubPage";
import { ItemList } from "@/components/ListPage";
import JsonLd from "@/components/JsonLd";
import { AWARDS } from "@/lib/data";
import { breadcrumbs, itemList, pageMeta } from "@/lib/seo";

const TITLE = "Recognition";
const PATH = "/awards";
const DESCRIPTION =
  "Awards and recognition for Chawabhon Netisingha, including the Apple Swift Student Challenge, the CMKL AI Innovator Award and APICTA.";

export const metadata = pageMeta({ title: TITLE, description: DESCRIPTION, path: PATH });

const items = AWARDS.map((a) => ({
  title: a.title,
  desc: `${a.place}. ${a.sub}`,
  meta: a.year,
  href: a.href,
}));

export default function Awards() {
  return (
    <SubPage>
      <ItemList items={items} />
      <JsonLd data={[breadcrumbs(TITLE, PATH), itemList(TITLE, items)]} />
    </SubPage>
  );
}

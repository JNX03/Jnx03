import SubPage from "@/components/SubPage";
import { ItemList } from "@/components/ListPage";
import JsonLd from "@/components/JsonLd";
import { CVES, PAPER } from "@/lib/data";
import { breadcrumbs, itemList, pageMeta } from "@/lib/seo";

const TITLE = "Research";
const PATH = "/research";
const DESCRIPTION =
  "Security research by Chawabhon Netisingha: seven published CVEs and a Zenodo publication.";

export const metadata = pageMeta({ title: TITLE, description: DESCRIPTION, path: PATH });

const items = [
  ...CVES.map((id) => ({
    title: id,
    desc: "Vulnerability disclosure, assigned and published",
    meta: "MITRE",
    href: `https://www.cve.org/CVERecord?id=${id}`,
  })),
  {
    title: PAPER.title,
    desc: `DOI ${PAPER.doi}`,
    meta: "Zenodo",
    href: PAPER.href,
  },
];

export default function Research() {
  return (
    <SubPage current={PATH}>
      <ItemList items={items} />
      <JsonLd data={[breadcrumbs(TITLE, PATH), itemList(TITLE, items)]} />
    </SubPage>
  );
}

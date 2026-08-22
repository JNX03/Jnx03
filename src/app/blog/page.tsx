import SubPage from "@/components/SubPage";
import { ItemList } from "@/components/ListPage";
import JsonLd from "@/components/JsonLd";
import { POSTS, SITE } from "@/lib/data";
import { breadcrumbs, itemList, pageMeta } from "@/lib/seo";

const TITLE = "Blog";
const PATH = "/blog";
const DESCRIPTION =
  "Longer write-ups by Chawabhon Netisingha, starting with three days at Apple Park as a Swift Student Challenge Distinguished Winner.";

export const metadata = pageMeta({ title: TITLE, description: DESCRIPTION, path: PATH });

const items = POSTS.map((p) => ({
  title: p.title,
  desc: p.desc,
  meta: p.dateLabel,
  href: `/blog/${p.slug}`,
}));

const blog = {
  "@context": "https://schema.org",
  "@type": "Blog",
  "@id": `${SITE.url}${PATH}#blog`,
  name: `${TITLE} — ${SITE.name}`,
  url: `${SITE.url}${PATH}`,
  inLanguage: "en",
  author: { "@id": `${SITE.url}#person` },
  blogPost: POSTS.map((p) => ({
    "@type": "BlogPosting",
    headline: p.title,
    description: p.desc,
    datePublished: p.date,
    url: `${SITE.url}${PATH}/${p.slug}`,
  })),
};

export default function Blog() {
  return (
    <SubPage current={PATH}>
      <ItemList items={items} />
      <JsonLd data={[breadcrumbs(TITLE, PATH), itemList(TITLE, items), blog]} />
    </SubPage>
  );
}

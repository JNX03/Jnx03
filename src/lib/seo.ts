import type { Metadata } from "next";
import { SITE } from "./data";

type PageMeta = {
  title: string;
  description: string;
  path: string;
};

/** Per-page title, description, canonical and social cards in one place. */
export function pageMeta({ title, description, path }: PageMeta): Metadata {
  const full = `${title} — ${SITE.name}`;

  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      title: full,
      description,
      url: `${SITE.url}${path}`,
      siteName: SITE.name,
      type: "website",
      locale: "en_US",
    },
    twitter: { card: "summary_large_image", title: full, description },
  };
}

/** Breadcrumb trail so search results show Home > Page instead of a bare URL. */
export function breadcrumbs(title: string, path: string) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE.url },
      { "@type": "ListItem", position: 2, name: title, item: `${SITE.url}${path}` },
    ],
  };
}

/** Ordered list of the page's entries, so each is eligible as a rich result. */
export function itemList(
  name: string,
  items: { title: string; desc: string; href?: string }[],
) {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name,
    numberOfItems: items.length,
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.title,
      description: item.desc,
      ...(item.href?.startsWith("http") ? { url: item.href } : {}),
    })),
  };
}

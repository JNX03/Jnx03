import type { Metadata } from "next";
import ListPage from "@/components/ListPage";
import { CVES, PAPER } from "@/lib/data";

export const metadata: Metadata = {
  title: "Research",
  description:
    "Security research by Chawabhon Netisingha: seven published CVEs and a Zenodo publication.",
  alternates: { canonical: "/research" },
};

export default function Research() {
  return (
    <ListPage
      items={[
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
      ]}
    />
  );
}

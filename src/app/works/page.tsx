import type { Metadata } from "next";
import ListPage from "@/components/ListPage";
import { PROJECTS } from "@/lib/data";

export const metadata: Metadata = {
  title: "Selected Works",
  description:
    "Projects by Chawabhon Netisingha: Neuralia, Syntaxia, Eibraille, Dekport, VingVis, ThaiFlickKeyboard and Flowtake.",
  alternates: { canonical: "/works" },
};

export default function Works() {
  return (
    <ListPage
      items={PROJECTS.map((p) => ({
        title: p.title,
        desc: p.desc,
        meta: p.year,
        href: p.href,
      }))}
    />
  );
}

import type { Metadata } from "next";
import ListPage from "@/components/ListPage";
import { AWARDS } from "@/lib/data";

export const metadata: Metadata = {
  title: "Recognition",
  description:
    "Awards and recognition for Chawabhon Netisingha, including the Apple Swift Student Challenge, CMKL AI Innovator Award and APICTA.",
  alternates: { canonical: "/awards" },
};

export default function Awards() {
  return (
    <ListPage
      items={AWARDS.map((a) => ({
        title: a.title,
        desc: `${a.place}. ${a.sub}`,
        meta: a.year,
        href: a.href,
      }))}
    />
  );
}

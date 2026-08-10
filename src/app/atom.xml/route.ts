import { PROJECTS, SITE } from "@/lib/data";

export const dynamic = "force-static";

function yearOf(year: string): number {
  const match = year.match(/\d{4}/);
  return match ? parseInt(match[0], 10) : new Date().getFullYear();
}

function escapeXml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

export function GET() {
  const entries = [...PROJECTS]
    .sort((a, b) => yearOf(b.year) - yearOf(a.year))
    .map((p) => {
      const link = p.href ?? `${SITE.url}/works`;
      const updated = `${yearOf(p.year)}-01-01T00:00:00Z`;
      return `
  <entry>
    <title>${escapeXml(p.title)}</title>
    <link href="${escapeXml(link)}"/>
    <id>${escapeXml(link)}</id>
    <updated>${updated}</updated>
    <summary>${escapeXml(p.desc)}</summary>
    <author><name>${escapeXml(SITE.fullName)}</name></author>
  </entry>`;
    })
    .join("");

  const body = `<?xml version="1.0" encoding="utf-8"?>
<feed xmlns="http://www.w3.org/2005/Atom">
  <title>${escapeXml(SITE.fullName)} — Selected Works</title>
  <subtitle>Projects by ${escapeXml(SITE.fullName)}</subtitle>
  <link href="${SITE.url}/atom.xml" rel="self"/>
  <link href="${SITE.url}/works"/>
  <id>${SITE.url}/</id>
  <updated>${new Date().toISOString()}</updated>
  <author><name>${escapeXml(SITE.fullName)}</name></author>${entries}
</feed>
`;

  return new Response(body, {
    headers: { "Content-Type": "application/atom+xml; charset=utf-8" },
  });
}

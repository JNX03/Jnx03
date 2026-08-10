import { renderOg, OG_SIZE, OG_CONTENT_TYPE } from "@/lib/og";
import { SITE } from "@/lib/data";

export const alt = `${SITE.fullName} — ${SITE.name}`;
export const dynamic = "force-static";
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;

export default function Image() {
  return renderOg(SITE.fullName, `${SITE.role} — AI, security, accessibility`);
}

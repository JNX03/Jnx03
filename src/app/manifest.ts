import type { MetadataRoute } from "next";
import {
  BACKGROUND_COLOR,
  DEFAULT_DESCRIPTION,
  SITE_NAME,
  THEME_COLOR,
} from "@/lib/seo";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "JNX03 — Chawabhon Netisingha",
    short_name: SITE_NAME,
    description: DEFAULT_DESCRIPTION,
    start_url: "/",
    display: "standalone",
    background_color: BACKGROUND_COLOR,
    theme_color: THEME_COLOR,
    orientation: "portrait",
    categories: ["portfolio", "personal", "developer"],
    icons: [
      {
        src: "/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
    ],
  };
}

import fs from "fs";
import path from "path";
import type { MetadataRoute } from "next";
import { realisaties } from "@/lib/realisaties";
import { getSeoPageSlugs, getSeoPageFileMtime } from "@/lib/content";
import { SITE_URL } from "@/lib/site";

function srcMtime(relativePath: string): Date | undefined {
  const full = path.join(process.cwd(), relativePath);
  if (!fs.existsSync(full)) return undefined;
  return fs.statSync(full).mtime;
}

export default function sitemap(): MetadataRoute.Sitemap {
  const homeMtime = srcMtime("src/app/page.tsx");
  const termsMtime = srcMtime("src/app/terms/page.tsx");
  const privacyMtime = srcMtime("src/app/privacy-policy/page.tsx");
  const realisatiesMtime = srcMtime("src/lib/realisaties.ts");

  const realisatieUrls = realisaties.map((r) => ({
    url: `${SITE_URL}/realisaties/${r.slug}`,
    lastModified: realisatiesMtime,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  const seoPageUrls = getSeoPageSlugs().map((slug) => ({
    url: `${SITE_URL}/info/${slug}`,
    lastModified: getSeoPageFileMtime(slug),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  return [
    {
      url: SITE_URL,
      lastModified: homeMtime,
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${SITE_URL}/terms`,
      lastModified: termsMtime,
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: `${SITE_URL}/privacy-policy`,
      lastModified: privacyMtime,
      changeFrequency: "yearly",
      priority: 0.3,
    },
    ...seoPageUrls,
    ...realisatieUrls,
  ];
}

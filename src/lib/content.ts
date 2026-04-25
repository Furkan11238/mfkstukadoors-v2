import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";

const contentDir = path.join(process.cwd(), "content/seo");

export type SeoPage = {
  slug: string;
  title: string;
  description: string;
  keywords: string[];
  contentHtml: string;
};

export type SeoPageMeta = Omit<SeoPage, "contentHtml">;

function getFilePath(slug: string): string {
  return path.join(contentDir, `${slug}.md`);
}

export function getSeoPageSlugs(): string[] {
  if (!fs.existsSync(contentDir)) return [];
  return fs
    .readdirSync(contentDir)
    .filter((f) => f.endsWith(".md"))
    .map((f) => f.replace(/\.md$/, ""));
}

export function getAllSeoPages(): SeoPageMeta[] {
  return getSeoPageSlugs().map((slug) => {
    const filePath = getFilePath(slug);
    const fileContents = fs.readFileSync(filePath, "utf8");
    const { data } = matter(fileContents);
    return {
      slug,
      title: data.title ?? slug,
      description: data.description ?? "",
      keywords: data.keywords ?? [],
    };
  });
}

export async function getSeoPageBySlug(slug: string): Promise<SeoPage | null> {
  const filePath = getFilePath(slug);
  if (!fs.existsSync(filePath)) return null;

  const fileContents = fs.readFileSync(filePath, "utf8");
  const { data, content } = matter(fileContents);

  const processed = await remark().use(html).process(content);
  const contentHtml = processed.toString();

  return {
    slug,
    title: data.title ?? slug,
    description: data.description ?? "",
    keywords: data.keywords ?? [],
    contentHtml,
  };
}

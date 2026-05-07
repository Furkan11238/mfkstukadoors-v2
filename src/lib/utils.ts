import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { META_TITLE_MAX_CHARS, TITLE_TEMPLATE_SUFFIX } from "@/lib/site";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/** Shorten body text for HTML meta description (rough max ~160 chars). */
export function truncateMetaDescription(text: string, maxLen = 160): string {
  const t = text.trim();
  if (t.length <= maxLen) return t;
  const cut = t.slice(0, maxLen - 1);
  const lastSpace = cut.lastIndexOf(" ");
  const base = lastSpace > 80 ? cut.slice(0, lastSpace) : cut;
  return `${base.trimEnd()}…`;
}

/**
 * Shorten the `%s` part of the root `title.template` so the full `<title>`
 * stays within {@link META_TITLE_MAX_CHARS} characters incl. {@link TITLE_TEMPLATE_SUFFIX}.
 */
export function titleTemplateSegment(segment: string): string {
  const maxSegment = META_TITLE_MAX_CHARS - TITLE_TEMPLATE_SUFFIX.length;
  const t = segment.trim();
  if (t.length <= maxSegment) return t;

  const ellipsis = "…";
  const textBudget = maxSegment - ellipsis.length;
  if (textBudget < 1) return ellipsis;

  const cut = t.slice(0, textBudget);
  const lastSpace = cut.lastIndexOf(" ");
  const base =
    lastSpace > Math.floor(textBudget * 0.45) ? cut.slice(0, lastSpace) : cut;
  return `${base.trimEnd()}${ellipsis}`;
}

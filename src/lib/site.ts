/** Canonical public site URL (with www). */
export const SITE_URL = "https://www.mfkstukadoors.be" as const;

/** Appended by root layout `metadata.title.template` after `%s`. */
export const TITLE_TEMPLATE_SUFFIX = " | MFK Stukadoors";

/** Target max length for the final `<title>` (segment + suffix), e.g. Bing SEO reports. */
export const META_TITLE_MAX_CHARS = 69;

export const DEFAULT_TITLE =
  "Stukadoor Limburg - MFK Stukadoors | Pleisterwerken gyproc, renovatie";

export const DEFAULT_DESCRIPTION =
  "MFK Stukadoors uit Heusden-Zolder: meer dan 20 jaar ervaring in binnen- en buitenpleisterwerken, gyproc, spuitplamuur, schilderwerken en renovatie in heel Limburg. Vraag uw gratis offerte aan.";

/** Static OG image under `public/og/`. */
export const DEFAULT_OG_IMAGE_PATH = "/og/mfk-og.jpg" as const;

export const DEFAULT_OG_IMAGE_ALT =
  "MFK Stukadoors — vakmanschap in pleisterwerken en afwerking in Limburg";

export const DEFAULT_OG_IMAGE_SIZE = {
  width: 1024,
  height: 537,
} as const;

export const BUSINESS = {
  name: "MFK Stukadoors",
  legalName: "MFK Pleisterwerken BVBA",
  phoneE164: "+32488839392",
  phoneDisplay: "0488 83 93 92",
  email: "info@mfkstukadoors.be",
  streetAddress: "Halstraat 12",
  postalCode: "3550",
  addressLocality: "Heusden-Zolder",
  addressCountry: "BE",
  vatId: "BE 0820.006.425",
  linkedIn: "https://www.linkedin.com/in/mfk-pleisterwerken-bvba-8531896a/",
} as const;

export const DEFAULT_KEYWORDS = [
  "stukadoor",
  "stukadoors",
  "pleisterwerken",
  "binnenpleisterwerk",
  "buitenpleisterwerk",
  "gyproc",
  "droge bouw",
  "spuitplamuur",
  "schilderwerken",
  "renovatie",
  "Limburg",
  "Heusden-Zolder",
  "Hasselt",
  "Genk",
  "MFK Stukadoors",
  "gratis offerte",
] as const;

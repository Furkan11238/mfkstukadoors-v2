import { faqItems } from "@/lib/faq";
import {
  BUSINESS,
  DEFAULT_DESCRIPTION,
  DEFAULT_TITLE,
  SITE_URL,
} from "@/lib/site";
import { JsonLd } from "@/components/json-ld";

const orgId = `${SITE_URL}/#organization`;
const websiteId = `${SITE_URL}/#website`;

export function HomeJsonLd() {
  const graph: Record<string, unknown>[] = [
    {
      "@type": ["Organization", "LocalBusiness"],
      "@id": orgId,
      name: BUSINESS.name,
      legalName: BUSINESS.legalName,
      url: SITE_URL,
      telephone: BUSINESS.phoneE164,
      email: BUSINESS.email,
      vatID: BUSINESS.vatId,
      description: DEFAULT_DESCRIPTION,
      address: {
        "@type": "PostalAddress",
        streetAddress: BUSINESS.streetAddress,
        postalCode: BUSINESS.postalCode,
        addressLocality: BUSINESS.addressLocality,
        addressCountry: BUSINESS.addressCountry,
      },
      areaServed: {
        "@type": "AdministrativeArea",
        name: "Limburg",
        containedInPlace: {
          "@type": "Country",
          name: "België",
        },
      },
      sameAs: [BUSINESS.linkedIn],
    },
    {
      "@type": "WebSite",
      "@id": websiteId,
      url: SITE_URL,
      name: BUSINESS.name,
      description: DEFAULT_DESCRIPTION,
      inLanguage: "nl-BE",
      publisher: { "@id": orgId },
    },
    {
      "@type": "WebPage",
      "@id": `${SITE_URL}/#webpage`,
      url: SITE_URL,
      name: DEFAULT_TITLE,
      description: DEFAULT_DESCRIPTION,
      isPartOf: { "@id": websiteId },
      about: { "@id": orgId },
      inLanguage: "nl-BE",
    },
    {
      "@type": "FAQPage",
      "@id": `${SITE_URL}/#faq`,
      mainEntity: faqItems.map((item) => ({
        "@type": "Question",
        name: item.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: item.answer,
        },
      })),
    },
  ];

  return (
    <JsonLd
      data={{
        "@context": "https://schema.org",
        "@graph": graph,
      }}
    />
  );
}

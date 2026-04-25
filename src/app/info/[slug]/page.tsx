import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Phone, FileText } from "lucide-react";
import { getSeoPageBySlug, getSeoPageSlugs } from "@/lib/content";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return getSeoPageSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const page = await getSeoPageBySlug(slug);
  if (!page) return {};

  const url = `https://www.mfkstukadoors.be/info/${slug}`;

  return {
    title: page.title,
    description: page.description,
    keywords: page.keywords,
    alternates: { canonical: `/info/${slug}` },
    openGraph: {
      title: page.title,
      description: page.description,
      url,
      type: "article",
      locale: "nl_BE",
      siteName: "MFK Stukadoors",
    },
    twitter: {
      card: "summary_large_image",
      title: page.title,
      description: page.description,
    },
  };
}

export default async function InfoPage({ params }: Props) {
  const { slug } = await params;
  const page = await getSeoPageBySlug(slug);
  if (!page) notFound();

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-background pb-24 pt-20">
        <div className="container mx-auto px-6 pt-8">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            Terug naar MFK Stukadoors
          </Link>
        </div>

        <div className="container mx-auto px-6 mt-10 max-w-3xl">
          {/* Article content */}
          <article
            className="prose prose-lg max-w-none
              prose-headings:font-display prose-headings:text-foreground
              prose-h1:text-3xl prose-h1:font-black prose-h1:tracking-tight prose-h1:mb-6
              prose-h2:text-xl prose-h2:font-bold prose-h2:mt-10 prose-h2:mb-4
              prose-p:text-muted-foreground prose-p:leading-relaxed
              prose-a:text-primary prose-a:font-medium prose-a:no-underline hover:prose-a:underline
              prose-ul:text-muted-foreground prose-li:my-1
              prose-strong:text-foreground prose-strong:font-semibold
              prose-table:text-sm prose-th:text-foreground prose-td:text-muted-foreground
              prose-table:border prose-th:border prose-td:border prose-th:p-3 prose-td:p-3
              prose-blockquote:border-primary prose-blockquote:text-muted-foreground"
            dangerouslySetInnerHTML={{ __html: page.contentHtml }}
          />

          {/* CTA block */}
          <div className="mt-16 rounded-2xl border border-primary/20 bg-muted p-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
            <div>
              <h2 className="text-xl font-black text-foreground mb-1">
                Klaar voor een vrijblijvende offerte?
              </h2>
              <p className="text-sm text-muted-foreground">
                Wij komen gratis ter plaatse in Limburg. Bel ons of stuur een
                bericht.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 shrink-0">
              <Button asChild size="lg" className="shadow-lg shadow-primary/10">
                <Link href="/#contact">
                  <FileText className="h-4 w-4 mr-2" />
                  Offerte aanvragen
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <a href="tel:+32488839392">
                  <Phone className="h-4 w-4 mr-2" />
                  0488 83 93 92
                </a>
              </Button>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

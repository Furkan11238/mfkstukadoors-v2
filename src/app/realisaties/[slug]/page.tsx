import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, MapPin, Wrench, Clock } from "lucide-react";
import { realisaties } from "@/lib/realisaties";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ImageGallery from "@/components/ui/ImageGallery";

export function generateStaticParams() {
  return realisaties.map((r) => ({ slug: r.slug }));
}

type Props = { params: Promise<{ slug: string }> };

export default async function RealisatiePage({ params }: Props) {
  const { slug } = await params;
  const r = realisaties.find((x) => x.slug === slug);
  if (!r) notFound();

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-background pb-24 pt-20">
        {/* back nav */}
        <div className="container mx-auto px-6 pt-8">
          <Link
            href="/#realisaties"
            className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            Terug naar realisaties
          </Link>
        </div>

        {/* hero image */}
        <div className="container mx-auto px-6 mt-6">
          <div className="relative aspect-[16/7] w-full overflow-hidden rounded-3xl bg-muted">
            <Image
              src={r.images[0]}
              alt={r.label}
              fill
              className="object-cover"
              priority
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            <div className="absolute bottom-6 left-8">
              <p className="inline-block text-xs font-bold uppercase tracking-widest text-primary mb-2 bg-black/50 backdrop-blur-sm px-3 py-1 rounded-full">
                {r.type}
              </p>
              <h1 className="text-3xl md:text-4xl font-black text-white tracking-tight">
                {r.label}
              </h1>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-6 mt-12 grid gap-12 lg:grid-cols-3">
          {/* details sidebar */}
          <aside className="lg:col-span-1 flex flex-col gap-6">
            <div className="rounded-2xl border border-border p-6 flex flex-col gap-5">
              <h2 className="text-sm font-bold uppercase tracking-widest text-muted-foreground">
                Projectinfo
              </h2>
              <div className="flex items-start gap-3">
                <MapPin className="h-4 w-4 mt-0.5 shrink-0 text-primary" />
                <div>
                  <p className="text-xs text-muted-foreground">Locatie</p>
                  <p className="text-sm font-semibold text-foreground">
                    {r.location}
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Wrench className="h-4 w-4 mt-0.5 shrink-0 text-primary" />
                <div>
                  <p className="text-xs text-muted-foreground">Type werk</p>
                  <p className="text-sm font-semibold text-foreground">
                    {r.type}
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Clock className="h-4 w-4 mt-0.5 shrink-0 text-primary" />
                <div>
                  <p className="text-xs text-muted-foreground">
                    Uitvoeringstijd
                  </p>
                  <p className="text-sm font-semibold text-foreground">
                    {r.duration}
                  </p>
                </div>
              </div>
            </div>

            <Button
              asChild
              size="lg"
              className="w-full shadow-lg shadow-primary/10"
            >
              <Link href="/#contact">Vraag een offerte aan</Link>
            </Button>
          </aside>

          {/* description + photo grid */}
          <div className="lg:col-span-2 flex flex-col gap-10">
            <div>
              <h2 className="text-xl font-bold text-foreground mb-3">
                Over dit project
              </h2>
              <p className="text-base leading-relaxed text-muted-foreground">
                {r.description}
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-foreground mb-5">
                Foto&apos;s
              </h2>
              <ImageGallery images={r.images.slice(1)} label={r.label} />
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

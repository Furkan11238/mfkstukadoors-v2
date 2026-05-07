import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Home } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Pagina niet gevonden",
  description:
    "Deze pagina bestaat niet op mfkstukadoors.be. Ga terug naar de startpagina of neem contact op.",
  robots: {
    index: false,
    follow: true,
  },
};

export default function NotFound() {
  return (
    <>
      <Navbar />
      <main className="flex min-h-dvh flex-col bg-background pt-28">
        <div className="container mx-auto flex flex-1 flex-col items-center justify-center px-6 pb-20">
          <div className="mx-auto w-full max-w-lg text-center">
            <p className="mb-6 text-xs font-bold uppercase tracking-[0.2em] text-primary">
              Pagina niet gevonden
            </p>
            <p className="mb-40 text-7xl font-black tracking-tighter text-primary md:text-8xl">
              404
            </p>
            <h1 className="mb-6 text-2xl font-black tracking-tight text-foreground md:text-3xl">
              Deze pagina bestaat niet
            </h1>
            <p className="mb-14 text-base leading-relaxed text-muted-foreground">
              Het adres klopt niet meer of de pagina is verplaatst. Ga terug
              naar de startpagina of neem contact met ons op.
            </p>
            <div className="flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center">
              <Button asChild size="lg" className="shadow-lg shadow-primary/10">
                <Link href="/">
                  <Home className="h-4 w-4" />
                  Naar home
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="group border-2 border-primary text-primary hover:bg-primary/5"
              >
                <Link href="/#contact">
                  Vraag een offerte
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

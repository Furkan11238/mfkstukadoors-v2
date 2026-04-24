"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ImageComparison } from "@/components/ui/image-comparison-slider";

const ease = [0.25, 0.1, 0.25, 1] as const;

const Hero = () => (
  <section
    id="home"
    className="relative min-h-[90vh] flex items-center bg-background pt-20 overflow-hidden"
  >
    <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, ease }}
      >
        <div className="mb-6">
          <p className="mb-2 text-xs font-bold uppercase tracking-[0.2em] text-primary">
            Vakmanschap
          </p>
          <p className="text-sm font-medium text-muted-foreground">
            17 jaar · Limburg
          </p>
        </div>
        <h1 className="text-5xl lg:text-7xl font-black text-primary leading-[0.95] mb-6 tracking-tighter">
          Uw wanden in <br />
          <span className="text-foreground">perfecte handen</span>
        </h1>
        <p className="text-lg text-muted-foreground mb-8 max-w-md leading-relaxed">
          MFK Stukadoors staat voor kwaliteit, precisie en vakmanschap. Wij
          transformeren uw ruwbouw tot een spiegelglat resultaat.
        </p>

        <div className="flex flex-wrap gap-4 mb-10">
          <Button
            asChild
            size="lg"
            className="group shadow-lg shadow-primary/10"
          >
            <Link href="/#contact">
              Vraag een offerte
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
          <Button
            asChild
            variant="outline"
            size="lg"
            className="border-2 border-primary text-primary hover:bg-primary/5"
          >
            <Link href="/#diensten">Bekijk onze diensten</Link>
          </Button>
        </div>
      </motion.div>

      <motion.div
        className="relative hidden lg:flex flex-col gap-3"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.2, ease }}
      >
        <ImageComparison
          beforeImage="/images/lommel/pleisterwerken-residentie-vennenpark-lommel-3.webp"
          afterImage="/images/lommel/pleisterwerken-residentie-vennenpark-lommel-after.webp"
          altBefore="Wand voor pleisterwerken — ruw metselwerk"
          altAfter="Wand na pleisterwerken — strak en egaal afgewerkt"
        />
        <p className="text-center text-xs text-muted-foreground select-none">
          ← Sleep om voor &amp; na te vergelijken →
        </p>
      </motion.div>
    </div>
  </section>
);

export default Hero;

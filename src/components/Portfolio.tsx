"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Home, Building2, Bed } from "lucide-react";

const projects = [
  { icon: Home, label: "Woning" },
  { icon: Building2, label: "Gebouw" },
  { icon: Bed, label: "Interieur" },
];

export default function Portfolio() {
  return (
    <section id="realisaties" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4 mb-12">
          <div>
            <h2 className="text-3xl font-black text-foreground mb-2">
              Onze Realisaties
            </h2>
            <p className="text-muted-foreground max-w-xl">
              Een greep uit onze recente projecten. Vakmanschap waar we trots op
              zijn.
            </p>
          </div>
          <a
            href="#contact"
            className="text-primary font-bold hover:underline shrink-0 flex items-center gap-1"
          >
            Start uw project →
          </a>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <motion.div
              key={p.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="aspect-[4/3] rounded-lg bg-muted/60 flex items-center justify-center"
            >
              <p.icon
                className="w-16 h-16 text-muted-foreground/50"
                strokeWidth={1}
              />
            </motion.div>
          ))}
        </div>
        <div className="mt-12 rounded-lg bg-muted/60 p-8 md:p-10 text-center">
          <p className="mb-6 font-bold text-lg">
            Benieuwd wat wij voor uw woning kunnen doen?
          </p>
          <Button
            asChild
            variant="outline"
            size="lg"
            className="bg-background border-border font-bold"
          >
            <a href="#contact">Plan een vrijblijvend gesprek</a>
          </Button>
        </div>
      </div>
    </section>
  );
}

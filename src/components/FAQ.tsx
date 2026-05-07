"use client";

import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import {
  MapPin,
  FileText,
  Wrench,
  Clock,
  Building2,
  Layers,
  Euro,
  Droplet,
  type LucideIcon,
} from "lucide-react";
import Link from "next/link";
import { faqItems, type FaqIconKey } from "@/lib/faq";

const iconMap: Record<FaqIconKey, LucideIcon> = {
  "map-pin": MapPin,
  "file-text": FileText,
  wrench: Wrench,
  clock: Clock,
  "building-2": Building2,
  layers: Layers,
  euro: Euro,
  droplet: Droplet,
};

export default function FAQsThree() {
  return (
    <section id="faq" className="bg-muted dark:bg-background py-20">
      <div className="mx-auto max-w-5xl px-4 md:px-6">
        <div className="flex flex-col gap-10 md:flex-row md:gap-16">
          <motion.div
            className="md:w-1/3"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5 }}
          >
            <div className="sticky top-20">
              <p className="font-bold text-xs uppercase tracking-[0.2em] text-primary">
                Antwoorden
              </p>
              <h2 className="mt-3 text-3xl font-black tracking-tight text-foreground">
                Veelgestelde vragen
              </h2>
              <p className="text-muted-foreground mt-4">
                Kunt u het antwoord niet vinden?{" "}
                <Link
                  href="/#contact"
                  className="text-primary font-medium hover:underline"
                >
                  Neem contact met ons op
                </Link>
              </p>
            </div>
          </motion.div>

          <div className="md:w-2/3">
            <Accordion type="single" collapsible className="w-full space-y-2">
              {faqItems.map((item, i) => {
                const Icon = iconMap[item.icon];
                return (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-20px" }}
                    transition={{ duration: 0.4, delay: i * 0.07 }}
                  >
                    <AccordionItem
                      value={item.id}
                      className="bg-background shadow-xs rounded-lg border px-4 last:border-b"
                    >
                      <AccordionTrigger className="cursor-pointer items-center py-5 hover:no-underline">
                        <div className="flex items-center gap-3">
                          <div className="flex size-6">
                            <Icon className="m-auto size-4" />
                          </div>
                          <span className="text-base font-semibold text-foreground">
                            {item.question}
                          </span>
                        </div>
                      </AccordionTrigger>
                      <AccordionContent className="pb-5">
                        <div className="px-9">
                          <p className="text-sm text-muted-foreground">
                            {item.answer}
                          </p>
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                  </motion.div>
                );
              })}
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  );
}

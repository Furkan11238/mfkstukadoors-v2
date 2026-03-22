"use client";

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
  type LucideIcon,
} from "lucide-react";
import Link from "next/link";

const iconMap: Record<string, LucideIcon> = {
  "map-pin": MapPin,
  "file-text": FileText,
  wrench: Wrench,
  clock: Clock,
  "building-2": Building2,
};

type FAQItem = {
  id: string;
  icon: keyof typeof iconMap;
  question: string;
  answer: string;
};

export default function FAQsThree() {
  const faqItems: FAQItem[] = [
    {
      id: "item-1",
      icon: "map-pin",
      question: "In welke regio bent u actief?",
      answer:
        "Wij zijn actief in heel Limburg en omstreken.",
    },
    {
      id: "item-2",
      icon: "file-text",
      question: "Hoe vraag ik een offerte aan?",
      answer:
        "Via het contactformulier of telefonisch op 0488 83 93 92. Wij nemen snel contact op.",
    },
    {
      id: "item-3",
      icon: "wrench",
      question: "Voeren jullie ook kleine herstellingen uit?",
      answer:
        "Ja, ook voor kleine reparaties en herstellingen zijn wij beschikbaar.",
    },
    {
      id: "item-4",
      icon: "clock",
      question: "Hoe lang duurt een pleisterwerkopdracht?",
      answer:
        "Dit hangt af van de omvang. Een gemiddelde kamer is klaar in 1 à 2 dagen.",
    },
    {
      id: "item-5",
      icon: "building-2",
      question: "Werken jullie voor particulieren en bedrijven?",
      answer:
        "Ja, wij werken zowel voor particulieren als voor aannemers en bedrijven.",
    },
  ];

  return (
    <section className="bg-muted dark:bg-background py-20">
      <div className="mx-auto max-w-5xl px-4 md:px-6">
        <div className="flex flex-col gap-10 md:flex-row md:gap-16">
          <div className="md:w-1/3">
            <div className="sticky top-20">
              <h2 className="mt-4 text-3xl font-bold">
                Veelgestelde Vragen
              </h2>
              <p className="text-muted-foreground mt-4">
                Kunt u het antwoord niet vinden?{" "}
                <Link
                  href="#contact"
                  className="text-primary font-medium hover:underline"
                >
                  Neem contact met ons op
                </Link>
              </p>
            </div>
          </div>
          <div className="md:w-2/3">
            <Accordion type="single" collapsible className="w-full space-y-2">
              {faqItems.map((item) => {
                const Icon = iconMap[item.icon];
                return (
                  <AccordionItem
                    key={item.id}
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
                );
              })}
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  );
}

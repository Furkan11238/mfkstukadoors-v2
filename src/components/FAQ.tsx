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

const iconMap: Record<string, LucideIcon> = {
  "map-pin": MapPin,
  "file-text": FileText,
  wrench: Wrench,
  clock: Clock,
  "building-2": Building2,
  layers: Layers,
  euro: Euro,
  droplet: Droplet,
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
        "Wij zijn actief in heel Limburg, waaronder Kuringen, Hasselt, Genk en Beringen. Voor grotere projecten werken wij ook buiten Limburg.",
    },
    {
      id: "item-2",
      icon: "file-text",
      question: "Hoe vraag ik een offerte aan?",
      answer:
        "U kan eenvoudig een offerte aanvragen via het contactformulier of telefonisch op 0488 83 93 92. Wij nemen snel contact op voor een vrijblijvende prijsopgave.",
    },
    {
      id: "item-3",
      icon: "wrench",
      question: "Voeren jullie ook kleine herstellingen uit?",
      answer:
        "Ja, wij voeren zowel kleine herstellingen als grotere pleisterwerken uit. Neem gerust contact op om uw situatie te bespreken.",
    },
    {
      id: "item-4",
      icon: "clock",
      question: "Hoe lang duurt een pleisterwerkopdracht?",
      answer:
        "De duurtijd hangt af van de grootte van het project. Een gemiddelde kamer is vaak klaar binnen 1 à 2 dagen, grotere projecten nemen meerdere dagen tot weken in beslag.",
    },
    {
      id: "item-5",
      icon: "building-2",
      question: "Werken jullie voor particulieren en bedrijven?",
      answer:
        "Ja, wij werken voor particulieren, aannemers en bedrijven. Zowel kleine als grote projecten zijn welkom.",
    },
    {
      id: "item-6",
      icon: "layers",
      question: "Wat is het verschil tussen dunpleister en dikpleister?",
      answer:
        "Dunpleister wordt in een dunne laag aangebracht en zorgt voor een zeer gladde afwerking, ideaal als voorbereiding voor schilderwerken. Dikpleister wordt gebruikt om oneffen muren uit te vlakken en grotere verschillen op te vangen.",
    },
    {
      id: "item-7",
      icon: "euro",
      question: "Wat kost pleisterwerk per m²?",
      answer:
        "De prijs hangt af van verschillende factoren zoals de ondergrond, oppervlakte en afwerking. Neem contact op voor een vrijblijvende offerte op maat van uw project.",
    },
    {
      id: "item-8",
      icon: "droplet",
      question: "Hoe lang moet pleisterwerk drogen?",
      answer:
        "Gemiddeld moet pleisterwerk 1 tot 2 weken drogen, afhankelijk van de dikte en ventilatie in de ruimte. Goede verluchting versnelt het droogproces.",
    },
  ];

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

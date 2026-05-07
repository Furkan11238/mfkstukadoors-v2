export type FaqIconKey =
  | "map-pin"
  | "file-text"
  | "wrench"
  | "clock"
  | "building-2"
  | "layers"
  | "euro"
  | "droplet";

export type FaqItem = {
  id: string;
  icon: FaqIconKey;
  question: string;
  answer: string;
};

/** Source of truth for homepage FAQ (UI + FAQPage JSON-LD must match). */
export const faqItems: FaqItem[] = [
  {
    id: "item-1",
    icon: "map-pin",
    question: "In welke regio zijn jullie actief?",
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

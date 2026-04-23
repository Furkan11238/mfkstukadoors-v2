"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { SectionHeading } from "@/components/section-heading";

type Service = {
  title: string;
  desc: string;
  image: string;
};

const services: Service[] = [
  {
    title: "Binnenpleisterwerken",
    desc: "Strakke en duurzame binnenafwerking voor nieuwbouw en renovatie.",
    image: "/images/diensten/binnenpleisterwerken.webp",
  },
  {
    title: "Buitenpleisterwerken",
    desc: "Weerbestendige gevelbekleding die uw woning beschermt en verfraait.",
    image:
      "https://images.unsplash.com/photo-1605276374104-dee2a0ed3cd6?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Gyproc / Droge bouw",
    desc: "Snelle en nette plaatsing van gipskartonwanden en -plafonds.",
    image: "/images/diensten/gyproc-droge-bouw.webp",
  },
  {
    title: "Spuitplamuur",
    desc: "Spiegelgladde muurafwerking klaar voor schilderwerk.",
    image:
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Schilderwerken",
    desc: "Professioneel schilderwerk binnen en buiten voor een perfect eindresultaat.",
    image:
      "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Renovatie & Herstellingen",
    desc: "Herstel van beschadigde muren, scheuren en oude afwerkingen.",
    image:
      "https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=900&q=80",
  },
];

const Services = () => (
  <section id="diensten" className="py-24">
    <div className="container mx-auto px-6">
      <SectionHeading
        className="mb-16"
        eyebrow="Vakmanschap"
        title="Onze diensten"
        description="Van ruwbouw tot afwerking — wij verzorgen het volledige pleisterwerk, met oog voor detail op de werf én in het eindresultaat."
      />

      <div className="grid gap-x-6 gap-y-12 sm:grid-cols-2 xl:grid-cols-3">
        {services.map((s, i) => (
          <motion.article
            key={s.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.45, delay: Math.min(i * 0.07, 0.35) }}
            className="group flex flex-col"
          >
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl bg-muted ring-2 ring-transparent transition-all duration-300 group-hover:ring-primary">
              <Image
                src={s.image}
                alt={s.title}
                fill
                className="object-cover"
                sizes="(min-width: 1280px) 33vw, (min-width: 640px) 50vw, 100vw"
              />
            </div>

            <div className="mt-5 flex flex-col gap-1.5">
              <h3 className="text-[1rem] font-semibold tracking-tight text-foreground transition-colors duration-300 group-hover:text-primary">
                {s.title}
              </h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                {s.desc}
              </p>
            </div>
          </motion.article>
        ))}
      </div>
    </div>
  </section>
);

export default Services;

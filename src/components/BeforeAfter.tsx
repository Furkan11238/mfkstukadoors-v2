"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/section-heading";
import { ImageComparison } from "@/components/ui/image-comparison-slider";

export default function BeforeAfter() {
  return (
    <section id="voor-na" className="py-24 bg-muted/30">
      <div className="container mx-auto px-6">
        <SectionHeading
          className="mb-16"
          eyebrow="Resultaat"
          title="Voor & na"
          description="Zie het verschil: van ruw en onafgewerkt naar een perfect gladde muur, klaar om direct te schilderen."
        />

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-5xl"
        >
          <ImageComparison
            beforeImage="/images/lommel/pleisterwerken-residentie-vennenpark-lommel-3.webp"
            afterImage="/images/lommel/pleisterwerken-residentie-vennenpark-lommel-after.webp"
            altBefore="Wand voor pleisterwerken — ruw metselwerk"
            altAfter="Wand na pleisterwerken — strak en egaal afgewerkt"
          />
        </motion.div>
      </div>
    </section>
  );
}

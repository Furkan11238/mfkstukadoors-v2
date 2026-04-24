"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

type NumericStat = {
  kind: "number";
  target: number;
  suffix: string;
  label: string;
};

type TextStat = {
  kind: "text";
  value: string;
  label: string;
};

const stats: (NumericStat | TextStat)[] = [
  { kind: "number", target: 20, suffix: "+", label: "Jaar Ervaring" },
  { kind: "number", target: 500, suffix: "+", label: "Projecten Afgerond" },
  { kind: "number", target: 100, suffix: "%", label: "Gratis Offerte" },
  { kind: "text", value: "#1", label: "Stukadoor in Limburg" },
];

const DURATION_MS = 1600;
const STAGGER_MS = 90;

function easeOutCubic(t: number) {
  return 1 - (1 - t) ** 3;
}

function CountUpValue({
  target,
  suffix,
  started,
  delayIndex,
}: {
  target: number;
  suffix: string;
  started: boolean;
  delayIndex: number;
}) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!started) return;

    const delay = delayIndex * STAGGER_MS;
    let raf = 0;
    let startTime: number | null = null;

    const tick = (now: number) => {
      if (startTime === null) startTime = now;
      const elapsed = now - startTime - delay;
      if (elapsed < 0) {
        raf = requestAnimationFrame(tick);
        return;
      }
      const t = Math.min(elapsed / DURATION_MS, 1);
      const eased = easeOutCubic(t);
      setValue(Math.round(eased * target));
      if (t < 1) {
        raf = requestAnimationFrame(tick);
      } else {
        setValue(target);
      }
    };

    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [started, target, delayIndex]);

  return (
    <span className="tabular-nums">
      {value}
      {suffix}
    </span>
  );
}

const TrustStrip = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.35 });

  return (
    <section ref={sectionRef} className="bg-dark py-16">
      <div className="container mx-auto px-6">
        <p className="mb-10 text-center text-xs font-bold uppercase tracking-[0.2em] text-secondary/90">
          Ervaring
        </p>
        <div className="grid grid-cols-2 gap-8 lg:grid-cols-4">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 16 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.45, delay: i * 0.06 }}
              className="text-center"
            >
              <div className="mb-2 text-4xl font-black text-primary-foreground lg:text-5xl">
                {s.kind === "number" ? (
                  <CountUpValue
                    target={s.target}
                    suffix={s.suffix}
                    started={isInView}
                    delayIndex={i}
                  />
                ) : (
                  s.value
                )}
              </div>
              <div className="text-sm font-bold text-secondary/80">
                {s.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustStrip;

"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";

const contactInfo = [
  { icon: Phone, label: "0488 83 93 92", href: "tel:+32488839392" },
  {
    icon: Mail,
    label: "info@mfkstukadoors.be",
    href: "mailto:info@mfkstukadoors.be",
  },
  { icon: MapPin, label: "Halstraat 12, 3550 Heusden-Zolder" },
  {
    icon: Globe,
    label: "www.mfkstukadoors.be",
    href: "https://www.mfkstukadoors.be",
  },
];

const serviceOptions = [
  "Binnenpleisterwerken",
  "Buitenpleisterwerken",
  "Gyproc / Droge bouw",
  "Spuitplamuur",
  "Schilderwerken",
  "Renovatie & Herstellingen",
];

const Contact = () => {
  const { toast } = useToast();
  const [sending, setSending] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSending(true);
    setTimeout(() => {
      setSending(false);
      toast({
        title: "Aanvraag verstuurd!",
        description: "Wij nemen zo snel mogelijk contact met u op.",
      });
      (e.target as HTMLFormElement).reset();
    }, 1000);
  };

  return (
    <section id="contact" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-black text-foreground mb-4">
            Contacteer Ons
          </h2>
          <p className="text-muted-foreground">
            Vraag een gratis offerte aan of stel uw vraag.
          </p>
        </div>
        <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
          >
            <div className="space-y-6 mb-8">
              {contactInfo.map((c) => (
                <div key={c.label} className="flex items-start gap-4">
                  <c.icon
                    className="w-5 h-5 text-primary mt-0.5 shrink-0"
                    strokeWidth={1.5}
                  />
                  {c.href ? (
                    <a
                      href={c.href}
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      {c.label}
                    </a>
                  ) : (
                    <span className="text-muted-foreground">{c.label}</span>
                  )}
                </div>
              ))}
            </div>
            <div className="aspect-video bg-light rounded-lg flex items-center justify-center">
              <span className="text-muted-foreground text-sm">
                Kaart — Heusden-Zolder
              </span>
            </div>
          </motion.div>

          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="bg-card rounded-lg p-8 shadow-[0_0_0_1px_hsl(var(--border)),0_4px_12px_rgba(0,0,0,0.06)] space-y-5"
          >
            <div>
              <label className="text-sm font-bold text-foreground mb-1.5 block">
                Naam
              </label>
              <Input
                required
                placeholder="Uw naam"
                className="focus:ring-primary focus:border-primary"
              />
            </div>
            <div className="grid sm:grid-cols-2 gap-5">
              <div>
                <label className="text-sm font-bold text-foreground mb-1.5 block">
                  E-mail
                </label>
                <Input required type="email" placeholder="uw@email.be" />
              </div>
              <div>
                <label className="text-sm font-bold text-foreground mb-1.5 block">
                  Telefoon
                </label>
                <Input type="tel" placeholder="04XX XX XX XX" />
              </div>
            </div>
            <div>
              <label className="text-sm font-bold text-foreground mb-1.5 block">
                Type werk
              </label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Selecteer een dienst" />
                </SelectTrigger>
                <SelectContent>
                  {serviceOptions.map((s) => (
                    <SelectItem key={s} value={s}>
                      {s}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div>
              <label className="text-sm font-bold text-foreground mb-1.5 block">
                Bericht
              </label>
              <Textarea
                required
                rows={4}
                placeholder="Beschrijf kort uw project..."
              />
            </div>
            <Button
              type="submit"
              size="lg"
              className="w-full"
              disabled={sending}
            >
              {sending ? "Versturen..." : "Verstuur aanvraag"}
            </Button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;

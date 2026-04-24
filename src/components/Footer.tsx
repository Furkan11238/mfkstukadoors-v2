import Link from "next/link";

const socialLinks = [
  {
    label: "LinkedIn — MFK Pleisterwerken BVBA",
    href: "https://www.linkedin.com/in/mfk-pleisterwerken-bvba-8531896a/",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="currentColor"
        className="h-4 w-4"
        aria-hidden
      >
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
];

const links = [
  { label: "Home", href: "/#home" },
  { label: "Diensten", href: "/#diensten" },
  { label: "Realisaties", href: "/#realisaties" },
  { label: "FAQ", href: "/#faq" },
  { label: "Contact", href: "/#contact" },
];

const diensten = [
  { label: "Binnenpleisterwerken", href: "/#diensten" },
  { label: "Buitenpleisterwerken", href: "/#diensten" },
  { label: "Gyproc / Droge bouw", href: "/#diensten" },
  { label: "Spuitplamuur", href: "/#diensten" },
  { label: "Schilderwerken", href: "/#diensten" },
  { label: "Renovatie & Herstellingen", href: "/#diensten" },
];

const Footer = () => (
  <footer className="bg-dark border-t-[3px] border-primary">
    <div className="container mx-auto px-6 py-16">
      <div className="grid md:grid-cols-4 gap-12">
        <div>
          <div className="mb-4 flex items-center">
            <span className="text-2xl font-display font-black text-primary-foreground">
              MFK
            </span>
            <span className="text-sm font-bold tracking-[0.1em] text-primary-foreground/70 ml-2 uppercase ">
              Stukadoors
            </span>
          </div>
          <p className="text-sm text-primary-foreground/50 leading-relaxed mb-5">
            20 jaar vakmanschap in Limburg. Kwaliteit, precisie en
            betrouwbaarheid.
          </p>
          <div className="flex gap-3">
            {socialLinks.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.label}
                className="flex h-8 w-8 items-center justify-center rounded-full bg-primary-foreground/10 text-primary-foreground/60 transition-colors hover:bg-primary hover:text-primary-foreground"
              >
                {s.icon}
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="font-bold text-primary-foreground mb-4 text-sm uppercase tracking-wider">
            Snelle Links
          </h4>
          <div className="space-y-2">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="block text-sm text-primary-foreground/50 hover:text-primary-foreground transition-colors"
              >
                {l.label}
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="font-bold text-primary-foreground mb-4 text-sm uppercase tracking-wider">
            Diensten
          </h4>
          <div className="space-y-2">
            {diensten.map((d) => (
              <a
                key={d.label}
                href={d.href}
                className="block text-sm text-primary-foreground/50 hover:text-primary-foreground transition-colors"
              >
                {d.label}
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="font-bold text-primary-foreground mb-4 text-sm uppercase tracking-wider">
            Contact
          </h4>
          <div className="space-y-2 text-sm text-primary-foreground/50">
            <p>0488 83 93 92</p>
            <p>info@mfkstukadoors.be</p>
            <p>Halstraat 12, 3550 Heusden-Zolder</p>
            <p>BE 0820.006.425</p>
          </div>
        </div>
      </div>
    </div>
    <div className="container mx-auto py-4 px-6 ">
      <div className="mb-6 h-px w-full bg-primary" />
      <div className="flex flex-col items-center justify-between gap-4 px-6 sm:flex-row">
        <p className="text-xs text-[#A0A0A0]">
          © 2026 MFK Stukadoors. Alle rechten voorbehouden.
        </p>
        <div className="flex gap-6">
          <Link
            href="/terms"
            className="text-xs text-[#A0A0A0] transition-colors hover:text-white"
          >
            Algemene voorwaarden
          </Link>
          <Link
            href="/privacy-policy"
            className="text-xs text-[#A0A0A0] transition-colors hover:text-white"
          >
            Privacybeleid
          </Link>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;

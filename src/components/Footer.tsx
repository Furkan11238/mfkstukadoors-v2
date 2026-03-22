import Link from "next/link";

const links = [
  { label: "Home", href: "#home" },
  { label: "Diensten", href: "#diensten" },
  { label: "Realisaties", href: "#realisaties" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
];

const Footer = () => (
  <footer className="bg-dark border-t-[3px] border-primary">
    <div className="container mx-auto px-6 py-16">
      <div className="grid md:grid-cols-3 gap-12">
        <div>
          <div className="mb-4 flex items-center">
            <span className="text-2xl font-display font-black text-primary-foreground">
              MFK
            </span>
            <span className="text-sm font-bold tracking-[0.1em] text-primary-foreground/70 ml-2 uppercase ">
              Stukadoors
            </span>
          </div>
          <p className="text-sm text-primary-foreground/50 leading-relaxed">
            20 jaar vakmanschap in Limburg. Kwaliteit, precisie en
            betrouwbaarheid.
          </p>
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
            Contact
          </h4>
          <div className="space-y-2 text-sm text-primary-foreground/50">
            <p>0488 83 93 92</p>
            <p>info@mfkstukadoors.be</p>
            <p>Halstraat 12, 3550 Heusden-Zolder</p>
            <p>BTW: BE0820.006.425</p>
          </div>
        </div>
      </div>
    </div>
    <div className="container mx-auto py-8 px-6 ">
      <div className="mb-6 h-px w-full bg-primary" />
      <div className="flex flex-col items-center justify-between gap-4 px-6 sm:flex-row">
        <p className="text-xs text-[#A0A0A0]">
          © 2025 MFK Stukadoors. Alle rechten voorbehouden.
        </p>
        <div className="flex gap-6">
          <Link
            href="/terms"
            className="text-xs text-[#A0A0A0] transition-colors hover:text-white"
          >
            Terms and Conditions
          </Link>
          <Link
            href="/privacy-policy"
            className="text-xs text-[#A0A0A0] transition-colors hover:text-white"
          >
            Privacy Policy
          </Link>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;

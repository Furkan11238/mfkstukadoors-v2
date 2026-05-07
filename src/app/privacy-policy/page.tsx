import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: {
    absolute: "Privacybeleid | MFK Stukadoors",
  },
  description:
    "Privacybeleid van MFK Stukadoors / MFK Pleisterwerken: welke gegevens wij verzamelen via het contactformulier en hoe wij die verwerken.",
  alternates: {
    canonical: "/privacy-policy",
  },
};

export default function PrivacyPolicy() {
  return (
    <>
      <Navbar />
      <div className="container mx-auto max-w-3xl px-6 pt-28">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
        >
          <ArrowLeft className="h-4 w-4" />
          Terug naar home
        </Link>
      </div>
      <article className="container mx-auto max-w-3xl px-6 py-12">
        <header className="mb-12 border-b border-border pb-8">
          <h1 className="text-3xl font-black text-foreground tracking-tight sm:text-4xl">
            Privacybeleid
          </h1>
          <p className="mt-3 text-muted-foreground">
            MFK Stukadoors / MFK Pleisterwerken
          </p>
          <p className="mt-1 text-sm text-muted-foreground">
            Laatst bijgewerkt: maart 2026
          </p>
        </header>

        <div className="space-y-10 text-muted-foreground leading-relaxed">
          <section>
            <h2 className="text-xl font-bold text-foreground mb-3">
              1. Wie zijn wij?
            </h2>
            <p>
              MFK Stukadoors / MFK Pleisterwerken is een stukadoorsbedrijf
              gevestigd in België. Via onze website kunnen potentiële klanten
              een offerte aanvragen. In dit privacybeleid leggen wij uit welke
              persoonsgegevens wij verzamelen, waarom we dat doen en hoe we
              daarmee omgaan.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-foreground mb-3">
              2. Welke gegevens verzamelen wij?
            </h2>
            <p className="mb-3">
              Wanneer u een offerteaanvraag indient via ons contactformulier,
              verzamelen wij de volgende persoonsgegevens:
            </p>
            <ul className="list-disc pl-6 space-y-1.5 marker:text-primary">
              <li>Naam</li>
              <li>E-mailadres</li>
              <li>Telefoonnummer</li>
              <li>Type werk / gekozen dienst</li>
              <li>Bericht (beschrijving van uw aanvraag of project)</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-foreground mb-3">
              3. Waarvoor gebruiken wij uw gegevens?
            </h2>
            <p className="mb-3">Uw gegevens worden uitsluitend gebruikt om:</p>
            <ul className="list-disc pl-6 space-y-1.5 marker:text-primary">
              <li>
                uw offerteaanvraag te verwerken en u een gepaste offerte te
                bezorgen;
              </li>
              <li>contact met u op te nemen in verband met uw aanvraag.</li>
            </ul>
            <p className="mt-3">
              Wij gebruiken uw gegevens niet voor commerciële mailings,
              nieuwsbrieven of enige andere vorm van marketing, tenzij u daar
              uitdrukkelijk mee instemt.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-foreground mb-3">
              4. Hoe worden uw gegevens verwerkt?
            </h2>
            <p className="mb-3">
              Wanneer u het formulier invult, worden uw gegevens via een
              beveiligde verbinding (SSL/HTTPS) naar onze server verstuurd en
              van daaruit per e-mail aan ons bezorgd. De technische verzending
              van e-mail gebeurt via een professionele e-maildienst (verwerker)
              die enkel optreedt volgens onze instructies en passende
              beveiliging biedt.
            </p>
            <p>
              Wij slaan uw gegevens op in onze e-mailomgeving en bewaren ze
              enkel zolang dat noodzakelijk is voor de afhandeling van uw
              aanvraag. Uw persoonsgegevens worden niet verkocht en niet gedeeld
              met derden voor hun eigen doeleinden. Medewerking aan een
              wettelijke verplichting of een bevoegde autoriteit blijft
              uitzonderlijk mogelijk.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-foreground mb-3">
              5. Rechtsgrond voor de verwerking
            </h2>
            <p>
              De verwerking van uw gegevens is gebaseerd op uw toestemming (art.
              6, lid 1, a) AVG) die u geeft door het formulier in te vullen en
              in te dienen, en/of op de uitvoering van pre-contractuele
              maatregelen (art. 6, lid 1, b) AVG) in het kader van uw
              offerteaanvraag.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-foreground mb-3">
              6. Hoe lang bewaren wij uw gegevens?
            </h2>
            <p>
              Wij bewaren uw persoonsgegevens niet langer dan noodzakelijk is
              voor het doel waarvoor ze zijn verzameld. In de praktijk betekent
              dit dat wij uw gegevens bewaren zolang er een actieve communicatie
              loopt over uw aanvraag, en maximaal 2 jaar daarna voor eventuele
              nakomende vragen of garantiekwesties.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-foreground mb-3">
              7. Uw rechten als betrokkene
            </h2>
            <p className="mb-3">
              Op grond van de Algemene Verordening Gegevensbescherming (AVG /
              GDPR) heeft u de volgende rechten:
            </p>
            <ul className="list-disc pl-6 space-y-1.5 marker:text-primary">
              <li>
                <span className="text-foreground font-semibold">
                  Recht op inzage:
                </span>{" "}
                u kunt opvragen welke gegevens wij van u bezitten.
              </li>
              <li>
                <span className="text-foreground font-semibold">
                  Recht op correctie:
                </span>{" "}
                u kunt onjuiste gegevens laten aanpassen.
              </li>
              <li>
                <span className="text-foreground font-semibold">
                  Recht op verwijdering:
                </span>{" "}
                u kunt vragen uw gegevens te laten wissen.
              </li>
              <li>
                <span className="text-foreground font-semibold">
                  Recht op beperking:
                </span>{" "}
                u kunt de verwerking van uw gegevens laten beperken.
              </li>
              <li>
                <span className="text-foreground font-semibold">
                  Recht op bezwaar:
                </span>{" "}
                u kunt bezwaar maken tegen de verwerking van uw gegevens.
              </li>
              <li>
                <span className="text-foreground font-semibold">
                  Recht op overdraagbaarheid:
                </span>{" "}
                u kunt uw gegevens in een gangbaar formaat opvragen.
              </li>
            </ul>
            <p className="mt-3">
              Om een van deze rechten uit te oefenen, kunt u contact opnemen via
              de onderstaande contactgegevens. Wij reageren zo snel mogelijk en
              uiterlijk binnen 30 dagen.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-foreground mb-3">
              8. Beveiliging van uw gegevens
            </h2>
            <p>
              Wij nemen passende technische en organisatorische maatregelen om
              uw persoonsgegevens te beveiligen tegen verlies, misbruik of
              ongeautoriseerde toegang. Communicatie via onze website verloopt
              via een beveiligde SSL-verbinding.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-foreground mb-3">
              9. Klacht indienen
            </h2>
            <p className="mb-3">
              Indien u van mening bent dat uw persoonsgegevens niet correct
              worden verwerkt, heeft u het recht een klacht in te dienen bij de
              Belgische toezichthoudende autoriteit:
            </p>
            <address className="not-italic text-foreground border border-border rounded-lg p-4 bg-card/50">
              <p className="font-semibold">
                Gegevensbeschermingsautoriteit (GBA)
              </p>
              <p className="mt-1">Drukpersstraat 35, 1000 Brussel</p>
              <p className="mt-2">
                <a
                  href="https://www.gegevensbeschermingsautoriteit.be"
                  className="text-primary underline underline-offset-4 hover:no-underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  www.gegevensbeschermingsautoriteit.be
                </a>
              </p>
            </address>
          </section>

          <section>
            <h2 className="text-xl font-bold text-foreground mb-3">
              10. Wijzigingen aan dit privacybeleid
            </h2>
            <p>
              Wij behouden ons het recht voor dit privacybeleid te allen tijde
              te wijzigen. De meest actuele versie is steeds beschikbaar op onze
              website. Wij raden u aan dit beleid regelmatig te raadplegen.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-foreground mb-3">
              11. Contact
            </h2>
            <p className="mb-3">
              Voor vragen over dit privacybeleid of over de verwerking van uw
              persoonsgegevens kunt u ons bereiken via:
            </p>
            <address className="not-italic text-foreground border border-border rounded-lg p-4 bg-card/50">
              <p className="font-semibold">
                MFK Stukadoors / MFK Pleisterwerken
              </p>
              <p className="mt-1">Halstraat 12, 3550 Heusden-Zolder, België</p>
              <p className="mt-3">
                E-mail:{" "}
                <a
                  href="mailto:info@mfkstukadoors.be"
                  className="text-primary underline underline-offset-4 hover:no-underline"
                >
                  info@mfkstukadoors.be
                </a>
              </p>
              <p>
                Telefoon:{" "}
                <a
                  href="tel:+32488839392"
                  className="text-primary underline underline-offset-4 hover:no-underline"
                >
                  0488 83 93 92
                </a>
              </p>
            </address>
          </section>
        </div>
      </article>
      <Footer />
    </>
  );
}

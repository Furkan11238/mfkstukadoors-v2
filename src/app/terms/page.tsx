import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: {
    absolute: "Algemene voorwaarden | MFK Stukadoors",
  },
  description:
    "Algemene voorwaarden van MFK Stukadoors / MFK Pleisterwerken voor offertes, uitvoering van werken en betaling.",
  alternates: {
    canonical: "/terms",
  },
};

export default function TermsPage() {
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
            Algemene voorwaarden
          </h1>
          <p className="mt-3 text-muted-foreground">
            MFK Stukadoors / MFK Pleisterwerken
          </p>
          <p className="mt-1 text-sm text-muted-foreground">
            Laatst bijgewerkt: maart 2026
          </p>
        </header>

        <div className="space-y-10 text-muted-foreground leading-relaxed">
          <section className="rounded-lg border border-border bg-muted/30 p-4 text-sm">
            <p className="mb-2">
              Onderstaande tekst beschrijft op een algemene manier hoe wij
              werken. Wat op uw offerte of in een ondertekende overeenkomst
              staat, gaat voor op deze pagina.
            </p>
            <p>
              Bepalingen die niet kunnen worden afgeschaft door contract (zoals
              bepaalde rechten voor particulieren of minimumbeschermingen in de
              wet) blijven steeds gelden. Als iets op deze pagina zou botsen met
              de wet, geldt de wet.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-foreground mb-3">
              1. Definities en toepassing
            </h2>
            <p className="mb-3">
              Deze algemene voorwaarden zijn van toepassing op alle offertes,
              bestellingen en overeenkomsten tussen{" "}
              <span className="text-foreground font-medium">
                MFK Stukadoors / MFK Pleisterwerken
              </span>{" "}
              (hierna: “wij”, “de ondernemer”) en de klant (hierna: “u”, “de
              opdrachtgever”), voor zover niet uitdrukkelijk schriftelijk anders
              overeengekomen.
            </p>
            <p>
              Afspraken die schriftelijk met ons vastliggen (bijvoorbeeld op de
              offerte), gaan voor op deze algemene tekst.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-foreground mb-3">
              2. Identiteit
            </h2>
            <address className="not-italic text-foreground border border-border rounded-lg p-4 bg-card/50">
              <p className="font-semibold">
                MFK Stukadoors / MFK Pleisterwerken
              </p>
              <p className="mt-1">Halstraat 12, 3550 Heusden-Zolder, België</p>
              <p className="mt-1">BTW: BE0820.006.425</p>
              <p className="mt-2">
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

          <section>
            <h2 className="text-xl font-bold text-foreground mb-3">
              3. Offertes en totstandkoming van de overeenkomst
            </h2>
            <ul className="list-disc pl-6 space-y-1.5 marker:text-primary">
              <li>
                Offertes zijn vrijblijvend, tenzij uitdrukkelijk anders vermeld,
                en hebben een beperkte geldigheidsduur zoals op de offerte
                vermeld (of bij geen vermelding: redelijke termijn).
              </li>
              <li>
                De overeenkomst komt tot stand door schriftelijke aanvaarding
                van de offerte (of ondertekening), door betaling van een
                eventueel voorschot zoals afgesproken, of door uitdrukkelijke
                bevestiging per e-mail, afhankelijk van wat partijen zo
                overeenkomen.
              </li>
              <li>
                Wijzigingen of extra werken die niet in de offerte staan, worden
                beschouwd als meerwerk en worden vooraf met u afgestemd (prijs
                en planning).
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-foreground mb-3">
              4. Uitvoering van de werken
            </h2>
            <ul className="list-disc pl-6 space-y-1.5 marker:text-primary">
              <li>
                Wij voeren de werken uit volgens de regels der kunst en de
                geldende normen, binnen de op de offerte beschreven omvang.
              </li>
              <li>
                U zorgt voor tijdige toegang tot de werf, nutsvoorzieningen
                indien nodig, en een geschikte ondergrond en omgeving zoals
                afgesproken. Vertraging door niet-nakoming van medewerking kan
                impact hebben op planning en kosten.
              </li>
              <li>
                Indien blijkt dat de werken niet kunnen worden uitgevoerd zoals
                voorzien door verborgen gebreken, onveilige situaties of fouten
                van derden, pauzeren of wijzigen wij de uitvoering in overleg
                met u.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-foreground mb-3">
              5. Prijzen en betaling
            </h2>
            <ul className="list-disc pl-6 space-y-1.5 marker:text-primary">
              <li>
                Alle prijzen zijn vermeld in euro en — tenzij anders vermeld —
                exclusief BTW. Het geldende BTW-tarief wordt toegepast op het
                ogenblik van facturatie.
              </li>
              <li>
                Betalingsvoorwaarden (voorschot, saldo, termijnen) staan op de
                offerte of factuur. Facturen dienen betaald te worden tegen de
                op de factuur vermelde vervaldatum. Bij laattijdige betaling
                kunnen de wettelijke rentevoeten en eventuele incassokosten
                verschuldigd zijn zoals de Belgische wet voorschrijft.
              </li>
              <li>
                Bij aanhoudende niet-betaling kunnen wij de werken tijdelijk
                opschorten, na u tijdig te hebben verwittigd en rekening houdend
                met wat redelijk is in de omstandigheden.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-foreground mb-3">
              6. Termijnen en planning
            </h2>
            <p>
              Planning en uitvoeringstermijnen zijn bij benadering, tenzij op de
              offerte uitdrukkelijk anders afgesproken. Vertraging kan ontstaan
              door weersomstandigheden, levering van materialen, overmacht of
              wanneer de nodige medewerking van de opdrachtgever uitblijft. In
              dat geval zoeken we in redelijkheid een oplossing samen met u.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-foreground mb-3">
              7. Oplevering en garantie
            </h2>
            <ul className="list-disc pl-6 space-y-1.5 marker:text-primary">
              <li>
                De werken worden geacht te zijn opgeleverd na schriftelijke of
                stilzwijgende aanvaarding, of na gebruikneming zonder tijdig
                gemotiveerd protest binnen een redelijke termijn na mededeling
                van gereedmelding.
              </li>
              <li>
                Voor zover van toepassing geniet u van de wettelijke garanties
                voor consumenten of de wettelijke en contractuele garanties voor
                verborgen gebreken, conform de Belgische wetgeving. Contractuele
                garanties of uitbreidingen worden per offerte vermeld.
              </li>
              <li>
                Zichtbare gebreken dient u ons schriftelijk te melden binnen
                korte termijn na de vaststelling. Voor verborgen gebreken gelden
                de wettelijke termijnen.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-foreground mb-3">
              8. Aansprakelijkheid
            </h2>
            <p className="mb-3">
              Wij voeren onze werken uit met de zorg die van een vakman mag
              worden verwacht. Eventuele aanspraken worden beoordeeld in
              onderling overleg en binnen het kader van de geldende Belgische
              wetgeving (waaronder, voor zover van toepassing, de regels over
              verborgen gebreken en andere wettelijke garanties).
            </p>
            <p>
              Schade die rechtstreeks het gevolg is van omstandigheden buiten
              onze redelijke controle (bijvoorbeeld fouten of vertragingen van
              andere aannemers of leveranciers, tenzij wij daarvoor instaan),
              valt niet onder onze verantwoordelijkheid, voor zover de wet ons
              dat toelaat. Waar de wet geen afstand toelaat, blijven uw rechten
              onverminderd gelden.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-foreground mb-3">
              9. Overmacht
            </h2>
            <p>
              In geval van overmacht (onder meer staking, natuurramp, pandemie,
              ernstige leveringsproblemen buiten onze controle) worden onze
              verplichtingen opgeschort. Wordt de situatie langer dan redelijk
              voortgeduurd, dan kunnen partijen de overeenkomst aanpassen of
              beëindigen in overleg.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-foreground mb-3">
              10. Annulering en ontbinding
            </h2>
            <p>
              Als u een geaccepteerde opdracht wilt annuleren of wijzigen,
              bespreken we de gevolgen in goed overleg (bijvoorbeeld reeds
              gemaakte kosten of gereserveerde tijd), zo nodig in lijn met wat
              op de offerte staat. Ontbinding kan enkel volgens de wet of in
              geval van ernstige wanprestatie, met respect voor de formele
              regels die daarvoor gelden.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-foreground mb-3">
              11. Klachten
            </h2>
            <p>
              Klachten over facturatie of uitvoering kunt u schriftelijk
              indienen via{" "}
              <a
                href="mailto:info@mfkstukadoors.be"
                className="text-primary underline underline-offset-4 hover:no-underline"
              >
                info@mfkstukadoors.be
              </a>
              . Wij streven ernaar binnen een redelijke termijn te reageren.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-foreground mb-3">
              12. Privacy
            </h2>
            <p>
              De verwerking van persoonsgegevens gebeurt conform ons{" "}
              <Link
                href="/privacy-policy"
                className="text-primary underline underline-offset-4 hover:no-underline"
              >
                privacybeleid
              </Link>
              .
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-foreground mb-3">
              13. Toepasselijk recht en bevoegde rechter
            </h2>
            <p>
              Op onze overeenkomsten is het Belgische recht van toepassing.
              Geschillen worden bij voorkeur in onderling overleg opgelost.
              Indien dat niet lukt, zijn de Belgische rechtbanken bevoegd
              volgens de gewone regels van bevoegdheid, met inachtneming van
              eventuele bijzondere regels voor particulieren (zoals bepaald door
              de wet).
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-foreground mb-3">
              14. Wijzigingen
            </h2>
            <p>
              Wij kunnen deze pagina van tijd tot tijd aanpassen. Voor een
              concrete opdracht gelden de voorwaarden die op uw offerte of
              overeenkomst stonden op het moment dat u die aanvaardde, tenzij
              partijen iets anders schriftelijk afspreken.
            </p>
          </section>
        </div>
      </article>
      <Footer />
    </>
  );
}

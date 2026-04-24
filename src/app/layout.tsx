import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import { Providers } from "@/components/providers";
import "./globals.css";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "700", "900"],
  variable: "--font-montserrat",
});

const SITE_URL = "https://www.mfkstukadoors.be";

const defaultTitle =
  "Stukadoor Limburg - MFK Stukadoors | Pleisterwerken, Gyproc & Renovatie";
const defaultDescription =
  "MFK Stukadoors uit Heusden-Zolder: meer dan 20 jaar ervaring in binnen- en buitenpleisterwerken, gyproc, spuitplamuur, schilderwerken en renovatie in heel Limburg. Vraag uw gratis offerte aan.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: defaultTitle,
    template: "%s | MFK Stukadoors",
  },
  description: defaultDescription,
  applicationName: "MFK Stukadoors",
  authors: [{ name: "MFK Stukadoors", url: SITE_URL }],
  creator: "MFK Stukadoors",
  publisher: "MFK Stukadoors",
  keywords: [
    "stukadoor",
    "stukadoors",
    "pleisterwerken",
    "binnenpleisterwerk",
    "buitenpleisterwerk",
    "gyproc",
    "droge bouw",
    "spuitplamuur",
    "schilderwerken",
    "renovatie",
    "herstellingen muren",
    "Limburg",
    "Heusden-Zolder",
    "Hasselt",
    "Genk",
    "Lummen",
    "Sint-Truiden",
    "Tongeren",
    "Maaseik",
    "Overpelt",
    "Peer",
    "Ham",
    "Gingelom",
    "Nieuwerkerken",
    "Beringen",
    "Bilzen",
    "Borgloon",
    "Boutersem",
    "Bree",
    "Brugge",
    "Brussel",
    "Houthalen-Helchteren",
    "Hechtel-Eksel",
    "Leopoldsburg",
    "Hechtel",
    "MFK Stukadoors",
    "MFK Pleisterwerken",
    "gratis offerte",
  ],
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "nl_BE",
    url: SITE_URL,
    siteName: "MFK Stukadoors",
    title: defaultTitle,
    description: defaultDescription,
  },
  twitter: {
    card: "summary_large_image",
    title: defaultTitle,
    description: defaultDescription,
  },
  alternates: {
    canonical: "/",
  },
  category: "construction",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="nl" suppressHydrationWarning>
      <body
        className={`${montserrat.variable} font-sans antialiased`}
        suppressHydrationWarning
      >
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}

import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import TrustStrip from "@/components/TrustStrip";
import Portfolio from "@/components/Portfolio";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import BeforeAfter from "@/components/BeforeAfter";
import { HomeJsonLd } from "@/components/home-json-ld";

export default function HomePage() {
  return (
    <>
      <HomeJsonLd />
      <Navbar />
      <Hero />
      <Services />
      <TrustStrip />
      <div className="lg:hidden">
        <BeforeAfter />
      </div>
      <Portfolio />
      <FAQ />
      <Contact />
      <Footer />
    </>
  );
}

import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import TrustStrip from "@/components/TrustStrip";
import Portfolio from "@/components/Portfolio";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import BeforeAfter from "@/components/BeforeAfter";

export default function HomePage() {
  return (
    <>
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

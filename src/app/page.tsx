import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import TrustStrip from "@/components/TrustStrip";
import Portfolio from "@/components/Portfolio";
import FAQ2 from "@/components/FAQ2";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <Hero />
      <Services />
      <TrustStrip />
      <Portfolio />
      <FAQ2 />
      <Contact />
      <Footer />
    </>
  );
}

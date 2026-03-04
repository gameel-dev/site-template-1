import Header from "@/components/site/Header";
import Hero from "@/components/site/Hero";
import ValueStrip from "@/components/site/ValueStrip";
import ProcessSection from "@/components/site/ProcessSection";
import AdvantagesSection from "@/components/site/AdvantagesSection";
import AboutSection from "@/components/site/AboutSection";
import TestimonialsSection from "@/components/site/TestimonialsSection";
import OfferSection from "@/components/site/OfferSection";
import Footer from "@/components/site/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <ValueStrip />
        <ProcessSection />
        <AdvantagesSection />
        <AboutSection />
        <TestimonialsSection />
        <OfferSection />
      </main>
      <Footer />
    </>
  );
}

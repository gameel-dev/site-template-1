import ValueStrip from "./ValueStrip";
import ProcessSection from "./ProcessSection";
import AdvantagesSection from "./AdvantagesSection";
import AboutSection from "./AboutSection";
import TestimonialsSection from "./TestimonialsSection";
import LeadFormSection from "./LeadFormSection";

/** Same sections as home page + lead form section. Used on About, Contact, Compare, FAQ, Testimonials. */
export default function SharedPageContent() {
  return (
    <>
      <ValueStrip />
      <ProcessSection />
      <AdvantagesSection />
      <AboutSection />
      <TestimonialsSection />
      <LeadFormSection />
    </>
  );
}

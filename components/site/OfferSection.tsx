import ContactForm from "@/components/ContactForm";

export default function OfferSection() {
  return (
    <section id="offer" className="py-20 sm:py-28 bg-surface">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="max-w-xl mx-auto text-center mb-12">
          <p className="text-sm font-medium text-primary uppercase tracking-wider mb-2">
            Get started
          </p>
          <h2 className="text-3xl sm:text-4xl font-semibold text-ink mb-4">
            Get your fair cash offer
          </h2>
          <p className="text-ink-muted">
            Share a few details and we’ll get in touch. No obligation.
          </p>
        </div>

        <div className="flex justify-center">
          <ContactForm
            title=""
            submitLabel="Get my fair cash offer →"
            compact={false}
          />
        </div>
      </div>
    </section>
  );
}

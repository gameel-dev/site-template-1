import ContactForm from "@/components/ContactForm";

export default function LeadFormSection() {
  return (
    <section id="offer" className="py-20 sm:py-28 bg-surface">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="max-w-2xl mx-auto text-center mb-10">
          <h2 className="text-2xl sm:text-3xl font-semibold text-ink mb-4">
            So, if you need to sell your house for cash fast, you have found the right place!
          </h2>
          <p className="text-ink-muted">
            Just fill out the form below to get started on your FREE, no-obligation cash offer today.
          </p>
        </div>
        <div className="flex justify-center">
          <ContactForm
            title=""
            submitLabel="Get My Fair Cash Offer Now >>"
            compact={false}
            nameEmailPhoneRow
          />
        </div>
      </div>
    </section>
  );
}

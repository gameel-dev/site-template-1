import ContactForm from "@/components/ContactForm";

export default function Hero() {
  return (
    <section className="relative min-h-[85vh] flex flex-col justify-center bg-dark overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center opacity-30"
        style={{
          backgroundImage: "url(https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1920&q=80)",
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-dark/95 via-dark/80 to-dark/60" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 py-16 lg:py-24 w-full">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-10">
          <div className="text-center lg:text-left max-w-xl">
            <p className="text-white/70 text-sm font-medium uppercase tracking-wide mb-4">
              Sheridan, WY · Cash buyer
            </p>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-tight mb-6">
              Sell your house fast. No hassle, no fees.
            </h1>
            <p className="text-lg sm:text-xl text-white/80 mb-2">
              No buyer showings. No inspection. You pick the closing date.
            </p>
            <p className="text-lg sm:text-xl text-white/80">
              We buy as-is and cover closing costs.
            </p>
          </div>
          <div className="w-full flex-shrink-0 lg:max-w-lg">
            <ContactForm
              title=""
              submitLabel="Get My Fair Cash Offer Now >>"
              compact={false}
              nameEmailPhoneRow
              variant="hero"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

import ContactForm from "./ContactForm";

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center bg-slate-900 overflow-hidden">
      {/* Background image placeholder - use a real house image in production */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-50"
        style={{
          backgroundImage: "url(https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1920&q=80)",
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-slate-900/95 via-slate-900/80 to-slate-900/60" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 w-full flex flex-col lg:flex-row items-center justify-between gap-12">
        <div className="text-white max-w-xl">
          <h1 className="font-display text-4xl sm:text-5xl font-bold leading-tight mb-4 text-white">
            Sell Your House Fast in Sheridan, WY
          </h1>
          <p className="text-lg text-slate-200 mb-2">
            No buyer showing | No inspection | You choose closing date
          </p>
          <p className="text-lg text-slate-200">
            $0 Fees | $0 Commission | No Repairs
          </p>
        </div>
        <div className="w-full flex-shrink-0 lg:max-w-lg">
          <ContactForm
            title=""
            submitLabel="Get My Fair Cash Offer Now >>"
            compact={false}
          />
        </div>
      </div>
    </section>
  );
}

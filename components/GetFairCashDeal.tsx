import Image from "next/image";
import ContactForm from "./ContactForm";

export default function GetFairCashDeal() {
  return (
    <section id="contact" className="py-16 sm:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 items-start">
          <div className="relative aspect-video rounded-2xl overflow-hidden bg-stone-200 shadow-lg">
            <Image
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80"
              alt="Our team"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            <div className="absolute inset-0 flex items-center justify-center bg-slate-900/40 rounded-2xl">
              <button
                type="button"
                className="w-16 h-16 rounded-full bg-white flex items-center justify-center text-primary hover:bg-primary hover:text-white transition shadow-lg"
                aria-label="Play video"
              >
                <svg className="w-8 h-8 ml-1" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </button>
            </div>
          </div>
          <div>
            <ContactForm
              title="Get Fair Cash Deal"
              submitLabel="Get My Fair Cash Offer Now >>"
              compact={false}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

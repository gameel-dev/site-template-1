import Header from "@/components/site/Header";
import PageHero from "@/components/site/PageHero";
import LeadFormSection from "@/components/site/LeadFormSection";
import Footer from "@/components/site/Footer";

export const metadata = {
  title: "Testimonials | What Homeowners Say | EBS",
  description:
    "Read what homeowners say about selling their house to Easy Button Software LLC. Real experiences from Sheridan, WY.",
};

const TESTIMONIALS = [
  {
    quote: "They made selling our house so simple. No showings, no waiting on a buyer's financing. We had a fair offer and closed in two weeks.",
    author: "Sarah M.",
    location: "Sheridan, WY",
  },
  {
    quote: "We needed to sell quickly after relocating. EBS gave us a straightforward cash offer and handled everything. Zero hassle.",
    author: "James & Linda K.",
    location: "Sheridan area",
  },
  {
    quote: "No repairs, no commission, no runaround. Just a fair price and a closing date that worked for us. Highly recommend.",
    author: "Michael T.",
    location: "Sheridan, WY",
  },
];

export default function TestimonialsPage() {
  return (
    <>
      <Header />
      <main>
        <PageHero
          title="Testimonials"
          description="What homeowners say about selling with us."
        />

        <section className="py-16 sm:py-24 bg-white">
          <div className="max-w-3xl mx-auto px-4 sm:px-6">
            <div className="space-y-8">
              {TESTIMONIALS.map((item, index) => (
                <article
                  key={index}
                  className="rounded-2xl border border-stone-200 bg-surface p-6 sm:p-8"
                >
                  <blockquote className="text-lg text-ink leading-relaxed mb-6">
                    &ldquo;{item.quote}&rdquo;
                  </blockquote>
                  <footer>
                    <cite className="not-italic font-semibold text-ink">
                      {item.author}
                    </cite>
                    <span className="text-ink-muted text-sm block mt-0.5">
                      {item.location}
                    </span>
                  </footer>
                </article>
              ))}
            </div>
          </div>
        </section>

        <LeadFormSection />
      </main>
      <Footer />
    </>
  );
}

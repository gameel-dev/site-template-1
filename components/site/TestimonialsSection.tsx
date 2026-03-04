"use client";

import { useState, useEffect } from "react";

const TESTIMONIALS = [
  {
    quote: "They made selling our house so simple. No showings, no waiting on a buyer’s financing. We had a fair offer and closed in two weeks.",
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

export default function TestimonialsSection() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const t = setInterval(() => {
      setActive((prev) => (prev + 1) % TESTIMONIALS.length);
    }, 5000);
    return () => clearInterval(t);
  }, []);

  const goTo = (index: number) => {
    setActive((index + TESTIMONIALS.length) % TESTIMONIALS.length);
  };

  const prev = () => goTo(active - 1);
  const next = () => goTo(active + 1);

  return (
    <section id="testimonials" className="py-20 sm:py-28 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <p className="text-sm font-medium text-primary uppercase tracking-wider mb-2">
          Testimonials
        </p>
        <h2 className="text-3xl sm:text-4xl font-semibold text-ink mb-4">
          What homeowners say about us
        </h2>
        <p className="text-ink-muted max-w-xl mb-12">
          Real experiences from sellers who chose a simple, stress-free sale.
        </p>

        <div className="relative">
          {/* Slideshow */}
          <div className="overflow-hidden rounded-2xl border border-stone-200 bg-surface">
            {TESTIMONIALS.map((item, index) => (
              <div
                key={index}
                className="px-8 py-10 sm:px-12 sm:py-14 transition-opacity duration-300 ease-out"
                style={{
                  display: index === active ? "block" : "none",
                }}
              >
                <blockquote className="text-lg sm:text-xl text-ink leading-relaxed mb-6">
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
              </div>
            ))}
          </div>

          {/* Prev / Next */}
          <div className="flex items-center justify-between mt-6">
            <div className="flex items-center gap-4">
              <button
                type="button"
                onClick={prev}
                className="w-11 h-11 rounded-full border border-stone-300 bg-white text-ink flex items-center justify-center hover:bg-stone-50 hover:border-stone-400 transition"
                aria-label="Previous testimonial"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button
                type="button"
                onClick={next}
                className="w-11 h-11 rounded-full border border-stone-300 bg-white text-ink flex items-center justify-center hover:bg-stone-50 hover:border-stone-400 transition"
                aria-label="Next testimonial"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
            {/* Dots */}
            <div className="flex items-center gap-2">
              {TESTIMONIALS.map((_, index) => (
                <button
                  key={index}
                  type="button"
                  onClick={() => setActive(index)}
                  className="rounded-full p-1 transition"
                  aria-label={`Go to testimonial ${index + 1}`}
                >
                  <span
                    className={`block w-2 h-2 rounded-full transition ${
                      index === active ? "bg-primary" : "bg-stone-300 hover:bg-stone-400"
                    }`}
                  />
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

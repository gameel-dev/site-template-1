import Image from "next/image";

export default function AboutSection() {
  return (
    <section className="py-20 sm:py-28 bg-dark-muted text-white overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-dark order-2 lg:order-1">
            <Image
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80"
              alt="Our team"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
          <div className="order-1 lg:order-2">
            <p className="text-primary font-medium text-sm uppercase tracking-wider mb-2">
              About us
            </p>
            <h2 className="text-3xl sm:text-4xl font-semibold mb-6">
              Local investors who buy houses, as-is
            </h2>
            <p className="text-white/80 leading-relaxed mb-6">
              Easy Button Software LLC is a real estate investment company. We’re local and family-owned, and we help homeowners sell quickly and without hassle. We pay cash and buy in as-is condition—and we offer a range of solutions for all kinds of situations.
            </p>
            <p className="text-white/80 leading-relaxed mb-8">
              We’ll do a free 5-minute walkthrough at your home, then make a fair, market-based offer. No obligation.
            </p>
            <a
              href="#offer"
              className="inline-flex items-center px-6 py-3 rounded-full bg-primary text-white font-semibold hover:bg-primary-hover transition"
            >
              Get your offer
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

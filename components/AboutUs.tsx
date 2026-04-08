"use client";

import Image from "next/image";
import CompanyName from "@/components/site/CompanyName";
import { useSite } from "@/contexts/SiteContext";

export default function AboutUs() {
  const { site } = useSite();
  const company = site?.companyName?.trim() ?? "";

  return (
    <section className="py-16 sm:py-20 bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-5 gap-10 items-center">
          <div className="lg:col-span-3 relative aspect-[4/3] rounded-2xl overflow-hidden bg-stone-200 shadow-lg">
            <Image
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80"
              alt={company ? `${company} team` : "Our team"}
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 60vw"
            />
          </div>
          <div className="lg:col-span-2">
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-ink mb-4">
              About us
            </h2>
            <p className="text-ink-muted mb-6 leading-relaxed">
              <CompanyName /> is a Real Estate Investment company. We are a local family-owned company and we help homeowners sell houses quickly and without hassle. We pay cash for the houses and buy houses in as-is condition. We offer a wide variety of solutions to any real estate problem. We will visit your home for a free 5 minutes walk-through, and then make a fair, market-based offer.
            </p>
            <a
              href="#contact"
              className="inline-block px-6 py-3 rounded-lg bg-primary text-white font-semibold hover:bg-primary-hover transition"
            >
              Get Offer Now
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

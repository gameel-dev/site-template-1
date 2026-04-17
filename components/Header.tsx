"use client";

import Link from "next/link";
import { useSite } from "@/contexts/SiteContext";
import {
  digitsOnlyForTel,
  formatPhoneNumberForDisplay,
} from "@/lib/formatPhoneNumberForDisplay";

const NAV_LINKS = [
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact Us" },
  { href: "#compare", label: "Compare" },
  { href: "#faq", label: "FAQ" },
  { href: "#testimonials", label: "Testimonials" },
];

export default function Header() {
  const { site } = useSite();
  const companyName = site?.companyName?.trim() || "Our company";
  const phoneRaw = site?.phoneNumber?.trim() ?? "";
  const phoneDigits = digitsOnlyForTel(phoneRaw);
  const phoneLabel =
    formatPhoneNumberForDisplay(phoneRaw) || phoneRaw || "";

  return (
    <header className="sticky top-0 z-50 bg-surface/95 backdrop-blur border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
        <Link href="/" className="text-xl font-display font-bold text-ink tracking-tight">
          {companyName}
        </Link>
        <nav className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className="text-ink-muted hover:text-ink font-medium transition"
            >
              {label}
            </Link>
          ))}
        </nav>
        {phoneDigits ? (
          <a
            href={`tel:${phoneDigits}`}
            className="inline-flex items-center px-5 py-2.5 rounded-lg bg-primary text-white font-semibold hover:bg-primary-hover transition shrink-0"
          >
            Call Us! {phoneLabel}
          </a>
        ) : (
          <Link
            href="/contact"
            className="inline-flex items-center px-5 py-2.5 rounded-lg bg-primary text-white font-semibold hover:bg-primary-hover transition shrink-0"
          >
            Contact us
          </Link>
        )}
      </div>
    </header>
  );
}

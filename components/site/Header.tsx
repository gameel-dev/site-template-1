"use client";

import Link from "next/link";
import { useSite } from "@/contexts/SiteContext";
import {
  digitsOnlyForTel,
  formatPhoneNumberForDisplay,
} from "@/lib/formatPhoneNumberForDisplay";

const NAV = [
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
  { href: "/compare", label: "Compare" },
  { href: "/faq", label: "FAQ" },
  { href: "/testimonials", label: "Testimonials" },
];

export default function Header() {
  const { site } = useSite();
  const brand =
    site?.companyName?.trim() ||
    (typeof site?.siteName === "string" ? site.siteName.trim() : "") ||
    "Our company";
  const phoneRaw = site?.phoneNumber?.trim() ?? "";
  const phoneDigits = digitsOnlyForTel(phoneRaw);
  const phoneLabel =
    formatPhoneNumberForDisplay(phoneRaw) || phoneRaw || "";

  return (
    <header className="sticky top-0 z-50 bg-dark text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-14 flex items-center justify-between">
        <Link href="/" className="text-lg font-semibold">
          {brand}
        </Link>
        <nav className="hidden sm:flex items-center gap-8">
          {NAV.map(({ href, label }) => (
            <Link key={href} href={href} className="text-white/80 hover:text-white text-sm font-medium transition">
              {label}
            </Link>
          ))}
        </nav>
        {phoneDigits ? (
          <a
            href={`tel:${phoneDigits}`}
            className="text-sm font-medium text-white/90 hover:text-white transition"
          >
            {phoneLabel}
          </a>
        ) : (
          <Link
            href="/contact"
            className="text-sm font-medium text-white/90 hover:text-white transition"
          >
            Contact
          </Link>
        )}
      </div>
    </header>
  );
}

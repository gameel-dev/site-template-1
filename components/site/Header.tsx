"use client";

import Link from "next/link";
import { useSite } from "@/contexts/SiteContext";

const NAV = [
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
  { href: "/compare", label: "Compare" },
  { href: "/faq", label: "FAQ" },
  { href: "/testimonials", label: "Testimonials" },
];

const PHONE = "(503) 724-8787";

export default function Header() {
  const { site } = useSite();
  const brand =
    typeof site?.siteName === "string" ? site.siteName.trim() : "";

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
        <a
          href={`tel:${PHONE.replace(/\D/g, "")}`}
          className="text-sm font-medium text-white/90 hover:text-white transition"
        >
          {PHONE}
        </a>
      </div>
    </header>
  );
}

import Link from "next/link";

const NAV_LINKS = [
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact Us" },
  { href: "#compare", label: "Compare" },
  { href: "#faq", label: "FAQ" },
  { href: "#testimonials", label: "Testimonials" },
];

const PHONE = "(503) 724-8787";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-surface/95 backdrop-blur border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
        <Link href="/" className="text-xl font-display font-bold text-ink tracking-tight">
          EBS
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
        <a
          href={`tel:${PHONE.replace(/\D/g, "")}`}
          className="inline-flex items-center px-5 py-2.5 rounded-lg bg-primary text-white font-semibold hover:bg-primary-hover transition shrink-0"
        >
          Call Us! {PHONE}
        </a>
      </div>
    </header>
  );
}

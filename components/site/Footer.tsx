import Link from "next/link";

const LINKS = [
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
  { href: "/compare", label: "Compare" },
  { href: "/faq", label: "FAQ" },
  { href: "/testimonials", label: "Testimonials" },
];

export default function Footer() {
  return (
    <footer className="bg-dark text-white/70 py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <nav className="flex flex-wrap justify-center gap-6 mb-8">
          {LINKS.map(({ href, label }) => (
            <Link key={href} href={href} className="hover:text-white transition text-sm">
              {label}
            </Link>
          ))}
        </nav>
        <div className="text-center text-sm space-y-1">
          <p>
            <Link href="#" className="hover:text-white underline">Privacy</Link>
            {" · "}
            <Link href="#" className="hover:text-white underline">Terms</Link>
          </p>
          <p>© 2026 Company LLC. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

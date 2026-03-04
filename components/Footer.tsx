import Link from "next/link";

const NAV_LINKS = [
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact Us" },
  { href: "#compare", label: "Compare" },
  { href: "#faq", label: "FAQ" },
  { href: "#testimonials", label: "Testimonials" },
];

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <nav className="flex flex-wrap justify-center gap-6 mb-8">
          {NAV_LINKS.map(({ href, label }) => (
            <Link key={href} href={href} className="hover:text-white transition">
              {label}
            </Link>
          ))}
        </nav>
        <div className="text-center text-sm space-y-1">
          <p>
            <Link href="#" className="hover:text-white underline">Privacy policy</Link>
            {" | "}
            <Link href="#" className="hover:text-white underline">Terms of use</Link>
          </p>
          <p>© 2026 Company LLC. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

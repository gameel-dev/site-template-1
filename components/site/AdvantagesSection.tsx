const ITEMS = [
  { title: "No repairs", body: "We buy your house in as-is condition. You spend $0 on fixes." },
  { title: "$0 fee / commission", body: "We cover closing costs. You pay nothing in commissions." },
  { title: "No waiting", body: "You choose the closing date." },
  { title: "Transparency", body: "We close at a reputable local title company." },
  { title: "Easy process", body: "No appraisal, no inspection, no financing contingency." },
  { title: "Dedicated specialists", body: "We connect you with the right people even if you don’t sell to us." },
];

export default function AdvantagesSection() {
  return (
    <section id="about" className="py-20 sm:py-28 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <p className="text-sm font-medium text-primary uppercase tracking-wider mb-2">
          Why work with us
        </p>
        <h2 className="text-3xl sm:text-4xl font-semibold text-ink mb-4">
          The advantage of selling to EBS
        </h2>
        <p className="text-ink-muted max-w-2xl mb-14">
          We’re a local, family-owned company. We help homeowners sell quickly and without the hassle of a traditional listing—with real advantages you can count on.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {ITEMS.map(({ title, body }) => (
            <div
              key={title}
              className="rounded-2xl border border-stone-200 bg-surface p-6 transition hover:border-stone-300 hover:shadow-md"
            >
              <h3 className="font-semibold text-ink text-lg mb-2">{title}</h3>
              <p className="text-ink-muted text-sm leading-relaxed">{body}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a
            href="#offer"
            className="inline-flex items-center px-6 py-3 rounded-full bg-primary text-white font-semibold hover:bg-primary-hover transition"
          >
            Get your offer
          </a>
        </div>
      </div>
    </section>
  );
}

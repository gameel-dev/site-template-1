export default function ValueStrip() {
  const items = [
    "No buyer showings",
    "No inspection",
    "You choose closing date",
    "$0 fees",
    "$0 commission",
    "No repairs",
  ];

  return (
    <section className="py-6 bg-ink text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-2 text-sm font-medium">
          {items.map((item) => (
            <span key={item} className="flex items-center gap-x-8">
              <span>{item}</span>
              {item !== items[items.length - 1] && (
                <span className="hidden sm:inline text-white/30" aria-hidden>·</span>
              )}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

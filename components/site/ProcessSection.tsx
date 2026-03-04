const PHONE = "(503) 724-8787";

const STEPS = [
  {
    step: "1",
    title: "Call or submit the form",
    detail: (
      <>
        Call{" "}
        <a href={`tel:${PHONE.replace(/\D/g, "")}`} className="text-accent font-medium hover:underline">
          {PHONE}
        </a>{" "}
        or fill out the form. We’ll get back to you quickly.
      </>
    ),
  },
  {
    step: "2",
    title: "Meet at your house",
    detail: "We come to you for a short walkthrough—no pressure, no obligation.",
  },
  {
    step: "3",
    title: "Choose your closing date",
    detail: "Get a fair cash offer. You pick the date and get paid.",
  },
];

export default function ProcessSection() {
  return (
    <section className="py-20 sm:py-28 bg-surface">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <p className="text-sm font-medium text-primary uppercase tracking-wider mb-2">
          How it works
        </p>
        <h2 className="text-3xl sm:text-4xl font-semibold text-ink mb-4">
          Three steps to a cash sale
        </h2>
        <p className="text-ink-muted max-w-xl mb-16">
          Our process is simple so you can move on faster.
        </p>

        <div className="relative">
          {/* vertical line */}
          <div className="absolute left-6 top-0 bottom-0 w-px bg-stone-200 hidden sm:block" />

          <ul className="space-y-12 sm:space-y-16">
            {STEPS.map(({ step, title, detail }) => (
              <li key={step} className="relative flex gap-8 sm:gap-12 items-start">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-dark text-white font-semibold text-lg flex items-center justify-center relative z-10">
                  {step}
                </div>
                <div className="pt-1">
                  <h3 className="text-xl font-semibold text-ink mb-2">{title}</h3>
                  <p className="text-ink-muted">{detail}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

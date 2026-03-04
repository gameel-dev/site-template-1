const PHONE = "(503) 724-8787";

const STEPS = [
  {
    number: "01",
    title: "Call Us / Fill Contact Form",
    description: (
      <>
        Call us{" "}
        <a href={`tel:${PHONE.replace(/\D/g, "")}`} className="text-accent font-medium hover:underline">
          {PHONE}
        </a>
      </>
    ),
  },
  {
    number: "02",
    title: "Meet Us at your House",
    description: "Let's meet at your home",
  },
  {
    number: "03",
    title: "Choose your Closing Date",
    description: "Get Cash on your desired date",
  },
];

export default function HowWeWork() {
  return (
    <section className="py-16 sm:py-20 bg-surface-muted">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="font-display text-3xl sm:text-4xl font-bold text-ink mb-2">
          How We Work
        </h2>
        <p className="text-ink-muted mb-10">Our super simple three step process…</p>

        <div className="grid md:grid-cols-3 gap-6">
          {STEPS.map((step) => (
            <div
              key={step.number}
              className="bg-white rounded-2xl p-6 shadow-sm border border-stone-200"
            >
              <span className="font-display text-4xl font-bold text-stone-300 block mb-3">
                {step.number}
              </span>
              <h3 className="text-lg font-bold text-ink mb-2">{step.title}</h3>
              <p className="text-ink-muted">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

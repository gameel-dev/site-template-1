const ADVANTAGES = [
  {
    title: "No Repairs",
    description: "You spend $0 in home repairs because we buy your house in as-is condition.",
    icon: "?",
  },
  {
    title: "$0 Fee/Commission",
    description: "We cover all closing costs related to selling your house. You pay $0 in commissions.",
    icon: "$",
  },
  {
    title: "No Waiting",
    description: "You choose the closing date that works best for your schedule.",
    icon: "⏱",
  },
  {
    title: "Transparency",
    description: "We close at a reputable local title company.",
    icon: "◎",
  },
  {
    title: "Easy Process",
    description: "No appraisal. No inspection. No financing contingency. We buy house as is.",
    icon: "↻",
  },
  {
    title: "Dedicated Specialists",
    description: "We put you in touch with the best alternative contact even if you don't sell your house to us.",
    icon: "👤",
  },
];

export default function OurAdvantage() {
  return (
    <section id="about" className="py-16 sm:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="font-display text-3xl sm:text-4xl font-bold text-ink mb-4">
          Our Advantage
        </h2>
        <p className="text-ink-muted max-w-2xl mb-8">
          We are a LOCAL family-owned company and we help homeowners sell houses quickly and without hassle. We offer several advantages to homeowners who want to sell their house fast v/s going a traditional route of listing with a real estate agent.
        </p>
        <a
          href="#contact"
          className="inline-block px-6 py-3 rounded-lg bg-primary text-white font-semibold hover:bg-primary-hover transition mb-12"
        >
          Get Offer Now
        </a>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {ADVANTAGES.map((item) => (
            <div key={item.title} className="flex gap-4">
              <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-xl font-bold text-primary">
                {item.icon}
              </div>
              <div>
                <h3 className="text-lg font-bold text-ink mb-1">{item.title}</h3>
                <p className="text-ink-muted text-sm">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

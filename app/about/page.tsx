import Header from "@/components/site/Header";
import PageHero from "@/components/site/PageHero";
import LeadFormSection from "@/components/site/LeadFormSection";
import Footer from "@/components/site/Footer";

export const metadata = {
  title: "About Us | We Buy Houses Fast | EBS",
  description:
    "Learn about Easy Button Software LLC. Local, family-owned real estate investors. We buy houses as-is and help you sell fast with no hassle.",
};

const REASONS = [
  "Divorce",
  "Foreclosure",
  "Foundation Issues",
  "Probate",
  "Inherited a house",
  "Water damage",
  "Relocation",
];

const HOW_WE_HELP = [
  "Sellers Pay Zero Closing Costs",
  "Sellers need To Move Quickly? CASH Out in as Little as 7 Days.",
  "No Need to Make Repairs. We Buy Homes “as is” Condition!",
  "Cash offers in as little as 7 days",
  "No Listing, No Realtors, No Hassle",
];

export default function AboutPage() {
  return (
    <>
      <Header />
      <main>
        <PageHero
          title="About us"
          description="Local investors who buy houses as-is and help you sell fast."
        />
        <article className="py-16 sm:py-24 bg-white">
          <div className="max-w-3xl mx-auto px-4 sm:px-6">
            <h1 className="text-3xl sm:text-4xl font-semibold text-ink mb-8">
              About Easy Button Software LLC
            </h1>

            <div className="prose prose-slate max-w-none">
              <p className="text-ink-muted leading-relaxed mb-6">
                Easy Button Software LLC is a Real Estate Investment company. We are a local family-owned company and we help homeowners sell houses quickly and without hassle. We pay cash for the houses and buy houses in as-is condition. We offer a wide variety of solutions to any real estate problem. We will visit your home for a free 5 minutes walk-through, and then make a fair, market-based offer.
              </p>

              <p className="text-ink-muted leading-relaxed mb-8">
                We buy houses from sellers who are looking to sell their home fast for cash. Easy Button Software LLC team can help you sell your house fast no matter where the house is located, no matter its condition. With our ability to directly purchase houses and make cash offers, we create a very quick and hassle-free transaction.
              </p>

              <h2 className="text-xl font-semibold text-ink mt-10 mb-4">
                What does Easy Button Software LLC do?
              </h2>
              <p className="text-ink-muted leading-relaxed mb-4">
                We help sellers who are distressed and are looking to sell their houses fast for cash. The sellers are looking to sell their house for any of the reasons below:
              </p>
              <ul className="list-disc pl-6 text-ink-muted space-y-2 mb-8">
                {REASONS.map((reason) => (
                  <li key={reason}>{reason}</li>
                ))}
              </ul>

              <h2 className="text-xl font-semibold text-ink mt-10 mb-4">
                How does Easy Button Software LLC help the sellers?
              </h2>
              <ul className="list-disc pl-6 text-ink-muted space-y-2 mb-8">
                {HOW_WE_HELP.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>

              <p className="text-ink-muted leading-relaxed">
                If you have any questions about how we work, what the process of selling a house or having us help you avoid foreclosure, or just want to learn more about us… don’t hesitate to contact us anytime!
              </p>
            </div>
          </div>
        </article>

        <LeadFormSection />
      </main>
      <Footer />
    </>
  );
}

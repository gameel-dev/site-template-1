import type { Metadata } from "next";
import Header from "@/components/site/Header";
import PageHero from "@/components/site/PageHero";
import LeadFormSection from "@/components/site/LeadFormSection";
import Footer from "@/components/site/Footer";
import CompanyName from "@/components/site/CompanyName";
import { getSiteFromRequestHeaders } from "@/lib/get-site-from-request";

export async function generateMetadata(): Promise<Metadata> {
  const site = await getSiteFromRequestHeaders();
  const company = site?.companyName?.trim() ?? "";
  return {
    title: company
      ? `Compare Options | Sell Your House Fast | ${company}`
      : "Compare Options | Sell Your House Fast",
    description: company
      ? `Compare selling to a cash buyer vs. listing with an agent. See why homeowners choose ${company} for a fast, simple sale.`
      : "Compare selling to a cash buyer vs. listing with an agent. See why homeowners choose us for a fast, simple sale.",
  };
}

const ROWS = [
  {
    criterion: "Commissions/Fees",
    agent: "6% on average is paid by you",
    ebs: "None",
  },
  {
    criterion: "Who Pays Closing Costs?",
    agent: "2% on average is paid by you",
    ebs: "None - We pay all costs",
  },
  {
    criterion: "Inspection & Fin. Contingency*",
    agent: "Yes, up to 15% of sales fall through",
    ebs: "None",
  },
  {
    criterion: "Appraisal Needed",
    agent: "Yes, sale is often subject to appraisal",
    ebs: "None - We make cash offers",
  },
  {
    criterion: "Average Days Until Sold",
    agent: "+/- 91 Days",
    ebs: "Immediate Cash Offer",
  },
  {
    criterion: "Number of Showings",
    agent: "Depends on property/location",
    ebs: "1 (Just us)",
  },
  {
    criterion: "Closing Date",
    agent: "30-60 +/- Days after accepting offer",
    ebs: "Date of your CHOICE",
  },
  {
    criterion: "Who Pays For Repairs",
    agent: "Negotiated during inspection period",
    ebs: "None - We pay for all repairs",
  },
];

export default function ComparePage() {
  return (
    <>
      <Header />
      <main>
        <PageHero
          title="Compare"
          description="See how selling to us stacks up against the traditional route."
        />

        <section className="py-16 sm:py-24 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <h2 className="text-2xl sm:text-3xl font-semibold text-ink mb-8">
              Advantage Selling to Us
            </h2>

            <div className="overflow-x-auto border border-stone-200 rounded-xl">
              <table className="w-full min-w-[600px] text-left">
                <thead>
                  <tr className="bg-dark text-white">
                    <th className="px-4 py-4 sm:px-6 sm:py-4 font-semibold text-sm sm:text-base text-left w-[40%] sm:w-auto" aria-label="Feature" />
                    <th className="px-4 py-4 sm:px-6 sm:py-4 font-semibold text-sm sm:text-base">
                      Selling w/ an agent
                    </th>
                    <th className="px-4 py-4 sm:px-6 sm:py-4 font-semibold text-sm sm:text-base">
                      Sold to <CompanyName />
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {ROWS.map((row, i) => (
                    <tr
                      key={row.criterion}
                      className={i % 2 === 0 ? "bg-white" : "bg-surface-muted"}
                    >
                      <td className="px-4 py-3 sm:px-6 sm:py-4 text-ink font-medium text-sm sm:text-base border-t border-stone-200">
                        {row.criterion}
                      </td>
                      <td className="px-4 py-3 sm:px-6 sm:py-4 text-ink-muted text-sm sm:text-base border-t border-stone-200">
                        {row.agent}
                      </td>
                      <td className="px-4 py-3 sm:px-6 sm:py-4 text-ink text-sm sm:text-base font-medium border-t border-stone-200">
                        {row.ebs}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <p className="text-ink-muted text-sm mt-4">*Inspection & financing contingency</p>
          </div>
        </section>

        <LeadFormSection />
      </main>
      <Footer />
    </>
  );
}

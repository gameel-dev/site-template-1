import type { Metadata } from "next";
import Header from "@/components/site/Header";
import PageHero from "@/components/site/PageHero";
import LeadFormSection from "@/components/site/LeadFormSection";
import Footer from "@/components/site/Footer";
import { getSiteFromRequestHeaders } from "@/lib/get-site-from-request";
import { formatSiteMailingLine } from "@/lib/format-site-address";

export async function generateMetadata(): Promise<Metadata> {
  const site = await getSiteFromRequestHeaders();
  const company = site?.companyName?.trim() ?? "";
  return {
    title: company
      ? `Contact Us | Get Your Cash Offer | ${company}`
      : "Contact Us | Get Your Cash Offer",
    description: company
      ? `Contact ${company} for a free, no-obligation cash offer. Sell your house fast in Sheridan, WY.`
      : "Contact us for a free, no-obligation cash offer. Sell your house fast in Sheridan, WY.",
  };
}

const PHONE = "(503) 724-8787";

export default async function ContactPage() {
  const site = await getSiteFromRequestHeaders();
  const addressLine = site ? formatSiteMailingLine(site) : "";
  const email = site?.email?.trim() ?? "";

  return (
    <>
      <Header />
      <main>
        <PageHero
          title="Contact us"
          description="Get in touch for a free, no-obligation cash offer on your home."
        />

        <section className="py-16 sm:py-24 bg-dark text-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="max-w-xl space-y-8">
              {addressLine ? (
                <div>
                  <p className="font-semibold text-white mb-1">Address</p>
                  <p className="text-white/90">{addressLine}</p>
                </div>
              ) : null}
              {email ? (
                <div>
                  <p className="font-semibold text-white mb-1">Email</p>
                  <a
                    href={`mailto:${email}`}
                    className="text-white/90 hover:text-white transition"
                  >
                    {email}
                  </a>
                </div>
              ) : null}
              <div>
                <p className="font-semibold text-white mb-1">Phone</p>
                <a
                  href={`tel:${PHONE.replace(/\D/g, "")}`}
                  className="text-white/90 hover:text-white transition"
                >
                  {PHONE}
                </a>
              </div>
            </div>
          </div>
        </section>

        <LeadFormSection />
      </main>
      <Footer />
    </>
  );
}

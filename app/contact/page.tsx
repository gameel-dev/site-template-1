import Header from "@/components/site/Header";
import PageHero from "@/components/site/PageHero";
import LeadFormSection from "@/components/site/LeadFormSection";
import Footer from "@/components/site/Footer";

export const metadata = {
  title: "Contact Us | Get Your Cash Offer | EBS",
  description:
    "Contact Easy Button Software LLC for a free, no-obligation cash offer. Sell your house fast in Sheridan, WY.",
};

const CONTACT = {
  address: "30 N Gould Street, Sheridan, WY, 82801",
  email: "spencer@easybuttonsoftware.com",
  phone: "(503) 724-8787",
};

export default function ContactPage() {
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
              <div>
                <p className="font-semibold text-white mb-1">Address</p>
                <p className="text-white/90">{CONTACT.address}</p>
              </div>
              <div>
                <p className="font-semibold text-white mb-1">Email</p>
                <a
                  href={`mailto:${CONTACT.email}`}
                  className="text-white/90 hover:text-white transition"
                >
                  {CONTACT.email}
                </a>
              </div>
              <div>
                <p className="font-semibold text-white mb-1">Phone</p>
                <a
                  href={`tel:${CONTACT.phone.replace(/\D/g, "")}`}
                  className="text-white/90 hover:text-white transition"
                >
                  {CONTACT.phone}
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

import type { Metadata } from "next";
import Header from "@/components/site/Header";
import Footer from "@/components/site/Footer";
import TermsMain from "@/components/site/TermsMain";
import { getSiteFromRequestHeaders } from "@/lib/get-site-from-request";

export async function generateMetadata(): Promise<Metadata> {
  const site = await getSiteFromRequestHeaders();
  const company = site?.companyName?.trim() ?? "";
  return {
    title: company
      ? `Terms & Conditions | ${company}`
      : "Terms & Conditions",
    description: company
      ? `Terms of use for ${company}'s website and services.`
      : "The terms that govern your use of this website and our services.",
  };
}

export default function TermsPage() {
  return (
    <>
      <Header />
      <main>
        <TermsMain />
      </main>
      <Footer />
    </>
  );
}

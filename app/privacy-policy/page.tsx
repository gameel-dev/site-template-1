import type { Metadata } from "next";
import Header from "@/components/site/Header";
import Footer from "@/components/site/Footer";
import PrivacyPolicyMain from "@/components/site/PrivacyPolicyMain";
import { getSiteFromRequestHeaders } from "@/lib/get-site-from-request";

export async function generateMetadata(): Promise<Metadata> {
  const site = await getSiteFromRequestHeaders();
  const company = site?.companyName?.trim() ?? "";
  return {
    title: company
      ? `Privacy Policy | ${company}`
      : "Privacy Policy",
    description: company
      ? `Privacy policy for ${company}. How we collect, use, and protect your information.`
      : "How we collect, use, and protect your information when you use this site.",
  };
}

export default function PrivacyPolicyPage() {
  return (
    <>
      <Header />
      <main>
        <PrivacyPolicyMain />
      </main>
      <Footer />
    </>
  );
}

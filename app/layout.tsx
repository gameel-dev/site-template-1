import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { SiteProvider } from "@/contexts/SiteContext";
import { getSiteFromRequestHeaders } from "@/lib/get-site-from-request";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export async function generateMetadata(): Promise<Metadata> {
  const site = await getSiteFromRequestHeaders();
  const company = site?.companyName?.trim() ?? "";
  return {
    title: company
      ? `We Buy Houses | Sell Your Home Fast | ${company}`
      : "We Buy Houses | Sell Your Home Fast",
    description:
      "Sell your house fast. No fees, no commission, no repairs. We buy houses in as-is condition. Get a fair cash offer in Sheridan, WY.",
  };
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="font-sans antialiased">
        <SiteProvider>{children}</SiteProvider>
      </body>
    </html>
  );
}

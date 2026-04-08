"use client";

import { useSite } from "@/contexts/SiteContext";

/** Renders `site.companyName` from context (empty string while loading / if missing). */
export default function CompanyName() {
  const { site } = useSite();
  return <>{site?.companyName ?? ""}</>;
}

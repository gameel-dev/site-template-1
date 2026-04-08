import type { SiteDetails } from "./site-types";

/** Single-line mailing line: street, city, ST zip */
export function formatSiteMailingLine(site: SiteDetails): string {
  const street = site.address?.trim() ?? "";
  const city = site.cityOperatedIn?.trim() ?? "";
  const state = site.stateOperatedIn?.trim() ?? "";
  const zip = site.zipCodeOperatedIn?.trim() ?? "";
  const cityState = [city, state].filter(Boolean).join(", ");
  const tail = [cityState, zip].filter(Boolean).join(" ").trim();
  return [street, tail].filter(Boolean).join(", ");
}

import { headers } from "next/headers";
import { requestSiteFromBackend } from "./fetch-site-from-backend";
import type { SiteDetails } from "./site-types";

function hostnameFromHeaders(h: Headers): string {
  const forwarded = h.get("x-forwarded-host");
  const host = forwarded ?? h.get("host") ?? "";
  return host.split(":")[0]?.trim() ?? "";
}

/**
 * Loads site for the current request host (for generateMetadata, RSC, etc.).
 */
export async function getSiteFromRequestHeaders(): Promise<SiteDetails | null> {
  const h = await headers();
  const hostname = hostnameFromHeaders(h);
  if (!hostname) {
    return null;
  }
  const result = await requestSiteFromBackend(hostname);
  return result.kind === "ok" ? result.site : null;
}

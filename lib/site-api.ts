import type { SiteDetails } from "./site-types";

export type SiteFetchResult =
  | { ok: true; site: SiteDetails | null }
  | { ok: false; error: Error };

const promiseByDomain = new Map<string, Promise<SiteFetchResult>>();

/**
 * Fetches site for a hostname via the Next.js API route (same origin). That
 * route calls your backend using server-side env vars, so the request is not
 * skipped when NEXT_PUBLIC_* was missing from the client bundle.
 */
function siteLookupUrl(domain: string): string {
  const q = new URLSearchParams({ customDomain: domain });
  return `/api/site/by-custom-domain?${q.toString()}`;
}

/**
 * Fetches site for a hostname. The same promise is reused per domain for the
 * lifetime of the page module so navigation and React Strict Mode do not
 * trigger duplicate requests.
 */
export function fetchSiteByCustomDomain(
  domain: string
): Promise<SiteFetchResult> {
  const key = domain.trim().toLowerCase();
  if (!key) {
    return Promise.resolve({ ok: true, site: null });
  }

  const cached = promiseByDomain.get(key);
  if (cached) {
    return cached;
  }

  const url = siteLookupUrl(key);

  const promise: Promise<SiteFetchResult> = fetch(url, { credentials: "same-origin" })
    .then(async (res) => {
      if (res.status === 404) {
        return { ok: true, site: null } satisfies SiteFetchResult;
      }
      if (!res.ok) {
        return {
          ok: false,
          error: new Error(`Site lookup failed (${res.status})`),
        } satisfies SiteFetchResult;
      }
      const site = (await res.json()) as SiteDetails;
      return { ok: true, site } satisfies SiteFetchResult;
    })
    .catch((err: unknown) => {
      console.error("[site-api] fetchSiteByCustomDomain:", err);
      return {
        ok: false,
        error: err instanceof Error ? err : new Error(String(err)),
      } satisfies SiteFetchResult;
    });

  promiseByDomain.set(key, promise);
  return promise;
}

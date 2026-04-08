import type { SiteDetails } from "./site-types";

function backendBase(): string {
  return (
    process.env.SITE_API_BASE_URL ??
    process.env.NEXT_PUBLIC_API_BASE_URL ??
    ""
  ).replace(/\/$/, "");
}

function backendPath(): string {
  return (
    process.env.SITE_BY_DOMAIN_PATH ??
    process.env.NEXT_PUBLIC_SITE_BY_DOMAIN_PATH ??
    "sites/by-custom-domain"
  ).replace(/^\/+/, "");
}

export type BackendSiteResult =
  | { kind: "ok"; site: SiteDetails }
  | { kind: "not_found" }
  | { kind: "error"; status: number; message: string }
  | { kind: "no_config" };

/**
 * Server-side fetch to the Nest by-custom-domain endpoint (no Next proxy).
 */
export async function requestSiteFromBackend(
  domain: string
): Promise<BackendSiteResult> {
  const key = domain.trim().toLowerCase();
  if (!key) {
    return { kind: "not_found" };
  }

  const base = backendBase();
  if (!base) {
    return { kind: "no_config" };
  }

  const path = backendPath();
  const url = `${base}/${path}?customDomain=${encodeURIComponent(key)}`;

  try {
    const res = await fetch(url, { credentials: "omit", cache: "no-store" });
    if (res.status === 404) {
      return { kind: "not_found" };
    }
    if (!res.ok) {
      return {
        kind: "error",
        status: res.status,
        message: `Upstream returned ${res.status}`,
      };
    }
    const site = (await res.json()) as SiteDetails;
    return { kind: "ok", site };
  } catch (e) {
    console.error("[fetch-site-from-backend]", e);
    return { kind: "error", status: 502, message: "Upstream fetch failed" };
  }
}

export function isBackendConfigured(): boolean {
  return backendBase() !== "";
}

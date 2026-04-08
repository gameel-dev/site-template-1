"use client";

import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import { fetchSiteByCustomDomain } from "@/lib/site-api";
import type { SiteDetails } from "@/lib/site-types";

export type SiteContextValue = {
  site: SiteDetails | null;
  loading: boolean;
  error: Error | null;
  /** Hostname sent to the API (e.g. example.com) */
  customDomain: string;
};

const SiteContext = createContext<SiteContextValue | undefined>(undefined);

export function SiteProvider({ children }: { children: ReactNode }) {
  const [customDomain, setCustomDomain] = useState("");
  const [site, setSite] = useState<SiteDetails | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const domain = typeof window !== "undefined" ? window.location.hostname : "";
    setCustomDomain(domain);

    let cancelled = false;

    fetchSiteByCustomDomain(domain).then((result) => {
      if (cancelled) {
        return;
      }
      if (result.ok) {
        setSite(result.site);
        setError(null);
      } else {
        setSite(null);
        setError(result.error);
      }
      setLoading(false);
    });

    return () => {
      cancelled = true;
    };
  }, []);

  const value = useMemo(
    () => ({ site, loading, error, customDomain }),
    [site, loading, error, customDomain]
  );

  return (
    <SiteContext.Provider value={value}>{children}</SiteContext.Provider>
  );
}

export function useSite(): SiteContextValue {
  const ctx = useContext(SiteContext);
  if (ctx === undefined) {
    throw new Error("useSite must be used within a SiteProvider");
  }
  return ctx;
}

"use client";

import Link from "next/link";
import { useEffect, useState, type FormEvent } from "react";
import { useSite } from "@/contexts/SiteContext";

type ContactFormProps = {
  title?: string;
  submitLabel?: string;
  compact?: boolean;
  /** When true, Full Name / Email / Phone render in one row (3 cols). */
  nameEmailPhoneRow?: boolean;
  /** Hero variant: no radius, stronger shadow, border that fits dark background. */
  variant?: "default" | "hero";
};

export default function ContactForm({
  title = "Get My Fair Cash Offer Now",
  submitLabel = "Get My Fair Cash Offer Now >>",
  compact = false,
  nameEmailPhoneRow = false,
  variant = "default",
}: ContactFormProps) {
  const { site } = useSite();
  const companyName = site?.companyName ?? "";
  const [address, setAddress] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [agreedTerms, setAgreedTerms] = useState(false);
  const [agreedComms, setAgreedComms] = useState(false);
  const [toast, setToast] = useState<{ kind: "success" | "error"; message: string } | null>(null);

  useEffect(() => {
    if (!toast) return;
    const id = window.setTimeout(() => setToast(null), 4500);
    return () => window.clearTimeout(id);
  }, [toast]);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;

    if (!agreedTerms || !agreedComms) {
      setToast({
        kind: "error",
        message: "Please check both agreement boxes before submitting.",
      });
      return;
    }

    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }

    setToast({ kind: "success", message: "Thank you! Your request was submitted successfully." });
    setAddress("");
    setName("");
    setEmail("");
    setPhone("");
    setAgreedTerms(false);
    setAgreedComms(false);
  }

  const isHero = variant === "hero";
  const formClassName = isHero
    ? `bg-slate-900/95 backdrop-blur-sm rounded-none shadow-2xl shadow-black/50 border border-white/30 p-6 ${compact ? "max-w-md" : "w-full max-w-lg"}`
    : `bg-white rounded-2xl shadow-xl shadow-slate-900/5 border border-stone-200 p-6 ${compact ? "max-w-md" : "w-full max-w-lg"}`;

  const labelCls = isHero ? "block text-sm font-medium text-white mb-1" : "block text-sm font-medium text-ink mb-1";
  const hintCls = isHero ? "text-sm text-white/80 mb-4" : "text-sm text-ink-muted mb-4";
  const checkboxLabelCls = isHero ? "text-sm text-white/90" : "text-sm text-ink-muted";
  const linkCls = isHero ? "text-white underline hover:no-underline" : "text-accent underline hover:no-underline";
  const inputCls = isHero
    ? "w-full px-4 py-2.5 border border-white/30 rounded-lg bg-white/10 text-white placeholder:text-white/50 focus:ring-2 focus:ring-primary/50 focus:border-primary outline-none transition"
    : "w-full px-4 py-2.5 border border-stone-300 rounded-lg focus:ring-2 focus:ring-primary/30 focus:border-primary outline-none transition";

  return (
    <>
    <form
      className={formClassName}
      onSubmit={handleSubmit}
    >
      {title ? (
        <h2 className={`text-xl font-semibold mb-4 ${isHero ? "text-white" : "text-ink"}`}>{title}</h2>
      ) : null}
      <p className={hintCls}>* indicates required fields</p>

      <div className="space-y-4">
        <div>
          <label htmlFor="address" className={labelCls}>
            Property Address *
          </label>
          <input
            id="address"
            type="text"
            placeholder="Address (Required)"
            required
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            className={inputCls}
          />
        </div>
        <div className={nameEmailPhoneRow ? "grid grid-cols-1 sm:grid-cols-3 gap-4" : "space-y-4"}>
          {nameEmailPhoneRow ? (
            <>
              <div>
                <label htmlFor="name" className={labelCls}>
                  Full Name *
                </label>
                <input
                  id="name"
                  type="text"
                  placeholder="Name (Required)"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className={inputCls}
                />
              </div>
              <div>
                <label htmlFor="email" className={labelCls}>
                  Email *
                </label>
                <input
                  id="email"
                  type="email"
                  placeholder="Email (Required)"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className={inputCls}
                />
              </div>
              <div>
                <label htmlFor="phone" className={labelCls}>
                  Phone *
                </label>
                <input
                  id="phone"
                  type="tel"
                  placeholder="Phone (Required)"
                  required
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className={inputCls}
                />
              </div>
            </>
          ) : (
            <>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className={labelCls}>
                    Full Name *
                  </label>
                  <input
                    id="name"
                    type="text"
                    placeholder="Name (Required)"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className={inputCls}
                  />
                </div>
                <div>
                  <label htmlFor="email" className={labelCls}>
                    Email *
                  </label>
                  <input
                    id="email"
                    type="email"
                    placeholder="Email (Required)"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className={inputCls}
                  />
                </div>
              </div>
              <div>
                <label htmlFor="phone" className={labelCls}>
                  Phone *
                </label>
                <input
                  id="phone"
                  type="tel"
                  placeholder="Phone (Required)"
                  required
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className={inputCls}
                />
              </div>
            </>
          )}
        </div>

        <div className="flex items-start gap-2">
          <input
            id="terms"
            type="checkbox"
            checked={agreedTerms}
            onChange={(e) => setAgreedTerms(e.target.checked)}
            className="mt-1 rounded border-stone-300 text-primary focus:ring-primary"
          />
          <label htmlFor="terms" className={checkboxLabelCls}>
            I agree to the{" "}
            <Link href="/terms" className={linkCls}>
              Terms & Conditions
            </Link>{" "}
            and{" "}
            <Link href="/privacy-policy" className={linkCls}>
              Privacy Policy
            </Link>
            .
          </label>
        </div>
        <div className="flex items-start gap-2">
          <input
            id="comms"
            type="checkbox"
            checked={agreedComms}
            onChange={(e) => setAgreedComms(e.target.checked)}
            className="mt-1 rounded border-stone-300 text-primary focus:ring-primary"
          />
          <label htmlFor="comms" className={checkboxLabelCls}>
            I agree to receive transactional or conversational communications from {companyName} via text messages, phone calls, and emails related to my real estate inquiry. Message frequency varies. Reply STOP to opt out. Reply HELP for help. Msg & data rates may apply. Your information is secure and will not be sold or shared with third parties or affiliates for promotional purposes.
          </label>
        </div>

        <button
          type="submit"
          className="w-full py-3.5 rounded-lg bg-primary text-white font-semibold hover:bg-primary-hover transition mt-2"
        >
          {submitLabel}
        </button>
      </div>
    </form>

    {toast ? (
      <div
        className="fixed bottom-6 left-1/2 z-[100] max-w-md -translate-x-1/2 px-4 w-[calc(100%-2rem)]"
        role="status"
      >
        <div
          className={
            toast.kind === "success"
              ? "rounded-lg border border-emerald-600/30 bg-emerald-950 text-emerald-50 px-4 py-3 text-sm font-medium shadow-lg shadow-black/20"
              : "rounded-lg border border-red-600/30 bg-red-950 text-red-50 px-4 py-3 text-sm font-medium shadow-lg shadow-black/20"
          }
        >
          {toast.message}
        </div>
      </div>
    ) : null}
    </>
  );
}

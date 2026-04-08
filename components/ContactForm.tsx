"use client";

import { useState } from "react";
import { useSite } from "@/contexts/SiteContext";

const PHONE = "(503) 724-8787";

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
  const [agreedTerms, setAgreedTerms] = useState(false);
  const [agreedComms, setAgreedComms] = useState(false);

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
    <form
      className={formClassName}
      onSubmit={(e) => e.preventDefault()}
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
            <a href="#" className={linkCls}>Terms & Conditions</a>
            {" "}and{" "}
            <a href="#" className={linkCls}>Privacy Policy</a>.
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
  );
}

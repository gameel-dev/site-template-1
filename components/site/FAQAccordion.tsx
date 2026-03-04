"use client";

import { useState, type ReactNode } from "react";

type Item = {
  question: string;
  content: ReactNode;
};

type FAQAccordionProps = {
  items: Item[];
};

export default function FAQAccordion({ items }: FAQAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="space-y-2">
      {items.map((item, index) => {
        const isOpen = openIndex === index;
        return (
          <div
            key={index}
            className="border border-stone-200 rounded-xl overflow-hidden bg-white"
          >
            <button
              type="button"
              onClick={() => setOpenIndex(isOpen ? null : index)}
              className="w-full px-5 py-4 sm:px-6 sm:py-4 flex items-center justify-between gap-4 text-left font-semibold text-ink hover:bg-surface-muted/50 transition"
              aria-expanded={isOpen}
              aria-controls={`faq-answer-${index}`}
              id={`faq-question-${index}`}
            >
              <span className="text-base sm:text-lg">{item.question}</span>
              <span
                className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-ink-muted transition-transform ${isOpen ? "rotate-180" : ""}`}
                aria-hidden
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </span>
            </button>
            <div
              id={`faq-answer-${index}`}
              role="region"
              aria-labelledby={`faq-question-${index}`}
              className="grid transition-[grid-template-rows] duration-200 ease-out"
              style={{ gridTemplateRows: isOpen ? "1fr" : "0fr" }}
            >
              <div className="min-h-0 overflow-hidden">
                <div className="px-5 pb-5 pt-0 sm:px-6 sm:pb-6 sm:pt-0 text-ink-muted border-t border-stone-200">
                  {item.content}
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

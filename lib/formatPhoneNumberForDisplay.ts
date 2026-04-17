/** Values that are only digits (optional leading `+`) — no spaces, parens, or separators yet. */
const DIGITS_ONLY_OPTIONAL_PLUS = /^\+?\d+$/;

function formatNanpDigits(digits: string): string {
  if (digits.length === 10) {
    return `(${digits.slice(0, 3)}) ${digits.slice(3, 6)}-${digits.slice(6)}`;
  }
  if (digits.length === 11 && digits.startsWith("1")) {
    const n = digits.slice(1);
    return `(${n.slice(0, 3)}) ${n.slice(3, 6)}-${n.slice(6)}`;
  }
  return "";
}

/**
 * Label for showing a stored phone number: if the value already includes formatting
 * (spaces, parens, dashes, etc.), it is returned unchanged; if it is digits-only
 * (optional leading `+`), it is formatted for display (NANP when applicable).
 */
export function formatPhoneNumberForDisplay(
  input: string | null | undefined
): string {
  const trimmed = (input ?? "").trim();
  if (!trimmed) return "";

  if (!DIGITS_ONLY_OPTIONAL_PLUS.test(trimmed)) {
    return trimmed;
  }

  const digits = trimmed.replace(/\D/g, "");
  const fallback = formatNanpDigits(digits);
  if (fallback) return fallback;

  return trimmed;
}

/** Digits only for `tel:` hrefs (strips spaces, punctuation, etc.). */
export function digitsOnlyForTel(input: string | null | undefined): string {
  return (input ?? "").trim().replace(/\D/g, "");
}

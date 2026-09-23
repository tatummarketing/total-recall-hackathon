"use client";

import { legalLinks } from "@/lib/content";
import { useEventRules } from "@/components/EventRulesModal";

type TermsAcceptanceProps = {
  defaultChecked?: boolean;
  invalid?: boolean;
  error?: string;
};

/**
 * Required legal acceptance before submit — binds Tatum + Walrus terms and Event Rules.
 */
export function TermsAcceptance({
  defaultChecked = false,
  invalid = false,
  error,
}: TermsAcceptanceProps) {
  const { openRules } = useEventRules();

  return (
    <div className="form-check-stack rounded-xl border border-white/10 bg-black/25 px-4 py-4">
      <label className="form-check">
        <input
          type="checkbox"
          name="acceptTerms"
          value="yes"
          className="form-checkbox"
          required
          defaultChecked={defaultChecked}
          aria-invalid={invalid}
        />
        <span>
          I am 18+ and agree to the{" "}
          <button
            type="button"
            className="inline bg-transparent p-0 text-[var(--tatum-green)] underline-offset-2 hover:underline"
            onClick={(e) => {
              e.preventDefault();
              openRules();
            }}
          >
            Event Rules
          </button>
          , the{" "}
          <a
            href={legalLinks.tatumTerms}
            target="_blank"
            rel="noreferrer"
            className="text-[var(--tatum-green)]"
          >
            Tatum Terms of Use
          </a>
          , and the{" "}
          <a
            href={legalLinks.walrusTerms}
            target="_blank"
            rel="noreferrer"
            className="text-[var(--tatum-green)]"
          >
            Walrus General Terms of Service
          </a>
          . I understand prizes are not guaranteed, judging decisions are final, and I am
          responsible for any taxes if I win.
        </span>
      </label>
      {error ? <p className="form-error">{error}</p> : null}
    </div>
  );
}

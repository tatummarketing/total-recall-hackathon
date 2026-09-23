"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useId,
  useState,
  type ReactNode,
} from "react";
import { eventRules, legalLinks } from "@/lib/content";

type EventRulesContextValue = {
  open: boolean;
  openRules: () => void;
  closeRules: () => void;
};

const EventRulesContext = createContext<EventRulesContextValue | null>(null);

export function useEventRules() {
  const ctx = useContext(EventRulesContext);
  if (!ctx) {
    throw new Error("useEventRules must be used within EventRulesProvider");
  }
  return ctx;
}

function EventRulesModal({ onClose }: { onClose: () => void }) {
  const titleId = useId();

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose]);

  useEffect(() => {
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, []);

  return (
    <div className="submit-modal-backdrop" onClick={onClose} role="presentation">
      <div
        className="submit-modal card-recall event-rules-modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        onClick={(e) => e.stopPropagation()}
      >
        <header className="submit-modal-header">
          <div>
            <p className="eyebrow mb-2">{eventRules.eyebrow}</p>
            <h2 id={titleId} className="heading-lg text-white">
              {eventRules.title}
            </h2>
          </div>
          <button
            type="button"
            className="submit-modal-close"
            onClick={onClose}
            aria-label="Close event rules"
          >
            ×
          </button>
        </header>

        <div className="submit-modal-body event-rules-body">
          <p className="mb-6 text-sm leading-relaxed text-white/65">
            {eventRules.intro}{" "}
            Related Walrus hackathon sessions:{" "}
            <a
              href={legalLinks.walrusSessions}
              target="_blank"
              rel="noreferrer"
              className="text-[var(--tatum-green)]"
            >
              thewalrussessions.wal.app
            </a>
            .
          </p>

          <div className="grid gap-4 md:grid-cols-2">
            {eventRules.sections.map((section) => (
              <article
                key={section.title}
                className="rounded-xl border border-white/10 bg-black/20 px-4 py-4"
              >
                <h3 className="mb-2 text-sm font-semibold text-white">{section.title}</h3>
                <p className="text-sm leading-relaxed text-white/60">{section.body}</p>
              </article>
            ))}
          </div>

          <div className="mt-6 flex flex-wrap gap-x-5 gap-y-2 text-sm">
            <a
              href={legalLinks.tatumTerms}
              target="_blank"
              rel="noreferrer"
              className="text-[var(--tatum-green)] no-underline hover:underline"
            >
              Tatum Terms of Use
            </a>
            <a
              href={legalLinks.walrusTerms}
              target="_blank"
              rel="noreferrer"
              className="text-[var(--tatum-green)] no-underline hover:underline"
            >
              Walrus General Terms
            </a>
            <a
              href={legalLinks.walrusPrivacy}
              target="_blank"
              rel="noreferrer"
              className="text-[var(--tatum-green)] no-underline hover:underline"
            >
              Walrus Privacy Policy
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export function EventRulesProvider({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false);
  const openRules = useCallback(() => setOpen(true), []);
  const closeRules = useCallback(() => setOpen(false), []);

  return (
    <EventRulesContext.Provider value={{ open, openRules, closeRules }}>
      {children}
      {open ? <EventRulesModal onClose={closeRules} /> : null}
    </EventRulesContext.Provider>
  );
}

export function EventRulesButton({
  className = "cursor-pointer border-0 bg-transparent p-0 text-left text-sm text-white/55 no-underline transition-colors hover:text-[var(--tatum-green)]",
  children = "Event Rules",
}: {
  className?: string;
  children?: ReactNode;
}) {
  const { openRules } = useEventRules();
  return (
    <button type="button" className={className} onClick={openRules}>
      {children}
    </button>
  );
}

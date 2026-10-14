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
import { eventRules, type RulesLine } from "@/lib/content";

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

const BULLETS = ["●", "○", "■"] as const;

function RichText({ text }: { text: string }) {
  const parts: ReactNode[] = [];
  let last = 0;
  for (const match of text.matchAll(/https?:\/\/[^\s),]+/g)) {
    const index = match.index ?? 0;
    if (index > last) parts.push(text.slice(last, index));
    const href = match[0];
    parts.push(
      <a key={`${href}-${index}`} href={href} target="_blank" rel="noreferrer">
        {href}
      </a>,
    );
    last = index + href.length;
  }
  if (last < text.length) parts.push(text.slice(last));
  return <>{parts}</>;
}

function RulesDocument({ lines, titleId }: { lines: RulesLine[]; titleId: string }) {
  return (
    <article className="event-rules-doc">
      {lines.map((line, index) => {
        if (line.kind === "title") {
          return (
            <h2 key={index} id={titleId}>
              <RichText text={line.text} />
            </h2>
          );
        }
        if (line.kind === "heading") {
          return (
            <h3 key={index}>
              <RichText text={line.text} />
            </h3>
          );
        }
        if (line.kind === "b") {
          return (
            <p key={index} className="rules-item" data-depth={line.depth}>
              <span className="rules-mark" aria-hidden>
                {BULLETS[line.depth]}
              </span>
              <span>
                <RichText text={line.text} />
              </span>
            </p>
          );
        }
        if (line.kind === "n") {
          return (
            <p key={index} className="rules-item rules-num">
              <span className="rules-mark">{line.n}.</span>
              <span>
                <RichText text={line.text} />
              </span>
            </p>
          );
        }
        return (
          <p key={index}>
            <RichText text={line.text} />
          </p>
        );
      })}
    </article>
  );
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
    <div className="event-rules-backdrop" onClick={onClose} role="presentation">
      <div
        className="event-rules-sheet"
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          className="submit-modal-close event-rules-close"
          onClick={onClose}
          aria-label="Close event rules"
        >
          ×
        </button>
        <RulesDocument lines={eventRules} titleId={titleId} />
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

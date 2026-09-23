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
import { useActionState } from "react";
import { submitHackathonForm, type SubmitState } from "@/app/actions/submit";
import { hackathon } from "@/lib/content";

const MEMORY_DASHBOARD = "https://memory.walrus.xyz/dashboard";
const TATUM_DASHBOARD = "https://dashboard.tatum.io/";

type SubmitModalContextValue = {
  open: boolean;
  openModal: () => void;
  closeModal: () => void;
};

const SubmitModalContext = createContext<SubmitModalContextValue | null>(null);

export function useSubmitModal() {
  const ctx = useContext(SubmitModalContext);
  if (!ctx) {
    throw new Error("useSubmitModal must be used within SubmitModalProvider");
  }
  return ctx;
}

const initialState: SubmitState = { ok: false, message: "" };

function FieldError({
  errors,
  name,
}: {
  errors?: Record<string, string>;
  name: string;
}) {
  if (!errors?.[name]) return null;
  return <p className="form-error">{errors[name]}</p>;
}

function Section({
  number,
  title,
  hint,
  children,
}: {
  number: string;
  title: string;
  hint?: string;
  children: React.ReactNode;
}) {
  return (
    <fieldset className="form-section">
      <legend className="form-section-legend">
        <span className="form-section-num">{number}</span>
        <span>
          <span className="form-section-title">{title}</span>
          {hint ? <span className="form-section-hint">{hint}</span> : null}
        </span>
      </legend>
      <div className="form-section-body">{children}</div>
    </fieldset>
  );
}

function SubmitModalForm({ onClose }: { onClose: () => void }) {
  const titleId = useId();
  const [state, action, pending] = useActionState(submitHackathonForm, initialState);
  const values = state.values;
  const formKey = state.attempt ?? 0;

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

  useEffect(() => {
    if (!state.message || state.ok) return;
    const firstError = document.querySelector<HTMLElement>(
      ".submit-modal [aria-invalid='true'], .form-banner-error",
    );
    firstError?.scrollIntoView({ behavior: "smooth", block: "center" });
  }, [state.attempt, state.message, state.ok]);

  if (state.ok) {
    return (
      <div
        className="submit-modal-backdrop"
        role="presentation"
        onClick={onClose}
      >
        <div
          className="submit-modal card-recall"
          role="dialog"
          aria-modal="true"
          aria-labelledby={titleId}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="submit-modal-success">
            <p className="eyebrow mb-3">You&apos;re in</p>
            <h2 id={titleId} className="heading-lg mb-3 text-white">
              Submission received.
            </h2>
            <p className="mb-6 text-white/70">{state.message}</p>
            <div className="flex flex-wrap gap-3">
              <button type="button" className="btn-primary" onClick={onClose}>
                Close
              </button>
              <a
                href={hackathon.discordUrl}
                target="_blank"
                rel="noreferrer"
                className="btn-ghost"
              >
                Jump into Discord
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div
      className="submit-modal-backdrop"
      role="presentation"
      onClick={onClose}
    >
      <div
        className="submit-modal card-recall"
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        onClick={(e) => e.stopPropagation()}
      >
        <header className="submit-modal-header">
          <div>
            <p className="eyebrow mb-2">Tatum x Walrus</p>
            <h2 id={titleId} className="heading-lg text-white">
              Hackathon submission
            </h2>
            <p className="mt-2 max-w-xl text-sm text-white/55">
              Stay on this page and fill the form below. Deadline {hackathon.dates.submit}.
            </p>
          </div>
          <button
            type="button"
            className="submit-modal-close"
            onClick={onClose}
            aria-label="Close submission form"
          >
            ×
          </button>
        </header>

        <form
          key={formKey}
          action={action}
          className="submit-modal-body"
          noValidate
        >
          <Section number="01" title="Contact" hint="How we reach you">
            <div className="form-grid">
              <label className="form-field">
                <span className="form-label">
                  Email <span className="form-req">*</span>
                </span>
                <input
                  name="email"
                  type="email"
                  className="form-input"
                  autoComplete="email"
                  required
                  defaultValue={values?.email}
                  aria-invalid={Boolean(state.fieldErrors?.email)}
                />
                <FieldError errors={state.fieldErrors} name="email" />
              </label>
              <label className="form-field">
                <span className="form-label">
                  Discord handle <span className="form-req">*</span>
                </span>
                <input
                  name="discordId"
                  className="form-input"
                  placeholder="username"
                  required
                  defaultValue={values?.discordId}
                  aria-invalid={Boolean(state.fieldErrors?.discordId)}
                />
                <FieldError errors={state.fieldErrors} name="discordId" />
              </label>
              <label className="form-field">
                <span className="form-label">
                  LinkedIn <span className="form-req">*</span>
                </span>
                <input
                  name="linkedinUrl"
                  className="form-input"
                  placeholder="https://linkedin.com/in/…"
                  required
                  defaultValue={values?.linkedinUrl}
                  aria-invalid={Boolean(state.fieldErrors?.linkedinUrl)}
                />
                <FieldError errors={state.fieldErrors} name="linkedinUrl" />
              </label>
              <label className="form-field">
                <span className="form-label">
                  Telegram ID <span className="form-opt">Optional</span>
                </span>
                <input
                  name="telegramId"
                  className="form-input"
                  placeholder="@handle"
                  defaultValue={values?.telegramId}
                />
              </label>
            </div>
          </Section>

          <Section number="02" title="Accounts" hint="Tatum + Walrus Memory identity">
            <div className="form-callout mb-5">
              <p>
                <strong>MEMWAL_AGENT_ID</strong> is the Public key under Delegate keys on{" "}
                <a href={MEMORY_DASHBOARD} target="_blank" rel="noreferrer">
                  memory.walrus.xyz/dashboard
                </a>
                .
              </p>
            </div>
            <div className="form-grid">
              <label className="form-field form-field-span">
                <span className="form-label">
                  Tatum ID <span className="form-req">*</span>
                </span>
                <input
                  name="tatumAccountId"
                  className="form-input font-mono text-sm"
                  required
                  defaultValue={values?.tatumAccountId}
                  aria-invalid={Boolean(state.fieldErrors?.tatumAccountId)}
                />
                <p className="form-help">
                  In My Account then My Account Info.{" "}
                  <a href={TATUM_DASHBOARD} target="_blank" rel="noreferrer" className="text-[var(--tatum-green)]">
                    dashboard.tatum.io
                  </a>
                </p>
                <FieldError errors={state.fieldErrors} name="tatumAccountId" />
              </label>
              <label className="form-field form-field-span">
                <span className="form-label">
                  SUI address <span className="form-req">*</span>
                </span>
                <input
                  name="suiAddress"
                  className="form-input font-mono text-sm"
                  placeholder="0x…"
                  required
                  defaultValue={values?.suiAddress}
                  aria-invalid={Boolean(state.fieldErrors?.suiAddress)}
                />
                <FieldError errors={state.fieldErrors} name="suiAddress" />
              </label>
              <label className="form-field form-field-span">
                <span className="form-label">
                  Account ID (SUI) <span className="form-req">*</span>
                </span>
                <input
                  name="accountId"
                  className="form-input font-mono text-sm"
                  placeholder="0x3247e3da…"
                  required
                  defaultValue={values?.accountId}
                  aria-invalid={Boolean(state.fieldErrors?.accountId)}
                />
                <p className="form-help">
                  You receive this after you created your first delegate key on{" "}
                  <a href={MEMORY_DASHBOARD} target="_blank" rel="noreferrer" className="text-[var(--tatum-green)]">
                    memory.walrus.xyz/dashboard
                  </a>
                  .
                </p>
                <FieldError errors={state.fieldErrors} name="accountId" />
              </label>
              <label className="form-field form-field-span">
                <span className="form-label">
                  MEMWAL_AGENT_ID <span className="form-req">*</span>
                </span>
                <input
                  name="memwalAgentId"
                  className="form-input font-mono text-sm"
                  placeholder="Public key from Delegate keys"
                  required
                  defaultValue={values?.memwalAgentId}
                  aria-invalid={Boolean(state.fieldErrors?.memwalAgentId)}
                />
                <FieldError errors={state.fieldErrors} name="memwalAgentId" />
              </label>
            </div>
          </Section>

          <Section number="03" title="Project" hint="What you shipped">
            <div className="form-grid">
              <label className="form-field form-field-span">
                <span className="form-label">
                  Project description <span className="form-req">*</span>
                </span>
                <textarea
                  name="description"
                  className="form-input form-textarea"
                  rows={4}
                  placeholder="What it does, how it uses Tatum + Walrus Memory…"
                  required
                  defaultValue={values?.description}
                  aria-invalid={Boolean(state.fieldErrors?.description)}
                />
                <FieldError errors={state.fieldErrors} name="description" />
              </label>
              <label className="form-field">
                <span className="form-label">
                  Short demo video (2 to 3 min) <span className="form-req">*</span>
                </span>
                <input
                  name="demoVideoUrl"
                  type="url"
                  className="form-input"
                  placeholder="YouTube or other link"
                  required
                  defaultValue={values?.demoVideoUrl}
                  aria-invalid={Boolean(state.fieldErrors?.demoVideoUrl)}
                />
                <FieldError errors={state.fieldErrors} name="demoVideoUrl" />
              </label>
              <label className="form-field">
                <span className="form-label">
                  GitHub repo <span className="form-req">*</span>
                </span>
                <input
                  name="repoUrl"
                  type="url"
                  className="form-input"
                  placeholder="https://github.com/…"
                  required
                  defaultValue={values?.repoUrl}
                  aria-invalid={Boolean(state.fieldErrors?.repoUrl)}
                />
                <FieldError errors={state.fieldErrors} name="repoUrl" />
              </label>
              <label className="form-field form-field-span">
                <span className="form-label">
                  Additional documentation <span className="form-opt">Optional</span>
                </span>
                <input
                  name="additionalDocs"
                  className="form-input"
                  placeholder="Docs, blog, deck URL…"
                  defaultValue={values?.additionalDocs}
                />
              </label>
            </div>
          </Section>

          <Section number="04" title="Feedback" hint="Helps partners improve">
            <div className="form-grid">
              <label className="form-field form-field-span">
                <span className="form-label">
                  How was your experience building with Walrus?{" "}
                  <span className="form-req">*</span>
                </span>
                <p className="form-help mb-1">
                  Docs, developer tools, bugs or limitations, and what could be improved.
                </p>
                <textarea
                  name="walrusExperience"
                  className="form-input form-textarea"
                  rows={4}
                  required
                  defaultValue={values?.walrusExperience}
                  aria-invalid={Boolean(state.fieldErrors?.walrusExperience)}
                />
                <FieldError errors={state.fieldErrors} name="walrusExperience" />
              </label>
              <label className="form-field form-field-span">
                <span className="form-label">
                  One bug or friction point with Walrus Memory{" "}
                  <span className="form-opt">Optional</span>
                </span>
                <textarea
                  name="walrusFriction"
                  className="form-input form-textarea"
                  rows={2}
                  placeholder="Optional, specific Memory pain point"
                  defaultValue={values?.walrusFriction}
                />
              </label>
              <label className="form-field form-field-span">
                <span className="form-label">
                  Social post links <span className="form-opt">Optional, extra points</span>
                </span>
                <textarea
                  name="socialPosts"
                  className="form-input form-textarea"
                  rows={2}
                  placeholder="X, LinkedIn, etc."
                  defaultValue={values?.socialPosts}
                />
              </label>
            </div>
          </Section>

          <div className="form-footer">
            {state.message && !state.ok ? (
              <p className="form-banner-error" role="alert">
                {state.message}
              </p>
            ) : null}

            <div className="flex flex-wrap items-center gap-3">
              <button type="submit" className="btn-primary" disabled={pending}>
                {pending ? "Sending…" : "Submit project"}
              </button>
              <button type="button" className="btn-ghost" onClick={onClose}>
                Cancel
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export function SubmitModalProvider({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false);
  const openModal = useCallback(() => setOpen(true), []);
  const closeModal = useCallback(() => setOpen(false), []);

  return (
    <SubmitModalContext.Provider value={{ open, openModal, closeModal }}>
      {children}
      {open ? <SubmitModalForm onClose={closeModal} /> : null}
    </SubmitModalContext.Provider>
  );
}

export function SubmitProjectButton({
  className = "btn-primary",
  children = "Submit Project",
}: {
  className?: string;
  children?: React.ReactNode;
}) {
  const { openModal } = useSubmitModal();
  return (
    <button type="button" className={className} onClick={openModal}>
      {children}
    </button>
  );
}

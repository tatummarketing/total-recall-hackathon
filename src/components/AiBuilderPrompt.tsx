"use client";

import { useRef, useState } from "react";
import { aiBuilderPrompt } from "@/lib/content";

export function AiBuilderPrompt({ className = "" }: { className?: string }) {
  const [prompt, setPrompt] = useState("");
  const formRef = useRef<HTMLFormElement>(null);
  const inputRef = useRef<HTMLTextAreaElement>(null);
  const empty = prompt.trim().length === 0;

  return (
    <form
      id="build"
      ref={formRef}
      action={aiBuilderPrompt.builderUrl}
      method="get"
      target="_blank"
      aria-label="Tatum AI Builder prompt"
      className={`prompt-composer ${className}`}
      onSubmit={(e) => {
        if (empty) {
          e.preventDefault();
          inputRef.current?.focus();
        }
      }}
    >
      <div className="prompt-composer-head">
        <span className="prompt-composer-badge">$500 Bonus</span>
        <span className="text-white/50">
          Describe a Total Recall app. We open it in AI Builder.
        </span>
      </div>

      <label htmlFor="ai-builder-prompt" className="sr-only">
        Describe what you want to build
      </label>
      <textarea
        id="ai-builder-prompt"
        ref={inputRef}
        name="prompt"
        rows={2}
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter" && !e.shiftKey && !e.nativeEvent.isComposing) {
            e.preventDefault();
            if (!empty) formRef.current?.requestSubmit();
          }
        }}
        placeholder={aiBuilderPrompt.placeholder}
        autoComplete="off"
        spellCheck={false}
        className="prompt-composer-input"
      />
      <input type="hidden" name="ref" value={aiBuilderPrompt.ref} />
      <input type="hidden" name="mode" value="build" />

      <div className="prompt-composer-foot">
        <div className="flex flex-wrap gap-2" aria-label="Example prompts">
          {aiBuilderPrompt.examples.map((example) => (
            <button
              key={example.label}
              type="button"
              className="prompt-chip"
              onClick={() => {
                setPrompt(example.prompt);
                inputRef.current?.focus();
              }}
            >
              {example.label}
            </button>
          ))}
        </div>
        <button
          type="submit"
          className="prompt-submit"
          aria-label="Build with Tatum AI Builder"
          aria-disabled={empty}
        >
          <svg viewBox="0 0 24 24" fill="none" width="18" height="18" aria-hidden>
            <path
              d="M12 19V5m0 0-7 7m7-7 7 7"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>
    </form>
  );
}

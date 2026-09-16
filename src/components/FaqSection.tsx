"use client";

import { useState } from "react";
import { faqs } from "@/lib/content";
import { SectionBackdrop } from "@/components/space/SectionBackdrop";

export function FaqSection() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="section-pad relative z-[1] overflow-x-clip py-10 md:py-14">
      <SectionBackdrop variant="lower" />
      <div className="container-page relative max-w-3xl">
        <div className="mb-10">
          <p className="eyebrow mb-3">FAQ</p>
          <h2 className="heading-lg text-white">Before you launch.</h2>
        </div>

        <div className="space-y-2">
          {faqs.map((faq, index) => {
            const isOpen = open === index;
            return (
              <div
                key={faq.q}
                className={`card-recall overflow-hidden transition-colors ${isOpen ? "border-[rgba(44,205,154,0.35)]" : ""}`}
              >
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? null : index)}
                  className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left md:px-6"
                >
                  <h3 className="text-base font-medium text-white md:text-lg">{faq.q}</h3>
                  <span
                    className={`shrink-0 text-xl text-[var(--tatum-green)] transition-transform duration-300 ${
                      isOpen ? "rotate-45" : ""
                    }`}
                  >
                    +
                  </span>
                </button>
                <div
                  className={`grid transition-[grid-template-rows] duration-300 ${
                    isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="px-5 pb-5 text-sm text-white/60 md:px-6">{faq.a}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

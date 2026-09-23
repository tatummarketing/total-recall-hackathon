"use client";

import { useEffect, useState } from "react";
import { PartnerLockup } from "@/components/PartnerLockup";
import { SubmitProjectButton } from "@/components/SubmitModal";

const links = [
  { href: "#mission", label: "Mission" },
  { href: "#tracks", label: "Tracks" },
  { href: "#prizes", label: "Prizes" },
  { href: "#dates", label: "Dates" },
  { href: "#faq", label: "FAQ" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 transition-all duration-300 ${
        scrolled
          ? "border-b border-[rgba(79,55,253,0.25)] bg-[#0b0c20]/85 backdrop-blur-xl"
          : "bg-transparent"
      }`}
    >
      <div className="section-pad mx-auto flex h-16 max-w-[1200px] items-center justify-between gap-4 md:h-[4.5rem]">
        <a href="#top" className="no-underline" aria-label="Total Recall home">
          <PartnerLockup />
        </a>

        <nav className="hidden items-center gap-6 lg:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-white/60 no-underline transition-colors hover:text-[var(--tatum-green)]"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <SubmitProjectButton className="btn-primary text-sm" />
      </div>
    </header>
  );
}

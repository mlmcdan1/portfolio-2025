"use client";

import { useState } from "react";
import Image from "next/image";

const navItems = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "projects", label: "Portfolio" },
  { id: "education", label: "Education" },
  { id: "contact", label: "Contact" },
];

export default function SidebarNav() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="site-header w-full border-b border-black/10 bg-white/90 backdrop-blur">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-4 py-4 sm:px-8">
        <button
          type="button"
          className="sm:hidden inline-flex h-10 w-10 items-center justify-center rounded-full border border-black/15 text-[var(--ink)] transition hover:bg-black/5 focus-ring"
          aria-label="Toggle navigation menu"
          aria-expanded={isOpen}
          onClick={() => setIsOpen((prev) => !prev)}
        >
          <span className="sr-only">Menu</span>
          <span className="flex flex-col items-center gap-1">
            <span className="block h-0.5 w-6 rounded-full bg-[var(--ink)]" />
            <span className="block h-0.5 w-6 rounded-full bg-[var(--ink)]" />
            <span className="block h-0.5 w-6 rounded-full bg-[var(--ink)]" />
          </span>
        </button>
        <div className="flex items-center gap-3">
          <Image
            src="/images/logo.png"
            alt="Matthew McDaniel logo"
            width={36}
            height={36}
            priority
            className="h-9 w-9"
          />
          <span className="text-xl sm:text-2xl font-semibold tracking-tight text-[var(--ink)]">Matthew McDaniel</span>
          <span className="hidden rounded-full border border-black/10 px-3 py-1 text-sm uppercase tracking-[0.35em] text-[var(--muted)] sm:inline-block">
            Software Engineer
          </span>
        </div>
        <nav className="hidden sm:flex items-center gap-5 text-sm uppercase tracking-[0.35em] text-[var(--ink)]">
          {navItems.map((item, index) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className={`transition hover:opacity-70 ${
                index === 0
                  ? "color-blue"
                  : index === 1
                    ? "color-red"
                    : index === 2
                      ? "color-green"
                      : index === 3
                        ? "color-yellow"
                        : ""
              }`}
            >
              {item.label}
            </a>
          ))}
        </nav>
      </div>
      {isOpen && (
        <>
          <button
            type="button"
            aria-label="Close menu"
            className="sm:hidden fixed inset-0 z-40 bg-transparent"
            onClick={() => setIsOpen(false)}
          />
          <nav className="sm:hidden fixed left-4 right-4 top-[68px] z-50 rounded-2xl border border-black/10 bg-white shadow-[0_16px_40px_-28px_rgba(0,0,0,0.45)]">
            <div className="flex flex-col px-5 py-6 text-sm uppercase tracking-[0.3em] text-[var(--ink)]">
              {navItems.map((item, index) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  onClick={() => setIsOpen(false)}
                  className={`py-3 transition hover:opacity-70 ${
                    index === 0
                      ? "color-blue"
                      : index === 1
                        ? "color-red"
                        : index === 2
                          ? "color-green"
                          : index === 3
                            ? "color-yellow"
                            : ""
                  }`}
                >
                  {item.label}
                </a>
              ))}
            </div>
          </nav>
        </>
      )}
    </header>
  );
}

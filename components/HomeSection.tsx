'use client';

import Link from 'next/link';

const FOCUS_TAGS = [
  'React / Next.js',
  'TypeScript',
  'Node.js + APIs',
  'UI polish + accessibility',
];

const QUICK_FACTS = [
  { label: 'Degree', value: 'M.S. Software Engineering (Dec 2025)' },
  { label: 'Focus', value: 'Front-end + full-stack fundamentals' },
  { label: 'Availability', value: 'Open to entry-level SWE roles' },
];

export default function HomeSection() {
  return (
    <section
      id="home"
      className="relative overflow-hidden py-28 sm:py-32 lg:py-40"
    >
      <div
        className="absolute -top-28 -left-24 h-72 w-72 rounded-full bg-sky-500/25 blur-3xl opacity-60"
        aria-hidden
      />
      <div
        className="absolute top-1/2 left-1/2 h-[520px] w-[520px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,_rgba(196,106,58,0.22),_rgba(246,241,232,0)_62%)]"
        aria-hidden
      />
      <div
        className="absolute top-0 right-0 h-full w-[55%] bg-[radial-gradient(circle_at_top_right,_rgba(196,106,58,0.16),_transparent_65%)]"
        aria-hidden
      />
      <div
        className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-[#f6f1e8] via-[#f6f1e8]/70 to-transparent"
        aria-hidden
      />

      <div className="relative z-10 max-w-6xl mx-auto px-5 sm:px-6 lg:px-12">
        <div className="grid grid-cols-1 gap-14 lg:grid-cols-[1.15fr_0.95fr] lg:gap-16 xl:gap-20 items-start">
          <div className="text-center lg:text-left flex flex-col items-center lg:items-start">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/7 text-xs uppercase tracking-[0.32em] text-sky-200">
              Based in Georgia · Open to remote and hybrid
            </span>
            <h1 className="mt-7 text-5xl sm:text-6xl lg:text-7xl font-semibold tracking-tight text-slate-50 max-w-2xl">
              Junior software engineer building clean, reliable web apps.
            </h1>
            <p className="mt-6 text-base sm:text-lg text-slate-300/85 leading-relaxed max-w-2xl">
              Recent M.S. in Software Engineering. I build with React, Next.js, and Node, and I focus on clear UI, solid fundamentals, and shippable features.
            </p>

            <div className="mt-8 flex flex-wrap items-center justify-center lg:justify-start gap-3">
              {FOCUS_TAGS.map((tag) => (
                <span
                  key={tag}
                  className="inline-flex items-center rounded-full border border-white/20 bg-white/5 px-4 py-2 text-sm text-slate-200 backdrop-blur transition hover:bg-white/10"
                >
                  {tag}
                </span>
              ))}
            </div>

            <div className="mt-10 flex flex-wrap items-center justify-center lg:justify-start gap-4">
              <a
                href="#projects"
                className="inline-flex items-center justify-center bg-sky-500/90 hover:bg-sky-400 text-white px-8 py-3 rounded-full text-base font-semibold transition-all duration-200 shadow-lg shadow-sky-500/25"
              >
                View projects
              </a>
              <a
                href="#contact"
                className="inline-flex items-center justify-center px-8 py-3 rounded-full text-base font-semibold text-slate-200 border border-white/18 hover:bg-white/10 transition-all duration-200"
              >
                Contact
              </a>
              <Link
                href="#projects"
                className="inline-flex items-center text-sm font-semibold text-sky-200 hover:text-sky-100 transition"
              >
                See recent builds →
              </Link>
            </div>
          </div>

            <div className="relative space-y-6 max-w-xl mx-auto w-full lg:max-w-none">
            <div className="absolute -top-8 -right-6 h-48 w-48 rounded-full bg-sky-500/25 blur-3xl" aria-hidden />
            <div className="relative glass-panel glass-border px-7 py-8 text-slate-200">
              <h4 className="text-xs uppercase tracking-[0.34em] text-slate-400">
                Quick Profile
              </h4>
              <div className="mt-5 space-y-3 text-sm text-slate-200/90">
                {QUICK_FACTS.map((fact) => (
                  <p key={fact.label}>
                    <span className="text-slate-100 font-semibold">{fact.label}:</span> {fact.value}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

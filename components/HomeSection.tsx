'use client';

import Link from 'next/link';

const STAT_BLOCKS = [
  { value: '12+', label: 'Products launched' },
  { value: '6 yrs', label: 'Building on the web' },
  { value: '20+', label: 'Happy partners' },
];

const FOCUS_TAGS = [
  'Next.js & TypeScript',
  'Product design systems',
  'Full-stack delivery',
  'Email + automation',
];

const TESTIMONIAL = {
  quote:
    'Matthew translated our product sketch into a polished launch in five weeks—our conversion doubled on day one.',
  author: 'Whitney Stokes · Founder, Coastline CRM',
};

export default function HomeSection() {
  return (
    <section
      id="home"
      className="relative overflow-hidden py-28 sm:py-32 lg:py-40"
    >
      <div
        className="absolute -top-28 -left-24 h-72 w-72 rounded-full bg-sky-500/25 blur-3xl opacity-70"
        aria-hidden
      />
      <div
        className="absolute top-1/2 left-1/2 h-[520px] w-[520px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,_rgba(14,116,144,0.32),_rgba(2,6,23,0)_62%)]"
        aria-hidden
      />
      <div
        className="absolute top-0 right-0 h-full w-[55%] bg-[radial-gradient(circle_at_top_right,_rgba(14,165,233,0.18),_transparent_65%)]"
        aria-hidden
      />
      <div
        className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-slate-950 via-slate-950/60 to-transparent"
        aria-hidden
      />

      <div className="relative z-10 max-w-6xl mx-auto px-5 sm:px-6 lg:px-12">
        <div className="grid grid-cols-1 gap-14 lg:grid-cols-[1.15fr_0.95fr] lg:gap-16 xl:gap-20 items-start">
          <div className="text-center lg:text-left flex flex-col items-center lg:items-start">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/7 text-xs uppercase tracking-[0.32em] text-sky-200">
              Based in Georgia · Open to remote and hybrid
            </span>
            <h1 className="mt-7 text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-slate-50 max-w-2xl">
              I design, build, and ship polished web products for startups and growing teams.
            </h1>
            <p className="mt-6 text-base sm:text-lg text-slate-300/85 leading-relaxed max-w-2xl">
              From prototypes to production, I combine UX instincts with dependable engineering so your roadmap moves faster.
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
                href="#contact"
                className="inline-flex items-center justify-center bg-sky-500/90 hover:bg-sky-400 text-white px-8 py-3 rounded-full text-base font-semibold transition-all duration-200 shadow-lg shadow-sky-500/25"
              >
                Start a project
              </a>
              <a
                href="https://docs.google.com/document/d/e/2PACX-1vSXmTvRVUn0vpZfm37gsVLOjorEnM3UF2N5IPmZ2qaqqeruKbSY53nAj5twwjFP8XPiUmIbzjV30k_m/pub"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-8 py-3 rounded-full text-base font-semibold text-slate-200 border border-white/18 hover:bg-white/10 transition-all duration-200"
              >
                View resume
              </a>
              <Link
                href="#projects"
                className="inline-flex items-center text-sm font-semibold text-sky-200 hover:text-sky-100 transition"
              >
                See recent builds →
              </Link>
            </div>

            <div className="mt-12 flex flex-wrap justify-center lg:justify-start gap-8">
              {STAT_BLOCKS.map((stat) => (
                <div key={stat.label}>
                  <p className="text-3xl font-semibold text-slate-50">{stat.value}</p>
                  <p className="mt-2 text-xs uppercase tracking-[0.34em] text-slate-400">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative space-y-6 max-w-xl mx-auto w-full lg:max-w-none">
            <div className="absolute -top-8 -right-6 h-48 w-48 rounded-full bg-cyan-400/15 blur-3xl" aria-hidden />
            <div className="relative glass-panel glass-border px-8 py-10 lg:px-10">
              <div className="flex items-center gap-3 text-sky-200 text-xs uppercase tracking-[0.32em]">
                <span className="h-1.5 w-1.5 rounded-full bg-sky-300" />
                Latest build
              </div>
              <h3 className="mt-5 text-2xl font-semibold text-slate-50">
                Real estate lead platform
              </h3>
              <p className="mt-4 text-slate-300/80 leading-relaxed">
                Multi-tenant Next.js marketing engine with CMS-driven landing pages, automated lead routing, and live analytics dashboards.
              </p>
              <div className="mt-6 border-t border-white/10 pt-6 space-y-4 text-sm text-slate-300/80">
                <p><span className="text-slate-200">Stack:</span> Next.js · TypeScript · Sanity · Postgres</p>
                <p><span className="text-slate-200">Impact:</span> 30% lift in qualified demo bookings</p>
                <p><span className="text-slate-200">Timeline:</span> Concept to launch in 5 weeks</p>
              </div>
              <Link
                href="#projects"
                className="mt-8 inline-flex items-center text-sm font-semibold text-sky-200 hover:text-sky-100 transition"
              >
                View the case study →
              </Link>
            </div>

            <figure className="relative glass-panel glass-border px-7 py-8 text-slate-200">
              <blockquote className="text-base leading-relaxed text-slate-200/90">
                “{TESTIMONIAL.quote}”
              </blockquote>
              <figcaption className="mt-5 text-xs uppercase tracking-[0.34em] text-slate-400">
                {TESTIMONIAL.author}
              </figcaption>
            </figure>
          </div>
        </div>
      </div>
    </section>
  );
}

const WORD = "projects";

export default function MarqueeBand() {
  return (
    <section className="my-16" data-aos="fade-up" data-aos-duration="800">
      <div className="rounded-[2.5rem] border border-black/10 bg-white py-6">
        <div className="mx-auto flex max-w-5xl items-center justify-center gap-6 text-2xl sm:text-3xl lg:text-4xl font-semibold uppercase tracking-[0.16em] text-[var(--ink)]">
          <span className="whitespace-nowrap">{WORD}</span>
          <span className="whitespace-nowrap">•</span>
          <span className="whitespace-nowrap">{WORD}</span>
          <span className="whitespace-nowrap">•</span>
          <span className="whitespace-nowrap">{WORD}</span>
        </div>
        <div className="mt-4 flex items-center justify-center gap-3 text-xs uppercase tracking-[0.4em] text-[var(--muted)]">
          <span className="color-red">●</span>
          <span className="color-green">●</span>
          <span className="color-blue">●</span>
          <span className="color-yellow">●</span>
        </div>
        <svg
          className="pointer-events-none mx-auto mt-4 h-6 w-40 opacity-80"
          viewBox="0 0 160 24"
          fill="none"
          aria-hidden
        >
          <path d="M2 12c10-8 20-8 30 0s20 8 30 0 20-8 30 0 20 8 30 0 20-8 30 0" stroke="#3b82f6" strokeWidth="3" strokeLinecap="round" />
        </svg>
      </div>
    </section>
  );
}

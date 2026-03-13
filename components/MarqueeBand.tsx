type MarqueeBandProps = {
  word?: string;
};

const DEFAULT_WORD = "projects";

export default function MarqueeBand({ word = DEFAULT_WORD }: MarqueeBandProps) {
  return (
    <section className="my-16" data-aos="fade-up" data-aos-duration="800">
      <div className="relative rounded-[2.5rem] border border-black/10 bg-white py-6">
        <div aria-hidden className="pointer-events-none absolute inset-0">
          <svg
            className="absolute -left-32 -top-12 hidden h-24 w-40 md:block"
            viewBox="0 0 200 120"
            fill="none"
          >
            <path d="M22 78l32-60 40 34 28-48 46 36-52 62-32-24-24 38z" fill="#24D3F2" />
            <path d="M22 78l32-60 40 34 28-48 46 36-52 62-32-24-24 38z" stroke="black" strokeWidth="6" />
            <path d="M64 86l26-12 10 22" stroke="#FFEB3B" strokeWidth="8" strokeLinecap="round" />
          </svg>
          <svg
            className="absolute -right-32 -top-14 hidden h-24 w-40 md:block"
            viewBox="0 0 200 120"
            fill="none"
          >
            <path d="M18 90l52-70 46 24-14 62z" fill="#FF4FB9" />
            <path d="M18 90l52-70 46 24-14 62z" stroke="black" strokeWidth="6" />
            <path d="M128 40l28 18-30 18 30 18" stroke="#7CFF5B" strokeWidth="8" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
        <div className="mx-auto flex max-w-5xl items-center justify-center text-2xl sm:text-3xl lg:text-4xl font-semibold uppercase tracking-[0.12em] sm:tracking-[0.16em] text-black">
          <span className="whitespace-nowrap">{word}</span>
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

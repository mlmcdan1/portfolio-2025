export default function Footer() {
  return (
    <footer id="contact" className="mt-24 border-t border-black/10 pt-10 pb-16" data-aos="fade-up" data-aos-duration="800">
      <div className="grid gap-8 md:grid-cols-[1.2fr_0.8fr] md:items-center">
        <div className="text-center md:text-left">
          <p className="text-xs uppercase tracking-[0.35em] text-[var(--muted)]">Let&apos;s Connect</p>
          <h3 className="mt-3 text-3xl text-[var(--ink)]">Ready to build something great?</h3>
          <p className="mt-3 text-sm text-[var(--muted)]">
            Open to entry-level roles, freelance work, and collaborations. I respond quickly.
          </p>
        </div>
        <div className="flex flex-col items-center gap-3 md:items-end">
          <a
            href="mailto:matthew.mcdanieliv@gmail.com"
            className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-black/15 px-5 py-3 text-sm font-semibold uppercase tracking-[0.25em] text-[var(--ink)] hover:bg-black/5 focus-ring sm:w-auto"
          >
            <i className="fas fa-envelope" aria-hidden />
            Email Me
          </a>
          <div className="flex items-center gap-3">
            <a
              href="https://www.linkedin.com/in/matthewlmcdanieliv/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-black/15 text-[var(--ink)] hover:bg-black/5 focus-ring"
              aria-label="LinkedIn"
            >
              <i className="fab fa-linkedin-in" aria-hidden />
            </a>
            <a
              href="https://github.com/mlmcdan1"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-black/15 text-[var(--ink)] hover:bg-black/5 focus-ring"
              aria-label="GitHub"
            >
              <i className="fab fa-github" aria-hidden />
            </a>
          </div>
        </div>
      </div>
      <div className="mt-10 flex flex-col gap-2 text-xs text-[var(--muted)] sm:flex-row sm:items-center sm:justify-between">
        <span>Matthew McDaniel · 2026</span>
        <span className="text-[0.65rem] uppercase tracking-[0.35em]">Software Engineer</span>
      </div>
    </footer>
  );
}

export default function Footer() {
  return (
    <footer id="contact" className="mt-24 border-t border-black/10 pt-10 pb-16" data-aos="fade-up" data-aos-duration="800">
      <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
        <div>
          <p className="text-sm uppercase tracking-[0.35em] text-[var(--muted)]">Contact</p>
          <h3 className="mt-3 text-2xl text-[var(--ink)]">Let&apos;s connect</h3>
          <p className="mt-2 text-sm text-[var(--muted)]">matthew.mcdanieliv@gmail.com</p>
        </div>
        <div className="flex flex-wrap items-center gap-3">
          <a
            href="mailto:matthew.mcdanieliv@gmail.com"
            className="inline-flex items-center gap-2 rounded-full border border-black/15 px-4 py-2 text-xs uppercase tracking-[0.3em] text-[var(--ink)] hover:bg-black/5 focus-ring"
          >
            <i className="fas fa-envelope" aria-hidden />
            Email
          </a>
          <a
            href="https://www.linkedin.com/in/matthewlmcdanieliv/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-black/15 px-4 py-2 text-xs uppercase tracking-[0.3em] text-[var(--ink)] hover:bg-black/5 focus-ring"
          >
            <i className="fab fa-linkedin-in" aria-hidden />
            LinkedIn
          </a>
          <a
            href="https://github.com/mlmcdan1"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-black/15 px-4 py-2 text-xs uppercase tracking-[0.3em] text-[var(--ink)] hover:bg-black/5 focus-ring"
          >
            <i className="fab fa-github" aria-hidden />
            GitHub
          </a>
        </div>
      </div>
      <div className="mt-10 flex items-center justify-between text-xs text-[var(--muted)]">
        <span>Matthew McDaniel · 2026</span>
        <nav className="flex gap-4 text-[0.65rem] uppercase tracking-[0.35em]">
          <a href="#home" className="hover:opacity-70 color-blue">Home</a>
          <a href="#about" className="hover:opacity-70 color-red">About</a>
          <a href="#projects" className="hover:opacity-70 color-green">Portfolio</a>
          <a href="#education" className="hover:opacity-70 color-yellow">Education</a>
        </nav>
      </div>
    </footer>
  );
}

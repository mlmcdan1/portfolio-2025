import Image from "next/image";

const socialLinks = [
  { label: "GitHub", href: "https://github.com/mlmcdan1", icon: "fab fa-github", color: "color-blue" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/matthewlmcdanieliv/", icon: "fab fa-linkedin-in", color: "color-green" },
  { label: "Email", href: "mailto:matthew.mcdanieliv@gmail.com", icon: "fas fa-envelope", color: "color-red" },
];

const metrics = [
  { value: "12+", label: "Projects shipped" },
  { value: "900+", label: "Hours building" },
];

export default function Hero() {
  return (
    <section id="home" className="relative" data-aos="fade-up" data-aos-duration="800">
      <svg
        className="pointer-events-none absolute -left-10 top-8 hidden h-32 w-32 opacity-80 sm:block"
        viewBox="0 0 120 120"
        fill="none"
        aria-hidden
      >
        <path
          d="M10 60c10-20 30-20 40 0s30 20 60 0"
          stroke="#3b82f6"
          strokeWidth="3"
          strokeLinecap="round"
        />
        <circle cx="25" cy="60" r="4" fill="#e54b4b" />
        <circle cx="95" cy="60" r="4" fill="#3fbf7f" />
      </svg>
      <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
        <div>
          <span className="editorial-pill">Based in Georgia · Open to remote</span>
          <h1 className="mt-6 text-5xl sm:text-6xl lg:text-7xl leading-[0.95] text-[var(--ink)]">
            Software engineer
            <br />
            building clean,
            <br />
            reliable web
            <br />
            experiences.
          </h1>
          <p className="mt-6 max-w-xl text-base sm:text-lg text-[var(--muted)]">
            Recent M.S. in Software Engineering focused on front-end and full-stack fundamentals. I build
            thoughtful UI, clean APIs, and practical features that ship.
          </p>

          <div className="mt-6 flex items-center gap-3">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target={link.href.startsWith("http") ? "_blank" : undefined}
                rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                className={`flex h-11 w-11 items-center justify-center rounded-full border border-black/15 text-base transition hover:bg-black/5 focus-ring ${link.color}`}
                aria-label={link.label}
              >
                <i className={link.icon} aria-hidden />
              </a>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap gap-8">
            {metrics.map((metric, index) => (
              <div key={metric.label}>
                <p className={`text-3xl font-semibold ${index === 0 ? "color-blue" : "color-green"}`}>
                  {metric.value}
                </p>
                <p className="mt-1 text-xs uppercase tracking-[0.35em] text-[var(--muted)]">
                  {metric.label}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="relative">
          <svg
            className="pointer-events-none absolute -right-8 -top-8 hidden h-24 w-24 opacity-80 sm:block"
            viewBox="0 0 120 120"
            fill="none"
            aria-hidden
          >
            <rect x="10" y="10" width="100" height="100" rx="18" stroke="#f4b400" strokeWidth="3" />
            <path d="M24 92c20-8 28-26 40-40 8-10 22-18 42-20" stroke="#e54b4b" strokeWidth="3" strokeLinecap="round" />
          </svg>
          <div className="editorial-card relative overflow-hidden p-6">
            <div className="absolute inset-0 bg-gradient-to-br from-white via-white to-[#f6f6f6]" />
            <div className="relative overflow-hidden rounded-[1.25rem] border border-black/10 bg-white">
              <Image
                src="/images/smart_movieai.png"
                alt="Featured project preview"
                width={900}
                height={900}
                className="h-full w-full object-cover"
              />
            </div>
          </div>

          <div className="absolute -right-4 top-8 flex flex-col gap-2">
            {["UI", "API", "UX"].map((label, index) => (
              <div
                key={label}
                className={`flex h-10 w-10 items-center justify-center rounded-full border border-black/15 bg-white text-xs font-semibold shadow-[0_12px_24px_-18px_rgba(0,0,0,0.35)] ${
                  index === 0 ? "color-red" : index === 1 ? "color-blue" : "color-yellow"
                }`}
              >
                {label}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

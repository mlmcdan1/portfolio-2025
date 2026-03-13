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
        className="pointer-events-none absolute -left-28 top-2 hidden h-32 w-32 opacity-80 sm:block z-20 xl:-left-40"
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
      <svg
        className="pointer-events-none absolute right-6 top-2 hidden h-20 w-28 opacity-70 sm:block z-20"
        viewBox="0 0 140 80"
        fill="none"
        aria-hidden
      >
        <path d="M10 40c12-12 24-12 36 0s24 12 36 0 24-12 36 0" stroke="#3fbf7f" strokeWidth="3" strokeLinecap="round" />
        <circle cx="24" cy="40" r="4" fill="#f4b400" />
        <circle cx="116" cy="40" r="4" fill="#e54b4b" />
      </svg>
      <svg
        className="pointer-events-none absolute -left-28 top-40 hidden h-24 w-28 opacity-85 sm:block z-0"
        viewBox="0 0 140 120"
        fill="none"
        aria-hidden
      >
        <path d="M18 96l42-70 54 36-24 50z" fill="#ff6fb0" stroke="#0b0b0b" strokeWidth="3" />
        <path d="M44 70l12 10-14 12 14 12" stroke="#0b0b0b" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="30" cy="86" r="6" fill="#ffd84d" stroke="#0b0b0b" strokeWidth="2" />
      </svg>
      <svg
        className="pointer-events-none absolute right-20 top-24 hidden h-20 w-36 opacity-80 sm:block z-20"
        viewBox="0 0 180 90"
        fill="none"
        aria-hidden
      >
        <rect x="12" y="16" width="156" height="58" rx="28" fill="#90f1ff" stroke="#0b0b0b" strokeWidth="3" />
        <path d="M32 46c12-12 24-12 36 0s24 12 36 0 24-12 36 0" stroke="#0b0b0b" strokeWidth="3" strokeLinecap="round" />
      </svg>
      <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
        <div className="text-center lg:text-left">
          <span className="editorial-pill">Based in Georgia · Open to remote</span>
          <h1 className="mt-6 text-[2.6rem] sm:text-5xl lg:text-7xl leading-[1.05] sm:leading-[0.98] lg:leading-[0.95] text-[var(--ink)]">
            Software engineer
            <br />
            building clean,
            <br />
            reliable web
            <br />
            experiences.
          </h1>
          <p className="mt-5 max-w-xl text-sm sm:text-lg text-[var(--muted)]">
            Recent M.S. in Software Engineering focused on front-end and full-stack fundamentals. I build
            thoughtful UI, clean APIs, and practical features that ship.
          </p>
          <div className="mt-6 lg:hidden">
            <div className="relative mx-auto h-48 w-48 overflow-hidden rounded-full border border-black/15 bg-white shadow-[0_18px_40px_-28px_rgba(0,0,0,0.45)]">
              <Image
                src="/images/profile.webp"
                alt="Matthew McDaniel"
                width={480}
                height={480}
                sizes="192px"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
          <div className="mt-5 flex items-center gap-3 justify-center lg:justify-start">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target={link.href.startsWith("http") ? "_blank" : undefined}
                rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                className={`flex h-10 w-10 sm:h-11 sm:w-11 items-center justify-center rounded-full border border-black/15 text-base transition hover:bg-black/5 focus-ring ${link.color}`}
                aria-label={link.label}
              >
                <i className={link.icon} aria-hidden />
              </a>
            ))}
          </div>

          <div className="mt-6 flex flex-wrap gap-6 sm:gap-8 justify-center lg:justify-start">
            {metrics.map((metric, index) => (
              <div key={metric.label} className="text-center lg:text-left">
                <p className={`text-2xl sm:text-3xl font-semibold ${index === 0 ? "color-blue" : "color-green"}`}>
                  {metric.value}
                </p>
                <p className="mt-1 text-xs uppercase tracking-[0.35em] text-[var(--muted)]">
                  {metric.label}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="relative hidden lg:block">
          <svg
            className="pointer-events-none absolute -right-24 -top-10 hidden h-24 w-24 opacity-80 sm:block z-20 xl:-right-36"
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
                src="/images/smart_movieai.webp"
                alt="Featured project preview"
                width={900}
                height={900}
                sizes="(min-width: 1024px) 45vw, 100vw"
                priority
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

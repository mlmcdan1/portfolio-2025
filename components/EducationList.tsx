const education = [
  {
    title: "MS Software Engineering",
    detail: "University of Maryland Global Campus · Graduated Dec 2025",
  },
  {
    title: "BA General Studies",
    detail: "University of Mississippi · Graduated 2023",
  },
  {
    title: "Full-Stack Web Development Certificate",
    detail: "Michigan State University · Graduated Nov 2022",
  },
];

export default function EducationList() {
  return (
    <section id="education" className="relative my-12 sm:my-20" data-aos="fade-up" data-aos-duration="800">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 z-10">
        <svg
          className="absolute -left-32 top-10 hidden h-40 w-40 text-[var(--blue)] opacity-20 md:block xl:-left-48"
          viewBox="0 0 160 160"
          fill="none"
        >
          <path
            d="M20 80c0-33.1 26.9-60 60-60s60 26.9 60 60-26.9 60-60 60-60-26.9-60-60z"
            stroke="currentColor"
            strokeWidth="2"
          />
          <path
            d="M40 80c0-22.1 17.9-40 40-40s40 17.9 40 40-17.9 40-40 40-40-17.9-40-40z"
            stroke="currentColor"
            strokeWidth="2"
            strokeDasharray="6 9"
          />
        </svg>
        <svg
          className="absolute -right-36 bottom-6 hidden h-44 w-44 text-[var(--yellow)] opacity-20 md:block xl:-right-52"
          viewBox="0 0 180 180"
          fill="none"
        >
          <rect x="20" y="20" width="140" height="140" rx="40" stroke="currentColor" strokeWidth="2" />
          <path d="M50 90h80" stroke="currentColor" strokeWidth="2" />
        </svg>
      </div>

      <div className="theme-on-paper relative z-20 mt-8 rounded-[2rem] border border-black/10 bg-white">
        {education.map((item, index) => (
          <div
            key={item.title}
            className={`flex flex-col gap-3 px-4 py-4 sm:px-6 sm:py-6 sm:flex-row sm:items-center sm:justify-between ${
              index !== education.length - 1 ? "editorial-divider" : ""
            }`}
          >
            <div className="flex items-start gap-6">
              <span className="text-xs sm:text-sm font-semibold text-[var(--muted)]">{String(index + 1).padStart(2, "0")}</span>
              <div>
                <p className="text-base sm:text-lg text-[var(--ink)]">{item.title}</p>
                <p className="mt-1 text-xs sm:text-sm text-[var(--muted)]">{item.detail}</p>
              </div>
            </div>
            <span className={`rounded-full px-3 py-1.5 text-[0.6rem] sm:text-xs uppercase tracking-[0.3em] ${
              index % 3 === 0 ? "badge-blue" : index % 3 === 1 ? "badge-red" : "badge-green"
            }`}>
              Verified
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}

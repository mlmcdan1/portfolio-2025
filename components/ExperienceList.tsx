const experiences = [
  {
    title: "M.S. Software Engineering · Capstone",
    detail: "Built a full-stack prototype focused on clean UI and structured APIs.",
  },
  {
    title: "Front-End Projects",
    detail: "Delivered responsive React/Next.js builds with polished layouts.",
  },
  {
    title: "Backend Practice",
    detail: "Implemented REST APIs with authentication and database workflows.",
  },
  {
    title: "UI Systems",
    detail: "Created reusable components and spacing systems in Tailwind.",
  },
];

export default function ExperienceList() {
  return (
    <section id="experience" className="my-20" data-aos="fade-up" data-aos-duration="800">
      <div className="flex items-end justify-between gap-6">
        <div>
          <p className="text-xs uppercase tracking-[0.4em] text-[var(--muted)]">Experience</p>
          <h2 className="mt-3 text-4xl sm:text-5xl text-[var(--ink)]">Experience</h2>
        </div>
        <p className="hidden max-w-md text-sm text-[var(--muted)] md:block">
          Practical experience across coursework and personal builds.
        </p>
      </div>

      <div className="mt-8 rounded-[2rem] border border-black/10 bg-white">
        {experiences.map((item, index) => (
          <div
            key={item.title}
            className={`flex flex-col gap-4 px-6 py-6 sm:flex-row sm:items-center sm:justify-between ${
              index !== experiences.length - 1 ? "editorial-divider" : ""
            }`}
          >
            <div className="flex items-start gap-6">
              <span className="text-sm font-semibold text-[var(--muted)]">{String(index + 1).padStart(2, "0")}</span>
              <div>
                <p className="text-lg text-[var(--ink)]">{item.title}</p>
                <p className="mt-1 text-sm text-[var(--muted)]">{item.detail}</p>
              </div>
            </div>
            <button
              type="button"
              className={`rounded-full border px-4 py-2 text-xs uppercase tracking-[0.3em] transition hover:bg-black/5 focus-ring ${
                index % 4 === 0
                  ? "badge-blue"
                  : index % 4 === 1
                    ? "badge-red"
                    : index % 4 === 2
                      ? "badge-green"
                      : "badge-yellow"
              }`}
            >
              Details
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}

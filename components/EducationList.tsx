const education = [
  {
    title: "M.S. Software Engineering",
    detail: "University of Maryland Global Campus · Graduated Dec 2025",
  },
  {
    title: "B.G.S. General Studies",
    detail: "University of Mississippi · Graduated 2023",
  },
  {
    title: "Full-Stack Web Development Certificate",
    detail: "Michigan State University · Graduated Nov 2022",
  },
];

export default function EducationList() {
  return (
    <section id="education" className="my-20" data-aos="fade-up" data-aos-duration="800">
      <div className="flex items-end justify-between gap-6">
        <div>
          <p className="text-xs uppercase tracking-[0.4em] text-[var(--muted)]">Education</p>
          <h2 className="mt-3 text-4xl sm:text-5xl text-[var(--ink)]">Education</h2>
        </div>
        <p className="hidden max-w-md text-sm text-[var(--muted)] md:block">
          Academic background and focused training.
        </p>
      </div>

      <div className="mt-8 rounded-[2rem] border border-black/10 bg-white">
        {education.map((item, index) => (
          <div
            key={item.title}
            className={`flex flex-col gap-4 px-6 py-6 sm:flex-row sm:items-center sm:justify-between ${
              index !== education.length - 1 ? "editorial-divider" : ""
            }`}
          >
            <div className="flex items-start gap-6">
              <span className="text-sm font-semibold text-[var(--muted)]">{String(index + 1).padStart(2, "0")}</span>
              <div>
                <p className="text-lg text-[var(--ink)]">{item.title}</p>
                <p className="mt-1 text-sm text-[var(--muted)]">{item.detail}</p>
              </div>
            </div>
            <span className={`rounded-full px-4 py-2 text-xs uppercase tracking-[0.3em] ${
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

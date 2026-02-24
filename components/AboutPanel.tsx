import Image from "next/image";

const bullets = [
  "Build accessible, responsive UI with clean component structure.",
  "Translate requirements into clear workflows and polished screens.",
  "Ship iteratively with Git, code reviews, and practical testing.",
];

export default function AboutPanel() {
  return (
    <section id="about" className="my-20" data-aos="fade-up" data-aos-duration="800">
      <div className="relative overflow-hidden rounded-[2.5rem] border border-black/10 bg-white px-6 py-16 sm:px-12">
        <div className="absolute left-1/2 top-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#f4f4f4]" />
        <div className="absolute right-10 top-10 h-3 w-3 rounded-full border border-black/20" />
        <div className="absolute left-10 bottom-10 h-3 w-3 rounded-full border border-black/20" />
        <svg
          className="pointer-events-none absolute left-8 top-6 hidden h-16 w-24 opacity-80 sm:block"
          viewBox="0 0 120 80"
          fill="none"
          aria-hidden
        >
          <path d="M6 40c10-10 20-10 30 0s20 10 30 0 20-10 30 0" stroke="#e54b4b" strokeWidth="3" strokeLinecap="round" />
        </svg>
        <svg
          className="pointer-events-none absolute right-8 bottom-6 hidden h-16 w-24 opacity-80 sm:block"
          viewBox="0 0 120 80"
          fill="none"
          aria-hidden
        >
          <path d="M6 40c10-10 20-10 30 0s20 10 30 0 20-10 30 0" stroke="#3fbf7f" strokeWidth="3" strokeLinecap="round" />
        </svg>

        <div className="relative mx-auto grid max-w-5xl gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div className="relative flex items-center justify-center">
            <div className="absolute h-56 w-56 rounded-full border border-black/10" />
            <div className="relative h-56 w-56 overflow-hidden rounded-full border border-black/15 bg-white">
              <Image
                src="/images/profile.jpg"
                alt="Matthew McDaniel"
                width={400}
                height={400}
                className="h-full w-full object-cover"
              />
            </div>
          </div>
          <div>
            <p className="text-xs uppercase tracking-[0.4em] text-[var(--muted)]">About</p>
            <h2 className="mt-4 text-3xl sm:text-4xl text-[var(--ink)]">
              Grounded in fundamentals, focused on shipping.
            </h2>
            <p className="mt-5 text-base sm:text-lg text-[var(--muted)]">
              I&apos;m a recent M.S. graduate in Software Engineering who likes building user-friendly interfaces and
              reliable back-end workflows. I care about structure, clarity, and delivering features that feel finished.
            </p>
            <ul className="mt-6 space-y-3 text-sm text-[var(--muted)]">
              {bullets.map((item, index) => (
                <li key={item} className="flex items-start gap-3">
                  <span
                    className={`mt-1 inline-flex h-2 w-2 rounded-full ${
                      index === 0 ? "bg-[var(--red)]" : index === 1 ? "bg-[var(--blue)]" : "bg-[var(--green)]"
                    }`}
                  />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

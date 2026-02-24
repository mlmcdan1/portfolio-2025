import Image from "next/image";

const projects = [
  {
    title: "Smart Movie AI",
    description: "A Netflix-inspired discovery app with search, previews, and fast filtering.",
    tags: ["Next.js", "TypeScript", "TMDb"],
    image: "/images/smart_movieai.png",
    featured: true,
  },
  {
    title: "Weather Dashboard",
    description: "Clean, mobile-friendly forecast view with city search and live data.",
    tags: ["React", "Tailwind", "OpenWeather"],
    image: "/images/weather_Dashboard.png",
  },
  {
    title: "Disney+ UI Clone",
    description: "Streaming-style UI with auth flows and component-driven layouts.",
    tags: ["React", "Firebase", "Redux"],
    image: "/images/DisneyPlus.png",
  },
  {
    title: "Ecommerce API",
    description: "REST API for products, users, and orders with JWT auth.",
    tags: ["Node", "Express", "MongoDB"],
    image: "/images/BackendAPI.png",
  },
  {
    title: "Workday Planner",
    description: "Daily schedule app with local storage and quick edits.",
    tags: ["JavaScript", "jQuery", "Bootstrap"],
    image: "/images/Schedule.png",
  },
];

const tagClass = (index: number) =>
  index % 4 === 0
    ? "badge-blue"
    : index % 4 === 1
      ? "badge-red"
      : index % 4 === 2
        ? "badge-green"
        : "badge-yellow";

export default function ProjectsGrid() {
  return (
    <section id="projects" className="my-20">
      <div className="flex items-end justify-between gap-6">
        <div>
          <p className="text-xs uppercase tracking-[0.4em] text-[var(--muted)]">Portfolio</p>
          <h2 className="mt-3 text-5xl sm:text-6xl text-[var(--ink)]">Portfolio</h2>
        </div>
        <p className="hidden max-w-md text-sm text-[var(--muted)] md:block">
          Curated builds that highlight UI polish, clean engineering, and real product flows.
        </p>
      </div>

      <div className="mt-10 grid gap-6 lg:grid-cols-3">
        {projects.map((project) => (
          <article
            key={project.title}
            className={`editorial-card flex h-full flex-col overflow-hidden p-5 ${
              project.featured ? "lg:col-span-2" : ""
            }`}
          >
            <div className="relative overflow-hidden rounded-[1.25rem] border border-black/10 bg-white">
              <Image
                src={project.image}
                alt={project.title}
                width={900}
                height={600}
                className="h-48 w-full object-cover sm:h-56"
              />
            </div>
            <div className="mt-5">
              <h3 className="text-2xl text-[var(--ink)]">{project.title}</h3>
              <p className="mt-2 text-sm text-[var(--muted)]">{project.description}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {project.tags.map((tag, index) => (
                  <span
                    key={tag}
                    className={`rounded-full px-3 py-1 text-[0.65rem] uppercase tracking-[0.2em] ${tagClass(index)}`}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

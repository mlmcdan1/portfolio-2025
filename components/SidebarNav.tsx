"use client";

const navItems = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "projects", label: "Portfolio" },
  { id: "education", label: "Education" },
  { id: "contact", label: "Contact" },
];

export default function SidebarNav() {
  return (
    <header className="sticky top-0 z-40 w-full border-b border-black/10 bg-white/90 backdrop-blur">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-4 py-4 sm:px-8">
        <div className="flex items-center gap-3">
          <span className="text-2xl font-semibold tracking-tight text-[var(--ink)]">Matthew McDaniel</span>
          <span className="hidden rounded-full border border-black/10 px-3 py-1 text-sm uppercase tracking-[0.35em] text-[var(--muted)] sm:inline-block">
            Software Engineer
          </span>
        </div>
        <nav className="flex items-center gap-5 text-sm uppercase tracking-[0.35em] text-[var(--ink)]">
          {navItems.map((item, index) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className={`transition hover:opacity-70 ${
                index === 0
                  ? "color-blue"
                  : index === 1
                    ? "color-red"
                    : index === 2
                      ? "color-green"
                      : index === 3
                        ? "color-yellow"
                        : ""
              }`}
            >
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}

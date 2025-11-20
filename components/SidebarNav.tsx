"use client";

import { useEffect, useState } from "react";

const navItems = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "services", label: "Services" },
    { id: "skills", label: "Skills" },
    { id: "education", label: "Education" },
    { id: "projects", label: "Projects" },
    { id: "contact", label: "Contact" },
];

export default function SidebarNav() {
    const [activeId, setActiveId] = useState<string>(navItems[0]?.id ?? "");

    useEffect(() => {
        const sections = navItems
            .map((item) => document.getElementById(item.id))
            .filter((el): el is HTMLElement => Boolean(el));

        const findActiveSection = () => {
            const scrollPosition = window.scrollY + window.innerHeight * 0.35;
            let currentId = sections[0]?.id ?? "";

            sections.forEach((section) => {
                const offsetTop = section.offsetTop;
                if (scrollPosition >= offsetTop) {
                    currentId = section.id;
                }
            });

            if (currentId) {
                setActiveId(currentId);
            }
        };

        findActiveSection();
        window.addEventListener("scroll", findActiveSection, { passive: true });
        window.addEventListener("resize", findActiveSection);

        return () => {
            window.removeEventListener("scroll", findActiveSection);
            window.removeEventListener("resize", findActiveSection);
        };
    }, []);

    return (
        <nav className="space-y-2 text-center w-full px-6">
            {navItems.map((item) => {
                const isActive = item.id === activeId;
                return (
                    <a
                        key={item.id}
                        href={`#${item.id}`}
                        className={`relative block text-sm uppercase tracking-widest rounded-xl py-3 transition-all duration-200 text-slate-300 hover:text-white ${
                            isActive ? "text-white" : ""
                        }`}
                        aria-current={isActive ? "page" : undefined}
                    >
                        <span
                            className={`absolute left-1/2 -bottom-1 h-[2px] w-8 -translate-x-1/2 rounded-full bg-sky-300 transition-opacity duration-150 ${
                                isActive ? "opacity-100" : "opacity-0"
                            }`}
                            aria-hidden
                        />
                        {item.label}
                    </a>
                );
            })}
            <a
                href="/hire-me"
                className="block text-sm uppercase tracking-widest bg-sky-500/90 hover:bg-sky-400 text-white rounded-xl py-3 px-6 transition-all duration-200 font-semibold shadow-lg shadow-sky-500/20"
            >
                Hire Me
            </a>
        </nav>
    );
}

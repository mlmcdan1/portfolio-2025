'use client';

import React from 'react';
import { projects } from '@/data/projectData';
import ProjectCard from '@/components/ProjectCard';

// Define the type for each project
type Project = {
  title: string;
  description: string;
  techStack: string[];
  imageUrl: string;
  repoLink: string;
  liveLink?: string;
};

export default function ProjectSection() {
  return (
    <section
      id="projects"
      className="relative py-12 sm:py-18"
      data-aos="fade-up"
      data-aos-duration="800"
    >
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 z-30">
        <svg
          className="absolute -left-40 top-2 hidden h-56 w-56 text-[var(--blue)] opacity-25 md:block xl:-left-56"
          viewBox="0 0 120 120"
          fill="none"
        >
          <circle cx="60" cy="60" r="52" stroke="currentColor" strokeWidth="2" />
          <circle cx="60" cy="60" r="34" stroke="currentColor" strokeWidth="2" strokeDasharray="6 8" />
          <circle cx="60" cy="60" r="16" stroke="currentColor" strokeWidth="2" />
        </svg>
        <svg
          className="absolute -left-40 top-56 hidden h-28 w-44 md:block xl:-left-56"
          viewBox="0 0 220 120"
          fill="none"
        >
          <path d="M18 88l54-70 48 26-16 58z" fill="#FF4FB9" />
          <path d="M18 88l54-70 48 26-16 58z" stroke="black" strokeWidth="6" />
          <path d="M104 70l38 24-40 24 40 24" stroke="#7CFF5B" strokeWidth="8" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
        <svg
          className="absolute -right-32 top-48 hidden h-48 w-48 text-[var(--green)] opacity-22 md:block xl:-right-48"
          viewBox="0 0 120 120"
          fill="none"
        >
          <path
            d="M60 16c-20 0-36 16-36 36s16 36 36 36 36-16 36-36-16-36-36-36zm0 12c13.3 0 24 10.7 24 24s-10.7 24-24 24-24-10.7-24-24 10.7-24 24-24z"
            stroke="currentColor"
            strokeWidth="2"
          />
          <path
            d="M60 40c-11 0-20 9-20 20s9 20 20 20 20-9 20-20-9-20-20-20z"
            stroke="currentColor"
            strokeWidth="2"
            strokeDasharray="4 6"
          />
        </svg>
        <svg
          className="absolute -right-36 top-6 hidden h-28 w-28 md:block xl:-right-52"
          viewBox="0 0 160 160"
          fill="none"
        >
          <path d="M20 120l34-92 42 34 28-52 42 34-50 92-32-24-20 34z" fill="#24D3F2" />
          <path d="M20 120l34-92 42 34 28-52 42 34-50 92-32-24-20 34z" stroke="black" strokeWidth="6" />
        </svg>
        <svg
          className="absolute -left-36 bottom-2 hidden h-64 w-64 text-[var(--yellow)] opacity-22 md:block xl:-left-52"
          viewBox="0 0 200 200"
          fill="none"
        >
          <path
            d="M100 28c-39.8 0-72 32.2-72 72s32.2 72 72 72 72-32.2 72-72S139.8 28 100 28z"
            stroke="currentColor"
            strokeWidth="2"
          />
          <path
            d="M100 52c-26.5 0-48 21.5-48 48s21.5 48 48 48 48-21.5 48-48-21.5-48-48-48z"
            stroke="currentColor"
            strokeWidth="2"
            strokeDasharray="8 10"
          />
          <path
            d="M100 76c-13.3 0-24 10.7-24 24s10.7 24 24 24 24-10.7 24-24-10.7-24-24-24z"
            stroke="currentColor"
            strokeWidth="2"
          />
        </svg>
        <svg
          className="absolute -right-36 bottom-40 hidden h-24 w-44 md:block xl:-right-52"
          viewBox="0 0 220 120"
          fill="none"
        >
          <path d="M24 70l62-52 22 26 32-20 38 48-74 46-40-28z" fill="#FFE94A" />
          <path d="M24 70l62-52 22 26 32-20 38 48-74 46-40-28z" stroke="black" strokeWidth="6" />
          <path d="M56 58l12 10-14 12 14 12" stroke="#FF4FB9" strokeWidth="8" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
        <svg
          className="absolute -right-28 bottom-10 hidden h-40 w-40 text-[var(--red)] opacity-25 md:block xl:-right-40"
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
      </div>
      <div className="relative z-20 mx-auto w-full max-w-6xl">

        {/* Ensure Cards Stack Vertically */}
        <div className="flex flex-col space-y-8 md:space-y-12"> 
          {projects.map((project: Project, index: number) => (
            <div
              key={project.title}
              data-aos="fade-up"
              data-aos-duration="800"
              data-aos-delay={index * 80}
            >
              <ProjectCard {...project} reverse={index % 2 !== 0}/>
            </div>         
          ))}
        </div>
      </div>
    </section>
  );
}

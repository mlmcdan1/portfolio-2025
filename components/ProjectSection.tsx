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
    <section id="projects" className="py-18" data-aos="fade-up" data-aos-duration="800">
      <div className="mx-auto w-full max-w-6xl">
        {/* Section Heading */}
        <div className="mb-12 text-center">
          <span className="text-xs uppercase tracking-[0.4em] text-[var(--muted)]">Selected Work</span>
          <h2 className="mt-3 text-4xl font-semibold text-[var(--ink)]">Selected projects</h2>
          <p className="mt-4 mx-auto max-w-2xl text-[var(--muted)]">
            Personal and coursework projects that highlight my front-end and full-stack skills.
          </p>
        </div>

        {/* Ensure Cards Stack Vertically */}
        <div className="flex flex-col space-y-12"> 
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

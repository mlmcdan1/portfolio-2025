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
};

export default function ProjectSection() {
  return (
    <section id="projects" className="py-18 px-4 sm:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Section Heading */}
        <div className="mb-12 text-center">
          <span className="text-sky-300 uppercase tracking-[0.4em] text-xs">Selected Work</span>
          <h2 className="text-4xl font-semibold text-slate-100 mt-3">Recent client launches</h2>
          <p className="text-slate-300/80 mt-4 max-w-2xl mx-auto">
            A handful of the marketing sites, dashboards, and engineering exercises I’ve pushed live recently.
          </p>
        </div>

        {/* Ensure Cards Stack Vertically */}
        <div className="flex flex-col space-y-12"> 
          {projects.map((project: Project, index: number) => (
            <React.Fragment key={index}>
                <ProjectCard {...project} reverse={index % 2 !== 0}/>
            </React.Fragment>         
          ))}
        </div>
      </div>
    </section>
  );
}

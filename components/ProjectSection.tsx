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
    <section id="projects" className="bg-white py-16 px-4 sm:px-8">
      <div className="max-w-5xl mx-auto">
        {/* Section Heading */}
        <div className="mb-12 text-center">
          <h2 className="text-4xl font-bold">My Projects</h2>
          <p className="text-gray-600 mt-2">A selection of my recent work</p>
        </div>

        {/* Ensure Cards Stack Vertically */}
        <div className="flex flex-col space-y-10"> 
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

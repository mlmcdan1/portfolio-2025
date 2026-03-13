import React from 'react';
import Image from 'next/image';

type Project = {
  title: string;
  description: string;
  techStack: string[];
  imageUrl: string;
  repoLink: string;
  liveLink?: string;
  reverse?: boolean;
};

const ProjectCard: React.FC<Project> = ({ title, description, techStack, imageUrl, repoLink, liveLink, reverse }) => {
  return (
    <div className="editorial-card overflow-hidden w-full flex flex-col mb-10 md:mb-16 p-5 sm:p-8 md:p-10">
      {/* Image and Text Section - Conditional Reverse */}
        <div className={`flex flex-col md:flex-row ${reverse ? 'md:flex-row-reverse' : ''} items-center gap-5 md:gap-10`}> 
        {/* Image Section */}
        <div className="w-full md:w-1/2 flex justify-center">
          <Image
            src={imageUrl}
            alt={title}
            width={1280} 
            height={720} 
            sizes="(min-width: 768px) 50vw, 100vw"
            className="rounded-2xl border border-black/10 sm:border-white/10 sm:shadow-2xl sm:shadow-slate-900/60 w-full max-w-full"
          />
        </div>
        
        {/* Text Section */}
        <div className="w-full md:w-1/2 px-1 md:px-6 py-3 md:py-6 flex flex-col items-start text-center md:text-left">
          <span className="text-xs uppercase tracking-[0.4em] text-[var(--muted)]">
            Project
          </span>
          <h2 className="project-heading mb-3 text-[var(--ink)] text-2xl sm:text-3xl font-semibold mt-2 sm:mt-3">
            {title}
          </h2>
          <p className="text-sm sm:text-lg mb-4 sm:mb-5 text-[var(--muted)] leading-relaxed">
            {description}
          </p>
          <div className="mt-2 w-full flex flex-wrap gap-2 sm:gap-3 justify-center md:justify-start">
            {techStack.map((tech, index) => (
              <div
                key={index}
                className={`flex items-center py-1 px-2.5 sm:px-3 rounded-full text-[var(--muted)] text-[0.6rem] sm:text-[0.65rem] font-semibold border border-black/10 bg-white ${
                  index > 3 ? "hidden sm:flex" : ""
                }`}
              >
                {tech}
              </div>
            ))}
          </div>
          {/* Links */}
          <div className="flex flex-col sm:flex-row flex-wrap items-center mt-5 sm:mt-6 gap-3 w-full">
            <a
              href={repoLink}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto py-2.5 sm:py-3 px-5 sm:px-6 rounded-full font-semibold bg-[var(--blue)] text-white hover:opacity-90 transition-all duration-200 text-center"
            >
              🔗 GitHub Repo
            </a>
            {liveLink && (
              <a
                href={liveLink}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto py-2.5 sm:py-3 px-5 sm:px-6 rounded-full font-semibold bg-[var(--green)] text-white hover:opacity-90 transition-all duration-200 text-center"
              >
                🚀 Live Demo
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;

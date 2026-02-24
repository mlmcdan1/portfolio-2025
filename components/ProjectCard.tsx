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
    <div className="editorial-card overflow-hidden w-full flex flex-col mb-16 p-10">
      {/* Image and Text Section - Conditional Reverse */}
      <div className={`flex flex-col md:flex-row ${reverse ? 'md:flex-row-reverse' : ''} items-center gap-10`}> 
        {/* Image Section */}
        <div className="w-full md:w-1/2 flex justify-center">
          <Image
            src={imageUrl}
            alt={title}
            width={1280} 
            height={720} 
            className="rounded-2xl shadow-2xl shadow-slate-900/60 border border-white/10 w-full max-w-[90%] md:max-w-full"
          />
        </div>
        
        {/* Text Section */}
        <div className="w-full md:w-1/2 px-2 md:px-6 py-6 flex flex-col items-start text-center md:text-left">
          <span className="text-xs uppercase tracking-[0.4em] text-[var(--muted)]">
            Project
          </span>
          <h2 className="mb-4 text-[var(--ink)] text-3xl font-semibold mt-3">
            {title}
          </h2>
          <p className="text-base sm:text-lg mb-6 text-[var(--muted)] leading-relaxed">
            {description}
          </p>
          <div className="mt-2 w-full flex flex-wrap gap-3 justify-center md:justify-start">
            {techStack.map((tech, index) => (
              <div key={index} className="flex items-center py-1.5 px-4 rounded-full text-[var(--muted)] text-xs font-semibold border border-black/10 bg-white">
                {tech}
              </div>
            ))}
          </div>
          {/* Links */}
          <div className="flex flex-wrap items-center mt-8 gap-4">
            <a
              href={repoLink}
              target="_blank"
              rel="noopener noreferrer"
              className="py-3 px-6 rounded-full font-semibold border border-blue-500/40 text-[var(--blue)] hover:bg-blue-500/10 transition-all duration-200"
            >
              🔗 GitHub Repo
            </a>
            {liveLink && (
              <a
                href={liveLink}
                target="_blank"
                rel="noopener noreferrer"
                className="py-3 px-6 rounded-full font-semibold border border-green-500/40 text-[var(--green)] hover:bg-green-500/10 transition-all duration-200"
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

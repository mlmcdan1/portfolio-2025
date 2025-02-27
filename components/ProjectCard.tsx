import React from 'react';
import Image from 'next/image';

type Project = {
  title: string;
  description: string;
  techStack: string[];
  imageUrl: string;
  repoLink: string;
  liveDemo?: string;
  reverse?: boolean;
};

const ProjectCard: React.FC<Project> = ({ title, description, techStack, imageUrl, repoLink, liveDemo, reverse }) => {
  return (
    <div
      className="bg-white overflow-hidden rounded-lg shadow-xl w-full flex flex-col mb-16 p-8"
      data-aos="fade-up" // ✅ Animation added to each card
      data-aos-duration="800"
    > 
      {/* Image and Text Section - Conditional Reverse */}
      <div className={`flex flex-col md:flex-row ${reverse ? 'md:flex-row-reverse' : ''} items-center gap-8`}> 
        {/* Image Section */}
        <div className="w-full md:w-1/2 flex justify-center">
          <Image
            src={imageUrl}
            alt={title}
            width={1280} 
            height={720} 
            className="rounded-lg shadow-lg w-full max-w-[90%] md:max-w-full"
          />
        </div>
        
        {/* Text Section */}
        <div className="w-full md:w-1/2 px-6 py-8 flex flex-col items-start text-center md:text-left">
          <h2 className="mb-4 text-gray-900 text-2xl sm:text-3xl font-extrabold">
            {title}
          </h2>
          <p className="text-lg sm:text-xl mb-4 text-gray-800 leading-relaxed">
            {description}
          </p>
          <div className="mt-4 w-full flex flex-wrap gap-3 justify-center md:justify-start">
            {techStack.map((tech, index) => (
              <div key={index} className="flex items-center py-2 px-4 bg-gray-200 rounded-lg shadow-sm text-gray-900 text-sm font-semibold">
                {tech}
              </div>
            ))}
          </div>
          {/* Links */}
          <div className="flex items-center mt-6 space-x-4">
            <a
              href={repoLink}
              target="_blank"
              rel="noopener noreferrer"
              className="py-3 px-6 rounded-full font-bold border border-sky-600 text-sky-600 hover:bg-sky-600 hover:text-white transition-all"
            >
              🔗 GitHub Repo
            </a>
            {liveDemo && (
              <a
                href={liveDemo}
                target="_blank"
                rel="noopener noreferrer"
                className="py-3 px-6 rounded-full font-bold border border-green-600 text-green-600 hover:bg-green-600 hover:text-white transition-all"
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

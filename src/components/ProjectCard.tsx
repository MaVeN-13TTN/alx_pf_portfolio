"use client";

import React from 'react';
import Image from 'next/image';
import { Project } from '@/types/project';

interface ProjectCardProps {
  project: Project;
  onClick: () => void;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, onClick }) => {
  return (
    <div
      className="glassmorphism rounded-xl overflow-hidden cursor-pointer transition-all duration-300 hover:scale-[1.02] shadow-lg hover:shadow-xl hover:shadow-accent/20 border border-transparent hover:border-accent/30 group relative before:absolute before:-inset-1 before:rounded-[1rem] before:bg-accent/5 before:opacity-0 hover:before:opacity-100 before:transition-opacity before:duration-300 before:-z-10"
      onClick={onClick}
    >
      <div className="relative w-full h-52 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        <Image
          src={project.imageUrl}
          alt={project.title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          style={{ objectFit: 'cover' }}
          className="transition-transform duration-500 group-hover:scale-110"
          priority
        />
        <div className="absolute top-3 right-3 z-20">
          <div className="flex gap-1">
            {project.codeUrl && (
              <span className="w-8 h-8 flex items-center justify-center rounded-full bg-black/50 text-white backdrop-blur-sm text-xs font-medium">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="m8 3 4 2 4-2v6l-4 2-4-2V3z"></path>
                  <path d="M8 13h8"></path>
                  <path d="M8 17h8"></path>
                  <path d="M8 21h8"></path>
                </svg>
              </span>
            )}
            {project.demoUrl && (
              <span className="w-8 h-8 flex items-center justify-center rounded-full bg-black/50 text-white backdrop-blur-sm text-xs font-medium">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                  <polyline points="15 3 21 3 21 9"></polyline>
                  <line x1="10" y1="14" x2="21" y2="3"></line>
                </svg>
              </span>
            )}
          </div>
        </div>
      </div>
      <div className="p-6 backdrop-blur-sm bg-opacity-40 bg-card/30">
        <h2 className="text-xl font-semibold mb-2 text-heading group-hover:text-accent transition-all duration-300 group-hover:translate-x-0.5">
          {project.title}
        </h2>
        <p className="text-secondary mb-4 line-clamp-2">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-2">
          {project.technologies.slice(0, 3).map((tech, index) => (
            <span
              key={index}
              className="px-3 py-1 bg-accent/5 text-accent text-xs rounded-full font-medium transition-all duration-300 group-hover:bg-accent/10 group-hover:shadow-sm"
            >
              {tech}
            </span>
          ))}
          {project.technologies.length > 3 && (
            <span className="px-3 py-1 bg-background text-secondary text-xs rounded-full">
              +{project.technologies.length - 3} more
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;

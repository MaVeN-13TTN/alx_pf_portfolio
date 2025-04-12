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
      className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden cursor-pointer transition-transform hover:scale-[1.02] hover:shadow-lg"
      onClick={onClick}
    >
      <div className="relative w-full h-48">
        <Image
          src={project.imageUrl}
          alt={project.title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          style={{ objectFit: 'cover' }}
          priority
        />
      </div>
      <div className="p-6">
        <h2 className="text-xl font-semibold mb-2 text-heading">
          {project.title}
        </h2>
        <p className="text-secondary mb-4 line-clamp-2">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-2">
          {project.technologies.slice(0, 3).map((tech, index) => (
            <span
              key={index}
              className="px-3 py-1 bg-accent/10 dark:bg-accent/20 text-accent dark:text-accent text-sm rounded-full font-medium"
            >
              {tech}
            </span>
          ))}
          {project.technologies.length > 3 && (
            <span className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-secondary dark:text-secondary text-sm rounded-full">
              +{project.technologies.length - 3} more
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;

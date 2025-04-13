"use client";

import React, { useState } from 'react';
import ProjectCard from '@/components/ProjectCard';
import ProjectModal from '@/components/ProjectModal';
import { Project } from '@/types/project';
import projects from '@/data/projects';

export default function Portfolio() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = (project: Project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <div className="mb-12 text-center max-w-3xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-heading">
          My Portfolio
        </h1>
        <p className="text-lg text-secondary">
          Explore my projects showcasing expertise in cloud engineering, cybersecurity, and DevOps.
          Each project demonstrates my approach to building secure, scalable digital solutions.
        </p>
      </div>

      {/* Project filters - can be expanded later */}
      <div className="flex justify-center mb-10">
        <div className="inline-flex p-1 bg-background border border-border rounded-lg">
          <button className="px-4 py-2 rounded-md bg-accent text-white font-medium">
            All Projects
          </button>
          <button className="px-4 py-2 rounded-md text-secondary hover:text-heading hover:bg-accent/5 font-medium transition-colors">
            Cloud
          </button>
          <button className="px-4 py-2 rounded-md text-secondary hover:text-heading hover:bg-accent/5 font-medium transition-colors">
            Security
          </button>
          <button className="px-4 py-2 rounded-md text-secondary hover:text-heading hover:bg-accent/5 font-medium transition-colors">
            DevOps
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <ProjectCard
            key={project.id}
            project={project}
            onClick={() => handleOpenModal(project)}
          />
        ))}
      </div>

      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          isOpen={isModalOpen}
          onClose={handleCloseModal}
        />
      )}
    </div>
  );
}
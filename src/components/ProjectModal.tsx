"use client";

import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import { Project } from '@/types/project';

interface ProjectModalProps {
  project: Project;
  isOpen: boolean;
  onClose: () => void;
}

const ProjectModal: React.FC<ProjectModalProps> = ({ project, isOpen, onClose }) => {
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    const handleClickOutside = (e: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      document.addEventListener('mousedown', handleClickOutside);
      document.body.style.overflow = 'hidden'; // Prevent scrolling when modal is open
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.removeEventListener('mousedown', handleClickOutside);
      document.body.style.overflow = 'auto'; // Restore scrolling when modal is closed
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-50 backdrop-blur-sm">
      <div
        ref={modalRef}
        className="bg-white dark:bg-gray-800 rounded-lg shadow-xl overflow-hidden max-w-3xl w-full max-h-[90vh] flex flex-col"
      >
        <div className="relative w-full h-64 sm:h-80">
          <Image
            src={project.imageUrl}
            alt={project.title}
            fill
            sizes="(max-width: 768px) 100vw, 768px"
            style={{ objectFit: 'cover' }}
            priority
          />
          <button
            onClick={onClose}
            className="absolute top-4 right-4 bg-black bg-opacity-50 text-white rounded-full p-2 hover:bg-opacity-70 transition-all"
            aria-label="Close modal"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <div className="p-6 overflow-y-auto">
          <h2 className="text-2xl font-bold mb-4 text-heading">
            {project.title}
          </h2>

          <div className="mb-6">
            <h3 className="text-lg font-semibold mb-2 text-heading">Description</h3>
            <p className="text-secondary">
              {project.description}
            </p>
          </div>

          <div className="mb-6">
            <h3 className="text-lg font-semibold mb-2 text-heading">Technologies Used</h3>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech, index) => (
                <span
                  key={index}
                  className="px-3 py-1 bg-accent/10 dark:bg-accent/20 text-accent dark:text-accent text-sm rounded-full font-medium"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {project.features && project.features.length > 0 && (
            <div className="mb-6">
              <h3 className="text-lg font-semibold mb-2 text-heading">Key Features</h3>
              <ul className="list-disc list-inside text-secondary space-y-1">
                {project.features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
            </div>
          )}

          <div className="flex justify-end space-x-4 mt-6">
            {project.codeUrl && (
              <a
                href={project.codeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 bg-gray-200 dark:bg-gray-700 text-heading dark:text-secondary rounded-lg hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors font-medium"
              >
                View Code
              </a>
            )}
            {project.demoUrl && (
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 bg-accent text-white rounded-lg hover:bg-accent-hover transition-colors font-medium"
              >
                Live Demo
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;

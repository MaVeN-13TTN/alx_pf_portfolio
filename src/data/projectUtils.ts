import { Project } from '@/types/project';
import projects from './projects';

/**
 * Get a project by its ID
 * @param id The ID of the project to retrieve
 * @returns The project with the specified ID, or undefined if not found
 */
export function getProjectById(id: number): Project | undefined {
  return projects.find(project => project.id === id);
}

/**
 * Get projects filtered by technology
 * @param technology The technology to filter by
 * @returns An array of projects that use the specified technology
 */
export function getProjectsByTechnology(technology: string): Project[] {
  return projects.filter(project => 
    project.technologies.some(tech => 
      tech.toLowerCase() === technology.toLowerCase()
    )
  );
}

/**
 * Get featured projects (you can define your own criteria for what makes a project "featured")
 * @param limit Optional limit on the number of featured projects to return
 * @returns An array of featured projects
 */
export function getFeaturedProjects(limit?: number): Project[] {
  // For this example, we'll just return the first few projects
  // In a real application, you might have a "featured" flag on projects
  const result = [...projects].slice(0, limit || projects.length);
  return result;
}
